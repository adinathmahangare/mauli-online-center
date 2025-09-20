import { useState } from "react";
import { Badge } from "@/components/ui/badge";
// import heroImage from "@assets/hero-image.jpeg";
import backgroundImage from "@assets/generated_images/Professional_cityscape_hero_background_256f795d.png";

export default function Hero() {
  return (
  <section className="relative pt-0 pb-20 lg:pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/95" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background/50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-8 w-full text-center">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-primary mx-auto">
                Trusted Multi-Services Provider
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mx-auto">
                Mauli Online Center and Multiservices
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto">
                From xerox and printing to online form filling, admission forms, and food licensing - 
                we handle all your documentation needs with professionalism and efficiency.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-2 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-primary">1000+</div>
                <div className="text-base font-semibold text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-primary">5000+</div>
                <div className="text-base font-semibold text-muted-foreground">Services Completed</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-4 flex items-center justify-center">
              {/* Image Carousel */}
              {(() => {
                const images = [
                  "/hero-image.jpeg",
                  "/pic1.jpeg",
                  "/pic2.jpeg",
                  "/pic3.jpeg",
                  "/pic4.jpeg",
                  "/pic5.jpeg",
                  "/pic6.jpeg",
                  "/pic7.jpeg",
                  "/pic8.jpeg",
                  "/pic9.jpeg"
                ];
                const [current, setCurrent] = useState(0);
                const prevImage = (e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
                };
                const nextImage = (e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
                };
                return (
                  <div className="relative w-full flex items-center justify-center">
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 rounded-full p-2 shadow hover:bg-primary/20 z-10"
                      aria-label="Previous image"
                    >
                      <span className="text-2xl">&#8592;</span>
                    </button>
                    <img
                      src={images[current]}
                      alt={`Hero ${current + 1}`}
                      className="w-full h-auto rounded-xl shadow-lg max-h-96 object-contain"
                      style={{ maxWidth: '400px' }}
                    />
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 rounded-full p-2 shadow hover:bg-primary/20 z-10"
                      aria-label="Next image"
                    >
                      <span className="text-2xl">&#8594;</span>
                    </button>
                    {/* Dots */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                      {images.map((_, idx) => (
                        <span
                          key={idx}
                          className={`w-2 h-2 rounded-full ${idx === current ? 'bg-primary' : 'bg-muted-foreground/30'}`}
                        />
                      ))}
                    </div>
                  </div>
                );
              })()}
              <div className="absolute top-8 right-8 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="flex items-center text-sm font-medium">
                  <div className="w-2 h-2 bg-chart-2 rounded-full mr-2"></div>
                  <span className="text-foreground">Currently Open</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
