import type { Metadata } from "next";
// @ts-expect-error Next.js handles global CSS imports without a type declaration in this setup.
import "./globals.css";

export const metadata: Metadata = {
  title: "Viggiani Arquitetura",
  description: "Projetos de Arquitetura e Administração de Obras",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}