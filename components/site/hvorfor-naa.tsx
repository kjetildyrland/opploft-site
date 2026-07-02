import { Section } from "@/components/site/section";

export function HvorforNaa() {
  return (
    <Section aria-labelledby="why-title">
      <p className="overline">Hvorfor nå</p>
      <figure className="m-0 mb-10 grid grid-cols-1 items-baseline gap-[clamp(1.5rem,4vw,3rem)] rounded-[12px] bg-[var(--stat-panel)] p-[clamp(1.75rem,4vw,3rem)] sm:grid-cols-[auto_1fr]">
        <p id="why-title" className="stat-figure">
          77 %
        </p>
        <figcaption className="m-0 max-w-[30ch] text-[length:var(--fs-stat-body)] leading-[1.4]">
          av norske virksomheter som ennå ikke bruker KI, oppgir manglende
          kompetanse som den viktigste barrieren.
          <a
            href="#kilde"
            aria-label="Se kilde"
            className="text-primary no-underline"
          >
            *
          </a>
        </figcaption>
      </figure>
      <p className="mb-7 max-w-[60ch] text-[length:var(--fs-lead)]">
        Verktøyene er klare og rimelige; det som mangler er noen som finner de
        riktige oppgavene og lærer folkene deres å bruke dem trygt. Det er jobben
        vår.
      </p>
      <p id="kilde" className="m-0 text-sm text-muted-foreground">
        * SSB, Bruk av IKT i næringslivet (2025).
      </p>
    </Section>
  );
}
