import { Container } from "@/components/site/section";

export function Footer() {
  return (
    <footer className="border-t border-border py-[clamp(2.5rem,5vw,3.5rem)]">
      <Container>
        <p className="mb-2 text-[0.95rem]">
          Oppløft AS (under stiftelse) · Bergen &amp; Oslo ·{" "}
          <a href="mailto:kontakt@opploft.no" className="text-primary">
            kontakt@opploft.no
          </a>{" "}
          · © 2026 Oppløft
        </p>
        <p className="m-0 text-sm text-muted-foreground">
          Ingen informasjonskapsler. Ingen sporing.
        </p>
      </Container>
    </footer>
  );
}
