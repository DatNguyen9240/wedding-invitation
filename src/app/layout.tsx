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
  weight: ['200', '300', '400', '500', '600', '700', '800'],
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

        {/* Material Symbols — blocking stylesheet, fast due to preconnect hints above.
            Async loading caused icons to be invisible permanently (FontFace detection race). */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
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
      <body className="bg-background text-on-background selection:bg-secondary/30 antialiased transition-colors duration-500">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
