import type { Metadata } from 'next'
import { Newsreader, Manrope } from 'next/font/google'
import './globals.css'

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
  display: 'swap',
  // Pruned to used weights: 200 (extra-light), 400 (regular), 600 (semi-bold), 800 (extra-bold)
  weight: ['200', '400', '600', '800'],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Material Symbols — async loaded via vanilla JS so React's event system
            is bypassed entirely. React ignores string onLoad handlers (it only
            accepts functions), so the old print/onload trick never worked. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
  var l=document.createElement('link');
  l.rel='stylesheet';
  l.href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0&display=swap';
  l.media='print';
  l.onload=function(){l.media='all';};
  document.head.appendChild(l);
})();`,
          }}
        />
        <noscript>
          {/* Fallback for no-JS: load synchronously */}
          {/* eslint-disable-next-line @next/next/no-page-custom-font */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0&display=swap"
          />
        </noscript>

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
        {children}
      </body>
    </html>
  )
}
