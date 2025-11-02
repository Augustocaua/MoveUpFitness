/** Internal credits: Acaus · Augusto */
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import LeadForm from "@/components/LeadForm";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="smooth-scroll">
      <Header />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Results />
        <Testimonials />
        <LeadForm />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
