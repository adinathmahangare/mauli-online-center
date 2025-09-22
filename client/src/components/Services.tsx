import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Printer, FileText, GraduationCap, Award, Star } from "lucide-react";

const services = [
  {
    icon: Printer,
    title: "Xerox & Stationery",
    
    features: [
      "Black & White Printing",
      "Color Printing",
      "Bulk Copying",
      "Document Binding",
      "Scanning Services",
      "Photo Printing",
      "Lamination",
      "ID Card Printing",
      "Resume & Project Report Printing",
      "Spiral / Thermal Binding",
      "Multi-size Paper Printing (A3, A4, Legal)",
      "Online Document Print (from Email / Drive)",
      "Notebooks & Registers",
      "Pens, Pencils & Erasers",
      "Files & Folders",
      "Staplers & Pins",
      "Markers & Highlighters",
    ],
  },
  {
    icon: FileText,
    title: "Online Form Filling",
    features: [
      "Government Forms",
      "Online Form Filling (Scholarship, Exams, Govt. Schemes)",
      "Resume & Job Application Support",
      "RTE (Right to Education) Admission Forms",
      "PAN Card & Aadhar Update Forms",
      "Voter ID Registration/Correction",
      "PMAY (Housing Scheme) Application",
      "E-Shram Registration",
      "Competitive Exam Forms (SSC, UPSC, MPSC, Police, etc.)",
      "Electricity & Gas Connection Forms",
      "Income, Caste, Domicile Certificate Applications",
      "RTI (Right to Information) Applications",
    ],
  },
  {
    icon: GraduationCap,
    title: "Admission Forms",
    features: [
      "College Admission Forms Applications",
      "University Forms",
      "D pharmacy license forms",
      "Diploma Admission Forms",
      "ITI Admission Forms",
      "Polytechnic Admission Forms",
      "Medical / Nursing College Applications",
      "B.Ed / D.Ed Admission Forms",
      "Hostel Admission Forms",
      "Scholarship Forms (Panjabrao) (State / Central)",
      "Fee Concession / Financial Aid Forms",
      "Entrance Exam Registrations (JEE, NEET, etc.)",
      "Board Exam Forms (Class 10 / 12)",
      "Counseling / Application Guidance",
    ],
  },
  {
    icon: Award,
    title: "License Forms",
    features: [
      "FSSAI License (Food License)",
      "Trade License",
      "Shop Act Registration (Gumasta)",
      "MSME / Udyam Registration",
      "Fertilizer & Seed License (Krushi License)",
      "Medical Store License (Assistance)",
      "GST Registration",
      "Import Export Code (IEC)",
      "Labour License",
      "Digital Signature Certificate (DSC)",
      "Compliance & Renewal Reminders",
      "Fire Safety License (Fire NOC)",
      "Documentation Support for All Licenses",
      "Business Consultation for New Startups",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="pt-8 pb-20 bg-muted/30 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Complete Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive multi-services to meet all your documentation and licensing needs 
            with professional expertise and reliable support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-elevate group border-card-border">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <Star className="h-3 w-3 mr-2 text-chart-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
