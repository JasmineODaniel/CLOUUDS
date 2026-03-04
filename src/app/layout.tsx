import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Instrument_Serif, Inter } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // list only the weights you use
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clouds",
  description: "Launch your projects with clarity, speed, and zero friction.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <header className="navbar">
          <img src="/Clouuds Logo.svg" alt="Clouds logo" className="logo" />
          <nav className="nav-links" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} className="nav-link" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

