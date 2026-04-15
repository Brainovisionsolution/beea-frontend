import Herosection from "@/components/Gallery/Herosection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Team from "@/components/About/Team";
import TestimonialsCTA from "@/components/About/TestimonialsCTA";
import MasonryGallery from "@/components/Gallery/MasonryGallery";
const Gallery = () => {
  return (
    <main className="bg-background">
      <Navbar/>
  <Herosection/>
    <MasonryGallery/>
      <Footer/>

    </main>
  );
};

export default Gallery;
