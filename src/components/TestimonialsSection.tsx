
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Carlos Silva",
      location: "São Paulo - SP",
      revenue: "De R$ 35k para R$ 120k/mês",
      photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
      text: "Em 6 meses consegui triplicar o faturamento da minha clínica. Os scripts são realmente eficazes e a metodologia é muito clara."
    },
    {
      name: "Dra. Maria Santos",
      location: "Rio de Janeiro - RJ",
      revenue: "De R$ 42k para R$ 140k/mês",
      photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      text: "O que mais me impressionou foi a rapidez dos resultados. Em 90 dias já estava vendo uma transformação real na minha gestão."
    },
    {
      name: "Dr. Roberto Lima",
      location: "Belo Horizonte - MG",
      revenue: "De R$ 30k para R$ 95k/mês",
      photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
      text: "Nunca pensei que seria possível ter tanto controle sobre os agendamentos. Hoje minha agenda está sempre lotada com pacientes qualificados."
    }
  ];

  return (
    <section className="py-20 bg-brand-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-white font-mundial mb-4">
            Histórias Reais de
            <span className="text-brand-gold block">Transformação</span>
          </h2>
          <p className="text-xl text-brand-gray font-akitha max-w-3xl mx-auto">
            Veja como dentistas como você estão transformando suas clínicas e multiplicando seus resultados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-brand-white p-8 rounded-2xl shadow-xl animate-fade-in hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.photo} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-brand-darker font-mundial">{testimonial.name}</h4>
                  <p className="text-brand-gray text-sm font-akitha">{testimonial.location}</p>
                  <p className="text-brand-gold font-semibold text-sm">{testimonial.revenue}</p>
                </div>
              </div>
              
              <p className="text-brand-gray font-akitha leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-brand-gold text-lg">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-brand-gold hover:bg-brand-gold/90 text-brand-darker font-bold px-8 py-4 text-lg">
            QUERO SER O PRÓXIMO CASO DE SUCESSO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
