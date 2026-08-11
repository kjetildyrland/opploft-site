import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/section";
import { MAILTO } from "@/lib/site";

export function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <Container className="py-[clamp(4rem,9vw,7.5rem)]">
        <p className="overline">
          Utvikling av nettsider, apper og systemer · Bergen &amp; Oslo
        </p>
        <h1 id="hero-title" className="display-title max-w-[18ch]">
          Vi bygger nettsider, apper og systemer.
        </h1>
        <svg
          className="mt-6 mb-8 block opacity-75"
          width="340"
          height="26"
          viewBox="0 0 340 26"
          role="presentation"
          aria-hidden="true"
          focusable="false"
        >
          <line
            x1="1"
            y1="24"
            x2="336"
            y2="2"
            stroke="#0E4B3B"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
        <p className="m-0 mb-9 max-w-[60ch] text-[length:var(--fs-lead-hero)] leading-[1.55]">
          Oppløft er et lite utviklingsselskap i Bergen og Oslo. Vi tar oppdrag
          fra første skisse til ferdig løsning i drift: nettsider, mobilapper,
          interne systemer, og KI der det faktisk gir gevinst. To utviklere,
          fast pris, og kode dere eier selv.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="xl" className="max-sm:w-full">
            <a href={MAILTO}>Ta kontakt</a>
          </Button>
          <Button asChild variant="brandGhost" size="xl" className="max-sm:w-full">
            <a href="#tjenester">Se hva vi gjør</a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
