import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "ID8 Technologies | Digital Systems Studio â€” Namibia",
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-[#050508] text-white selection:bg-[#3b82f6]/40">{children}</body>
    </html>
  );
}
