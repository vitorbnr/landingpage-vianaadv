import { CheckCircle } from "lucide-react";
import aboutImg from "@/assets/about-desk.jpg";

const checks = [
  "Atendimento humanizado e transparente",
  "Atuação combativa nos tribunais e delegacias",
  "Acompanhamento contínuo do seu processo",
];

const AboutSection = () => (
  <section id="sobre" className="bg-card">
    <div className="container mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest">Sobre o Escritório</p>
        <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground leading-tight">
          Compromisso com a defesa dos seus direitos
        </h2>
        <p className="font-body text-muted-foreground leading-relaxed">
          Fundado e liderado pelo <strong className="text-foreground">Dr. Bel. Wallysson Viana Silva</strong>, o escritório Viana Advocacia é referência em advocacia estratégica na Bahia. Com atuação firme e ética, oferecemos soluções jurídicas eficazes para pessoas físicas e jurídicas.
        </p>
        <ul className="space-y-3">
          {checks.map((c) => (
            <li key={c} className="flex items-center gap-3 font-body text-foreground">
              <CheckCircle size={20} className="text-primary shrink-0" />
              {c}
            </li>
          ))}
        </ul>
      </div>
      <div className="relative">
        <img
          src={aboutImg}
          alt="Mesa de advogado com documentos"
          width={640}
          height={512}
          loading="lazy"
          className="rounded-lg w-full h-auto object-cover"
        />
        <div className="absolute bottom-4 left-4 right-4 bg-primary text-primary-foreground p-4 rounded-lg font-body text-sm font-medium">
          "Buscamos resolver os problemas de forma ágil e segura."
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
