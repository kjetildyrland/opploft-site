import Image from "next/image";

import { Card } from "@/components/ui/card";
import { Section } from "@/components/site/section";
import kjetilPhoto from "@/public/team/kjetil-dyrland.jpg";
import satheshPhoto from "@/public/team/satheshkumar-kaliyugarasan.jpg";

const PEOPLE = [
  {
    name: "Kjetil Dyrland",
    role: "Utvikler og data engineer",
    place: "Oslo",
    photo: kjetilPhoto,
    body: "M.Sc. i programvareutvikling og maskinlæring fra HVL og UiB, og Databricks-sertifisert data engineer. Har bygget datainfrastruktur og ML-pipelines i Databricks på Azure for Lerøy Seafood, og jobbet som konsulent i Bouvet på blant annet Equinor-prosjekter. Medforfatter på to fagartikler om evaluering av maskinlæringsmodeller, og utvikler bak fem apper på App Store.",
    link: { href: "https://dyrland.ai/kjetil", label: "dyrland.ai/kjetil" },
  },
  {
    name: "Satheshkumar Kaliyugarasan",
    role: "Data scientist og KI-utvikler",
    place: "Bergen",
    photo: satheshPhoto,
    body: "Ph.d. i informatikk fra HVL på dyp læring i medisinsk bildeanalyse, og postdoktor ved Mohn Medical Imaging and Visualization Centre på Haukeland. Har bygget MLOps-infrastruktur og satt prediksjonsmodeller i produksjon som data scientist i Lerøy Seafood. Står bak fastMONAI, et åpent bibliotek for medisinsk bildeanalyse.",
    link: { href: "https://skaliy.no", label: "skaliy.no" },
  },
];

/** Egne apper vi har bygget og gitt ut. Leveransebevis, ikke kundereferanser. */
const APPS = [
  {
    name: "Hyttefred",
    what: "delt hytte: rullering, utgifter og sjekklister",
    href: "https://apps.apple.com/no/app/hyttefred/id6792740405",
  },
  {
    name: "Taleark",
    what: "befaringsrapport og tilbud fra tale, for håndverkere",
    href: "https://apps.apple.com/no/app/taleark-befaringsrapport/id6794867329",
  },
  {
    name: "Glimt",
    what: "engangskamera for arrangementer, uten at gjestene installerer noe",
    href: "https://apps.apple.com/no/app/glimt-event-camera/id6790474917",
  },
  {
    name: "Ubrutt",
    what: "skjermtid som teller i stedet for å blokkere",
    href: "https://apps.apple.com/no/app/ubrutt-screen-time-focus/id6797823020",
  },
  {
    name: "Mosvold",
    what: "eiendomsforvaltning for Mosvold & Co., app og PWA",
    href: "https://apps.apple.com/no/app/mosvold/id6751717575",
  },
];

export function Hvem() {
  return (
    <Section alt id="hvem" aria-labelledby="hvem-title">
      <p className="overline">Hvem vi er</p>
      <h2 id="hvem-title" className="section-title">
        Oppløft AS er to utviklere
      </h2>
      <p className="mb-10 max-w-[58ch] text-[length:var(--fs-lead-strong)]">
        Ingen selgere, ingen prosjektledd. Dere snakker med de samme to som
        skriver koden, fra første samtale til løsningen er i drift.
      </p>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {PEOPLE.map((person) => (
          <Card key={person.name} className="p-[clamp(2rem,3.8vw,3rem)]">
            <Image
              src={person.photo}
              alt=""
              width={88}
              height={88}
              sizes="88px"
              className="mb-6 size-22 rounded-full object-cover"
            />
            <h3 className="mb-[0.4rem] text-[1.4rem] font-semibold">
              {person.name}
            </h3>
            <p className="mb-4 text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-primary">
              {person.role} · {person.place}
            </p>
            <p className="m-0 max-w-[44ch] text-base leading-relaxed">
              {person.body}
            </p>
            <a
              href={person.link.href}
              className="mt-auto pt-6 text-[0.95rem] font-medium text-primary"
            >
              {person.link.label}
            </a>
          </Card>
        ))}
      </div>

      <div className="mt-10 border-t border-border pt-10">
        <h3 className="mb-2 text-[1.15rem] font-semibold">
          Apper vi har bygget og gitt ut selv
        </h3>
        <p className="mb-6 max-w-[58ch] text-base">
          Vi lærer plattformene ved å sende egne apper gjennom dem. Alle fem
          ligger ute på App Store, bygget fra bunnen av oss to.
        </p>
        <ul className="m-0 grid list-none grid-cols-1 gap-x-10 gap-y-3 p-0 sm:grid-cols-2">
          {APPS.map((app) => (
            <li key={app.name} className="text-base leading-snug">
              <a href={app.href} className="font-medium text-primary">
                {app.name}
              </a>
              <span className="text-muted-foreground"> — {app.what}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
