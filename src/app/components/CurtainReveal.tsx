"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function CurtainReveal({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const fabricEase = [0.45, 0, 0.55, 1] as const; // Custom "Heavy Pull" easing

  return (
    <div className="relative min-h-screen bg-[#050505] overflow-hidden">
      <AnimatePresence mode="wait">
        {!isOpen && (
          <motion.div 
            key="proscenium-arch"
            className="fixed inset-0 z-[500] flex pointer-events-none"
          >
            {/* LEFT WING - Heavy Velvet Texture */}
            <motion.div
              key="curtain-left"
              initial={{ x: 0, scaleX: 1, skewY: 0 }}
              exit={{ 
                x: "-85%", 
                scaleX: 0.15, // High compression for bunching
                skewY: 2,    // Physics: Bottom trails behind top
                transition: { duration: 2.5, ease: fabricEase } 
              }}
              className="w-1/2 h-full origin-left relative shadow-[40px_0_100px_rgba(0,0,0,1)]"
              style={{
                backgroundColor: "#4a0a1a",
                backgroundImage: `
                  linear-gradient(90deg, 
                    rgba(0,0,0,0.6) 0%, 
                    rgba(255,255,255,0.08) 25%, 
                    rgba(0,0,0,0.4) 50%, 
                    rgba(255,255,255,0.08) 75%, 
                    rgba(0,0,0,0.6) 100%
                  )`,
                backgroundSize: "80px 100%", // The width of each "fold"
              }}
            >
              {/* Gold Fringe (The "Trim") */}
              <div className="absolute bottom-0 left-0 w-full h-[60px] border-t-2 border-[#c5a059]/40 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#c5a059_3px,#c5a059_4px)] opacity-60" />
              
              {/* Top Shadow (Under the Valance) */}
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent opacity-80" />
            </motion.div>

            {/* RIGHT WING */}
            <motion.div
              key="curtain-right"
              initial={{ x: 0, scaleX: 1, skewY: 0 }}
              exit={{ 
                x: "85%", 
                scaleX: 0.15, 
                skewY: -2,
                transition: { duration: 2.5, ease: fabricEase } 
              }}
              className="w-1/2 h-full origin-right relative shadow-[-40px_0_100px_rgba(0,0,0,1)]"
              style={{
                backgroundColor: "#4a0a1a",
                backgroundImage: `
                  linear-gradient(-90deg, 
                    rgba(0,0,0,0.6) 0%, 
                    rgba(255,255,255,0.08) 25%, 
                    rgba(0,0,0,0.4) 50%, 
                    rgba(255,255,255,0.08) 75%, 
                    rgba(0,0,0,0.6) 100%
                  )`,
                backgroundSize: "80px 100%",
              }}
            >
              <div className="absolute bottom-0 left-0 w-full h-[60px] border-t-2 border-[#c5a059]/40 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#c5a059_3px,#c5a059_4px)] opacity-60" />
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent opacity-80" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* STAGE AREA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isOpen ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.5, delay: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
}