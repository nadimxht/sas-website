"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Facebook, Youtube, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] pt-24 pb-12 px-6 border-t border-white/5 overflow-hidden">
      {/* Background Subtle Logo */}
      <div className="absolute bottom-[-10%] left-[-5%] text-[20vw] font-serif opacity-[0.02] pointer-events-none select-none italic text-sas-gold">
        SAS
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Section 1: The Production */}
          <div className="space-y-6">
            <h4 className="font-mono text-[10px] tracking-[0.4em] uppercase text-sas-gold font-bold">The Production</h4>
            <p className="font-serif text-2xl text-white italic">Show and Arts School</p>
            <p className="text-white/40 text-sm font-light leading-relaxed">
              L'excellence de la comédie musicale en Tunisie. Formez-vous aux métiers de la scène avec passion et rigueur.
            </p>
          </div>

          {/* Section 2: The Cast (Links) */}
          <div className="space-y-6">
            <h4 className="font-mono text-[10px] tracking-[0.4em] uppercase text-sas-gold font-bold">The Cast</h4>
            <ul className="space-y-3">
              {['Programmes', 'Disciplines', 'À Propos', 'Boutique'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-white/60 hover:text-sas-gold transition-colors text-sm font-light uppercase tracking-widest">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Stage Door (Contact) */}
          <div className="space-y-6">
            <h4 className="font-mono text-[10px] tracking-[0.4em] uppercase text-sas-gold font-bold">Stage Door</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <MapPin size={16} className="text-sas-burgundy" />
                <span>Tunis, Tunisie</span>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Phone size={16} className="text-sas-burgundy" />
                <span>+216 22 000 000</span>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Mail size={16} className="text-sas-burgundy" />
                <span>contact@sas.tn</span>
              </li>
            </ul>
          </div>

          {/* Section 4: Follow the Tour (Socials) */}
          <div className="space-y-6">
            <h4 className="font-mono text-[10px] tracking-[0.4em] uppercase text-sas-gold font-bold">Follow The Tour</h4>
            <div className="flex gap-4">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5, scale: 1.1 }}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-sas-burgundy hover:border-sas-burgundy transition-all shadow-lg"
                >
                  <Icon size={18} className="text-sas-gold group-hover:text-white" />
                </motion.a>
              ))}
            </div>
            <div className="pt-4">
               <div className="inline-block px-4 py-2 border border-sas-gold/20 rounded-lg bg-sas-gold/5">
                  <p className="text-[10px] text-sas-gold font-mono uppercase tracking-tighter italic">
                    Certified I-Path Programme
                  </p>
               </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-[9px] tracking-[0.3em] text-white/20 uppercase">
            © 2026 SAS Productions • Every Dream Deserves a Stage
          </p>
          <div className="flex gap-8">
             <Link href="#" className="font-mono text-[9px] tracking-[0.3em] text-white/20 uppercase hover:text-white transition-colors">Privacy Policy</Link>
             <Link href="#" className="font-mono text-[9px] tracking-[0.3em] text-white/20 uppercase hover:text-white transition-colors">Terms of Show</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}