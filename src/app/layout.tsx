import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/*
           Absolute Performance: Load fonts via static HTML link and preconnect 
           to kill the Next.js Font JS runtime (~5KB savings).
        */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;600;800&family=Newsreader:ital,opsz,wght@0,6..72,200;0,6..72,400;0,6..72,700;1,6..72,200;1,6..72,400;1,6..72,700&display=swap" 
          rel="stylesheet" 
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
        {children}
      </body>
    </html>
  )
}
