import { Container } from "@/components/site/section";

/**
 * Slim, borderless statement between Metode and Suverenitet. No cards, no
 * dividers — just a quiet typographic statement with generous whitespace.
 */
export function Prinsipp() {
  return (
    <section id="prinsipp" className="py-[var(--pad-y)]">
      <Container>
        <p className="overline">Prinsipp</p>
        <h2 className="section-title">Alltid de beste verktøyene</h2>
        <p className="max-w-[62ch] text-[length:var(--fs-lead)]">
          KI-feltet flytter seg hver måned — det gjør vi også. Vi er
          leverandørnøytrale, følger utviklingen tett og bygger på det som er
          best akkurat nå. Når noe bedre kommer, oppdaterer vi løsningene deres.
          Det er en del av jobben, ikke et tillegg.
        </p>
      </Container>
    </section>
  );
}
