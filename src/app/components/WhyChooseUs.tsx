"use client";
import { motion } from "framer-motion";

const reasons = [
  { title: "Unique en Tunisie", desc: "La seule école proposant un parcours structuré." },
  { title: "Certification I-Path", desc: "Programmes certifiés à l'international." },
  { title: "Spectacle annuel", desc: "Participation à une comédie musicale complète." },
];

export default function WhyChooseUs() {
  return (
    <section className="min-h-screen w-full flex items-center py-10 px-6 bg-[color:var(--surface)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl text-center mb-12 text-sas-gold">Pourquoi choisir SAS?</h2>
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reasons.map((item, i) => (
            <motion.div 
              key={i}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="bg-[color:var(--surface-soft)] p-6 rounded-2xl border border-[color:var(--border-color)] text-center hover:border-sas-burgundy transition-colors"
            >
              <h3 className="font-serif text-xl mb-4 text-sas-gold">{item.title}</h3>
              <p className="text-sm text-[color:var(--text-muted)] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}