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
            <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-4">
              <img 
                src="/hero-image.jpeg" 
                alt="Professional multi-services office interior" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
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
