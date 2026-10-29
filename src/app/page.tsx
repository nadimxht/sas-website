import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import DisciplineCards from "./components/DisciplineCards";
import ProgramsByAge from "./components/ProgramsByAge";
import TeamSection from "./components/TeamSection";
import GallerySection from "./components/GallerySection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      
      <main>
      
        <Hero />
        <WhyChooseUs />
        <ProgramsByAge />
        <DisciplineCards />
        <TeamSection />
        
        <GallerySection />
        <Footer />
        {/* <BookingStore /> */}
    
    </main>
    
    </div>
  );
}
