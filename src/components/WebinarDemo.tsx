import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const WebinarDemo = () => {
  const [viewers, setViewers] = useState(243);
  const [leads, setLeads] = useState(1847);
  const [engagement, setEngagement] = useState(89);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(prev => prev + Math.floor(Math.random() * 5));
      setLeads(prev => prev + Math.floor(Math.random() * 3));
      setEngagement(prev => Math.min(99, prev + Math.random() * 0.5));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      <div className="aspect-video bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-lg overflow-hidden relative">
        <img 
          src="https://cdn.poehali.dev/projects/d205c5b6-fda0-4aff-af54-36f56fac4a86/files/a7dfc4cf-4361-4d30-b373-9a8a503085c6.jpg"
          alt="Live webinar"
          className="w-full h-full object-cover opacity-90"
        />
        
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full animate-pulse">
          <div className="w-2 h-2 bg-white rounded-full" />
          <span className="font-semibold text-sm">LIVE</span>
        </div>

        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-primary/30">
          <div className="flex items-center gap-2">
            <Icon name="Users" size={16} className="text-primary" />
            <span className="font-bold">{viewers.toLocaleString()}</span>
            <span className="text-xs text-gray-400">viewers</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6">
          <div className="grid grid-cols-3 gap-4">
            <Card className="bg-black/50 backdrop-blur-sm border-primary/30 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="TrendingUp" size={18} className="text-green-500" />
                <span className="text-xs text-gray-400">Leads Generated</span>
              </div>
              <div className="text-2xl font-bold text-white">{leads.toLocaleString()}</div>
              <div className="text-xs text-green-500 mt-1">+124 last hour</div>
            </Card>

            <Card className="bg-black/50 backdrop-blur-sm border-primary/30 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Zap" size={18} className="text-primary" />
                <span className="text-xs text-gray-400">Engagement</span>
              </div>
              <div className="text-2xl font-bold text-white">{engagement.toFixed(1)}%</div>
              <div className="text-xs text-primary mt-1">Excellent rate</div>
            </Card>

            <Card className="bg-black/50 backdrop-blur-sm border-primary/30 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="DollarSign" size={18} className="text-yellow-500" />
                <span className="text-xs text-gray-400">Conv. Rate</span>
              </div>
              <div className="text-2xl font-bold text-white">34.5%</div>
              <div className="text-xs text-yellow-500 mt-1">Above average</div>
            </Card>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: "FileText", label: "Professional Slides", value: "Included" },
          { icon: "Headphones", label: "Tech Support", value: "24/7" },
          { icon: "Users", label: "Audience", value: "Pre-warmed" },
          { icon: "Target", label: "Conversion", value: "Optimized" }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 p-3 bg-card/30 rounded-lg border border-primary/10">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name={item.icon as any} size={18} className="text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">{item.label}</div>
              <div className="text-sm font-semibold">{item.value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="aspect-[9/16] rounded-lg overflow-hidden bg-black">
          <iframe
            src="https://www.youtube.com/embed/w2avlOMcM04"
            title="YouTube video player 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <div className="aspect-[9/16] rounded-lg overflow-hidden bg-black">
          <iframe
            src="https://www.youtube.com/embed/7WSXqImbmF8"
            title="YouTube video player 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <div className="aspect-[9/16] rounded-lg overflow-hidden bg-black">
          <iframe
            src="https://www.youtube.com/embed/da5iuA3p4ug"
            title="YouTube video player 3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default WebinarDemo;