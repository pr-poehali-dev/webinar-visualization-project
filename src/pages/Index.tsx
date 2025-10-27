import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import WebinarDemo from "@/components/WebinarDemo";
import GetCourseDemo from "@/components/GetCourseDemo";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
        
        <div className="text-center space-y-8 animate-fade-in relative z-10 max-w-5xl">
          <Badge variant="outline" className="border-primary text-primary text-sm px-4 py-2">
            PREMIUM PRODUCT
          </Badge>
          
          <h1 className="font-serif text-7xl md:text-9xl font-bold tracking-tight">
            HONIA <span className="text-primary">×</span> MS
          </h1>
          
          <div className="relative inline-block">
            <div className="absolute inset-0 blur-3xl bg-primary opacity-20 animate-pulse" />
            <p className="text-6xl md:text-8xl font-serif font-black text-primary relative">
              $1,000,000
            </p>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
            See how we work on real site
          </p>
          
          <div className="pt-12">
            <Icon name="ChevronDown" className="animate-bounce text-primary" size={40} />
          </div>
        </div>
      </section>

      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
                <span className="text-3xl font-serif font-bold text-primary">1</span>
              </div>
              <div>
                <Badge className="bg-primary/20 text-primary border-primary/30 mb-2">STEP 1</Badge>
                <h2 className="text-5xl font-serif font-bold">Webinar</h2>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6 text-lg text-muted-foreground">
                <p className="leading-relaxed text-xl">
                  We creating your own selling web from scratch
                </p>
                <p className="leading-relaxed">
                  All organisation, slides, technology of web on us
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
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
              
              <div className="animate-scale-in">
                <WebinarDemo />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 relative bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 animate-scale-in hover:scale-105 transition-transform duration-500 order-2 lg:order-1">
              <img 
                src="https://cdn.poehali.dev/projects/d205c5b6-fda0-4aff-af54-36f56fac4a86/files/69b4c91b-da77-4603-84a7-b91050d105bc.jpg"
                alt="Sales team analytics"
                className="w-full h-full object-cover"
              />
            </Card>
            
            <div className="space-y-8 animate-fade-in order-1 lg:order-2">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
                  <span className="text-3xl font-serif font-bold text-primary">2</span>
                </div>
                <div>
                  <Badge className="bg-primary/20 text-primary border-primary/30 mb-2">STEP 2</Badge>
                  <h2 className="text-5xl font-serif font-bold">Team</h2>
                </div>
              </div>
              
              <div className="space-y-6 text-lg text-muted-foreground">
                <p className="leading-relaxed">
                  We have top-sales managers, that make best conversion to buying
                </p>
                <p className="text-4xl font-serif font-bold text-primary">
                  $10,000+
                </p>
                <p className="leading-relaxed">
                  Daily revenue from optimized sales funnel
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
          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
                <span className="text-3xl font-serif font-bold text-primary">3</span>
              </div>
              <div>
                <Badge className="bg-primary/20 text-primary border-primary/30 mb-2">STEP 3</Badge>
                <h2 className="text-5xl font-serif font-bold">Product</h2>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="text-lg text-muted-foreground max-w-3xl">
                <p className="leading-relaxed mb-4">
                  We make your own platform, best performance at the lessons
                </p>
                <p className="leading-relaxed mb-4">
                  People will want not just simple videos
                </p>
                <p className="leading-relaxed text-white text-xl">
                  They will go through an interactive program with gifts, tasks and bonuses
                </p>
              </div>
              
              <div className="animate-scale-in">
                <GetCourseDemo />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 relative bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="overflow-hidden rounded-2xl border border-primary/20 animate-scale-in hover:scale-105 transition-transform duration-500 order-2 lg:order-1 relative group">
              <img 
                src="https://cdn.poehali.dev/projects/d205c5b6-fda0-4aff-af54-36f56fac4a86/files/3760873c-8ecc-45b7-9dc2-f42c6ccbb41e.jpg"
                alt="Live premium event"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="space-y-8 animate-fade-in order-1 lg:order-2">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
                  <span className="text-3xl font-serif font-bold text-primary">4</span>
                </div>
                <div>
                  <Badge className="bg-primary/20 text-primary border-primary/30 mb-2">STEP 4</Badge>
                  <h2 className="text-5xl font-serif font-bold">Community</h2>
                </div>
              </div>
              
              <div className="space-y-6 text-lg text-muted-foreground">
                <p className="text-2xl font-serif font-bold text-white">
                  Premium community of students. Live meetings
                </p>
                <p className="leading-relaxed">
                  Full organization on us
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="Users2" size={20} />
                  <span>Exclusive community</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="Video" size={20} />
                  <span>Live events</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="Star" size={20} />
                  <span>Premium experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in">
          <div className="space-y-6">
            <h2 className="text-6xl font-serif font-bold">
              On <span className="text-primary">Us</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Full service management
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "Users", title: "Team", desc: "Expert professionals" },
              { icon: "TrendingUp", title: "Sales", desc: "Conversion optimization" },
              { icon: "Presentation", title: "Webinar", desc: "Full organization" },
              { icon: "UsersRound", title: "Audience", desc: "Maximum reach" },
            ].map((item, i) => (
              <Card 
                key={i} 
                className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto border border-primary/30">
                    <Icon name={item.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-serif font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-16 px-4 border-t border-primary/20">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <p className="text-4xl font-serif font-bold">
            HONIA <span className="text-primary">×</span> MS
          </p>
          <p className="text-muted-foreground">
            Premium Product Development
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
