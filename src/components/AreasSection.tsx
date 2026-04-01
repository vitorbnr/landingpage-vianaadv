import { Clock, Users, Building, Briefcase, ShieldAlert, Scale, ArrowRight } from "lucide-react";

const areas = [
  { icon: Clock, title: "Direito Previdenciário", desc: "Aposentadoria, auxílio-doença, pensões e benefícios do INSS." },
  { icon: Users, title: "Direito de Família e Sucessões", desc: "Divórcio, guarda, pensão alimentícia, inventário e partilha." },
  { icon: Building, title: "Direito Civil e Imobiliário", desc: "Contratos, usucapião, ações possessórias e indenizações." },
  { icon: Briefcase, title: "Direito Trabalhista", desc: "Rescisões, horas extras, assédio e reclamações trabalhistas." },
  { icon: ShieldAlert, title: "Direito Criminal", desc: "Defesa criminal, audiências de custódia e inquéritos policiais." },
  { icon: Scale, title: "Direito Eleitoral e Público", desc: "Campanhas eleitorais, impugnações e direito administrativo." },
];

const AreasSection = () => (
  <section id="areas" className="bg-card">
    <div className="container mx-auto px-6 py-16 lg:py-24">
      <div className="text-center mb-12 space-y-3">
        <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest">Áreas de Atuação</p>
        <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">Atuamos nas principais áreas do Direito</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {areas.map((a) => (
          <div key={a.title} className="bg-background border border-highlight rounded-lg p-6 space-y-4">
            <a.icon size={32} className="text-primary" />
            <h3 className="font-heading text-xl font-bold text-foreground">{a.title}</h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
            <a
              href="https://wa.me/5577999657852"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-body text-sm font-semibold hover:underline"
            >
              Consultar Caso <ArrowRight size={14} />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AreasSection;
