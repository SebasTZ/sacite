import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AboutSummary } from "@/components/about-summary"
import { ArtistsSummary } from "@/components/artists-summary"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSummary />
        <ArtistsSummary />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
