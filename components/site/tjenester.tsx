import { Card } from "@/components/ui/card";
import { Section } from "@/components/site/section";

const SERVICES = [
  {
    title: "Nettsider og apper",
    body: "Nettsider, nettbutikker, iOS- og Android-apper og interne systemer. Vi tar hele veien fra skisse til publisering, enten det er på deres eget domene, på App Store eller i Google Play.",
    price: "Fast pris per prosjekt. Be om tilbud.",
  },
  {
    title: "KI-løsninger",
    body: "Automatisering av det som i dag gjøres for hånd: dokumenter som skal skrives, data som skal hentes ut, spørsmål som skal besvares. Vi bygger det inn i verktøyene dere allerede bruker, med et testsett som viser at det virker.",
    price: "Fast pris per prosjekt. Be om tilbud.",
  },
  {
    title: "Drift og videreutvikling",
    body: "Når løsningen er i produksjon holder vi den i gang: oppdateringer, overvåking, nye funksjoner, og en fast kontaktperson som kjenner koden fra innsiden.",
    price: "Fast månedspris. Be om tilbud.",
  },
];

export function Tjenester() {
  return (
    <Section id="tjenester" aria-labelledby="tjenester-title">
      <p className="overline">Tjenester</p>
      <h2 id="tjenester-title" className="section-title">
        Tre måter å jobbe med oss
      </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {SERVICES.map((service) => (
          <Card
            key={service.title}
            className="p-[clamp(1.75rem,3.2vw,2.5rem)]"
          >
            <h3 className="mb-[0.9rem] text-[1.4rem] font-semibold">
              {service.title}
            </h3>
            <p className="m-0 text-base leading-relaxed">{service.body}</p>
            <p className="mt-auto pt-6 text-[0.95rem] font-medium text-primary">
              {service.price}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
