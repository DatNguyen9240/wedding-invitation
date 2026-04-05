'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FILTERS, TEMPLATES, type Height } from './_data'

const ASPECT: Record<Height, string> = {
  tall: 'aspect-[3/4]',
  med: 'aspect-[4/5]',
  short: 'aspect-[4/3]',
}

function TemplateCard({
  id, name, subtitle, height, src, alt, index,
}: { id: string; name: string; subtitle: string; height: Height; src: string; alt: string; index: number }) {
  // First 3 cards fill the above-fold viewport on initial load — eager + high priority.
  // Cards 4+ are below the fold — lazy load to avoid competing with LCP.
  const isAboveFold = index <= 3
  return (
    <div className="break-inside-avoid mb-5 group cursor-pointer">
      <Link href={`/editor/${id}`} className="block">
        <div className={`relative overflow-hidden ${ASPECT[height]}`}>
          <Image
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            src={src}
            alt={alt}
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            priority={isAboveFold}
            loading={isAboveFold ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={isAboveFold ? 'high' : 'low'}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <div className="font-body text-[9px] uppercase tracking-[0.4em] text-secondary mb-2">
              {String(index).padStart(2, '0')}
            </div>
            <h3 className="font-serif text-xl leading-tight text-on-surface mb-1">{name}</h3>
            <p className="font-body text-[9px] uppercase tracking-widest text-on-surface opacity-0 group-hover:opacity-100 transition-opacity duration-400">
              {subtitle}
            </p>
          </div>

          {/* Top-right Select CTA */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
            <span className="font-body text-[9px] uppercase tracking-widest bg-primary text-on-primary px-4 py-2">
              Select
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

/** Filter bar + masonry grid — needs client state for active filter. */
export default function FilterGrid() {
  const [activeFilter, setActiveFilter] = useState<string>('All')

  const filtered = activeFilter === 'All'
    ? TEMPLATES
    : TEMPLATES.filter(t => t.category === activeFilter)

  return (
    <>
      {/* Filters */}
      <div className="flex gap-8 md:gap-12 px-8 lg:px-16 py-6 border-b border-outline-variant/10 overflow-x-auto">
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`font-body text-[10px] uppercase tracking-[0.25em] whitespace-nowrap transition-all duration-200 pb-0.5 flex-shrink-0 ${activeFilter === f
              ? 'text-primary border-b border-primary'
              : 'text-on-surface border-b border-transparent hover:text-primary'
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Masonry Grid (CSS columns) */}
      <div className="px-8 lg:px-16 py-10">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {filtered.map((t, i) => (
            <TemplateCard key={t.id} {...t} index={i + 1} />
          ))}
        </div>
      </div>
    </>
  )
}
