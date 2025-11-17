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
    name: "Ingrid Steindebakken",
    role: "Spesialist i oral protetikk",
    description:
      "Gründer og klinikksjef med lidenskap for å finne løsninger som varer. Jobber mye med større rehabiliteringer og pasienter med tannlegeskrekk."
  },
  {
    name: "Jonas Vangen",
    role: "Allmenn-tannlege",
    description:
      "Opptatt av forebyggende tannpleie og skånsom behandling for hele familien. Leder også tilbudet til barn og unge."
  },
  {
    name: "Live Midtsund",
    role: "Tannpleier",
    description:
      "Sikrer effektive, behagelige kontroller og gir råd om god munnhygiene tilpasset hver pasient."
  }
];

const hours = [
  "Mandag–torsdag: 08:00–16:00",
  "Fredag: 08:00–14:00",
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
          <p className="tagline">Trygg og personlig tannbehandling i Kristiansand</p>
          <h1>Din lokale tannlege med fokus på gode opplevelser</h1>
          <p>
            Vi kombinerer moderne teknologi med varm omsorg for å gi deg og din familie den beste
            tannhelseopplevelsen. Hos oss møter du faste behandlere som tar seg tid til å bli kjent
            med deg.
          </p>
          <div className="hero-actions">
            <a href="tel:+4738123456" className="btn primary">
              Ring 38 12 34 56
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
              Tannlege Steindebakken AS ble etablert i 2003 og holder til i lyse og moderne lokaler
              i Skippergata 23, midt i Kristiansand sentrum. Vi tilbyr alt fra forebyggende
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
              Telefon: <a href="tel:+4738123456">38 12 34 56</a>
              <br />
              E-post: <a href="mailto:post@tannlegesteindebakken.no">post@tannlegesteindebakken.no</a>
            </p>
            <p>
              Adresse:
              <br />
              Skippergata 23
              <br />
              4611 Kristiansand
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1642.0872927735445!2d7.992526776456944!3d58.14564470680809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4637f1fb8a84bc5d%3A0x87e1d752746f1982!2sSkippergata%2023%2C%204611%20Kristiansand%20S!5e0!3m2!1sno!2sno!4v1713785320218!5m2!1sno!2sno"
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
        <p>© {currentYear} Tannlege Steindebakken AS · Org.nr: 987 654 321</p>
      </footer>
    </>
  );
}
