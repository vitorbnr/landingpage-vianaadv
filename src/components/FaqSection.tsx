import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a primeira consulta?",
    answer: "Nossa primeira consulta tem como objetivo entender os detalhes do seu caso. Avaliamos a documentação e apresentamos as melhores estratégias jurídicas disponíveis."
  },
  {
    question: "Quais são as áreas de atuação do escritório?",
    answer: "Atuamos em diversas áreas, incluindo trabalhista, sucessões, família, contratos e previdenciário. Nossa equipe multidisciplinar está pronta para lhe atender."
  },
  {
    question: "Quais documentos preciso levar no primeiro atendimento?",
    answer: "Sugerimos trazer documentos de identificação básica (RG/CPF, comprovante de residência) e todos os papéis relacionados ao seu caso (contratos, conversas, notificações, etc)."
  },
  {
    question: "Vocês atendem clientes de outras cidades ou estados?",
    answer: "Sim! Trabalhamos com processos eletrônicos e oferecemos reuniões e acompanhamento 100% online para clientes que não podem comparecer presencialmente à nossa unidade."
  },
  {
    question: "Qual o tempo médio de um processo?",
    answer: "O tempo de duração de um processo pode variar amplamente, dependendo da sua complexidade e da agilidade do tribunal. Durante o atendimento, forneceremos uma estimativa realista com base na nossa experiência."
  },
  {
    question: "Como posso acompanhar o meu processo?",
    answer: "Enviaremos atualizações constantes via WhatsApp e e-mail sempre que houver movimentações relevantes no seu caso. Nossa equipe estará sempre à disposição para tirar dúvidas."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
          Perguntas Frequentes
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-secondary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
