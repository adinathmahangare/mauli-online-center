import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Building, Phone } from "lucide-react";
import MapComponent from "./MapComponent";

const branches = [
  {
    id: 1,
    name: "Phulambri Branch",
    location: "Mauli Online Center, Phulambri",
    address: "Main Road, Near Bus Stand, Phulambri, Sambhajinagar, Maharashtra 431109",
    phone: "+91 9075824143",
    hours: "Mon-Mon: 9:00 AM - 9:00 PM",
    isMain: true,
    coordinates: { lat: 20.2617, lng: 75.1817 }
  },
  {
    id: 2,
    name: "Sambhajinagar Branch",
    location: "Mauli Online Center, Kanchanwadi",
    address: "Behind CSMSS Chh. Shahu College of Engineering, Sambhajinagar, Maharashtra 431004",
    phone: "+91 8625849965",
    hours: "Mon-Sat: 10:00 AM - 7:00 PM",
    isMain: false,
    coordinates: { lat: 19.8762, lng: 75.3433 }
  }
];

export default function Branches() {
  return (
    <section id="branches" className="py-20 bg-background scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Branch Locations
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Visit any of our convenient locations in Sambhajinagar district for all your multi-service needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {branches.map((branch) => (
            <div key={branch.id} className="space-y-6">
              <Card 
                className={`hover-elevate relative ${branch.isMain ? 'ring-2 ring-primary/20' : ''}`}
              >
                {branch.isMain && (
                  <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground">
                    Main Branch
                  </Badge>
                )}
              
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    {branch.name}
                  </CardTitle>
                  <CardDescription className="text-base mt-2">
                    {branch.location}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">{branch.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">{branch.phone}</p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Working Hours</p>
                      <p className="text-sm text-muted-foreground">{branch.hours}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Interactive Map for this branch */}
              <MapComponent 
                branchName={branch.name}
                address={branch.address}
                coordinates={branch.coordinates}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 bg-muted/50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Visit Any Branch for Complete Services
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Both our locations offer the same high-quality services and expert assistance. 
            Choose the branch most convenient for you and experience our professional multi-services.
          </p>
        </div>
      </div>
    </section>
  );
}
