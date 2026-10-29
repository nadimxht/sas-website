"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Rim Meddeb",
    role: "Founder",
    desc: "Chorégraphe et coach vocale, elle guide chaque élève vers un spectacle professionnel.",
    image: "/team/rim.avif",
  },
  {
    name: "Saif Ncib",
    role: "Co-Founder",
    desc: "With more than 20 years of stage and studio experience, Seif Ncib is a complete musician — mastering guitar, piano, drums, and voice.",
    image: "/team/seif.jpg",
  },
  {
    name: "Syrine Boudabous",
    role: "Dance Teacher",
    desc: "Elle enseigne jazz moderne et danse contemporaine avec une approche créative.",
    image: "/team/syrine.avif",
  },
  {
    name: "Chawki Essaâdly",
    role: "Theater Teacher",
    desc: "Elle travaille sur la technique, l’expression musicale et l’aisance vocale de chaque élève.",
    image: "/team/chawki.avif",
  },
  
  {
    name: "Nesrine Mahbouli",
    role: "Singing Teacher",
    desc: "Il orchestre les spectacles et prépare chaque représentation avec précision.",
    image: "/team/nessrine.avif",
  },
  {
    name: "Nadia Madani",
    role: "Ballet Teacher",
    desc: "Elle accompagne les élèves dans leur présence scénique et leur confiance.",
    image: "/team/nadia.avif",
  },
  {
    name: "Dheker Gazzeh",
    role: "Solfège & Piano Teacher",
    desc: "Il supervise les arrangements musicaux et les répétitions de chaque production.",
    image: "/team/dheker.avif",
  },
  {
    name: "Achraf Chokki",
    role: "Piano Teacher",
    desc: "Elle coordonne les programmes et veille à l’évolution pédagogique des élèves.",
    image: "/team/achref.avif",
  },
];

export default function TeamSection() {
  return (
    <section className="min-h-screen w-full py-10 px-6 bg-sas-black">
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
        <div className="text-center mb-8">
          
          <h2 className="font-serif text-5xl md:text-6xl mb-6 text-white leading-tight">
           Our Team
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto font-sans font-light">
            Découvrez l’équipe pédagogique qui prépare chaque élève au meilleur de la scène.
          </p>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <motion.article
              key={member.name}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="overflow-hidden h-50 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-sas-gold/30"
            >
              <div className="relative mx-auto mb-6 h-26 w-26 overflow-hidden rounded-full border-4 border-white/10 bg-sas-dark shadow-[0_0_50px_rgba(197,160,89,0.08)]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-2 text-center">
                <div>
                  <p className="text-sas-gold uppercase text-xs tracking-[0.1em] font-semibold mb-2">
                    {member.role}
                  </p>
                  <h3 className="font-serif text-sm text-white">{member.name}</h3>
                </div>
                <p className="text-white/65 leading-relaxed text-sm mb-2">{member.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
