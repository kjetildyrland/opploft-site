import { Container } from "@/components/site/section";

/**
 * Slim, borderless statement between Metode and Hvem. No cards, no dividers —
 * just a quiet typographic statement with generous whitespace.
 */
export function Prinsipp() {
  return (
    <section id="prinsipp" className="py-[var(--pad-y)]">
      <Container>
        <p className="overline">Prinsipp</p>
        <h2 className="section-title">Dere eier alt vi lager</h2>
        <p className="max-w-[62ch] text-[length:var(--fs-lead)]">
          Koden, kontoene, domenene og dokumentasjonen står i deres navn fra dag
          én. Vi bygger på vanlige, godt kjente verktøy framfor våre egne
          rammeverk, slik at en hvilken som helst utvikler kan ta over etter
          oss. Ingen innlåsing og ingen skjulte avhengigheter. Dere skal kunne
          bytte leverandør uten å begynne på nytt.
        </p>
      </Container>
    </section>
  );
}
