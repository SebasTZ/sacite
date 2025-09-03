import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Music, Theater, Palette } from "lucide-react"

export function ArtistsSummary() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-sacite-black mb-6">Nuestros Artistas</h2>
          <p className="text-lg text-gray-600 mb-12">
            Conoce a los talentosos artistas afiliados a SACITE y contrata sus servicios para tus eventos especiales.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <Music className="w-16 h-16 text-sacite-red mx-auto mb-4" />
              <h3 className="font-semibold text-sacite-black mb-2">Músicos</h3>
              <p className="text-gray-600 text-sm">Solistas, bandas y agrupaciones de todos los géneros musicales</p>
            </div>
            <div className="text-center">
              <Theater className="w-16 h-16 text-sacite-yellow mx-auto mb-4" />
              <h3 className="font-semibold text-sacite-black mb-2">Artistas Escénicos</h3>
              <p className="text-gray-600 text-sm">Actores, mimos, circenses y performers de artes escénicas</p>
            </div>
            <div className="text-center">
              <Palette className="w-16 h-16 text-sacite-red mx-auto mb-4" />
              <h3 className="font-semibold text-sacite-black mb-2">Artistas Visuales</h3>
              <p className="text-gray-600 text-sm">Pintores, escultores y artistas de diversas disciplinas visuales</p>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              asChild
              variant="outline"
              className="border-sacite-yellow text-sacite-yellow hover:bg-sacite-yellow hover:text-white bg-transparent"
            >
              <Link href="/artistas#cotizar">Cotizar un show</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
