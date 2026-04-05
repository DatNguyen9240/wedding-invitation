import dynamic from 'next/dynamic'
import NavbarStatic from '@/components/NavbarStatic'
import HeroSection from '@/components/sections/HeroSection'

// Dynamic imports for sections below the fold to split the JS bundle
// and defer hydration priority for non-critical elements.
const AtelierSection = dynamic(() => import('@/components/sections/AtelierSection'), { ssr: true })
const GallerySection = dynamic(() => import('@/components/sections/GallerySection'), { ssr: true })
const QuoteSection = dynamic(() => import('@/components/sections/QuoteSection'), { ssr: true })
const FooterShared = dynamic(() => import('@/components/FooterShared'), { ssr: true })

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
