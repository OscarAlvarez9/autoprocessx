# Genera lib/flujosMarea.ts a partir de la exportación de n8n de marea.es.
# Uso: python3 scripts/build-flujos-marea.py "<carpeta export_n8n_marea>" lib/flujosMarea.ts
import json, re, sys, os
SRC = sys.argv[1]; OUT = sys.argv[2]
FLOWS = [
  ("alta", "Carga_masiva_JOYAS_acero_plata_WooCommerce__RmuhTuNK92Qo1GEB.json"),
  ("fotos", "Carga_masiva_imágenes_WooCommerce_Marea__SWvKwM6UrAtfOC1r.json"),
  ("publicar", "Publicar_borradores_con_imágenes_Marea__dSpRWQOndWVla3qt.json"),
  ("nombres", "Marea_Nombres_de_producto_desde_el_sheet_DESCRIPCIÓN_CORTA__xtao68E77Av2gv7f.json"),
  ("reclasificar", "Marea_Collar_Cadena_desde_sheet_ACERO__z7PvAQT1boHsZA9r.json"),
  ("seo", "SEO_Rank_Math_title_meta_description_Marea__eZlexMiZvUN0L9dY.json"),
]
EMOJI = re.compile(r"^[^\wÁÉÍÓÚÑáéíóúñ¿¡]+", re.U)
def clean(s): return EMOJI.sub("", s).replace("_", " ").strip()
def kind(n):
    t = n["type"].split(".")[-1]
    if t in ("manualTrigger", "webhook"): return "trigger"
    if t == "code": return "code"
    if t == "googleSheets": return "sheets"
    if t == "if": return "if"
    if t == "splitInBatches": return "loop"
    if t == "wait": return "wait"
    if t == "httpRequest":
        u = str(n["parameters"].get("url", ""))
        if "anthropic" in u: return "ai"
        if "dropbox" in u: return "dropbox"
        if "sheets.googleapis" in u or "docs.google" in u: return "sheets"
        if "wp-json/wp/" in u: return "wp"
        if "wp-json" in u: return "woo"
        return "http"
    return "other"
