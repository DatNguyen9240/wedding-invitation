import NavbarStatic from '@/components/NavbarStatic'
import FooterShared from '@/components/FooterShared'
import HeroSection from '@/components/sections/HeroSection'
import GallerySection from '@/components/sections/GallerySection'
import AtelierSection from '@/components/sections/AtelierSection'
import QuoteSection from '@/components/sections/QuoteSection'

export default function LandingPage() {
  return (
    <>
      <NavbarStatic />
      <main className="lg:pl-20">
        <HeroSection />
        <GallerySection />
        <AtelierSection />
        <QuoteSection />
        <FooterShared variant="full" />
      </main>
    </>
  )
}
