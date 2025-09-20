import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

interface MapComponentProps {
  branchName: string;
  address: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export default function MapComponent({ branchName, address, coordinates }: MapComponentProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate Google Maps URLs for embedding and directions
  const encodedAddress = encodeURIComponent(address);
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodedAddress}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
  
  // Fallback to OpenStreetMap-based solution
  const osmUrl = `https://www.openstreetmap.org/export/embed.html?bbox=75.2,19.8,75.4,20.0&layer=mapnik&marker=${coordinates?.lat || 19.9}%2C${coordinates?.lng || 75.3}`;

  const handleGetDirections = () => {
    window.open(directionsUrl, '_blank');
    console.log(`Getting directions to ${branchName}`);
  };

  return (
    <Card className="overflow-hidden border-card-border" data-testid={`map-${branchName.toLowerCase().replace(' ', '-')}`}>
      <CardContent className="p-0">
        <div className="relative">
          {/* Map Container */}
          <div className="relative h-64 bg-muted/30 rounded-t-lg overflow-hidden">
            <iframe
              src={osmUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              onLoad={() => setIsLoaded(true)}
              data-testid={`iframe-map-${branchName.toLowerCase().replace(' ', '-')}`}
            />
            
            {/* Loading Overlay */}
            {!isLoaded && (
              <div className="absolute inset-0 bg-muted/50 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Loading map...</p>
                </div>
              </div>
            )}

            {/* Branch Marker Overlay */}
            <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm font-medium" data-testid={`text-map-branch-${branchName.toLowerCase().replace(' ', '-')}`}>
                  {branchName}
                </span>
              </div>
            </div>
          </div>

          {/* Map Actions */}
          <div className="p-4 space-y-3">
            <div className="text-sm text-muted-foreground" data-testid={`text-map-address-${branchName.toLowerCase().replace(' ', '-')}`}>
              {address}
            </div>
            
            <div className="flex gap-2">
              <Button 
                size="sm" 
                onClick={handleGetDirections}
                className="flex-1"
                data-testid={`button-directions-${branchName.toLowerCase().replace(' ', '-')}`}
              >
                <Navigation className="h-4 w-4 mr-2" />
                Get Directions
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => window.open(`https://maps.google.com/?q=${encodedAddress}`, '_blank')}
                data-testid={`button-view-larger-${branchName.toLowerCase().replace(' ', '-')}`}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Larger
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}