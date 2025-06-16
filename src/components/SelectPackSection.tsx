
import { Button } from "@/components/ui/button";

const SelectPackSection = () => {
  const packageFeatures = [
    "✅ Curso Completo DONTO SELECT (Mais de 40 aulas)",
    "✅ Scripts de Agendamento Testados",
    "✅ Planilhas de Gestão Exclusivas",
    "✅ Grupo VIP no WhatsApp",
    "✅ 4 Mentorias Ao Vivo por Mês",
    "✅ Suporte Técnico Especializado",
    "✅ Acesso à Plataforma por 12 Meses",
    "✅ Certificado de Conclusão",
    "✅ Bônus: Kit de Materiais Extras",
    "✅ Garantia de 90 Dias"
  ];

  const partners = [
    "Parceiro Oficial CRO",
    "Certificado ISO 9001",
    "Metodologia Aprovada",
    "Suporte 24/7"
  ];

  return (
    <section className="py-20 bg-brand-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-white font-mundial mb-4">
            Pacote
            <span className="text-brand-gold"> SELECT</span>
          </h2>
          <p className="text-xl text-brand-gray font-akitha max-w-3xl mx-auto">
            Tudo que você precisa para transformar sua clínica em uma máquina de faturamento
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-brand-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Package Content */}
              <div>
                <h3 className="text-3xl font-bold text-brand-darker font-mundial mb-6">
                  O que você vai receber:
                </h3>
                
                <div className="space-y-3 mb-8">
                  {packageFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="text-brand-gold text-lg">✅</span>
                      <span className="text-brand-gray font-akitha">{feature.replace('✅ ', '')}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-brand-gold/10 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold text-brand-darker font-mundial mb-2">
                    🎁 BÔNUS EXCLUSIVOS
                  </h4>
                  <p className="text-brand-gray font-akitha">
                    + R$ 2.500 em materiais extras, templates e ferramentas exclusivas
                  </p>
                </div>
              </div>

              {/* Pricing */}
              <div className="text-center">
                <div className="bg-brand-gold/5 p-8 rounded-2xl mb-6">
                  <div className="text-brand-gray line-through text-2xl mb-2">De R$ 2.997</div>
                  <div className="text-5xl font-bold text-brand-gold font-mundial mb-2">R$ 997</div>
                  <div className="text-brand-gray font-akitha">ou 12x de R$ 97 sem juros</div>
                </div>

                <Button size="lg" className="w-full bg-brand-gold hover:bg-brand-gold/90 text-brand-darker font-bold py-6 text-xl mb-6">
                  QUERO O PACOTE SELECT AGORA
                </Button>

                <div className="space-y-2 text-sm text-brand-gray font-akitha">
                  <p>🔒 Compra 100% Segura</p>
                  <p>⚡ Acesso Imediato</p>
                  <p>💳 Parcelamento sem juros</p>
                  <p>🛡️ Garantia de 90 dias</p>
                </div>
              </div>
            </div>

            {/* Partners */}
            <div className="mt-12 pt-8 border-t border-brand-gray/20">
              <h4 className="text-center text-brand-darker font-bold font-mundial mb-4">
                Parceiros e Certificações:
              </h4>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                {partners.map((partner, index) => (
                  <div key={index} className="text-sm text-brand-gray font-akitha">
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectPackSection;
