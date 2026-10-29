import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./ClientWrapper";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  style: ['normal', 'italic'] 
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const mono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono" 
});

// Metadata works here because this is a Server Component
export const metadata: Metadata = {
  title: "SAS | Show and Arts School",
  description: "La seule école de comédie musicale d'excellence en Tunisie.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} ${mono.variable} font-sans bg-[color:var(--background)] text-[color:var(--foreground)] antialiased selection:bg-sas-gold selection:text-black`}
      >
        <ClientWrapper>
          {children}
        </ClientWrapper>

        {/* 6. Footer Decoration (The 'Stage Floor') */}
        <footer className="w-full py-10 bg-sas-black border-t border-white/5 text-center">
          <p className="font-mono text-[10px] tracking-[0.5em] text-white/20 uppercase">
            Curtain Up • 2026 SAS Productions
          </p>
        </footer>
      </body>
    </html>
  );
}