import './globals.css'

export const metadata = {
  title: 'Omra — Mehdi Abu AbdiLleh',
  description: 'Pèlerinage Omra encadré par Mehdi Abu AbdiLleh. Cours de fiqh, visites guidées, accompagnement de A à Z.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <div className="geo-pattern" />
        {children}
      </body>
    </html>
  )
}
