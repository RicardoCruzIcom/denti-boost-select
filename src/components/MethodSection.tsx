
const MethodSection = () => {
  const features = [
    {
      icon: "📞",
      title: "Scripts de Agendamento",
      description: "Scripts testados e aprovados que convertem 85% mais ligações em agendamentos confirmados."
    },
    {
      icon: "📊",
      title: "Sistema de Gestão",
      description: "Planilhas e ferramentas exclusivas para controlar e otimizar todos os processos da sua clínica."
    },
    {
      icon: "🎯",
      title: "Estratégias de Captação",
      description: "Métodos comprovados para atrair pacientes qualificados e aumentar o ticket médio."
    },
    {
      icon: "💰",
      title: "Precificação Estratégica",
      description: "Aprenda a precificar seus tratamentos de forma justa e lucrativa, sem perder pacientes."
    },
    {
      icon: "📈",
      title: "Análise de Resultados",
      description: "KPIs essenciais e como acompanhar o crescimento real da sua clínica mês a mês."
    },
    {
      icon: "🤝",
      title: "Relacionamento com Pacientes",
      description: "Técnicas para fidelizar pacientes e transformá-los em promotores da sua clínica."
    }
  ];

  return (
    <section className="py-20 bg-brand-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-darker font-mundial mb-4">
            O Método
            <span className="text-brand-gold"> DONTO SELECT</span>
          </h2>
          <p className="text-xl text-brand-gray font-akitha max-w-3xl mx-auto">
            Um sistema completo e testado para transformar sua clínica em uma máquina de resultados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-2xl border border-brand-gray/20 hover:border-brand-gold/50 transition-all duration-300 animate-fade-in">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-brand-darker font-mundial mb-3">
                {feature.title}
              </h3>
              <p className="text-brand-gray font-akitha leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-brand-gold/10 to-brand-gold/5 p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-brand-darker font-mundial mb-4">
            Garantia de 90 Dias
          </h3>
          <p className="text-brand-gray font-akitha text-lg mb-6">
            Se você não triplicar seu faturamento em até 90 dias, devolvemos 100% do seu investimento.
          </p>
          <Button size="lg" className="bg-brand-gold hover:bg-brand-gold/90 text-brand-darker font-bold px-8 py-4 text-lg">
            QUERO MINHA GARANTIA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
