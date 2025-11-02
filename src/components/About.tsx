/** Internal credits: Acaus · Augusto */
import aboutImage from "@/assets/about-section.jpg";

const About = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              🔥 Mais que treino.
              <br />É <span className="text-primary">transformação.</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              Aqui, o foco não é só o corpo — é a mente, a atitude e a constância.
              Cada treino é pensado pra você evoluir de verdade, com acompanhamento
              próximo e motivação de sobra.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mt-4">
              Nada de métodos genéricos. Aqui o treino é do seu jeito, no seu ritmo
              e com resultado real.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={aboutImage}
              alt="Personal trainer coaching"
              className="rounded-2xl shadow-2xl hover-lift"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
