
import { Button } from "@/components/ui/button";

const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-brand-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-brand-gold/10 to-brand-gold/5 p-12 rounded-3xl border-2 border-brand-gold/20">
            <div className="text-6xl mb-6">🛡️</div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-darker font-mundial mb-6">
              Garantia
              <span className="text-brand-gold block">Triplicou ou Reembolsamos</span>
            </h2>
            
            <p className="text-xl text-brand-gray font-akitha leading-relaxed mb-8">
              Estamos tão confiantes nos resultados do método DONTO SELECT que oferecemos uma garantia única: 
              <strong className="text-brand-darker"> se você não triplicar seu faturamento em até 90 dias, 
              devolvemos 100% do seu investimento</strong>.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="font-bold text-brand-darker font-mundial mb-2">Resultados Garantidos</h3>
                <p className="text-brand-gray font-akitha text-sm">3x o faturamento ou seu dinheiro de volta</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⏱️</span>
                </div>
                <h3 className="font-bold text-brand-darker font-mundial mb-2">90 Dias</h3>
                <p className="text-brand-gray font-akitha text-sm">Prazo para ver os resultados</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="font-bold text-brand-darker font-mundial mb-2">100% Reembolso</h3>
                <p className="text-brand-gray font-akitha text-sm">Devolução total sem complicações</p>
              </div>
            </div>

            <div className="bg-brand-white p-6 rounded-2xl mb-8">
              <p className="text-brand-gray font-akitha italic">
                "Nossa garantia é baseada em mais de 2.500 casos de sucesso. Sabemos que o método funciona, 
                por isso assumimos todo o risco para você."
              </p>
              <p className="text-brand-darker font-semibold mt-2">- Equipe DONTO SELECT</p>
            </div>

            <Button size="lg" className="bg-brand-gold hover:bg-brand-gold/90 text-brand-darker font-bold px-12 py-6 text-xl">
              QUERO MINHA GARANTIA AGORA
            </Button>

            <p className="text-sm text-brand-gray font-akitha mt-4">
              * Válido para clínicas com faturamento atual igual ou superior a R$ 30.000/mês
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
