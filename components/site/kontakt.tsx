import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/section";
import { EMAIL, MAILTO } from "@/lib/site";

export function Kontakt() {
  return (
    <Section id="kontakt" aria-labelledby="kontakt-title">
      <p className="overline">Kontakt</p>
      <h2 id="kontakt-title" className="section-title">
        Har dere noe som bør bygges?
      </h2>
      <p className="mb-9 max-w-[58ch] text-[length:var(--fs-lead-strong)]">
        Send noen setninger om hva dere trenger, så tar vi en uforpliktende
        prat. Har vi nok til å si noe om omfang og pris, sier vi det med en
        gang — og er dette utenfor det vi er gode på, sier vi det også.
      </p>
      <div className="flex flex-wrap gap-4">
        <Button asChild size="xl" className="max-sm:w-full">
          <a href={MAILTO}>Ta kontakt — {EMAIL}</a>
        </Button>
      </div>
    </Section>
  );
}
