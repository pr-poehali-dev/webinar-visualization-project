import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface StepSectionProps {
  stepNumber: number;
  title: string;
  description: string[];
  features: Array<{ icon: string; text: string }>;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  backgroundGradient?: boolean;
}

export const StepSection = ({
  stepNumber,
  title,
  description,
  features,
  imageSrc,
  imageAlt,
  reverse = false,
  backgroundGradient = false,
}: StepSectionProps) => {
  return (
    <section
      className={`py-32 px-4 relative ${backgroundGradient ? "bg-gradient-to-b from-transparent via-primary/5 to-transparent" : ""}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Card
            className={`overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 animate-scale-in hover:scale-105 transition-transform duration-500 ${reverse ? "order-2 lg:order-1" : ""}`}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </Card>

          <div
            className={`space-y-8 animate-fade-in ${reverse ? "order-1 lg:order-2" : ""}`}
          >
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30 animate-circle-glow">
                <span
                  className="font-serif text-primary animate-number-pop text-5xl font-normal -mt-3"
                  style={
                    stepNumber > 1 ? { animationDelay: "0.2s" } : undefined
                  }
                >
                  {stepNumber}
                </span>
              </div>
              <div>
                <Badge className="bg-primary/20 text-primary border-primary/30 mb-2">
                  STEP {stepNumber}
                </Badge>
                <h2 className="text-5xl font-serif font-bold animate-text-glow">
                  {title}
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground">
              {description.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-primary">
                  <Icon name={feature.icon} size={20} />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
