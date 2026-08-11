import { Section } from "@/components/site/section";

const STEPS = [
  {
    num: "01",
    title: "Avklaring",
    body: "Vi begynner med en samtale om hva som faktisk skal løses, og hva løsningen skal gjøre den dagen den er i bruk. Dere får et skriftlig forslag med omfang, fast pris og tidsplan — før vi skriver en eneste linje kode.",
  },
  {
    num: "02",
    title: "Bygging",
    body: "Vi bygger i korte etapper og viser fram noe som virker underveis, ikke bare til slutt. Dere kan justere kurs mens det ennå er billig å justere. Alt vi lager blir testet, og testene følger med i leveransen.",
  },
  {
    num: "03",
    title: "Overlevering",
    body: "Løsningen settes i produksjon på deres egne kontoer, med dokumentasjon og opplæring for dem som skal bruke og forvalte den. Vi drifter gjerne videre — men dere skal aldri være avhengige av at vi gjør det.",
  },
];

export function Metode() {
  return (
    <Section alt id="metode" aria-labelledby="metode-title">
      <p className="overline">Slik jobber vi</p>
      <h2 id="metode-title" className="section-title">
        Fra første samtale til noe som er i drift
      </h2>
      <ol className="m-0 list-none p-0">
        {STEPS.map((step) => (
          <li
            key={step.num}
            className="grid grid-cols-1 gap-[clamp(1.25rem,4vw,3rem)] border-t border-border py-[clamp(2rem,4vw,2.75rem)] first:border-t-0 first:pt-0 sm:grid-cols-[minmax(0,5.5rem)_1fr]"
          >
            <span className="numeral-outline" aria-hidden="true">
              {step.num}
            </span>
            <div>
              <h3 className="mb-3 text-[clamp(1.35rem,2.2vw,1.7rem)] font-semibold">
                {step.title}
              </h3>
              <p className="m-0 max-w-[62ch]">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
