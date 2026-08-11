import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Tjenester } from "@/components/site/tjenester";
import { Metode } from "@/components/site/metode";
import { Prinsipp } from "@/components/site/prinsipp";
import { Hvem } from "@/components/site/hvem";
import { Kontakt } from "@/components/site/kontakt";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#hovedinnhold">
        Hopp til hovedinnhold
      </a>
      <Header />
      <main id="hovedinnhold">
        <span id="top" />
        <Hero />
        <Tjenester />
        <Metode />
        <Prinsipp />
        <Hvem />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