out = []
for key, f in FLOWS:
    d = json.load(open(os.path.join(SRC, f)))
    nodes = [n for n in d["nodes"] if not n["type"].endswith("stickyNote")]
    idx = {n["name"]: i for i, n in enumerate(nodes)}
    adj = {i: [] for i in range(len(nodes))}
    edges = []
    for s, v in d["connections"].items():
        if s not in idx: continue
        outs = v.get("main", [])
        for oi, lst in enumerate(outs):
            for t in (lst or []):
                if t["node"] in idx:
                    edges.append([idx[s], idx[t["node"]]])
                    adj[idx[s]].append((oi, idx[t["node"]]))
    # orden de ejecución: orden topológico ignorando las vueltas de los bucles;
    # la salida "done" de un bucle se procesa al final.
    loops = {i for i, n in enumerate(nodes) if n["type"].endswith("splitInBatches")}
    def reach(a):
        st, vis = [a], set()
        while st:
            u = st.pop()
            for _, v in adj[u]:
                if v not in vis: vis.add(v); st.append(v)
        return vis
    back = {(a, b) for a, b in edges if b in loops and a in reach(b)}
    pre, seen = {}, set()
    def dfs(i):
        if i in seen: return
        seen.add(i); pre[i] = len(pre)
        nxt = adj[i]
        if i in loops: nxt = sorted(nxt, key=lambda p: 0 if p[0] == 1 else 1)
        for _, j in nxt: dfs(j)
    start = [i for i, n in enumerate(nodes) if kind(n) == "trigger"][0]
    dfs(start)
    late = {j for i in loops for oi, j in adj[i] if oi == 0}
    prio = {i: pre.get(i, 999) + (1000 if i in late else 0) for i in range(len(nodes))}
    indeg = {i: 0 for i in range(len(nodes))}
    for a, b in edges:
        if (a, b) not in back: indeg[b] += 1
    ready, order = [i for i in indeg if indeg[i] == 0], []
    while ready:
        ready.sort(key=lambda i: prio[i]); i = ready.pop(0); order.append(i)
        for _, j in adj[i]:
            if (i, j) in back: continue
            indeg[j] -= 1
            if indeg[j] == 0: ready.append(j)
    assert len(order) == len(nodes), "ciclo no previsto"
    rank = {i: r for r, i in enumerate(order)}
    # ---- maquetación limpia: columna = camino más largo desde el disparador
    # (sin vueltas de bucle). El camino principal va recto en el carril 0 y el
    # resto (nodos opcionales, salidas de bucle, descartes) en carriles
    # laterales donde no pisen nodos ni conexiones ya trazadas.
    N = len(order)
    E = [(rank[a], rank[b]) for a, b in edges]
    BACK = {(rank[a], rank[b]) for a, b in back}
    F = [(a, b) for a, b in E if (a, b) not in BACK]
    succ = {i: [b for a, b in F if a == i] for i in range(N)}
    pred = {i: [a for a, b in F if b == i] for i in range(N)}
    layer = [0] * N
    for i in range(N):
        for a in pred[i]: layer[i] = max(layer[i], layer[a] + 1)
    tail = [0] * N  # longitud del camino más largo hasta el final
    for i in reversed(range(N)):
        tail[i] = max([tail[b] + 1 for b in succ[i]], default=0)
    kinds = [kind(nodes[order[i]]) for i in range(N)]
    def reach_fwd(a):
        st, vis = [a], set()
        while st:
            u = st.pop()
            for v in succ[u]:
                if v not in vis: vis.add(v); st.append(v)
        return vis
    # camino principal: desde el disparador, siempre hacia el sucesor con el
    # camino restante más largo; en un empate tras un bucle, la salida "done".
    body = set()
    for u in range(N):
        if kinds[u] == "loop":
            srcs = [x for x, y in BACK if y == u]
            for c in succ[u]:
                if any(src == c or src in reach_fwd(c) for src in srcs): body.add((u, c))
    start = next(i for i in range(N) if not pred[i])
    main, u = [start], start
    while succ[u]:
        u = max(succ[u], key=lambda c: (tail[c], (u, c) not in body, -c))
        main.append(u)
    # "if" con nodo opcional (if -> c -> d y también if -> d): el principal va
    # recto a d y c sale a un carril lateral.
    skip = set()
    for k in range(len(main) - 2):
        i, d2 = main[k], main[k + 2]
        if kinds[i] == "if" and d2 in succ[i]: skip.add(main[k + 1])
    main = [m for m in main if m not in skip]
    mainset = set(main)
    lane = {m: 0 for m in mainset}
    occ = {(layer[m], 0) for m in mainset}
    corr = {}  # carril -> columnas por las que ya pasa una conexión en horizontal
    def add_corr(l, c1, c2):
        for c in range(c1 + 1, c2): corr.setdefault(l, set()).add(c)
    for x, y in F:
        if x in mainset and y in mainset: add_corr(0, layer[x], layer[y])
    for v in range(N):
        if v in lane: continue
        for L in (-1, 1, -2, 2, -3, 3):
            if (layer[v], L) in occ or layer[v] in corr.get(L, ()): continue
            # sus conexiones largas hacia nodos ya colocados irían por este carril
            ok = all(not any((c, L) in occ for c in range(layer[v] + 1, layer[w])) for w in succ[v] if w in lane)
            if ok: break
        lane[v] = L
        occ.add((layer[v], L))
        for w in succ[v]:
            if w in lane: add_corr(L, layer[v], layer[w])
        for x in pred[v]:
            if x in lane and layer[v] - layer[x] > 1: add_corr(lane[x], layer[x], layer[v])
    data = {
        "id": key,
        "name": clean(d["name"]),
        "nodes": [{"n": clean(nodes[order[r]]["name"]), "k": kinds[r], "c": layer[r], "l": lane[r]} for r in range(N)],
        "edges": sorted([[a, b] for a, b in E]),
    }
    out.append(data)
    print(key, data["name"], len(data["nodes"]), "nodos", len(data["edges"]), "conexiones", file=sys.stderr)
ts = """// Flujos reales de n8n que gestionan el catálogo de marea.es, generados a partir
// de su exportación (Desktop/n8n expertg/export_n8n_marea) con un script. Solo
// se conservan nombre de nodo, tipo y conexiones: sin credenciales, URLs ni
// parámetros. Los nodos van en orden de ejecución, y la columna y el carril
// salen de una maquetación por capas para que el flujo se lea limpio.
// No editar a mano: regenerar desde la exportación si cambian los flujos.

export type FlowNodeKind = "trigger" | "code" | "sheets" | "if" | "loop" | "wait" | "ai" | "dropbox" | "woo" | "wp" | "http" | "other"

export interface MareaFlow {
  id: string
  /** Nombre del workflow tal cual está en n8n. */
  name: string
  /** n: nombre, k: tipo, c: columna (capa), l: carril (rama). */
  nodes: { n: string; k: FlowNodeKind; c: number; l: number }[]
  /** Conexiones [origen, destino] por índice de nodo. */
  edges: [number, number][]
}

export const MAREA_FLOWS: MareaFlow[] = """ + json.dumps(out, ensure_ascii=False, indent=2) + "\n"
open(OUT, "w").write(ts)
