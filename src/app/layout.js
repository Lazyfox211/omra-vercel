import './globals.css'

export const metadata = {
  title: 'Omra — Mehdi Abu AbdiLleh',
  description: 'Pèlerinage Omra encadré personnellement par Mehdi Abu AbdiLleh. Tout inclus, zéro surprise.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <div className="noise" />
        {children}
      </body>
    </html>
  )
}
