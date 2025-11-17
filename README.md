# Tannlege Steindebakken AS

Statisk nettside bygget med Next.js (App Router) for tannklinikken Tannlege Steindebakken AS og deployet via GitHub Pages. Siden inneholder seksjoner for hero/informasjon, tjenester, team, kontaktinformasjon og et innebygd Google Maps-kart.

## Teknologi

- [Next.js 14](https://nextjs.org/) med `output: "export"` for statisk generering
- React 18
- GitHub Actions-workflow som bygger og publiserer `out/`-mappen til GitHub Pages

## Kom i gang lokalt

1. **Installer avhengigheter**

   ```bash
   npm install
   ```

2. **Kjør utviklingsserver**

   ```bash
   npm run dev
   ```

   Åpne `http://localhost:3000` i nettleseren. Endringer i `app/`-mappen hot-reloades automatisk.

3. **Bygg statisk versjon (samme som GitHub Pages)**

   ```bash
   # erstatt 'dentist' hvis repo-navnet endrer seg
   GITHUB_PAGES_BASE_PATH=dentist npm run build
   ```

   Bygget havner i `out/`. Du kan forhåndsvise ved å serve mappen med f.eks. `npx serve out`.

## Deploy

- På `main`-branchen kjører `.github/workflows/nextjs.yml` automatisk: den bygger med `next build`, laster opp `out/`-artefaktet og deployer til GitHub Pages-miljøet.
- Pass på at Pages-innstillingene peker til GitHub Actions deploy (ikke `gh-pages`-branch).

## Tilpasninger

- Innhold og tekster: `app/page.jsx`
- Globale stiler: `app/globals.css`
- BasePath/assetPrefix for GitHub Pages: `next.config.js`

Ta kontakt hvis du trenger flere seksjoner eller språkversjoner.***
