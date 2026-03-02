/** Internal credits: Acaus · Augusto */

const Hero = () => {
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
      </div>
    </section>
  );
};

export default Hero;
