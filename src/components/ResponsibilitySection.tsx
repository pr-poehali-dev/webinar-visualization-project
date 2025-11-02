import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export const ResponsibilitySection = () => {
  const responsibilities = [
    {
      icon: "Users",
      title: "Team",
      description: "Expert professionals handling every detail",
    },
    {
      icon: "TrendingUp",
      title: "Sales",
      description: "High-conversion sales strategies",
    },
    {
      icon: "Presentation",
      title: "Webinar Organisation",
      description: "Complete event management from start to finish",
    },
    {
      icon: "Users2",
      title: "Audience Collection",
      description: "Maximum attendance at sales events",
    },
  ];

  return (
    <section className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto text-center space-y-16">
        <div>
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-6">
            OUR RESPONSIBILITY
          </Badge>
          <h2 className="text-6xl font-serif font-bold mb-12 animate-text-glow">
            On Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {responsibilities.map((item, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300"
            >
              <Icon
                name={item.icon}
                className="text-primary mx-auto mb-4"
                size={48}
              />
              <h3 className="text-2xl font-serif font-bold mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
