"use client";
import { motion } from "framer-motion";
import { Music, Users, Mic, Theater, Sparkles } from "lucide-react";

const programs = [
  {
    age: "7 - 12 ans",
    title: "Éveil Artistique",
    icon: <Sparkles className="text-sas-gold" />,
    features: ["Initiation Chant", "Expression Corporelle", "Jeux de Théâtre"],
  },
  {
    age: "13 - 17 ans",
    title: "Parcours Ados",
    icon: <Users className="text-sas-gold" />,
    features: ["Technique Vocale", "Modern Jazz", "Interprétation"],
  },
  {
    age: "18+ ans",
    title: "Formation Adulte",
    icon: <Music className="text-sas-gold" />,
    features: ["Chant Avancé", "Mise en Scène", "Ballet Contemporain"],
  },
  {
    age: "Pro",
    title: "Classe Élite",
    icon: <Theater className="text-sas-gold" />,
    features: ["Préparation Castings", "Comédie Musicale", "Performance Live"],
  },
];

export default function ProgramsByAge() {
  return (
    <section className="min-h-screen w-full py-10 px-6 relative overflow-hidden bg-sas-black">
      <div className="pointer-events-none absolute inset-0 bg-[url('/programs-bf.avif')] bg-cover bg-center opacity-100" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sas-black/80 to-sas-black/95" />
      <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center">
        {/* Shiny Header */}
        <div className="text-center mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl mb-5 text-white"
          >
            Programmes par <span className="text-sas-gold italic">Âge</span>
          </motion.h2>
          <div className="w-24 h-1 bg-sas-burgundy mx-auto rounded-full shadow-[0_0_15px_rgba(99,18,39,0.8)]" />
        </div>

        {/* Staggered Glass Cards */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {programs.map((prog, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative p-6 rounded-[2rem] bg-white/90 border border-white/10  hover:border-sas-gold/30 transition-all duration-500 overflow-hidden"
            >
              {/* Shiny Corner Glow */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-sas-gold/10 rounded-full group-hover:bg-sas-gold/20 transition-all" />

              <div className="relative z-10">
                
                
                <span className="text-[10px] tracking-[0.3em] uppercase text-black font-bold mb-2 block">
                  {prog.age}
                </span>
                
                <h3 className="font-serif text-2xl text-black mb-6">
                  {prog.title}
                </h3>

                <ul className="space-y-3">
                  {prog.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-black/50">
                      <div className="w-1 h-1 rounded-full bg-sas-burgundy shadow-[0_0_5px_rgba(99,18,39,1)]" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <button className="mt-8 w-full py-3 rounded-xl border border-sas-gold/20 text-sas-gold text-xs font-bold tracking-widest uppercase hover:bg-sas-gold hover:text-black transition-all duration-300">
                  Détails
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}