/** Internal credits: Acaus · Augusto */
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToForm = () => {
    const form = document.getElementById("lead-form");
    form?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-black tracking-tight">
          MoveUp <span className="text-primary">Fitness</span>
        </h1>
        <Button variant="cta" size="default" onClick={scrollToForm}>
          Começar Agora
        </Button>
      </div>
    </header>
  );
};

export default Header;
