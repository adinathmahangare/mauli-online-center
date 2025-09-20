import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16 w-full max-w-full">
          <div className="flex items-center">
            <img
              src="/logo.jpeg"
              alt="Mauli Logo"
              className="h-12 w-12 sm:h-16 sm:w-16 mr-2 object-contain select-none"
              style={{ maxWidth: '4rem', maxHeight: '4rem' }}
            />
            <h1 className="text-lg sm:text-xl font-bold text-primary whitespace-nowrap" data-testid="text-logo">
              Mauli Online Center
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-foreground hover:text-chart-2 transition-colors font-medium" 
              data-testid="link-services"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('branches')} 
              className="text-foreground hover:text-chart-2 transition-colors font-medium" 
              data-testid="link-branches"
            >
              Branches
            </button>
            <button 
              onClick={() => scrollToSection('reviews')} 
              className="text-foreground hover:text-chart-2 transition-colors font-medium" 
              data-testid="link-reviews"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-foreground hover:text-chart-2 transition-colors font-medium" 
              data-testid="link-contact"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center text-sm text-muted-foreground">
              <Phone className="h-4 w-4 mr-1 text-chart-2" />
              <span data-testid="text-phone">+91 9075824143</span>
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="hover-elevate hidden md:inline-flex"
              data-testid="button-quote"
            >
              Get Quote
            </Button>
            
            {/* Mobile call button and menu button */}
            <a
              href="tel:+919075824143"
              className="md:hidden flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-white mr-2 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Call Now"
              style={{ textDecoration: 'none' }}
              data-testid="button-mobile-call"
            >
              <Phone className="h-5 w-5" />
            </a>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden flex-shrink-0 w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border" data-testid="mobile-menu">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-left text-foreground hover:text-chart-2 transition-colors font-medium py-2" 
                data-testid="mobile-link-services"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('branches')} 
                className="text-left text-foreground hover:text-chart-2 transition-colors font-medium py-2" 
                data-testid="mobile-link-branches"
              >
                Branches
              </button>
              <button 
                onClick={() => scrollToSection('reviews')} 
                className="text-left text-foreground hover:text-chart-2 transition-colors font-medium py-2" 
                data-testid="mobile-link-reviews"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left text-foreground hover:text-chart-2 transition-colors font-medium py-2" 
                data-testid="mobile-link-contact"
              >
                Contact
              </button>
              <div className="flex items-center text-sm text-muted-foreground pt-2">
                <Phone className="h-4 w-4 mr-2 text-chart-2" />
                <span>+91 9876543210</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}