"use client";

const services = [
  {
    title: "Årlig kontroll",
    description:
      "Skånsom undersøkelse, grundig puss og røntgen ved behov. Vi sender påminnelser slik at du aldri glemmer timen."
  },
  {
    title: "Estetisk tannpleie",
    description:
      "Tannbleking, skallfasetter og estetiske fyllinger som gir et naturlig og friskt smil."
  },
  {
    title: "Akutte smerter",
    description:
      "Egne akutt-timer hver dag sikrer at du raskt får hjelp ved tannverk, betennelse eller skader."
  },
  {
    title: "Implantat og kirurgi",
    description:
      "Erfarent kirurgisk team som planlegger og gjennomfører implantatløsninger i tett samarbeid med deg."
  }
];

const team = [
  {
    name: "Bente Kristin Steindebakken",
    role: "Allmenn-tannlege",
    description:
      "Gründer og klinikksjef med lidenskap for å finne løsninger på varige tannhelseutfordringer."
  },
  {
    name: "Lisbeth Myhre",
    role: "Assistent",
    description:
      "Hjelper til med pasientbehandling og administrative oppgaver for å sikre en smidig drift av klinikken."
  },
  {
    name: "Maryam",
    role: "Allmenn-tannlege",
    description:
      "Fokusert på å skape en trygg og behagelig opplevelse for alle pasienter, med særlig interesse for barn og unge."
  },
  {
    name: "Amalie",
    role: "Assistent",
    description:
      "Bidrar til at pasientene føler seg ivaretatt og komfortable under hele behandlingsforløpet."
  }
];

const hours = [
  "Mandag–torsdag: 08:00–12:00",
  "Fredag: 08:00–18:00",
  "Akuttvakt: etter avtale"
];

export default function HomePage() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <header className="hero">
        <nav className="nav">
          <div className="logo">Tannlege Steindebakken AS</div>
          <div className="nav-links">
            <a href="#om-oss">Om oss</a>
            <a href="#tjenester">Tjenester</a>
            <a href="#team">Team</a>
            <a href="#kontakt">Kontakt</a>
          </div>
        </nav>
        <div className="hero-content">
          <p className="tagline">Trygg og personlig tannbehandling i Brumunddal</p>
          <h1>Din lokale tannlege med fokus på gode opplevelser</h1>
          <p>
            Vi kombinerer moderne teknologi med varm omsorg for å gi deg og din familie den beste
            tannhelseopplevelsen. Hos oss møter du faste behandlere som tar seg tid til å bli kjent
            med deg.
          </p>
          <div className="hero-actions">
            <a href="tel:+4762341621" className="btn primary">
              Ring 62 34 16 21
            </a>
            <a href="#tjenester" className="btn ghost">
              Se behandlinger
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="om-oss" className="section">
          <div className="section-heading">
            <p className="eyebrow">Om klinikken</p>
            <h2>Omsorgsfull tannpleie i over 20 år</h2>
            <p>
              Tannlege Steindebakken AS ble etablert i 2008 og holder til i lyse og moderne lokaler
              i Nygata 22, midt i Brumunddal sentrum. Vi tilbyr alt fra forebyggende
              tannpleie til avansert behandling og legger stor vekt på å forklare hvert steg underveis.
              Trygghet, forutsigbarhet og kvalitet gir de beste resultatene.
            </p>
          </div>
        </section>

        <section id="tjenester" className="section surface">
          <div className="section-heading">
            <p className="eyebrow">Behandlinger</p>
            <h2>Hva vi kan hjelpe deg med</h2>
          </div>
          <div className="cards">
            {services.map((service) => (
              <article className="card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="team" className="section">
          <div className="section-heading">
            <p className="eyebrow">Møt oss</p>
            <h2>Et engasjert fagteam</h2>
            <p>
              Hele teamet er dedikert til å skape en rolig og trygg atmosfære, enten du trenger en
              rutinekontroll eller en større behandling.
            </p>
          </div>
          <div className="team-grid">
            {team.map((person) => (
              <article className="team-card" key={person.name}>
                <h3>{person.name}</h3>
                <p className="role">{person.role}</p>
                <p>{person.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="kontakt" className="section surface contact">
          <div className="contact-card">
            <p className="eyebrow">Kontakt</p>
            <h2>Gi oss en lyd</h2>
            <p>
              Telefon: <a href="tel:+4762341621">62 34 16 21</a>
              <br />
              E-post: <a href="mailto:epost@epost.no">epost@epost.no</a>
            </p>
            <p>
              Adresse:
              <br />
              Nygata 22
              <br />
              2380 Brumunddal
            </p>
            <div className="hours">
              <p>Åpningstider</p>
              <ul>
                {hours.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="map">
            <iframe
              title="Kart over Tannlege Steindebakken AS"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1642.0872927735445!2d7.992526776456944!3d58.14564470680809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4637f1fb8a84bc5d%3A0x87e1d752746f1982!2sNygata%2022%2C%202380%20Brumunddal!5e0!3m2!1sno!2sno!4v1713785320218!5m2!1sno!2sno"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>

      <footer>
        <p>© {currentYear} Tannlege Steindebakken AS · Org.nr: 992 456 078</p>
      </footer>
    </>
  );
}
