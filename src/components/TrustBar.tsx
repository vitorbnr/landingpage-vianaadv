const stats = [
  { value: "Mais de 18 anos de atuação"},
  { value: "2 Unidades", label: "(Cocos e Carinhanha)" },
  { value: "Especialistas em causas complexas" },
];

const TrustBar = () => (
  <section className="bg-card border-y border-highlight">
    <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-center">
      {stats.map((s) => (
        <div key={s.label} className="space-y-1">
          <p className="font-heading text-3xl font-bold text-primary">{s.value}</p>
          <p className="font-body text-muted-foreground text-sm">{s.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default TrustBar;
