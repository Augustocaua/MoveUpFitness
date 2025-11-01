import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-fitness.jpg";

const Hero = () => {
  const scrollToForm = () => {
    const form = document.getElementById("lead-form");
    form?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToResults = () => {
    const results = document.getElementById("results");
    results?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Intense fitness training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-glow animate-fade-in">
          O seu corpo é o seu projeto.
          <br />
          <span className="text-primary">Comece hoje!</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto text-foreground/90 animate-fade-in">
          Treinos personalizados, energia total e resultados reais.
          <br />
          Transforme sua rotina e descubra o melhor de você.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button variant="hero" size="lg" onClick={scrollToForm}>
            👉 Quero meu treino personalizado
          </Button>
          <Button variant="outline" size="lg" onClick={scrollToResults}>
            💪 Ver resultados
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
