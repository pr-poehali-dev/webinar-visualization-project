import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const CaseStudiesSection = () => {
  const caseImages = [
    {
      src: "https://cdn.poehali.dev/files/d0934047-2535-4605-b4ae-5212b45d6d69.jpg",
      alt: "Course lesson interface",
    },
    {
      src: "https://cdn.poehali.dev/files/a7d94e85-8317-49f3-8275-2fd364b3d018.jpg",
      alt: "Product prototype",
    },
    {
      src: "https://cdn.poehali.dev/files/729c6492-3415-4cc3-bd0b-1738e21edb9f.jpg",
      alt: "Product lesson step",
    },
    {
      src: "https://cdn.poehali.dev/files/5770a0e8-a4c0-4795-a9e5-e1d51ad76ec5.jpg",
      alt: "Calendar interface",
    },
  ];

  const youtubeShorts = [
    { id: "w2avlOMcM04", title: "YouTube Shorts 1" },
    { id: "7WSXqImbmF8", title: "YouTube Shorts 2" },
    { id: "da5iuA3p4ug", title: "YouTube Shorts 3" },
  ];

  return (
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
          {caseImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:scale-105 transition-transform duration-500"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full object-contain"
              />
            </Card>
          ))}

          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 p-0">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/uXU62cCwGpI"
                title="HONIA × MS Wedding Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Card>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {youtubeShorts.map((video, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20"
            >
              <div className="aspect-[9/16]">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
