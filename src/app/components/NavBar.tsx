"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Moon, Sparkles, Sun } from "lucide-react";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const pathname = usePathname();
  const isReservePage = pathname === "/reserve";
  const isShowsPage = pathname === "/shows";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-[150] px-6 py-6"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LOGO AREA */}
        <Link href="/" className="flex items-center gap-3 group">
  {/* The Shiny 'S' Badge */}
 
  
  {/* The Text Logo */}
  <div className="flex flex-col">
    <span className="font-serif text-2xl tracking-tighter text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
      SAS
    </span>
    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/40 group-hover:text-sas-gold transition-colors">
      Show and Arts School
    </span>
  </div>
</Link>

        {/* NAVIGATION ACTION */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={toggleTheme}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm transition hover:border-sas-gold/30 hover:bg-white/10"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            {theme === "dark" ? "Light" : "Dark"}
          </motion.button>

          {isReservePage ? (
            <Link href="/">
              <motion.button
                whileHover={{ x: -5 }}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm backdrop-blur-md hover:text-white transition-all"
              >
                <ArrowLeft size={16} />
                Retour à l'accueil
              </motion.button>
            </Link>
          ) : (
            <>
              <Link href="/shows">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-6 py-2.5 rounded-full border text-sm font-semibold transition ${isShowsPage ? "border-sas-gold bg-white/10 text-white" : "border-white/10 bg-white/5 text-white/80 hover:border-sas-gold/30 hover:bg-white/10"}`}
                >
                  Shows
                </motion.button>
              </Link>
              <Link href="/reserve">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative flex items-center gap-2 px-8 py-2.5 rounded-full bg-sas-burgundy text-white text-sm font-bold tracking-widest uppercase overflow-hidden shadow-[0_0_20px_rgba(99,18,39,0.4)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000" />
                  <Sparkles size={14} className="text-sas-gold" />
                  Réserver
                </motion.button>
              </Link>
            </>
          )}
        </div>
      </div>
    </motion.nav>
  );
}