import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    processType: '',
    tools: '',
    urgency: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log('Form submitted:', formData);
    alert('¡Formulario enviado! Te contactaré en las próximas 24 horas.');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Listo para automatizar tu negocio?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Cuéntame qué procesos quieres automatizar y te enviaré una propuesta 
                personalizada en menos de 24 horas.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Email directo</div>
                  <div className="text-muted-foreground">automation@tudominio.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Consultoria telefónica</div>
                  <div className="text-muted-foreground">+34 600 000 000</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Tiempo de respuesta</div>
                  <div className="text-muted-foreground">Menos de 24 horas</div>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-card">
              <h3 className="font-semibold mb-3">🚀 Proceso rápido y transparente</h3>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li>1. Analizamos tu proceso actual</li>
                <li>2. Diseñamos la automatización</li>
                <li>3. Desarrollamos y testemos</li>
                <li>4. Implementamos y formamos a tu equipo</li>
              </ol>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-card p-8 rounded-2xl shadow-elegant">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre *</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Empresa</Label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="processType">Tipo de proceso a automatizar *</Label>
                <Select onValueChange={(value) => handleInputChange('processType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el tipo de proceso" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">Email marketing / Comunicaciones</SelectItem>
                    <SelectItem value="billing">Facturación / Contabilidad</SelectItem>
                    <SelectItem value="reporting">Reporting / Dashboards</SelectItem>
                    <SelectItem value="data">Gestión de datos</SelectItem>
                    <SelectItem value="workflow">Flujos de trabajo</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tools">Herramientas que usas actualmente</Label>
                <Input
                  id="tools"
                  type="text"
                  value={formData.tools}
                  onChange={(e) => handleInputChange('tools', e.target.value)}
                  placeholder="Google Sheets, Gmail, CRM, etc."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="urgency">Urgencia del proyecto</Label>
                <Select onValueChange={(value) => handleInputChange('urgency', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="¿Cuándo lo necesitas?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urgent">Urgente (esta semana)</SelectItem>
                    <SelectItem value="soon">Pronto (este mes)</SelectItem>
                    <SelectItem value="planned">Planificado (próximos 3 meses)</SelectItem>
                    <SelectItem value="exploring">Solo explorando opciones</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Describe tu proceso actual *</Label>
                <Textarea
                  id="description"
                  required
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Explica qué tareas repetitivas haces manualmente y cómo te gustaría automatizarlas..."
                  rows={4}
                />
              </div>

              <Button type="submit" variant="cta" size="lg" className="w-full">
                Enviar solicitud
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Al enviar este formulario aceptas que te contacte para ofrecerte una propuesta personalizada.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;