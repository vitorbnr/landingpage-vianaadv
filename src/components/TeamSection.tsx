import lawyer1 from "@/assets/lawyer-1.jpg";
import lawyer2 from "@/assets/lawyer-2.jpg";
import lawyer3 from "@/assets/lawyer-3.jpg";
import lawyer4 from "@/assets/lawyer-4.jpg";
import lawyer5 from "@/assets/lawyer-5.jpg";
import lawyer6 from "@/assets/lawyer-6.jpg";
import lawyer7 from "@/assets/lawyer-7.jpg";

const team = [
  {
    name: "Wallysson Viana Silva",
    role: "Advogado Sócio-Fundador",
    oab: "OAB/BA 23.825",
    desc: "Pós-graduado em Direito Processual Civil e Direito Público.",
    img: lawyer1,
  },
  { name: "Dr. Fulano de Tal", role: "Advogado", oab: "OAB/BA 00.000", desc: "Especialista em Direito.", img: lawyer2 },
  { name: "Dra. Fulana de Tal", role: "Advogada", oab: "OAB/BA 00.000", desc: "Especialista em Direito Previdenciário.", img: lawyer3 },
  { name: "Dr. Fulano de Tal", role: "Advogado", oab: "OAB/BA 00.000", desc: "Atuação em Direito Trabalhista.", img: lawyer4 },
  { name: "Dra. Fulana de Tal", role: "Advogada", oab: "OAB/BA 00.000", desc: "Atuação em Direito Civil e Imobiliário.", img: lawyer5 },
  { name: "Dr. Fulano de Tal", role: "Advogado", oab: "OAB/BA 00.000", desc: "Especialista em Direito Criminal.", img: lawyer6 },
  { name: "Dra. Fulana de Tal", role: "Advogada", oab: "OAB/BA 00.000", desc: "Atuação em Direito Eleitoral e Público.", img: lawyer7 },
];

const TeamSection = () => (
  <section id="equipe" className="bg-background">
    <div className="container mx-auto px-6 py-16 lg:py-24">
      <div className="text-center mb-12 space-y-3">
        <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest">Nossa Equipe</p>
        <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">Conheça nossos profissionais</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {team.map((t) => (
          <div key={t.oab} className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden text-center">
            <img src={t.img} alt={t.name} loading="lazy" width={512} height={640} className="w-full h-64 object-cover object-top" />
            <div className="p-5 space-y-1">
              <h3 className="font-heading text-lg font-bold text-card-foreground">{t.name}</h3>
              <p className="font-body text-primary text-sm font-semibold">{t.role}</p>
              <p className="font-body text-muted-foreground text-xs">{t.oab}</p>
              <p className="font-body text-muted-foreground text-sm pt-2">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
