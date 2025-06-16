
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "O método funciona para qualquer tipo de clínica odontológica?",
      answer: "Sim! O método DONTO SELECT foi testado em mais de 2.500 clínicas de diferentes especialidades e portes. Funciona para clínicas gerais, especializadas, pequenas e grandes. O importante é ter faturamento atual de pelo menos R$ 30k/mês."
    },
    {
      question: "Quanto tempo leva para ver os primeiros resultados?",
      answer: "A maioria dos nossos alunos começa a ver melhorias significativas nas primeiras 2-4 semanas. Os resultados de triplicar o faturamento geralmente acontecem entre 60-90 dias de aplicação consistente do método."
    },
    {
      question: "Preciso ter conhecimento técnico para aplicar o método?",
      answer: "Não! O método foi desenvolvido para ser simples e prático. Todas as aulas são explicadas de forma didática, com exemplos reais. Você receberá scripts prontos e planilhas que funcionam no 'copiar e colar'."
    },
    {
      question: "A garantia realmente funciona?",
      answer: "Sim, é uma garantia real e sem pegadinhas. Se você aplicar o método conforme ensinado e não triplicar seu faturamento em 90 dias, devolvemos 100% do valor investido. Nossa confiança está baseada em mais de 2.500 casos de sucesso."
    },
    {
      question: "O curso é online ou presencial?",
      answer: "O curso é 100% online, com acesso vitalício à plataforma. Você pode assistir quando e onde quiser. Além disso, temos 4 mentorias ao vivo por mês para tirar dúvidas e acompanhar seu progresso."
    },
    {
      question: "Posso parcelar o pagamento?",
      answer: "Sim! Você pode parcelar em até 12x sem juros no cartão de crédito. Também aceitamos PIX com desconto especial."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-brand-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-white font-mundial mb-4">
            Perguntas
            <span className="text-brand-gold"> Frequentes</span>
          </h2>
          <p className="text-xl text-brand-gray font-akitha max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas sobre o método DONTO SELECT
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-brand-white rounded-2xl overflow-hidden shadow-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left hover:bg-brand-gray/5 transition-colors focus:outline-none"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-brand-darker font-mundial pr-4">
                    {faq.question}
                  </h3>
                  <span className={`text-brand-gold text-2xl transform transition-transform ${openFAQ === index ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <p className="text-brand-gray font-akitha leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-brand-white font-mundial mb-4">
            Ainda tem dúvidas?
          </h3>
          <p className="text-brand-gray font-akitha mb-6">
            Nossa equipe está pronta para te ajudar via WhatsApp
          </p>
          <Button size="lg" className="bg-brand-gold hover:bg-brand-gold/90 text-brand-darker font-bold px-8 py-4 text-lg">
            FALAR COM ESPECIALISTA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
