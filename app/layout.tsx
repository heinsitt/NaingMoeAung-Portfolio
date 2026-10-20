import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

const display = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.title}`,
  description: SITE.bio,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        <div className="noise pointer-events-none fixed inset-0 z-[1] opacity-[0.035]" />
        {children}
      </body>
    </html>
  );
}
