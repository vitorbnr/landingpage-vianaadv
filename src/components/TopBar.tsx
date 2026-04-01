import { MapPin, Mail, Phone } from "lucide-react";

const TopBar = () => (
  <div className="hidden lg:block bg-primary">
    <div className="container mx-auto px-6 py-2 flex items-center justify-between text-primary-foreground text-sm font-body">
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-2">
          <MapPin size={14} />
          Carinhanha e Cocos, BA
        </span>
        <span className="flex items-center gap-2">
          <Mail size={14} />
          wally.viana@hotmail.com
        </span>
      </div>
      <span className="flex items-center gap-2">
        <Phone size={14} />
        Atendimento: (77) 99965-7852
      </span>
    </div>
  </div>
);

export default TopBar;
