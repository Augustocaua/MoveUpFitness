/** Internal credits: Acaus · Augusto */
import { Button } from "@/components/ui/button";

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
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/video treino.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>

      {/* Dark Overlay */}
      <div 
        className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      />

      {/* Content */}
      <div className="relative z-[2] container mx-auto px-4 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white animate-fade-in drop-shadow-lg">
          O seu corpo é o seu projeto.
          <br />
          <span className="text-primary">Comece hoje!</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto text-gray-200 animate-fade-in drop-shadow-md">
          Treinos personalizados, energia total e resultados reais.
          <br />
          Transforme sua rotina e descubra o melhor de você.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 h-auto w-full sm:w-auto animate-pulse-slow shadow-[0_0_20px_rgba(255,107,0,0.5)] hover:shadow-[0_0_30px_rgba(255,107,0,0.8)] transition-all duration-300"
            onClick={scrollToForm}
          >
            👉 Quero meu treino personalizado
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto w-full sm:w-auto backdrop-blur-sm"
            onClick={scrollToResults}
          >
            💪 Ver resultados
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
