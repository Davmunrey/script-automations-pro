import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-automation.jpg";

const Hero = () => {
  const scrollToPlans = () => {
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-background/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Automatiza tu negocio
                </span>
                <br />
                con Google Apps Script
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Transforma tareas repetitivas en procesos automáticos. 
                Ahorra tiempo, reduce errores y mejora la eficiencia de tu empresa.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={scrollToPlans}
                className="group"
              >
                Ver soluciones
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2 h-4 w-4" />
                Consultoria gratis
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Tiempo ahorrado</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24h</div>
                <div className="text-sm text-muted-foreground">Entrega rápida</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <img
                src={heroImage}
                alt="Automatización con Google Apps Script"
                className="w-full h-auto rounded-2xl shadow-elegant animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;