import './globals.css'

export const metadata = {
  title: 'Lumina AI — Intelligence that thinks ahead of you',
  description: 'Lumina AI transforms how your team makes decisions.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
