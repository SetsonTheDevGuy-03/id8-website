import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://id8tech.com"),
  title: {
    default: "ID8 Technologies | Digital Systems Studio — Namibia",
    template: "%s | ID8 Technologies",
  },
  description:
    "ID8 Technologies builds the systems Namibian businesses run on — software, dashboards, AI automation and VR training — plus the brand, content and media around them.",
  keywords: [
    "business systems Namibia",
    "software development Windhoek",
    "AI automation Namibia",
    "VR training Namibia",
    "digital systems studio",
    "One Percent Media",
    "ID8 Technologies",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ID8 Technologies | Digital Systems Studio",
    description:
      "ID8 Technologies builds the systems Namibian businesses run on — software, dashboards, AI automation and VR training — plus the brand, content and media around them.",
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
      </body>
    </html>
  );
}
