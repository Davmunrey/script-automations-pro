import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import UseCases from "@/components/UseCases";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <UseCases />
      <Pricing />
      <Contact />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
