import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: {
    default: "ID8 Technologies | Digital Systems Studio — Namibia",
    template: "%s | ID8 Technologies",
  },
  description:
    "ID8 Technologies is a Namibia-born digital systems and product engineering studio. We design, build, automate, and launch websites, software platforms, AI workflows, and product experiences.",
  keywords: [
    "digital systems studio",
    "Namibia software company",
    "AI automation Namibia",
    "web development Windhoek",
    "product engineering Africa",
    "fintech design Africa",
    "ID8 Technologies",
  ],
  openGraph: {
    title: "ID8 Technologies | Digital Systems Studio",
    description:
      "A Namibia-born digital systems and product engineering studio building high-stakes software, AI automations, and modern web platforms.",
    type: "website",
    locale: "en_ZA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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


