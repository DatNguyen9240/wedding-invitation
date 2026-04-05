import NavbarStatic from '@/components/NavbarStatic'
import HeroSection from '@/components/sections/HeroSection'
import AtelierSection from '@/components/sections/AtelierSection'
import GallerySection from '@/components/sections/GallerySection'
import QuoteSection from '@/components/sections/QuoteSection'
import FooterShared from '@/components/FooterShared'

// Reverted to static imports for all sections to minimize JS runtime.
// In App Router, Server Components don't need 'dynamic' for zero-JS.
// This eliminates the dynamic loader overhead and shrinks the shared bundle.

export default function LandingPage() {
  return (
    <>
      <NavbarStatic />
      <main className="lg:pl-16">
        <HeroSection />
        <AtelierSection />
        <GallerySection />
        <QuoteSection />
      </main>
      <FooterShared />
    </>
  )
}
