import { Source_Code_Pro } from "next/font/google";
import "./styles/globals.css";
import ClientLayout from "./ClientLayout"; // Componente que terá lógica do cliente

// Configurando a fonte Source Code Pro
const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Meu Portfólio",
  description: "Portfólio criado com Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${sourceCodePro.variable} antialiased bg-black text-white`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
