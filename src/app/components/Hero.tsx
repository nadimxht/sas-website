"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Star, ArrowRight, Play } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef(null);
  
  // Parallax effect for the stars
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center pt-16 overflow-hidden bg-sas-black"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/programs-bg.svg"
        aria-hidden="true"
      >
        <source src="/editt.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" />

      {/* --- MAGIC STARRY BACKGROUND --- */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0 pointer-events-none">
        {/* Generates 50 random stars using a CSS mask/radial-gradient approach */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-20 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        ))}
      </motion.div>

      {/* Background Glows (Shiny Accents) */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sas-burgundy/20 rounded-full blur-[120px] z-0" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-sas-gold/10 rounded-full blur-[120px] z-0" />

      {/* --- MAIN CONTENT --- */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* Shiny Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(197,160,89,0.1)]"
        >
          <Sparkles className="text-sas-gold w-4 h-4" />
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-sas-gold/90 font-medium">
            Saison 2026 • Inscriptions Ouvertes
          </span>
          
        </motion.div>

        {/* Main Heading with Gold Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-[0.95] tracking-tighter"
        >
          Show and <br />
          <span className="bg-gradient-to-r from-sas-gold via-[#f5e6c8] to-sas-gold bg-clip-text text-transparent italic drop-shadow-[0_0_30px_rgba(197,160,89,0.3)]">
            Arts School
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-white/60 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed mb-10"
        >
          L'excellence artistique à votre portée. Fusionnez <span className="text-white">Danse</span>, 
          <span className="text-white"> Chant</span> et <span className="text-white"> Théâtre</span>.
        </motion.p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="group relative px-8 py-4 bg-sas-burgundy rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_25px_rgba(99,18,39,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
           <Link href="/reserve">
    <span className="relative flex items-center gap-2 font-bold tracking-wide">
      S'inscrire Maintenant <ArrowRight className="w-4 h-4" />
    </span>
  
</Link>
          </button>

          <button className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all">
            <div className="w-8 h-8 rounded-full bg-sas-gold/20 flex items-center justify-center shadow-[0_0_10px_rgba(197,160,89,0.2)]">
              <Play className="w-3 h-3 text-sas-gold fill-sas-gold" />
            </div>
            <Link href="/reserve">
            <span className="text-sm font-medium">La Boutique SAS</span>
          </Link>
          </button>
        </div>
      </div>
    </section>
  );
}