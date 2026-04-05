import type { Metadata } from 'next'
import { Newsreader, Manrope } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  // 'swap' lets the h1 render immediately with a fallback font, then swaps to Newsreader.
  // 'optional' can suppress the swap entirely if the font is slow — bad for LCP.
  display: 'swap',
  style: ['normal', 'italic'],
  // Only weights actually used — 200 (font-extralight), 400 (regular), 700 (heading bold default)
  weight: ['200', '400', '700'],
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'optional',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Eternal Bloom — Thiệp Cưới Thông Minh',
  description: 'High-end digital wedding invitation builder. Create breathtaking, editorial-style invitations that capture the essence of luxury stationery.',
  keywords: 'wedding invitation, thiệp cưới, digital invitation, luxury wedding',
  openGraph: {
    title: 'Eternal Bloom — Thiệp Cưới Thông Minh',
    description: 'The Digital Curator of Timeless Love Stories',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={`${newsreader.variable} ${manrope.variable}`}>
      <head>
        {/* Preconnect to Google Fonts origins to eliminate DNS/TLS setup time */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Material Symbols — single static instance (opsz=24, wght=300, FILL=0, GRAD=0).
            Requesting a range like 20..48,100..700,0..1,-50..200 downloads the FULL variable font
            = 3.8 MB. Requesting exact values downloads only the one static instance = ~200 KB. */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0&display=swap"
        />

        {/*
           Critical: Inline script to set theme before first paint.
           This prevents the "forced reflow" and "flash" during hydration.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('eb-theme');if(t==='pink')document.documentElement.setAttribute('data-theme','pink');}catch(e){}})();`,
          }}
        />
      </head>
      {/* No global transition on body to prevent 'Style & Layout' recalculation spikes during hydration */}
      <body className="bg-background text-on-background selection:bg-secondary/30 antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
