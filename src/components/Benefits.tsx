import { Dumbbell, Brain, Smartphone, Salad } from "lucide-react";

const benefits = [
  {
    icon: Dumbbell,
    title: "Treinos sob medida",
    description: "Montados conforme o seu objetivo",
  },
  {
    icon: Brain,
    title: "Acompanhamento real",
    description: "Motivação e suporte de quem entende",
  },
  {
    icon: Smartphone,
    title: "Suporte online",
    description: "Treine em casa, na academia ou onde quiser",
  },
  {
    icon: Salad,
    title: "Rotina saudável",
    description: "Dicas nutricionais e foco no bem-estar",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-16">
          ⚡ Por que <span className="text-primary">começar agora?</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover-lift text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-black mb-3">{benefit.title}</h3>
              <p className="text-foreground/70">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
