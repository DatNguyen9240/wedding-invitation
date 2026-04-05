// Server Component — no 'use client'. Only the interactive sub-components are client-side.
// This lets Next.js stream the editorial header as static HTML before JS loads,
// improving FCP and reducing the JS bundle size for the /templates route.
import { ThemeProvider } from '@/context/ThemeContext'
import Navbar from '@/components/Navbar'
import FooterShared from '@/components/FooterShared'
import TemplateCarousel from './_carousel'
import FilterGrid from './_filter-grid'
import { TEMPLATES } from './_data'

export const metadata = {
  title: 'The Curated Gallery — Eternal Bloom',
  description: 'Browse our curated collection of luxury wedding invitation designs. From hand-pressed gold foil to translucent vellum, find the perfect template for your celebration.',
}

export default function TemplatesPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="min-h-screen pt-14 lg:pl-16">

        {/* Editorial Header — server-rendered static HTML, no JS needed */}
        <header className="border-b border-outline-variant/20 px-8 lg:px-16 pt-16 pb-12 overflow-hidden">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-body text-[9px] uppercase tracking-[0.5em] text-secondary">Volume I</span>
            <span className="h-px w-10 bg-secondary/30" />
            <span className="font-body text-[9px] uppercase tracking-[0.4em] text-on-surface">
              {TEMPLATES.length} Designs
            </span>
          </div>
          <h1
            className="font-serif leading-[0.88] tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 9rem)' }}
          >
            The<br />
            <span className="italic font-extralight text-on-surface-variant">Curated</span><br />
            Gallery
          </h1>
        </header>

        {/* Featured Carousel — client component (useRef, useState, IntersectionObserver) */}
        <TemplateCarousel />

        {/* Filter bar + masonry grid — client component (useState for activeFilter) */}
        <FilterGrid />

      </main>

      <FooterShared variant="full" />
    </ThemeProvider>
  )
}
