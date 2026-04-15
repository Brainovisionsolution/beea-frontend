import Herosection from "@/components/About/Herosection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import History from "@/components/About/History";
import Team from "@/components/About/Team";
import TestimonialsCTA from "@/components/About/TestimonialsCTA";
const About = () => {
  return (
    <main className="bg-background">
      <Navbar/>
     <Herosection/>
     <History/>
     <Team/>
     <TestimonialsCTA/>
      <Footer/>

    </main>
  );
};

export default About;
