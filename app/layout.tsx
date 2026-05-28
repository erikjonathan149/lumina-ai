import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lumina AI — Intelligence that thinks ahead of you',
  description: 'Lumina AI transforms how your team makes decisions — surfacing insights before you know you need them.',
  keywords: ['AI', 'artificial intelligence', 'business intelligence', 'automation', 'enterprise AI'],
  openGraph: {
    title: 'Lumina AI',
    description: 'Intelligence that thinks ahead of you',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
