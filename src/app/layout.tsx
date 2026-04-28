import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OriWeb | Páginas web para negocios locales en Orihuela",
  description:
    "Diseño y desarrollo páginas web para peluquerías, barberías, restaurantes y pequeños negocios locales en Orihuela.",
  icons: {
    // Si no tienes favicon separado todavía, se usará el logo temporalmente.
    icon: [{ url: "/favicon.png" }, { url: "/logoMiWebPortafolio.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050816] text-[#F9FAFB]">
        {children}
      </body>
    </html>
  );
}
