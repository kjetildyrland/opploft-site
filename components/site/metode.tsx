import { Section } from "@/components/site/section";

const STEPS = [
  {
    num: "01",
    title: "Tidstyvjakt",
    body: "På ti virkedager kartlegger vi hvor tiden faktisk går: et skreddersydd spørreskjema bygget på offentlig informasjon om deres bransje, og observerte arbeidsøkter der vi tar tiden på ekte oppgaver. Dere får en rangert liste over flaskehalser med kroneestimat — ikke en presentasjon, men en arbeidsliste.",
  },
  {
    num: "02",
    title: "KI-sprint",
    body: "Vi bygger løsningen på den største tidstyven, i deres egne verktøy og på deres egne kontoer. Leveransen inkluderer opplæring, dokumentasjon og et testsett som beviser at løsningen virker — før vi går videre til neste.",
  },
  {
    num: "03",
    title: "Vakt",
    body: "Løsningene tester seg selv hver uke. Endrer KI-modellene seg, fanger vi det før dere merker det, og foreslår fiksen. Dere godkjenner — vi rører aldri systemene deres uten at et menneske har sagt ja.",
  },
];

export function Metode() {
  return (
    <Section id="metode" aria-labelledby="metode-title">
      <p className="overline">Slik jobber vi</p>
      <h2 id="metode-title" className="section-title">
        Fra tidstyv til løsning dere eier
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
