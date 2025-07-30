import { Mail, Linkedin, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold">AutomationPro</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Especialista en automatización de procesos con Google Apps Script. 
              Transformo tareas repetitivas en soluciones inteligentes.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Automatización de emails</li>
              <li>Facturación automática</li>
              <li>Dashboards inteligentes</li>
              <li>Integración de APIs</li>
              <li>Desarrollo personalizado</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">Sobre mí</a></li>
              <li><a href="#cases" className="hover:text-primary transition-colors">Casos de éxito</a></li>
              <li><a href="#plans" className="hover:text-primary transition-colors">Planes</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">automation@tudominio.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Linkedin className="w-4 h-4 text-primary" />
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 AutomationPro. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;