import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/section";

const MAILTO =
  "mailto:kontakt@opploft.no?subject=Gratis%20flaskehals-gjennomgang";

export function Pilot() {
  return (
    <Section alt id="kontakt" aria-labelledby="pilot-title">
      <p className="overline">Pilot høsten 2026</p>
      <h2 id="pilot-title" className="section-title">
        Vi tar inn tre pilotkunder høsten 2026
      </h2>
      <p className="mb-9 max-w-[58ch] text-[length:var(--fs-lead-strong)]">
        Redusert pris mot at dere lar oss måle resultatene og bruke dem som
        referanse — anonymisert om ønskelig. Krav: én intern ildsjel som vil eie
        dette videre.
      </p>
      <div className="flex flex-wrap gap-4">
        <Button asChild size="xl" className="max-sm:w-full">
          <a href={MAILTO}>Ta kontakt — kontakt@opploft.no</a>
        </Button>
      </div>
    </Section>
  );
}
