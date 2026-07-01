# Oppløft — landingsside

Statisk landingsside for Oppløft AS, bygget med **Next.js (App Router)**,
**Tailwind CSS v4** og **shadcn/ui**. Siden eksporteres til ren statisk
HTML/CSS/JS (`output: "export"`) og kan legges på hvilken som helst statisk host.

All tekst er på bokmål. Designet er flatt: ett aksentgrønt (`#0E4B3B`),
papirfarget bakgrunn (`#F4F3EE`), hårstreker som skiller, ingen skygger,
ingen gradienter, ingen ikonbibliotek.

## Forutsetninger

- Node.js 20 eller nyere
- npm

## Kom i gang

Installer avhengigheter:

```bash
npm install
```

Kjør utviklingsserver (hot reload på http://localhost:3000):

```bash
npm run dev
```

## Bygg (statisk eksport)

```bash
npm run build
```

Kommandoen skriver den ferdige, statiske siden til `out/`
(inkludert `out/index.html`). Fontene (`Familjen Grotesk`) hentes fra Google
Fonts **på byggetidspunktet** og pakkes med i `out/`, slik at den publiserte
siden ikke gjør noen eksterne forespørsler.

Forhåndsvis den bygde siden lokalt:

```bash
npx serve out
# eller: python3 -m http.server 8000 --directory out
```

## Publisering

`out/` inneholder hele siden. Last mappen opp til en hvilken som helst
statisk host — ingen server eller Node-runtime kreves.

### GitHub Pages

1. Bygg: `npm run build`.
2. Publiser innholdet i `out/` (f.eks. via en GitHub Actions-workflow som
   kjører `npm ci && npm run build` og laster opp `out/` som Pages-artefakt,
   eller ved å pushe `out/` til en `gh-pages`-branch).
3. Settings → Pages → velg kilden du bruker.

> Merk: GitHub Pages serverer ikke `_next`-mapper som starter med
> understrek uten videre. Legg til en tom `.nojekyll`-fil i publiseringsroten
> (Actions-baserte Pages-workflowen gjør dette automatisk).

### Andre hoster

- **Netlify / Cloudflare Pages / Vercel:** koble repoet. Build-kommando
  `npm run build`, publiseringsmappe `out`.
- **Enkel server:** last opp `out/` til webroot som den er.

## Prosjektstruktur

```
app/
  layout.tsx        Rot-layout: <html lang="nb">, metadata, self-hostet font
  page.tsx          Setter sammen seksjonene til én side
  globals.css       Designtokens (farger, radius, typografi) + shadcn-variabler
  icon.svg          Favicon
components/
  ui/               shadcn/ui-komponenter (Button, Card, Separator, Sheet)
  site/             Seksjonene: Header, Hero, Metode, Suverenitet, Tjenester,
                    Hvem, HvorforNaa, Pilot, Footer, samt Section/Container
lib/utils.ts        cn()-hjelper (clsx + tailwind-merge)
next.config.ts      output: "export", images.unoptimized
```

## Personvern

Ingen informasjonskapsler, ingen analyse, ingen sporingsskript. Fontene
er selv-hostet, så den publiserte siden gjør ingen eksterne forespørsler.

## Fakta som brukes på siden

Oppløft AS (under stiftelse), Bergen og Oslo, kontakt@opploft.no. Tar inn tre
pilotkunder høsten 2026. Eneste statistikk på siden: «77 % av virksomhetene
som ikke bruker KI oppgir manglende kompetanse som viktigste barriere»
(kilde: SSB, Bruk av IKT i næringslivet, 2025).
