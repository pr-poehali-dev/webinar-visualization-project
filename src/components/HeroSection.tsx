import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [moneyElements, setMoneyElements] = useState<
    Array<{ id: number; left: string; delay: string; duration: string }>
  >([]);

  useEffect(() => {
    const elements = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${8 + Math.random() * 4}s`,
    }));
    setMoneyElements(elements);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url(https://cdn.poehali.dev/projects/d205c5b6-fda0-4aff-af54-36f56fac4a86/files/ae281225-0910-4390-a46f-ed5db5773493.jpg)",
        }}
      />

      {moneyElements.map((money) => (
        <span
          key={money.id}
          className="animate-money-fall text-6xl"
          style={{
            left: money.left,
            animationDelay: money.delay,
            animationDuration: money.duration,
          }}
        >
          💵
        </span>
      ))}

      <img
        src="https://cdn.poehali.dev/files/e96f5adb-d980-4f3c-b1d0-ef9a78902c34.png"
        alt="Business women"
        className="absolute bottom-0 left-0 right-0 w-full h-auto max-h-[70vh] object-contain object-bottom z-10 animate-fade-in"
      />

      <div className="text-center space-y-8 animate-fade-in relative z-20 max-w-5xl">
        <Badge
          variant="outline"
          className="border-primary text-primary text-sm px-4 py-2"
        >
          PREMIUM PRODUCT
        </Badge>

        <h1 className="font-serif text-7xl md:text-9xl font-bold tracking-tight animate-title-shimmer whitespace-nowrap">
          HONIA <span className="text-primary">×</span> MS
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
          See how we work on real site
        </p>

        <p className="text-4xl md:text-5xl font-serif font-bold text-primary animate-text-glow">
          $1.000.000 product
        </p>

        <div className="pt-12">
          <Icon
            name="ChevronDown"
            className="animate-bounce text-primary"
            size={40}
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black z-30" />
    </section>
  );
};
