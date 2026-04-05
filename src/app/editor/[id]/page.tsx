'use client'

import Image from 'next/image'
import { use, useState } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Label from '@/components/ui/Label'
import IconButton from '@/components/ui/IconButton'
import {
  TOOLS,
  ALIGN_ICONS,
  RATIOS,
  CORNERS,
  SWATCHES,
  TYPE_ROWS
} from '@/constants/editor'

type PanelTab = 'Layout' | 'Style' | 'Media'



export default function EditorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [activeTool, setActiveTool] = useState('grid_view')
  const [activePanel, setActivePanel] = useState<PanelTab>('Layout')
  const [activeRatio, setActiveRatio] = useState('3:4')
  const [activeAlign, setActiveAlign] = useState(1)
  const [activeCorner, setActiveCorner] = useState('Sharp')

  return (
    <div className="flex h-screen overflow-hidden bg-surface-container-lowest text-on-surface">

      {/* ── LEFT SIDEBAR ──────────────────────────────── */}
      <nav className="fixed left-0 top-0 z-40 h-screen w-14 flex flex-col items-center bg-surface border-r border-outline-variant/10">

        {/* Logo mark */}
        <div className="h-14 flex items-center justify-center w-full border-b border-outline-variant/10 flex-shrink-0">
          <Link href="/" className="font-serif italic text-secondary text-sm hover:text-primary transition-colors">
            EB
          </Link>
        </div>

        {/* Tool list */}
        <div className="flex-1 flex flex-col w-full pt-2">
          {TOOLS.map(tool => (
            <button
              key={tool.icon}
              onClick={() => setActiveTool(tool.icon)}
              className={`relative flex flex-col items-center gap-1 py-3 w-full transition-all duration-200 ${activeTool === tool.icon
                  ? 'text-primary bg-surface-container'
                  : 'text-outline hover:text-on-surface hover:bg-surface-container/40'
                }`}
              aria-label={tool.label}
              title={tool.label}
            >
              {activeTool === tool.icon && (
                <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary" />
              )}
              <span className="material-symbols-outlined" style={{ fontSize: '17px' }}>{tool.icon}</span>
              <span className="text-[7px] uppercase tracking-wide">{tool.label}</span>
            </button>
          ))}
        </div>

        {/* Bottom user icon */}
        <div className="flex-shrink-0 pb-5 pt-3 border-t border-outline-variant/10 w-full flex justify-center">
          <button className="text-outline hover:text-secondary transition-colors" aria-label="Account">
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>account_circle</span>
          </button>
        </div>
      </nav>

      {/* ── MAIN WORKSPACE ────────────────────────────── */}
      <main className="flex-1 ml-14 flex flex-col h-full overflow-hidden">

        {/* Top bar */}
        <header className="flex-shrink-0 h-14 flex items-center justify-between px-6 bg-surface border-b border-outline-variant/10 z-30">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 font-body text-[9px] uppercase tracking-widest text-on-surface-variant">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <span className="text-outline">/</span>
            <Link href="/templates" className="hover:text-secondary transition-colors">Gallery</Link>
            <span className="text-outline">/</span>
            <span className="text-on-surface">Editor</span>
          </div>

          {/* Tab nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: 'Gallery', href: '/templates' },
              { label: 'Editor', href: `/editor/${id}`, active: true },
              { label: 'Preview', href: `/preview/${id}` },
            ].map(link => (
              <Link
                key={link.label}
                href={link.href}
                className={`font-body text-[9px] uppercase tracking-widest pb-0.5 transition-colors ${link.active
                    ? 'text-primary border-b border-primary'
                    : 'text-outline hover:text-on-surface border-b border-transparent'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="outline" href={`/preview/${id}`} className="px-4 py-1.5 text-[9px]">
              Preview
            </Button>
            <Button variant="primary" className="px-4 py-1.5 text-[9px]">
              Publish
            </Button>
          </div>
        </header>

        {/* Canvas */}
        <section className="flex-1 flex items-center justify-center relative overflow-auto bg-canvas">
          {/* Invitation card */}
          <div
            className="relative flex-shrink-0"
            style={{
              width: '460px',
              aspectRatio: '3/4',
              boxShadow: '0 80px 140px -30px rgba(0,0,0,0.9), 0 20px 40px -10px rgba(0,0,0,0.5)',
            }}
          >
            {/* Card body */}
            <div className="absolute inset-0 bg-surface-container-lowest" />

            {/* Corner brackets */}
            {(['top-2 left-2 border-t border-l', 'top-2 right-2 border-t border-r', 'bottom-2 left-2 border-b border-l', 'bottom-2 right-2 border-b border-r'] as const).map((cls) => (
              <div key={cls} className={`absolute ${cls} w-5 h-5 border-primary/30`} />
            ))}

            {/* Inner frame */}
            <div className="absolute inset-4 border border-primary/12 pointer-events-none" />

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col items-center text-center">
              <p className="font-serif italic text-secondary text-[9px] tracking-[0.35em] mb-5 mt-2">
                together with their families
              </p>

              <div className="relative w-full flex-shrink-0 mb-6 grayscale" style={{ height: '210px' }}>
                <Image
                  fill
                  className="object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1fF2kG9rHhCNqSXVA6dBYdcpZXjqeLAHvT2-FO53CVlU4kaWdSkXJwhefTceT-L9HgTL9JGu01QaNJfR5mcjGlO80EG857mM7JR5Y8UE4aI41w-mHo7DN2W9KP2S0fLXo8C5_1v5zTA6AqdONQ_iyfHCW2Hn5asvuPdTZcRKFVTJ8OYsPFhZ82eedxphRqH6NF6UWrsN1lPwW8oIChg9o6d5EWbKFrgWP7CSbHFnsEwfjBE15y_WFx4CxO2n8wHsxDUYxJPzF-Uwd"
                  alt="Wedding Couple Portrait"
                  sizes="480px"
                />
              </div>

              {/* Decorative rule */}
              <div className="flex items-center gap-3 w-full mb-5">
                <div className="h-px flex-1 bg-primary/20" />
                <span className="text-primary/40" style={{ fontSize: '8px' }}>✦</span>
                <div className="h-px flex-1 bg-primary/20" />
              </div>

              <h1 className="font-serif text-[28px] text-on-surface tracking-tight leading-none mb-2">
                Clara &amp; Julian
              </h1>
              <p className="font-body text-[8px] uppercase tracking-[0.3em] text-on-surface-variant mb-6">
                request the honour of your presence
              </p>

              <div className="mt-auto space-y-1.5">
                <p className="font-body text-[8px] tracking-[0.35em] uppercase text-secondary">Saturday, October 12th, 2026</p>
                <p className="font-body text-[8px] tracking-[0.25em] uppercase text-outline">at six o&apos;clock in the evening</p>
                <p className="font-serif text-sm text-on-surface mt-3">The Glasshouse Atelier</p>
                <p className="font-body text-[8px] tracking-widest uppercase text-outline">New York City</p>
              </div>
            </div>
          </div>

          {/* Zoom controls */}
          <div className="absolute bottom-6 right-6 flex gap-1.5">
            {['zoom_out', 'zoom_in', 'fullscreen'].map(icon => (
              <button
                key={icon}
                className="w-8 h-8 flex items-center justify-center border border-outline-variant/20 text-outline hover:text-secondary hover:border-secondary/30 transition-all bg-surface-container-lowest/60 backdrop-blur-sm"
                aria-label={icon}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>{icon}</span>
              </button>
            ))}
          </div>

          {/* Zoom level */}
          <div className="absolute bottom-6 left-6 flex items-center gap-2 font-body text-[9px] text-outline uppercase tracking-widest">
            <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>fit_page</span>
            85%
          </div>
        </section>

        {/* Bottom status bar */}
        <footer className="flex-shrink-0 h-11 flex items-center justify-between px-6 bg-surface border-t border-outline-variant/10">
          <div className="flex items-center gap-5">
            <span className="font-body text-[9px] uppercase tracking-widest text-outline">Theme</span>
            <div className="flex gap-1.5">
              {['bg-surface-container-lowest', 'bg-primary', 'bg-secondary'].map((c, i) => (
                <div key={i} className={`w-2.5 h-2.5 ${c} border border-outline-variant/20`} />
              ))}
            </div>
            <span className="font-serif text-sm text-on-surface">Midnight Velvet</span>
          </div>
          <div className="flex items-center gap-2 font-body text-[9px] text-outline uppercase tracking-widest">
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '12px' }}>cloud_done</span>
            Saved
          </div>
        </footer>
      </main>

      {/* ── RIGHT PANEL ───────────────────────────────── */}
      <aside className="fixed right-0 top-0 bottom-0 w-68 hidden xl:flex flex-col bg-surface border-l border-outline-variant/10 z-20" style={{ width: '260px', top: '56px', bottom: '44px' }}>

        {/* Panel tabs */}
        <div className="flex border-b border-outline-variant/10 flex-shrink-0">
          {(['Layout', 'Style', 'Media'] as PanelTab[]).map(tab => (
            <button
              key={tab}
              onClick={() => setActivePanel(tab)}
              className={`flex-1 py-3 font-body text-[9px] uppercase tracking-widest transition-colors ${activePanel === tab
                  ? 'text-primary border-b border-primary'
                  : 'text-outline hover:text-on-surface'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Panel body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-7">

          {/* ── LAYOUT TAB ── */}
          {activePanel === 'Layout' && (
            <>
              <div className="space-y-3">
                <Label>Alignment</Label>
                <div className="flex gap-1.5">
                  {ALIGN_ICONS.map((icon, i) => (
                    <IconButton
                      key={icon}
                      icon={icon}
                      active={activeAlign === i}
                      onClick={() => setActiveAlign(i)}
                      size="sm"
                      className="flex-1 h-9"
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label>Card Proportions</Label>
                <div className="grid grid-cols-3 gap-1.5">
                  {RATIOS.map(r => (
                    <button
                      key={r}
                      onClick={() => setActiveRatio(r)}
                      className={`py-2 font-body text-[9px] border transition-colors ${activeRatio === r
                          ? 'border-primary text-primary bg-primary/5'
                          : 'border-outline-variant/20 text-outline hover:border-secondary/40 hover:text-on-surface'
                        }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label>Typography</Label>
                <div className="divide-y divide-outline-variant/10">
                  {TYPE_ROWS.map(row => (
                    <div key={row.label} className="flex justify-between items-center py-2.5">
                      <span className="font-body text-[10px] text-on-surface-variant">{row.label}</span>
                      <div className="text-right">
                        <div className="font-body text-[10px] text-secondary">{row.value}</div>
                        <div className="font-body text-[8px] text-outline">{row.size}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* ── STYLE TAB ── */}
          {activePanel === 'Style' && (
            <>
              <div className="space-y-3">
                <Label>Color Palette</Label>
                <div className="flex gap-2">
                  {SWATCHES.map(c => (
                    <button
                      key={c}
                      className="w-8 h-8 border border-outline-variant/20 hover:ring-1 hover:ring-secondary/60 hover:scale-110 transition-all duration-200"
                      style={{ backgroundColor: c }}
                      title={c}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label>Corner Style</Label>
                <div className="grid grid-cols-3 gap-1.5">
                  {CORNERS.map(c => (
                    <button
                      key={c}
                      onClick={() => setActiveCorner(c)}
                      className={`py-2 font-body text-[9px] border transition-colors ${activeCorner === c
                          ? 'border-primary text-primary bg-primary/5'
                          : 'border-outline-variant/20 text-outline hover:border-secondary/40'
                        }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label>Text Color</Label>
                <div className="flex gap-2">
                  {['#ede8e0', '#c9a97a', '#b89aae', '#7ab4b0'].map(c => (
                    <button
                      key={c}
                      className="w-8 h-8 border border-outline-variant/20 hover:ring-1 hover:ring-secondary/60 transition-all"
                      style={{ backgroundColor: c }}
                      title={c}
                    />
                  ))}
                </div>
              </div>
            </>
          )}

          {/* ── MEDIA TAB ── */}
          {activePanel === 'Media' && (
            <>
              {/* Current photo */}
              <div className="space-y-2">
                <Label>Current Photo</Label>
                <div className="relative overflow-hidden aspect-[3/2] bg-surface-container">
                  <Image
                    fill
                    className="object-cover grayscale"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1fF2kG9rHhCNqSXVA6dBYdcpZXjqeLAHvT2-FO53CVlU4kaWdSkXJwhefTceT-L9HgTL9JGu01QaNJfR5mcjGlO80EG857mM7JR5Y8UE4aI41w-mHo7DN2W9KP2S0fLXo8C5_1v5zTA6AqdONQ_iyfHCW2Hn5asvuPdTZcRKFVTJ8OYsPFhZ82eedxphRqH6NF6UWrsN1lPwW8oIChg9o6d5EWbKFrgWP7CSbHFnsEwfjBE15y_WFx4CxO2n8wHsxDUYxJPzF-Uwd"
                    alt="Portrait thumbnail"
                    sizes="260px"
                  />
                  <div className="absolute inset-0 flex items-end p-3">
                    <span className="font-body text-[8px] uppercase tracking-widest text-on-surface bg-surface-container-lowest/80 px-2 py-1">
                      Clara &amp; Julian
                    </span>
                  </div>
                </div>
              </div>

              {/* Drop zone */}
              <div className="border border-dashed border-outline-variant/30 p-8 text-center cursor-pointer hover:border-secondary/40 hover:bg-surface-container/20 transition-all duration-300">
                <span className="material-symbols-outlined text-outline mb-2 block" style={{ fontSize: '24px' }}>upload_file</span>
                <p className="font-body text-[9px] uppercase tracking-widest text-outline">Replace Photo</p>
                <p className="font-body text-[8px] text-outline/50 mt-1">JPG · PNG · WEBP</p>
              </div>
            </>
          )}
        </div>
      </aside>
    </div>
  )
}
