import type { Metadata } from "next";
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