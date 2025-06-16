
const StatsSection = () => {
  const stats = [
    { number: "2.500+", label: "Clínicas Transformadas", color: "text-brand-gold" },
    { number: "7.500+", label: "Dentistas Capacitados", color: "text-brand-gold" },
    { number: "300%", label: "Aumento Médio no Faturamento", color: "text-brand-gold" },
    { number: "90", label: "Dias para Ver Resultados", color: "text-brand-gold" }
  ];

  return (
    <section className="py-16 bg-brand-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in">
              <div className={`text-4xl lg:text-5xl font-bold ${stat.color} font-mundial mb-2`}>
                {stat.number}
              </div>
              <div className="text-brand-gray font-akitha text-sm lg:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
