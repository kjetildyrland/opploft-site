import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/section";

const MAILTO =
  "mailto:kontakt@opploft.no?subject=Gratis%20flaskehals-gjennomgang";

export function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <Container className="py-[clamp(4rem,9vw,7.5rem)]">
        <p className="overline">
          KI-rådgivning for norske virksomheter · Bergen &amp; Oslo
        </p>
        <h1 id="hero-title" className="display-title max-w-[16ch]">
          Vi finner tidstyvene.
          <br />
          KI fjerner dem.
        </h1>
        <svg
          className="mt-6 mb-8 block"
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
          Oppløft hjelper norske virksomheter å finne flaskehalsene i
          arbeidshverdagen, løse dem med KI i verktøyene dere allerede har — og
          lære teamet å eie løsningen selv. Uten at dataene deres noen gang
          forlater virksomheten.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="xl" className="max-sm:w-full">
            <a href={MAILTO}>Gratis gjennomgang</a>
          </Button>
          <Button asChild variant="brandGhost" size="xl" className="max-sm:w-full">
            <a href="#metode">Se metoden</a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
