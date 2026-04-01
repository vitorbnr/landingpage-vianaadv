import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram } from "lucide-react";
import logoViana from "@/assets/logo-viana.png";

const Footer = () => (
  <footer className="bg-footer text-footer-foreground">
    <div className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <img src={logoViana} alt="Viana Advocacia" className="h-14 w-auto brightness-0 invert opacity-90" />
          <p className="font-body text-sm leading-relaxed opacity-80">
            Há mais de 18 anos atuando na defesa dos direitos de nossos clientes com excelência e compromisso.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="https://www.facebook.com/VaianaADV/?locale=pt_BR" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity flex items-center gap-2 text-sm">
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://www.instagram.com/vianaadvocaciaba/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity flex items-center gap-2 text-sm">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-heading text-lg font-bold">Links Rápidos</h4>
          <nav className="flex flex-col gap-2 font-body text-sm">
            <a href="#sobre" className="opacity-80 hover:opacity-100 transition-opacity">O Escritório</a>
            <a href="#equipe" className="opacity-80 hover:opacity-100 transition-opacity">Equipe</a>
            <a href="#areas" className="opacity-80 hover:opacity-100 transition-opacity">Áreas de Atuação</a>
            <a href="#unidades" className="opacity-80 hover:opacity-100 transition-opacity">Unidades</a>
          </nav>
        </div>
        <div className="space-y-4">
          <h4 className="font-heading text-lg font-bold">Contato</h4>
          <div className="space-y-3 font-body text-sm">
            <p className="flex items-center gap-2 opacity-80"><Phone size={14} /> (77) 99965-7852</p>
            <p className="flex items-center gap-2 opacity-80"><Mail size={14} /> wally.viana@hotmail.com</p>
            <p className="flex items-start gap-2 opacity-80"><MapPin size={14} className="mt-0.5 shrink-0" /> Carinhanha e Cocos, BA</p>
            <a
              href="https://wa.me/5577999657852"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity mt-2"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-highlight/20">
      <div className="container mx-auto px-6 py-4">
        <p className="font-body text-xs text-center opacity-60">
          © {new Date().getFullYear()} Viana Advocacia — CNPJ: 17.723.608/0001-47. Todos os direitos reservados. Em conformidade com o Provimento nº 205/2021 da OAB.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
