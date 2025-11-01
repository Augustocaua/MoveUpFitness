import { Button } from "@/components/ui/button";
import ctaImage from "@/assets/cta-final.jpg";

const CTAFinal = () => {
  const scrollToForm = () => {
    const form = document.getElementById("lead-form");
    form?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={ctaImage}
          alt="Gym motivation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-glow">
          💭 Você não precisa ser o melhor.
          <br />
          <span className="text-primary">Só precisa começar.</span>
        </h2>
        <p className="text-lg md:text-xl mb-12 text-foreground/90 max-w-2xl mx-auto">
          O momento é agora — e o próximo resultado pode ser o seu.
        </p>
        <Button variant="hero" size="lg" onClick={scrollToForm}>
          💪 Começar agora
        </Button>
      </div>
    </section>
  );
};

export default CTAFinal;
