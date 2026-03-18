import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import AwardCategories from "@/components/AwardCategories";
import WhyNominate from "@/components/WhyNominate";
import EventHighlights from "@/components/EventHighlights";
import JurySection from "@/components/JurySection";
import Sponsors from "@/components/Sponsors";
import NominationProcess from "@/components/NominationProcess";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
const Index = () => {
  return (
    <main className="bg-background">
      <Navbar/>
      <Hero />
      <About/>
      <Stats/>
      <AwardCategories/>
      <WhyNominate/>
      <JurySection/>
      <Sponsors/>
      <NominationProcess/>
      <FAQ/>
      <CTA/>
      <Footer/>

    </main>
  );
};

export default Index;
