import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "OriuWeb | Páginas web para negocios locales en Orihuela",
  description:
    "Diseño y desarrollo páginas web para peluquerías, barberías, restaurantes, cafeterías y pequeños negocios locales en Orihuela y alrededores.",
  keywords: [
    "páginas web Orihuela",
    "diseño web Orihuela",
    "webs para peluquerías",
    "webs para barberías",
    "webs para restaurantes",
    "páginas web negocios locales",
    "páginas web para pequeños negocios",
    "crear página web Orihuela",
    "OriuWeb",
  ],
  authors: [{ name: "OriuWeb" }],
  creator: "OriuWeb",
  publisher: "OriuWeb",
  metadataBase: new URL("https://oriuweb.es"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/oriuweb.png",
    shortcut: "/oriuweb.png",
    apple: "/oriuweb.png",
  },
  openGraph: {
    title: "OriuWeb | Páginas web para negocios locales en Orihuela",
    description:
      "Diseño páginas web modernas para peluquerías, barberías, restaurantes y pequeños negocios locales en Orihuela.",
    url: "https://oriuweb.es",
    siteName: "OriuWeb",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OriuWeb | Páginas web para negocios locales en Orihuela",
    description:
      "Diseño y desarrollo páginas web para negocios locales en Orihuela y alrededores.",
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
        <Analytics />
      </body>
    </html>
  );
}
