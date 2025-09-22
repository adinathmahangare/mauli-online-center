import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Clock, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_z2aqvka",   // 🔹 Replace with your EmailJS Service ID
        "template_h50wqvj",  // 🔹 Replace with your EmailJS Template ID
        formData,
        "gHcR6DsMZkzBKywsn"    // 🔹 Replace with your EmailJS Public Key
      )
      .then(() => {
        toast({
          title: "Message Sent Successfully!",
          description: "We'll contact you within 24 hours to discuss your requirements.",
        });

        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: ""
        });
      })
      .catch((error) => {
        toast({
          title: "Error Sending Message",
          description: error.text || "Failed to send message. Please try again or call us directly.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="pt-8 pb-20 bg-muted/30 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-contact-title">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-contact-description">
            Ready to get started? Contact us today for expert assistance with all your 
            documentation and licensing needs. We're here to help!
          </p>
          <div className="mt-6">
            <a
              href="tel:+919075824143"
              className="bg-primary text-white px-6 py-2 rounded-lg shadow hover:bg-primary/90 inline-block text-base font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-200"
              aria-label="Call Now"
              style={{ textDecoration: "none" }}
            >
              Call Now
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-card-border" data-testid="card-contact-form">
            <CardHeader>
              <CardTitle className="text-2xl font-bold" data-testid="text-form-title">
                Send us a Message
              </CardTitle>
              <CardDescription data-testid="text-form-description">
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      data-testid="input-phone"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    data-testid="input-email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Required</Label>
                  <Input
                    id="service"
                    name="service"
                    placeholder="e.g., Xerox, Online Forms, Food License"
                    value={formData.service}
                    onChange={handleInputChange}
                    data-testid="input-service"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    data-testid="textarea-message"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSending}
                  data-testid="button-submit"
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isSending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-card-border" data-testid="card-contact-info">
              <CardHeader>
                <CardTitle className="text-xl font-bold" data-testid="text-contact-info-title">
                  Contact Information
                </CardTitle>
                <CardDescription data-testid="text-contact-info-description">
                  Reach us through any of these convenient methods
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Phone Numbers</p>
                    <p className="text-sm text-muted-foreground" data-testid="text-phone-1">Phulambri: +91 9075824143</p>
                    <p className="text-sm text-muted-foreground" data-testid="text-phone-2">CSMSS College: +91 8625849965</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground" data-testid="text-email">maulixerox80@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Working Hours</p>
                    <p className="text-sm text-muted-foreground" data-testid="text-hours">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20" data-testid="card-quick-contact">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-foreground mb-4" data-testid="text-quick-contact">
                  Need Quick Assistance?
                </h3>
                <p className="text-sm text-muted-foreground mb-4" data-testid="text-quick-contact-description">
                  For urgent requirements, call us directly or visit any of our branches. 
                  We're always ready to help with your service needs.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:+919075824143"
                    className="inline-flex items-center justify-center border border-primary text-primary bg-white hover:bg-primary hover:text-white px-4 py-2 rounded-lg shadow transition-colors duration-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-label="Call Now"
                    style={{ textDecoration: "none" }}
                    data-testid="button-call-main"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/919075824143?text=Hello%2C%20I%20need%20assistance%20from%20Mauli%20Online%20Center."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border border-green-500 text-green-700 bg-white hover:bg-green-500 hover:text-white px-4 py-2 rounded-lg shadow transition-colors duration-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    aria-label="WhatsApp"
                    style={{ textDecoration: "none" }}
                    data-testid="button-whatsapp"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    WhatsApp
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
