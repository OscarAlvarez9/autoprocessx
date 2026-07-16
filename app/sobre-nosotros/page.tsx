import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import SobreNosotrosMui from "@/components/mui/SobreNosotrosMui"

const LINKEDIN_OSCAR = "https://www.linkedin.com/in/oscar-alvarez-romani-7882302b3"

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#founder`,
  name: "Oscar Álvarez",
  jobTitle: "Fundador e ingeniero",
  worksFor: { "@id": ORG_ID },
  sameAs: [LINKEDIN_OSCAR],
}

export default function SobreNosotrosPage() {
  return (
    <>
      <JsonLd data={personSchema} />
      <ThemeRegistry>
        <SobreNosotrosMui />
      </ThemeRegistry>
    </>
  )
}
