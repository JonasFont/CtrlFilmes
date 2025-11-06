// Layout simples sem fontes e sem TypeScript

import "./globals.css";

export const metadata = {
  title: "Netflix Simples",
  description: "Projeto básico Next + Mongo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
