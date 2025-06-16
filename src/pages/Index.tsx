
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MethodSection from "@/components/MethodSection";
import SelectPackSection from "@/components/SelectPackSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <TestimonialsSection />
      <MethodSection />
      <SelectPackSection />
      <GuaranteeSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
