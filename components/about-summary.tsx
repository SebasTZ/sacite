import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutSummary() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-sacite-black mb-6">Sobre SACITE</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Desde 1962, la Comunidad Artística SACITE PERÚ defiende los derechos de músicos, actores, cantantes,
            circenses, bailarines e intérpretes de todos los géneros artísticos, fortaleciendo la posición de los
            artistas en la sociedad.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-sacite-red mb-2">60+</div>
              <div className="text-gray-600">Años de historia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sacite-yellow mb-2">1000+</div>
              <div className="text-gray-600">Artistas afiliados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sacite-red mb-2">24/7</div>
              <div className="text-gray-600">Defensa artística</div>
            </div>
          </div>
          <Button asChild className="bg-sacite-red hover:bg-sacite-red/90">
            <Link href="/nosotros">Conoce más sobre nosotros</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
