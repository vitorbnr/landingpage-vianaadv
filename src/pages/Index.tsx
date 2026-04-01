import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import AreasSection from "@/components/AreasSection";
import UnitsSection from "@/components/UnitsSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => (
  <div className="min-h-screen">
    <TopBar />
    <Header />
    <HeroSection />
    <TrustBar />
    <AboutSection />
    <TeamSection />
    <AreasSection />
    <UnitsSection />
    <FaqSection />

    <Footer />
    <WhatsAppFloat />
  </div>
);

export default Index;
