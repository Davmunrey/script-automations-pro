import { Clock, Shield, TrendingUp, Zap } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Ahorra tiempo valioso",
      description: "Automatiza tareas repetitivas que consumen horas de tu día. Libera tiempo para actividades estratégicas."
    },
    {
      icon: Shield,
      title: "Reduce errores humanos",
      description: "Elimina errores de transcripción y cálculo con procesos automáticos precisos y consistentes."
    },
    {
      icon: TrendingUp,
      title: "Mejora la productividad",
      description: "Optimiza flujos de trabajo y aumenta la eficiencia operativa de tu equipo."
    },
    {
      icon: Zap,
      title: "Integración nativa",
      description: "Conecta todas tus herramientas de Google Workspace de forma seamless y segura."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Por qué automatizar con Google Apps Script?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforma tu manera de trabajar con soluciones que se adaptan perfectamente 
            a tu ecosistema Google Workspace
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-bounce-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;