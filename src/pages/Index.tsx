import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PillarsSection from "@/components/PillarsSection";
import TechSection from "@/components/TechSection";
import TeamSection from "@/components/TeamSection";
import PublicationsSection from "@/components/PublicationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PillarsSection />
      <TechSection />
      <TeamSection />
      <PublicationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
