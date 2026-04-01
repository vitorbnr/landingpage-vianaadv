import { Award, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-justice.jpg";

const HeroSection = () => (
  <section className="bg-background relative overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#839e541a_1px,transparent_1px),linear-gradient(to_bottom,#839e541a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
    <div className="container relative mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6 animate-fade-in">
        <span className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-sm font-body font-semibold px-4 py-2 rounded-full">
          <Award size={16} />
          Anos de Experiência
        </span>
        <h1 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground leading-tight">
          Excelência e tradição na defesa do seu direito.
        </h1>
        <p className="text-foreground opacity-80 font-body text-lg max-w-xl leading-relaxed">
          Atuação combativa e estratégica para proteger seu patrimônio, sua família e sua liberdade. Sólida presença em Carinhanha e Cocos.
        </p>
        <Button asChild size="lg" className="text-base px-8 py-6">
          <a href="https://wa.me/5577999657852" target="_blank" rel="noopener noreferrer" className="gap-2">
            <MessageCircle size={20} />
            Falar com um Advogado
          </a>
        </Button>
      </div>
      <div className="relative">
        <img
          src={heroImg}
          alt="Balança da justiça em fórum"
          width={960}
          height={720}
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
