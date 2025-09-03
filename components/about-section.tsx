import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Shield } from "lucide-react"

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nosotros</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              SACITE - PERÚ Comunidad Artística Nacional de carácter Sindical, somos la entidad representativa de los
              Músicos, Actores, Cantantes, Circenses, Bailarines e Intérpretes de todos los géneros Artísticos.
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Presentation */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Presentación</h3>
              <p className="text-muted-foreground mb-4">
                SACITE - PERÚ Comunidad Artística Nacional de carácter Sindical, somos la entidad representativa de los
                Músicos, Actores, Cantantes, Circenses, Bailarines e Intérpretes de todos los géneros Artísticos,
                trabajadores técnicos y administrativos del espectáculo, de acuerdo a lo estipulado en la Ley del
                Artista Intérprete y Ejecutante, Ley N° 28131.
              </p>
            </div>

            {/* History */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Reseña</h3>
              <p className="text-muted-foreground mb-4">
                El 16 de junio del 1962 se fundó la "Sociedad de Auxilios Mutuos Circense del Perú", presidida por el
                Sr. Gerardo Zavala Bonhomme, en la ciudad de Lima. Posteriormente, el 30 de abril del año 1963, cambió
                de denominación a "Sindicato de Artistas Circenses del Perú".
              </p>
            </div>
          </div>

          {/* Values cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Objetivo</h4>
                <p className="text-sm text-muted-foreground">
                  Defender y hacer cumplir los derechos y beneficios de los Artistas y del personal técnico del
                  espectáculo.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Visión</h4>
                <p className="text-sm text-muted-foreground">
                  Ser reconocidos como un sindicato consolidado a nivel nacional, que proteja los derechos de los
                  trabajadores del espectáculo.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Misión</h4>
                <p className="text-sm text-muted-foreground">
                  Lograr las mejores oportunidades profesionales y/o laborales para los trabajadores del espectáculo.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Valores</h4>
                <p className="text-sm text-muted-foreground">
                  Honestidad, Responsabilidad, Compromiso, Humildad, Esperanza.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
