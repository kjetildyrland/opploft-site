import { Card } from "@/components/ui/card";
import { Section } from "@/components/site/section";

const AUDIENCES = [
  {
    title: "Regnskap, revisjon og advokat",
    place: "I hele landet",
    body: "Bilagsflyt, årsoppgjør, førsteutkast av standarddokumenter og frist-innboksen som aldri blir tom.",
  },
  {
    title: "Havnæringen",
    place: "Langs hele kysten",
    body: "Myndighetsrapportering, internkontroll-dokumentasjon, anbud og HSEQ-spørsmål for oppdrett, rederi og leverandører.",
  },
];

export function Hvem() {
  return (
    <Section alt id="hvem" aria-labelledby="hvem-title">
      <p className="overline">Hvem vi hjelper</p>
      <h2 id="hvem-title" className="section-title">
        To miljøer, samme problem
      </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {AUDIENCES.map((audience) => (
          <Card
            key={audience.title}
            className="p-[clamp(2rem,3.8vw,3rem)]"
          >
            <h3 className="mb-[0.4rem] text-[1.4rem] font-semibold">
              {audience.title}
            </h3>
            <p className="mb-4 text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-primary">
              {audience.place}
            </p>
            <p className="m-0 max-w-[42ch] text-base leading-relaxed">
              {audience.body}
            </p>
          </Card>
        ))}
      </div>
      <p className="mt-10 max-w-[56ch] border-t border-border pt-10 text-[length:var(--fs-lead-strong)]">
        Felles for begge: mye kunnskapsarbeid, strenge krav til
        konfidensialitet, og for få timer i døgnet.
      </p>
    </Section>
  );
}
