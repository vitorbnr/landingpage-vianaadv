import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoViana from "@/assets/logo-viana.png";

const navLinks = [
  { label: "O Escritório", href: "#sobre" },
  { label: "Equipe", href: "#equipe" },
  { label: "Áreas", href: "#areas" },
  { label: "Unidades", href: "#unidades" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-2">
          <img src={logoViana} alt="Viana Advocacia" className="h-16 w-auto brightness-0 invert drop-shadow-md hover:opacity-90 transition-opacity" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-primary-foreground/90 font-body text-sm font-medium hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="secondary" className="text-primary gap-2">
            <a href="https://wa.me/5577999657852" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} />
              Contato
            </a>
          </Button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/20 px-6 pb-6 space-y-4 pt-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-primary-foreground/90 font-body text-base font-medium py-2 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <Button asChild variant="secondary" className="w-full text-primary gap-2 mt-4">
            <a href="https://wa.me/5577999657852" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} />
              Contato
            </a>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
