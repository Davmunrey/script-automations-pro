import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Pack Básico",
      price: "299€",
      description: "Ideal para automatizar procesos simples",
      features: [
        "1 automatización específica",
        "Configuración inicial incluida",
        "Documentación completa",
        "1 mes de soporte técnico",
        "Entrega en 3-5 días"
      ],
      cta: "Empezar ahora",
      popular: false
    },
    {
      name: "Pack Avanzado",
      price: "699€",
      description: "Para empresas que buscan eficiencia máxima",
      features: [
        "3 automatizaciones integradas",
        "Dashboard de seguimiento",
        "Configuración personalizada",
        "3 meses de soporte",
        "Formación del equipo incluida",
        "Entrega en 7-10 días"
      ],
      cta: "Más popular",
      popular: true
    },
    {
      name: "Desarrollo a Medida",
      price: "Desde 1200€",
      description: "Solución completamente personalizada",
      features: [
        "Análisis de necesidades",
        "Desarrollo personalizado",
        "Integraciones complejas",
        "6 meses de soporte premium",
        "Mantenimiento incluido",
        "Entrega según alcance"
      ],
      cta: "Solicitar consulta",
      popular: false
    }
  ];

  const handlePurchase = (planName: string, price: string) => {
    // Aquí iría la integración con Stripe
    alert(`Funcionalidad de pago para ${planName} (${price}) - Integración con Stripe pendiente`);
  };

  return (
    <section id="plans" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Elige tu plan de automatización
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones flexibles que se adaptan a tu negocio y presupuesto
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 relative ${
                plan.popular ? 'ring-2 ring-primary scale-105' : 'hover:-translate-y-2'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Más popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-primary mb-3">{plan.price}</div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "premium" : "default"}
                className="w-full"
                size="lg"
                onClick={() => handlePurchase(plan.name, plan.price)}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 p-6 bg-card rounded-2xl shadow-card max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-3">🎯 Garantía de satisfacción</h3>
          <p className="text-muted-foreground">
            Si no estás 100% satisfecho con tu automatización, tienes 30 días para solicitar 
            modificaciones sin coste adicional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;