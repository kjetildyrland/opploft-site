import { Card } from "@/components/ui/card";
import { Section } from "@/components/site/section";

const POINTS = [
  {
    title: "Null tilgang",
    body: "Vi trenger aldri tilgang til deres systemer; alt kjører hos dere.",
  },
  {
    title: "EU som standard",
    body: "KI-behandling på europeiske servere, uten at deres data brukes til trening, med databehandleravtale.",
  },
  {
    title: "Dere eier alt",
    body: "Hver konto, hver løsning og hvert dokument registreres i deres navn fra dag én. Ingen innlåsing.",
  },
  {
    title: "Norsk personvern innebygd",
    body: "Vi er bygget rundt arbeidsmiljølovens regler om innsyn og Datatilsynets praksis, ikke på tross av dem.",
  },
];

export function Suverenitet() {
  return (
    <Section alt aria-labelledby="suverenitet-title">
      <p className="overline">Suverent som standard</p>
      <h2 id="suverenitet-title" className="section-title">
        Dataene deres blir hos dere
      </h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {POINTS.map((point) => (
          <Card
            key={point.title}
            className="p-[clamp(1.75rem,3.4vw,2.75rem)]"
          >
            <h3 className="mb-[0.6rem] text-[1.3rem] font-semibold">
              {point.title}
            </h3>
            <p className="m-0 max-w-[42ch] text-base leading-relaxed">
              {point.body}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
