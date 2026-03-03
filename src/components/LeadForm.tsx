/** Internal credits: Acaus · Augusto */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import fitnessIcon from "@/assets/fitness-icon.png";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    goal: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.goal) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    const message = `Olá! Meu nome é ${formData.name}. Quero começar no MoveUp Fitness. Meu objetivo é: ${formData.goal}.`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Redirecionando para WhatsApp! 🎉",
      description: "Vamos começar sua transformação!",
    });
  };

  return (
    <section id="lead-form" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 flex items-center justify-center gap-4">
            <img src={fitnessIcon} alt="Fitness" className="w-12 h-12 md:w-16 md:h-16" />
            Comece agora seu <span className="text-primary">novo estilo de vida</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80">
            Preencha abaixo e receba um plano de treino gratuito de avaliação.
            <br />
            É o primeiro passo pra sair do zero e começar sua transformação!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-card border border-border rounded-2xl p-4 md:p-8 shadow-2xl"
        >
          <div className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-base font-semibold">
                Nome Completo
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Digite seu nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-2 h-12 text-base"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-base font-semibold">
                WhatsApp
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(11) 99999-9999"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-2 h-12 text-base"
              />
            </div>

            <div>
              <Label htmlFor="goal" className="text-base font-semibold">
                Qual seu objetivo?
              </Label>
              <select
                id="goal"
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                className="w-full mt-2 h-12 px-4 rounded-md border border-input bg-background text-foreground text-base"
              >
                <option value="">Selecione...</option>
                <option value="emagrecer">Emagrecer</option>
                <option value="ganhar massa">Ganhar massa</option>
                <option value="performance">Melhorar performance</option>
              </select>
            </div>

            <div className="w-full flex justify-center">
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-full h-auto min-h-[56px] py-4 px-4 md:py-5 md:px-8 rounded-xl whitespace-normal break-words text-center flex items-center justify-center text-[14px] md:text-lg font-bold leading-tight shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] normal-case tracking-normal"
              >
                🔥 Quero meu plano gratuito agora!
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;
