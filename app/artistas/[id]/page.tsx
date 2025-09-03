import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ArtistProfile } from "@/components/artist-profile"

interface ArtistPageProps {
  params: {
    id: string
  }
}

export default function ArtistPage({ params }: ArtistPageProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <ArtistProfile artistId={params.id} />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
