import { Facebook, Instagram } from "lucide-react";

const SocialSection = () => {
  return (
    <section id="redes-sociais" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
          Nossas Redes
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Acompanhe nosso trabalho, dicas jurídicas e novidades através das nossas redes sociais.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="https://www.facebook.com/VaianaADV/?locale=pt_BR"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#1877F2] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1877F2]/90 transition-all hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
          >
            <Facebook size={24} />
            Facebook
          </a>
          <a
            href="https://www.instagram.com/wallyssonviana/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F56040] text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
          >
            <Instagram size={24} />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
