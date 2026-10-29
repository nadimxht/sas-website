import Image from "next/image";
import Link from "next/link";

const shows = [
  {
    title: "Spectacle Jazz",
    subtitle: "Une énergie musicale et une mise en scène vibrante",
    description:
      "Un voyage immersif à travers le jazz contemporain, la danse expressive et les voix puissantes de nos élèves. Ce spectacle met en avant l’exploration du mouvement et l’émotion en live.",
    images: ["/STAGE/1.webp", "/STAGE/5.webp", "/STAGE/4.avif"],
    video: "/edit.mp4",
  },
  {
    title: "Comédie Musicale",
    subtitle: "Le théâtre, le chant et la danse réunis",
    description:
      "Une production spectaculaire où chaque scène est portée par des costumes, des chorégraphies et une narration émotionnelle. Parfait pour voir le talent de nos acteurs et chanteurs sur scène.",
    images: ["/STAGE/2.avif", "/STAGE/3.avif", "/STAGE/6.webp"],
    video: "/editt.mp4",
  },
  {
    title: "Gala Annuel",
    subtitle: "Les meilleurs moments de la saison",
    description:
      "Une compilation de nos performances les plus marquantes, enrichie de moments coulisses et d’inspirations artistiques. Le Gala met en valeur la créativité, l’énergie et le travail d’équipe de la troupe.",
    images: ["/STAGE/6.webp", "/STAGE/2.avif", "/STAGE/1.webp"],
    video: "/edit.mp4",
  },
];

export default function ShowsPage() {
  return (
    <div className="bg-[#050505] min-h-screen text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-sas-black py-20 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_35%)]" />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <p className="text-sas-gold tracking-[0.4em] uppercase text-sm mb-4 font-sans font-semibold">
            Shows
          </p>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-6">
            PREVIOUS SHOWS
          </h1>
          <p className="max-w-3xl mx-auto text-white/70 text-base leading-relaxed">
            Découvrez chaque show avec sa description complète, ses temps forts visuels et des extraits vidéo.
          </p>
         
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {shows.map((show) => (
          <article key={show.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-start">
              <div>
                <p className="text-sas-gold uppercase tracking-[0.35em] text-xs font-semibold mb-4">
                  {show.title}
                </p>
                <h2 className="font-serif text-4xl text-white mb-6">
                  {show.subtitle}
                </h2>
                <p className="text-white/70 leading-relaxed text-base mb-8">
                  {show.description}
                </p>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                  {show.images.map((src) => (
                    <div key={src} className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/60 h-52">
                      <Image src={src} alt={`${show.title} photo`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-[1.75rem] overflow-hidden border border-white/10 bg-black/70 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                  <video
                    src={show.video}
                    controls
                    className="w-full h-full min-h-[20rem] bg-black"
                    poster={show.images[0]}
                    playsInline
                  />
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-sas-black/70 p-6">
                  <h3 className="font-serif text-2xl text-white mb-4">Moments clés</h3>
                  <ul className="space-y-3 text-white/70 text-sm leading-relaxed">
                    <li>• Une direction artistique soignée et immersive</li>
                    <li>• Une distribution talentueuse en chant, danse et jeu</li>
                    <li>• Une scénographie travaillée et une ambiance scénique forte</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}
