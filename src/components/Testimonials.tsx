import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Voltei a treinar com prazer! Em 3 meses, ganhei confiança e disposição.",
    name: "Julia, 22 anos",
  },
  {
    text: "Achei que nunca ia conseguir manter a rotina. Com o acompanhamento certo, tudo mudou!",
    name: "Lucas, 25 anos",
  },
  {
    text: "Melhorei minha autoestima e hoje o treino é parte da minha vida.",
    name: "Marina, 28 anos",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-16">
          🔥 Histórias reais de <span className="text-primary">superação</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover-lift relative"
            >
              <Quote className="w-12 h-12 text-primary/20 absolute top-4 right-4" />
              <p className="text-lg text-foreground/80 mb-6 relative z-10">
                "{testimonial.text}"
              </p>
              <p className="text-sm font-bold text-primary">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
