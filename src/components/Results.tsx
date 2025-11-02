/** Internal credits: Acaus · Augusto */
import transformationsImage from "@/assets/transformations.jpg";

const Results = () => {
  return (
    <section id="results" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            💪 Resultados que <span className="text-primary">inspiram</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Cada resultado aqui começou com uma decisão: mudar.
            <br />
            Agora é a sua vez de fazer parte dessa evolução.
            <br />
            Veja como o treino certo pode transformar tudo.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <img
            src={transformationsImage}
            alt="Fitness transformation results"
            className="rounded-2xl shadow-2xl hover-lift"
          />
          <div className="grid sm:grid-cols-3 gap-6 mt-8 text-center">
            <div className="bg-card border border-border rounded-xl p-6">
              <p className="text-foreground/70 text-sm mb-2">3 meses de foco e constância</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <p className="text-foreground/70 text-sm mb-2">De sedentário a disciplinado</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <p className="text-primary font-bold text-sm mb-2">O próximo resultado pode ser o seu!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
