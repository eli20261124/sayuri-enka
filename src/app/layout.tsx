import type { Metadata } from "next";
import { JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jb-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "九地之歌：大和靈魂的演歌版圖",
  description: "戰後至昭和末期日本演歌互動研究（1945–1980）—— 透過九個地理區域探索演歌的文化版圖",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${jetbrainsMono.variable} ${newsreader.variable}`}
    >
      <body className="min-h-full flex flex-col">
        <div className="washi-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
