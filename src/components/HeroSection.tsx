
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !phone) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }
    toast.success('Formulário enviado com sucesso! Entraremos em contato em breve.');
    setEmail('');
    setPhone('');
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-brand-darker via-brand-dark to-brand-darker relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C2B067' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Content */}
          <div className="text-brand-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block bg-brand-gold/20 text-brand-gold px-4 py-2 rounded-full text-sm font-medium">
                ✨ Mais de 2.500 clínicas transformadas
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight font-mundial">
                Triplique o Faturamento da Sua
                <span className="text-brand-gold block">Clínica Odontológica</span>
              </h1>
              
              <p className="text-xl text-brand-gray font-akitha leading-relaxed">
                Método comprovado que já ajudou mais de <strong className="text-brand-gold">7.500 dentistas</strong> a 
                transformar seus resultados com scripts de agendamento e gestão que realmente funcionam.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                <span className="text-brand-gray">Scripts testados em mais de 2.500 clínicas</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                <span className="text-brand-gray">Garantia: Triplicou ou reembolsamos 100%</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                <span className="text-brand-gray">Resultados em até 90 dias</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-gold hover:bg-brand-gold/90 text-brand-darker font-semibold px-8 py-4 text-lg">
                QUERO TRIPLICAR MEU FATURAMENTO
              </Button>
              <Button variant="outline" size="lg" className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-darker px-8 py-4 text-lg">
                Ver Depoimentos
              </Button>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-brand-white p-8 rounded-2xl shadow-2xl animate-fade-in">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-brand-darker font-mundial mb-2">
                Receba o Diagnóstico GRATUITO
              </h3>
              <p className="text-brand-gray font-akitha">
                Descubra o potencial real da sua clínica em apenas 5 minutos
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 text-lg border-brand-gray/30 focus:border-brand-gold"
                  required
                />
              </div>
              
              <div>
                <Input
                  type="tel"
                  placeholder="Seu WhatsApp (com DDD)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-12 text-lg border-brand-gray/30 focus:border-brand-gold"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 bg-brand-gold hover:bg-brand-gold/90 text-brand-darker font-bold text-lg"
              >
                QUERO MEU DIAGNÓSTICO GRATUITO
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-brand-gray/20">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-brand-gold">2.500+</div>
                  <div className="text-sm text-brand-gray">Clínicas</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-brand-gold">7.500+</div>
                  <div className="text-sm text-brand-gray">Dentistas</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-brand-gold">3x</div>
                  <div className="text-sm text-brand-gray">Faturamento</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
