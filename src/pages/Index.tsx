import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

const Index = () => {
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
    <div className="min-h-screen bg-black text-white">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

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

          <h1 className="font-serif text-7xl md:text-9xl font-bold tracking-tight animate-title-shimmer">
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

      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30 animate-circle-glow">
                  <span className="font-serif text-primary animate-number-pop text-5xl font-normal -mt-3">
                    1
                  </span>
                </div>
                <div>
                  <Badge className="bg-primary/20 text-primary border-primary/30 mb-2">
                    STEP 1
                  </Badge>
                  <h2 className="text-5xl font-serif font-bold animate-text-glow">
                    Webinar
                  </h2>
                </div>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground">
                <p className="leading-relaxed">
                  We creating your own selling web from scratch
                </p>
                <p className="leading-relaxed">
                  All organisation, slides, technology of web on us
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="CheckCircle2" size={20} />
                  <span>Professional slides</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="CheckCircle2" size={20} />
                  <span>Lead generation</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="CheckCircle2" size={20} />
                  <span>Full automation</span>
                </div>
              </div>
            </div>

            <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 animate-scale-in hover:scale-105 transition-transform duration-500">
              <img
                src="https://cdn.poehali.dev/files/a1517ad7-edd7-464e-aa25-d9b982363511.png"
                alt="Webinar dashboard"
                className="w-full h-full object-cover"
              />
            </Card>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 relative bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 animate-scale-in hover:scale-105 transition-transform duration-500 order-2 lg:order-1">
              <img
                src="https://cdn.poehali.dev/files/88d4d100-03f0-4950-aa07-05107b3ec7c6.png"
                alt="Banking transactions"
                className="w-full h-full object-cover"
              />
            </Card>

            <div className="space-y-8 animate-fade-in order-1 lg:order-2">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30 animate-circle-glow">
                  <span
                    className="font-serif text-primary animate-number-pop text-5xl font-normal -mt-3"
                    style={{ animationDelay: "0.2s" }}
                  >
                    2
                  </span>
                </div>
                <div>
                  <Badge className="bg-primary/20 text-primary border-primary/30 mb-2">
                    STEP 2
                  </Badge>
                  <h2 className="text-5xl font-serif font-bold animate-text-glow">
                    Team
                  </h2>
                </div>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground">
                <p className="leading-relaxed">
                  We have top-sales managers, that make best conversion to
                  buying
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="Users" size={20} />
                  <span>Expert team</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="TrendingUp" size={20} />
                  <span>High conversion</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="DollarSign" size={20} />
                  <span>Proven results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30 animate-circle-glow">
                  <span
                    className="font-serif text-primary animate-number-pop text-5xl font-normal -mt-3"
                    style={{ animationDelay: "0.4s" }}
                  >
                    3
                  </span>
                </div>
                <div>
                  <Badge className="bg-primary/20 text-primary border-primary/30 mb-2">
                    STEP 3
                  </Badge>
                  <h2 className="text-5xl font-serif font-bold animate-text-glow">
                    Product
                  </h2>
                </div>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground">
                <p className="leading-relaxed">
                  We make your own platform, the best performance at the lessons
                </p>
                <p className="leading-relaxed">
                  People won't want just simple videos
                </p>
                <p className="leading-relaxed text-white">
                  They will go through an interactive program with gifts, tasks
                  and bonuses
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="Award" size={20} />
                  <span>Interactive lessons</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="Gift" size={20} />
                  <span>Bonus system</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="Target" size={20} />
                  <span>Task tracking</span>
                </div>
              </div>
            </div>

            <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 animate-scale-in hover:scale-105 transition-transform duration-500">
              <img
                src="https://cdn.poehali.dev/files/cbd57c0a-dec3-45d6-ac4f-54de7fc3d4aa.png"
                alt="Learning platform"
                className="w-full h-full object-cover"
              />
            </Card>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 relative bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 animate-scale-in hover:scale-105 transition-transform duration-500 order-2 lg:order-1">
              <img
                src="https://cdn.poehali.dev/files/27227986-4896-4ef3-b837-97d106af6a91.jpg"
                alt="Premium community events"
                className="w-full h-full object-cover"
              />
            </Card>

            <div className="space-y-8 animate-fade-in order-1 lg:order-2">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30 animate-circle-glow">
                  <span
                    className="font-serif text-primary animate-number-pop text-5xl font-normal -mt-3"
                    style={{ animationDelay: "0.6s" }}
                  >
                    4
                  </span>
                </div>
                <div>
                  <Badge className="bg-primary/20 text-primary border-primary/30 mb-2">
                    STEP 4
                  </Badge>
                  <h2 className="text-5xl font-serif font-bold animate-text-glow">
                    Community
                  </h2>
                </div>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground">
                <p className="leading-relaxed">
                  Premium student community. Live meetings
                </p>
                <p className="leading-relaxed">Full organisation on us</p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="Users2" size={20} />
                  <span>Live events</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="MapPin" size={20} />
                  <span>Premium venues</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="Calendar" size={20} />
                  <span>Full coordination</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300">
              <Icon
                name="Users"
                className="text-primary mx-auto mb-4"
                size={48}
              />
              <h3 className="text-2xl font-serif font-bold mb-4">Team</h3>
              <p className="text-muted-foreground">
                Expert professionals handling every detail
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300">
              <Icon
                name="TrendingUp"
                className="text-primary mx-auto mb-4"
                size={48}
              />
              <h3 className="text-2xl font-serif font-bold mb-4">Sales</h3>
              <p className="text-muted-foreground">
                High-conversion sales strategies
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300">
              <Icon
                name="Presentation"
                className="text-primary mx-auto mb-4"
                size={48}
              />
              <h3 className="text-2xl font-serif font-bold mb-4">
                Webinar Organisation
              </h3>
              <p className="text-muted-foreground">
                Complete event management from start to finish
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300">
              <Icon
                name="Users2"
                className="text-primary mx-auto mb-4"
                size={48}
              />
              <h3 className="text-2xl font-serif font-bold mb-4">
                Audience Collection
              </h3>
              <p className="text-muted-foreground">
                Maximum attendance at sales events
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 relative bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <div>
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-6">
              CASE STUDIES
            </Badge>
            <h2 className="text-6xl font-serif font-bold animate-text-glow">
              How We Implemented This For Others
            </h2>
          </div>

          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real clients who trusted us with their
            million-dollar products
          </p>

          <div className="flex flex-col gap-8 pt-12 max-w-4xl mx-auto">
            <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:scale-105 transition-transform duration-500">
              <img
                src="https://cdn.poehali.dev/files/d0934047-2535-4605-b4ae-5212b45d6d69.jpg"
                alt="Course lesson interface"
                className="w-full object-contain"
              />
            </Card>

            <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:scale-105 transition-transform duration-500">
              <img
                src="https://cdn.poehali.dev/files/a7d94e85-8317-49f3-8275-2fd364b3d018.jpg"
                alt="Product prototype"
                className="w-full object-contain"
              />
            </Card>

            <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:scale-105 transition-transform duration-500">
              <img
                src="https://cdn.poehali.dev/files/729c6492-3415-4cc3-bd0b-1738e21edb9f.jpg"
                alt="Product lesson step"
                className="w-full object-contain"
              />
            </Card>

            <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:scale-105 transition-transform duration-500">
              <img
                src="https://cdn.poehali.dev/files/5770a0e8-a4c0-4795-a9e5-e1d51ad76ec5.jpg"
                alt="Calendar interface"
                className="w-full object-contain"
              />
            </Card>

            <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 p-0">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/ZcAcT9rCHsA"
                  title="HONIA × MS Wedding Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-16 px-4 border-t border-primary/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-primary font-serif text-3xl font-bold mb-4">
            HONIA × MS
          </p>
          <p className="text-muted-foreground">
            Premium product development & sales infrastructure
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;