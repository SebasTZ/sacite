import { Card, CardContent } from "@/components/ui/card"
import { Award, Trophy, Medal, Star } from "lucide-react"

export function AchievementsSection() {
  const achievements = [
    {
      icon: Award,
      title: "Ministerio de Educación",
      description:
        "Resolución Ministerial N° 4370-1968, norma que permite que los hijos de los Artistas de circo puedan estudiar al Nivel primario en forma transitoria.",
    },
    {
      icon: Trophy,
      title: "Gestión y Promulgación",
      description:
        "De la Ley N°25168, año 2007 que exonera al circo del Impuesto para espectáculos públicos no deportivos.",
    },
    {
      icon: Medal,
      title: "Personalidad Meritoria",
      description: "Nombramiento como 'Personalidad Meritoria de la Cultura' - MINISTERIO DE CULTURA 2012.",
    },
    {
      icon: Star,
      title: "Medalla Cívica",
      description:
        "Medalla Cívica de la cultura, Entregada por la Municipalidad de Lima Metropolitana, por los 50 años de vida Institucional.",
    },
  ]

  return (
    <section id="logros" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Logros</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comunidad Artística SACITE PERÚ ha alcanzado importantes logros en la defensa de los intereses y el
              desarrollo de sus agremiados, fortaleciendo la posición de los artistas en la sociedad.
            </p>
          </div>

          {/* Achievements grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <achievement.icon className="h-12 w-12 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{achievement.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recognition section */}
          <div className="bg-primary/5 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Reconocimientos</h3>
            <p className="text-muted-foreground mb-6 max-w-4xl mx-auto">
              La Comunidad Artística SACITE PERÚ es una institución que se ha destacado por su incansable compromiso con
              el enriquecimiento cultural del Perú. Sus notables logros y contribuciones a lo largo de su historia la
              han convertido en un pilar fundamental en el mundo artístico y cultural del país.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-background rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-2">Reconocimiento al artista Circense del Perú</h4>
                <p className="text-sm text-muted-foreground">Por el Congreso de la República</p>
              </div>
              <div className="bg-background rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-2">Medalla Cívica de la Cultura</h4>
                <p className="text-sm text-muted-foreground">Municipalidad de Lima Metropolitana - 50 años</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
