import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Metode } from "@/components/site/metode";
import { Suverenitet } from "@/components/site/suverenitet";
import { Tjenester } from "@/components/site/tjenester";
import { Hvem } from "@/components/site/hvem";
import { HvorforNaa } from "@/components/site/hvorfor-naa";
import { Pilot } from "@/components/site/pilot";
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
        <Metode />
        <Suverenitet />
        <Tjenester />
        <Hvem />
        <HvorforNaa />
        <Pilot />
      </main>
      <Footer />
    </>
  );
}
