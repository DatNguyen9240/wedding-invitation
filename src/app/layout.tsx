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
        {/* Material Symbols — loaded asynchronously so it never blocks first paint.
            The print/onload trick: browser downloads it as a low-priority print stylesheet,
            then swaps media to 'all' once loaded, keeping it off the critical path.
            Fallback <noscript> covers no-JS environments. */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0&display=swap"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          media="print"
          // @ts-expect-error — onLoad on <link> is valid HTML but not in React's types
          onLoad="this.media='all'"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0&display=swap"
        />
        <noscript>
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

        {/*
          Minimal critical CSS — inlined so the browser can paint the correct
          dark background and typography baseline *before* the 10.5 KiB CSS
          chunk finishes loading. Prevents flash of white/unstyled content.
          Only includes rules that are (a) above-the-fold visible and
          (b) not dependent on Tailwind utilities.
        */}
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --color-background: #080810;
            --color-on-background: #ede8e0;
            --color-primary: #c9a97a;
            --color-surface: #0f0f14;
            --color-surface-container: #161620;
            --color-outline-variant: #282018;
            --color-secondary: #b89aae;
            --color-on-surface: #ede8e0;
            --color-on-surface-variant: #a09078;
          }
          :root[data-theme="pink"] {
            --color-background: #0c0609;
            --color-on-background: #f0e4ec;
            --color-primary: #e896b0;
            --color-surface: #160c14;
            --color-surface-container: #1a0e18;
            --color-outline-variant: #301828;
            --color-secondary: #c07898;
            --color-on-surface: #f0e4ec;
            --color-on-surface-variant: #a08090;
          }
          html { -webkit-font-smoothing: antialiased; }
          body {
            background-color: var(--color-background);
            color: var(--color-on-background);
            margin: 0;
            overflow-x: hidden;
          }
        `}} />
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
