import "./globals.css";

export const metadata = {
  title: "Tannlege Steindebakken AS",
  description:
    "Moderne tannklinikk i Brumunddal som tilbyr trygg og personlig tannbehandling for hele familien."
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
