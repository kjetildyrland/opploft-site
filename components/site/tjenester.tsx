import { Card } from "@/components/ui/card";
import { Section } from "@/components/site/section";

const SERVICES = [
  {
    title: "Tidstyvjakt",
    body: "Vi kartlegger hvor tiden går på ti virkedager: et skreddersydd spørreskjema bygget på offentlig informasjon om bransjen deres, og observerte arbeidsøkter der vi tar tiden på ekte oppgaver. Dere sitter igjen med en rangert liste over flaskehalser med kroneestimat.",
    price: "Fast pris. Be om tilbud.",
  },
  {
    title: "KI-sprint",
    body: "Vi bygger og setter én løsning i produksjon på den største tidstyven, i verktøyene og på kontoene dere allerede har. Med opplæring, dokumentasjon og et testsett som beviser at løsningen virker.",
    price: "Fast pris per sprint. Be om tilbud.",
  },
  {
    title: "KI-ansvarlig",
    body: "En fast KI-ansvarlig uten fast ansettelse. Løsningene overvåkes og testes ukentlig, og hver måned setter vi av tid til veikart, nye grep og oppdatering av biblioteket deres.",
    price: "Løpende. Fast pris. Be om tilbud.",
  },
];

export function Tjenester() {
  return (
    <Section id="tjenester" aria-labelledby="tjenester-title">
      <p className="overline">Tjenester</p>
      <h2 id="tjenester-title" className="section-title">
        Tre trinn, fast pris
      </h2>
      <div className="grid grid-cols-1 border-t border-l border-border md:grid-cols-3">
        {SERVICES.map((service) => (
          <Card
            key={service.title}
            className="border-r border-b border-border p-[clamp(1.5rem,3vw,2.25rem)]"
          >
            <h3 className="mb-[0.9rem] text-[1.4rem] font-semibold">
              {service.title}
            </h3>
            <p className="m-0">{service.body}</p>
            <p className="mt-auto pt-6 text-[0.95rem] font-medium text-primary">
              {service.price}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
