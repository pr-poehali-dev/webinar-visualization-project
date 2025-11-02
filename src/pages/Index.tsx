import { HeroSection } from "@/components/HeroSection";
import { StepSection } from "@/components/StepSection";
import { ResponsibilitySection } from "@/components/ResponsibilitySection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      <HeroSection />

      <StepSection
        stepNumber={1}
        title="Webinar"
        description={[
          "We creating your own selling web from scratch",
          "All organisation, slides, technology of web on us",
        ]}
        features={[
          { icon: "CheckCircle2", text: "Professional slides" },
          { icon: "CheckCircle2", text: "Lead generation" },
          { icon: "CheckCircle2", text: "Full automation" },
        ]}
        imageSrc="https://cdn.poehali.dev/files/e03f71db-cd2c-4f70-bbc9-497756c32c6f.jpg"
        imageAlt="Webinar dashboard"
      />

      <StepSection
        stepNumber={2}
        title="Team"
        description={[
          "We have top-sales managers, that make best conversion to buying",
        ]}
        features={[
          { icon: "Users", text: "Expert team" },
          { icon: "TrendingUp", text: "High conversion" },
          { icon: "DollarSign", text: "Proven results" },
        ]}
        imageSrc="https://cdn.poehali.dev/files/88d4d100-03f0-4950-aa07-05107b3ec7c6.png"
        imageAlt="Banking transactions"
        reverse={true}
        backgroundGradient={true}
      />

      <StepSection
        stepNumber={3}
        title="Product"
        description={[
          "We create high-level product, that your clients will love",
          "All tech, and organisation are on us!",
        ]}
        features={[
          { icon: "Sparkles", text: "Premium quality" },
          { icon: "Zap", text: "Fast delivery" },
          { icon: "Shield", text: "Guaranteed results" },
        ]}
        imageSrc="https://cdn.poehali.dev/files/bb5e3385-3d68-4de3-b61a-d9db1f1c9a1f.png"
        imageAlt="Product interface"
      />

      <ResponsibilitySection />

      <CaseStudiesSection />

      <Footer />
    </div>
  );
};

export default Index;
