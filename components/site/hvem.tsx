import { Card } from "@/components/ui/card";
import { Section } from "@/components/site/section";

const AUDIENCES = [
  {
    title: "Regnskap, revisjon og advokat",
    place: "Oslo og resten av landet",
    body: "Bilagsflyt, årsoppgjør, førsteutkast av standarddokumenter og frist-innboksen som aldri blir tom.",
  },
  {
    title: "Havnæringen",
    place: "Bergen",
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
      <div className="grid grid-cols-1 border-t border-l border-border md:grid-cols-2">
        {AUDIENCES.map((audience) => (
          <Card
            key={audience.title}
            className="border-r border-b border-border p-[clamp(1.75rem,3.5vw,2.75rem)]"
          >
            <h3 className="mb-[0.4rem] text-[1.4rem] font-semibold">
              {audience.title}
            </h3>
            <p className="mb-4 text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-primary">
              {audience.place}
            </p>
            <p className="m-0 max-w-[42ch]">{audience.body}</p>
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
