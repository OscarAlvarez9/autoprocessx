import RootShell from "@/components/RootShell";
import { baseMetadata } from "@/lib/siteMetadata";

export const metadata = baseMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootShell lang="es">{children}</RootShell>;
}
