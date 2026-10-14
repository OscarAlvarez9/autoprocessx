import ThemeRegistry from "@/components/mui/ThemeRegistry"
import SobreNosotrosMui from "@/components/mui/SobreNosotrosMui"

// La Person de Óscar va una sola vez, en el layout raíz (founderSchema en
// lib/seo.ts). Aquí había una segunda con el mismo @id y otros datos
// ("Oscar" sin tilde, otro cargo), que se contradecían.
export default function SobreNosotrosPage() {
  return (
    <ThemeRegistry>
      <SobreNosotrosMui />
    </ThemeRegistry>
  )
}
