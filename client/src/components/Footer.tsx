import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4" data-testid="section-company-info">
            <h3 className="text-lg font-bold text-foreground" data-testid="text-company-name">
              Mauli Online Center
            </h3>
            <p className="text-sm text-muted-foreground" data-testid="text-company-description">
              Your trusted partner for xerox, online forms, admissions, and food licensing in Sambhajinagar.
            </p>
            <div className="flex space-x-3">
              <Button 
                size="icon" 
                variant="outline" 
                className="hover-elevate"
                onClick={() => console.log("Facebook clicked")}
                data-testid="button-facebook"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button 
                size="icon" 
                variant="outline" 
                className="hover-elevate"
                onClick={() => console.log("Instagram clicked")}
                data-testid="button-instagram"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button 
                size="icon" 
                variant="outline" 
                className="hover-elevate"
                onClick={() => console.log("Twitter clicked")}
                data-testid="button-twitter"
              >
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4" data-testid="section-quick-links">
            <h3 className="text-lg font-bold text-foreground">Quick Links</h3>
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <a href="#services" className="text-muted-foreground hover:text-chart-2 transition-colors" data-testid="link-services">
                Services
              </a>
              <a href="#branches" className="text-muted-foreground hover:text-chart-2 transition-colors" data-testid="link-branches">
                Branches
              </a>
              <a href="#reviews" className="text-muted-foreground hover:text-chart-2 transition-colors" data-testid="link-reviews">
                Reviews
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-chart-2 transition-colors" data-testid="link-contact">
                Contact
              </a>
            </div>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-4" data-testid="section-contact">
            <h3 className="text-lg font-bold text-foreground">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="space-y-2">
                <div className="flex items-center text-muted-foreground">
                  <Phone className="h-4 w-4 mr-2 text-chart-2 flex-shrink-0" />
                  <span data-testid="text-footer-phones">+91 9876543210 / 211</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2 text-chart-2 flex-shrink-0" />
                  <span data-testid="text-footer-hours">Mon-Sat: 9AM-7PM</span>
                </div>
              </div>
              <Button 
                size="sm" 
                className="w-full hover-elevate"
                onClick={() => {
                  console.log("Get quote clicked");
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                data-testid="button-footer-quote"
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left" data-testid="text-copyright">
            © {currentYear} Mauli Online Center. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-privacy">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-terms">
              Terms of Service
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}