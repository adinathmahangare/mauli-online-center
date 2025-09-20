import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Branches from "@/components/Branches";
import CustomerReviews from "@/components/CustomerReviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Branches />
        <CustomerReviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}