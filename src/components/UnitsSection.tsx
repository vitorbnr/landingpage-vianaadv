import { useState } from "react";
import { MapPin, Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const units = [
  {
    id: "carinhanha",
    label: "Carinhanha",
    address: "R. do Livramento, 69 - Centro, Carinhanha - BA, 46445-000",
    phone: "(77) 3485-2489",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.0!2d-43.764!3d-14.303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDE4JzEwLjgiUyA0M8KwNDUnNTAuNCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000",
    gps: "https://maps.google.com/?q=R.+do+Livramento,+69+-+Centro,+Carinhanha+-+BA",
  },
  {
    id: "cocos",
    label: "Cocos",
    address: "R. Moisés Alves de Moura, 33 - Centro, Cocos - BA, 47680-000",
    phone: "(77) 3489-1592",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.0!2d-44.535!3d-14.182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDEwJzU1LjIiUyA0NMKwMzInMDYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000001",
    gps: "https://maps.google.com/?q=R.+Mois%C3%A9s+Alves+de+Moura,+33+-+Centro,+Cocos+-+BA",
  },
];

const UnitsSection = () => {
  const [active, setActive] = useState(0);
  const unit = units[active];

  return (
    <section id="unidades" className="bg-background">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="text-center mb-12 space-y-3">
          <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest">Nossas Unidades</p>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">Encontre-nos</h2>
        </div>

        <div className="flex justify-center gap-2 mb-8">
          {units.map((u, i) => (
            <button
              key={u.id}
              onClick={() => setActive(i)}
              className={`px-6 py-3 rounded-lg font-body text-sm font-semibold transition-colors ${
                active === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              {u.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-card border border-highlight rounded-lg p-8 space-y-4">
            <h3 className="font-heading text-xl font-bold text-foreground">{unit.label}</h3>
            <p className="flex items-start gap-3 font-body text-muted-foreground text-sm">
              <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
              {unit.address}
            </p>
            <p className="flex items-center gap-3 font-body text-muted-foreground text-sm">
              <Phone size={18} className="text-primary shrink-0" />
              {unit.phone}
            </p>
            <Button asChild variant="outline" className="mt-4">
              <a href={unit.gps} target="_blank" rel="noopener noreferrer" className="gap-2">
                <Navigation size={16} />
                Abrir no GPS
              </a>
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden border border-highlight h-80">
            <iframe
              title={`Mapa ${unit.label}`}
              src={unit.mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnitsSection;
