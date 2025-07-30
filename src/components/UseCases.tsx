import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import emailImage from "@/assets/email-automation.jpg";
import invoiceImage from "@/assets/invoice-automation.jpg";
import dashboardImage from "@/assets/dashboard-automation.jpg";

const UseCases = () => {
  const cases = [
    {
      title: "Email Marketing Automático",
      description: "Envía emails personalizados masivos desde Google Sheets con validaciones, seguimiento y reporting automático.",
      image: emailImage,
      features: ["Personalización dinámica", "Validación de emails", "Seguimiento de aperturas", "Informes automáticos"],
      price: "Desde 299€"
    },
    {
      title: "Facturación Automatizada",
      description: "Genera facturas profesionales en PDF y envíalas automáticamente con recordatorios de pago.",
      image: invoiceImage,
      features: ["Generación PDF automática", "Envío programado", "Recordatorios de pago", "Control de estado"],
      price: "Desde 399€"
    },
    {
      title: "Dashboards Inteligentes",
      description: "Crea paneles de control que se actualizan automáticamente con datos de múltiples fuentes.",
      image: dashboardImage,
      features: ["Conexión multi-fuente", "Actualización automática", "Alertas personalizadas", "Informes programados"],
      price: "Desde 499€"
    }
  ];

  return (
    <section id="cases" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Casos de éxito reales
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo estas automatizaciones han transformado la operativa 
            de empresas como la tuya
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((useCase, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white font-semibold">
                  {useCase.price}
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
                
                <ul className="space-y-2">
                  {useCase.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full group"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Solicitar presupuesto
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            ¿Necesitas algo específico? También desarrollo soluciones completamente personalizadas.
          </p>
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Cuéntame tu proyecto
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UseCases;