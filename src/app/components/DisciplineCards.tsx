"use client";
import { motion } from "framer-motion";
import { Music, Mic, Users, Theater } from "lucide-react"; // Install with: npm install lucide-react

// 1. Data Structure for your disciplines
const disciplines = [
  {
    icon: <Theater size={36} />,
    title: "Comédie Musicale",
    age: "7-25+ ans",
    desc: "Chant, danse et théâtre réunis dans une formation d'excellence.",
  },
  {
    icon: <Mic size={36} />,
    title: "Danse classique",
    age: "7+ ans",
    desc: "",
  },
  {
    icon: <Users size={36} />,
    title: "Theorie & Interprétation",
    age: "7+ ans",
    desc: "Développez votre voix avec une technique solide et une interprétation unique.Modern Jazz & Ballet. Travail technique et exploration artistique.",
  },
  
];

// 2. Framer Motion Animation Variants (for staggered loading)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each card's animation
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

// 3. The Hover Animation (Scale + Inner Glow)
const cardHover = {
  scale: 1.005,
  borderColor: "rgba(197, 160, 89, 0.4)", // Muted gold border
  boxShadow: "0 0 15px rgba(99, 18, 39, 0.6)", // Burgundy glow
  transition: { duration: 0.3, ease: "easeOut" as const },
};

export default function DisciplineCards() {
  return (
    <section className="min-h-screen w-full py-10 px-6 relative bg-sas-black">
      <div className="absolute inset-0 bg-[url('/programs-bf.avif')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-sas-black/80" />
      {/* Background radial gradient to mimic a stage spotlight */}
      <div className="absolute inset-0 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 h-full flex flex-col justify-center">
        <header className="text-center mb-12">
          <p className="text-sas-gold tracking-widest uppercase text-sm mb-4 font-sans font-light">
            Nos Formations
          </p>
          <h2 className="font-serif text-5xl md:text-6xl mb-6 text-white leading-tight">
            Programmes par <span className="text-sas-gold italic">discipline</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto font-sans font-light">
            Une formation complète et cohérente dans un seul établissement,
            adaptée à tous les âges et tous les niveaux.
          </p>
        </header>

        {/* This motion.div acts as the staggered container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {disciplines.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={cardHover} // Apply the scale + glow here
              className="bg-sas-dark border border-white/10 p-10 rounded-3xl cursor-pointer group flex flex-col items-start "
            >
              <div className="flex justify-between items-start w-full mb-6">
                {/* The unique icon */}
                <div className="bg-sas-burgundy text-sas-gold p-4 rounded-full border border-sas-gold/20 shadow-lg group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>

                {/* The Age Badge */}
                <span className="bg-white/5 text-white/40 font-mono text-xs px-4 py-1.5 rounded-full border border-white/10">
                  {item.age}
                </span>
              </div>

              {/* Text content using the defined theme colors/fonts */}
              <h3 className="font-serif text-3xl mb-4 text-sas-cream group-hover:text-sas-gold transition-colors">
                {item.title}
                </h3>
              
              <p className="text-white/60 leading-relaxed font-sans font-light text-base max-w-md">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}