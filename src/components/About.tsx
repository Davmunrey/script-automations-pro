import { Button } from "@/components/ui/button";
import { Code, Users, Award, Linkedin } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sobre tu especialista en automatización
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Desarrollador web con experiencia técnico-comercial, especializado en 
                automatización de procesos con Google Workspace
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-card p-6 rounded-xl shadow-card">
                <Code className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Expertise Técnico</h3>
                <p className="text-muted-foreground text-sm">
                  Especialista en Google Apps Script, APIs y automatización de procesos empresariales
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl shadow-card">
                <Users className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Visión Comercial</h3>
                <p className="text-muted-foreground text-sm">
                  Experiencia en ventas IT que me permite entender las necesidades reales del negocio
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl shadow-card">
                <Award className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Resultados Probados</h3>
                <p className="text-muted-foreground text-sm">
                  +50 proyectos de automatización implementados con éxito en diversas industrias
                </p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-elegant">
              <p className="text-lg leading-relaxed mb-6">
                <strong>Mi enfoque es simple:</strong> entender primero tu negocio, después aplicar la tecnología. 
                No creo en soluciones técnicas complejas para problemas simples. Mi experiencia en ventas IT 
                me ha enseñado que la mejor automatización es la que tu equipo realmente usa y adopta.
              </p>
              
              <p className="text-muted-foreground mb-8">
                Trabajo principalmente con pymes, autónomos, despachos y agencias que quieren digitalizar 
                sus procesos sin perder el control ni la flexibilidad que necesitan para crecer.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="group">
                  <Linkedin className="mr-2 h-4 w-4" />
                  Ver perfil LinkedIn
                </Button>
                <Button 
                  variant="default"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Trabajemos juntos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;