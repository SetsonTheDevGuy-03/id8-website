import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://id8tech.com"),
  title: {
    default: "ID8 Technologies | Digital Systems Studio — Namibia",
    template: "%s | ID8 Technologies",
  },
  description:
    "ID8 Technologies builds, integrates and supports the systems Namibian businesses run on — business systems and software, AI automation, digital products and the technology around them.",
  keywords: [
    "business systems Namibia",
    "software development Windhoek",
    "AI automation Namibia",
    "digital products Namibia",
    "systems integration Namibia",
    "digital systems studio",
    "ID8 Technologies",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ID8 Technologies | Digital Systems Studio",
    description:
      "ID8 Technologies builds, integrates and supports the systems Namibian businesses run on — business systems and software, AI automation, digital products and the technology around them.",
    type: "website",
    locale: "en_NA",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NA">
      <body className="font-sans antialiased selection:bg-blue-500/30" suppressHydrationWarning>
        <ThemeProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
