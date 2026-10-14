import RootShell from "@/components/RootShell";
import { caMetadata } from "@/lib/siteMetadata";

// Layout raíz de la versión en catalán (/ca/...). Mismo contenido común que
// app/(es)/layout.tsx, con <html lang="ca"> y metadatos en catalán.
export const metadata = caMetadata;

export default function RootLayoutCa({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootShell lang="ca">{children}</RootShell>;
}
