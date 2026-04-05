import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Eternal Bloom — Wedding Invitations',
  description: 'Luxury digital wedding invitation builder.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600&family=Newsreader:ital,opsz,wght@0,6..72,400;1,6..72,400&display=swap" 
          rel="stylesheet" 
        />
      </head>
      {/* No global transition on body to prevent 'Style & Layout' recalculation spikes during hydration */}
      <body className="bg-background text-on-background selection:bg-secondary/30 antialiased">
        {children}
      </body>
    </html>
  )
}
