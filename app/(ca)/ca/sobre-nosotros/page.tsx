import ThemeRegistry from "@/components/mui/ThemeRegistry"
import SobreNosotrosMuiCa from "@/components/mui/ca/SobreNosotrosMuiCa"

// La Person d'Òscar va una sola vegada, al layout arrel (founderSchema a lib/seo.ts).
export default function SobreNosotrosPageCa() {
  return (
    <ThemeRegistry>
      <SobreNosotrosMuiCa />
    </ThemeRegistry>
  )
}
