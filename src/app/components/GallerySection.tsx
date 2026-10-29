"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const galleryItems = [
  {
    title: "Comédie Musicale 2024",
    caption: "Une soirée pleine de costumes, voix et énergie.",
    image: "/STAGE/2.avif",
    className: "col-span-full xl:col-span-2 xl:row-span-2",
  },
  {
    title: "Spectacle Jazz",
    caption: "Danse contemporaine et musique en direct.",
    image: "/STAGE/1.webp",
    className: "col-span-full sm:col-span-1",
  },
  {
    title: "Soirée Théâtre",
    caption: "Une mise en scène immersive et émouvante.",
    image: "/STAGE/3.avif",
    className: "col-span-full sm:col-span-1",
  },
  {
    title: "Gala Annuel",
    caption: "Les meilleurs moments de notre saison artistique.",
    image: "/STAGE/4.avif",
    className: "col-span-full sm:col-span-1",
  },
  {
    title: "Chants et Lumières",
    caption: "Une production vibrante qui marie voix et mise en lumière.",
    image: "/STAGE/5.webp",
    className: "col-span-full sm:col-span-1",
  },
  {
    title: "Nuit des Talents",
    caption: "Un concert de talents émergents sur la grande scène.",
    image: "/STAGE/6.webp",
    className: "col-span-full xl:col-span-4",
  },
];

export default function GallerySection() {
  return (
    <section className="min-h-screen w-full py-10 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
        <div className="text-center mb-8">
          <p className="text-sas-gold tracking-widest uppercase text-sm mb-4 font-sans font-light">
            Galerie
          </p>
          <h2 className="font-serif text-5xl md:text-6xl mb-6 text-white leading-tight">
Galerie          </h2>
          <p className="text-white/60 max-w-2xl mx-auto font-sans font-light">
            Revivez l’atmosphère et les meilleurs moments de nos productions passées.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {galleryItems.map((item) => (
            <motion.article
              key={item.title}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`${item.className} overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.25)]`}
            >
              <div className="relative h-64 overflow-hidden bg-sas-dark">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-sas-gold mb-2">
                    {item.title}
                  </p>
                  <p className="text-white/75 text-sm leading-relaxed">{item.caption}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
