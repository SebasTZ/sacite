import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react"

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Gran Festival de Artes Circenses 2024",
      excerpt:
        "Se acerca el evento más esperado del año para la comunidad circense peruana. Conoce todos los detalles y cómo participar.",
      image: "/placeholder.svg?height=250&width=400",
      date: "2024-03-15",
      category: "Eventos",
      location: "Parque de la Exposición, Lima",
      attendees: "500+ artistas",
      status: "Próximo evento",
    },
    {
      id: 2,
      title: "Taller de Capacitación: Derechos del Artista",
      excerpt:
        "Capacitación gratuita para todos los afiliados sobre derechos laborales, contratos y protección legal en el ámbito artístico.",
      image: "/placeholder.svg?height=250&width=400",
      date: "2024-02-28",
      category: "Capacitación",
      location: "Sede SACITE, Lima",
      attendees: "80 participantes",
      status: "Completado",
    },
    {
      id: 3,
      title: "Celebración 62° Aniversario SACITE",
      excerpt:
        "Celebramos 62 años defendiendo los derechos de los artistas peruanos con una gran gala artística y reconocimientos especiales.",
      image: "/placeholder.svg?height=250&width=400",
      date: "2024-06-16",
      category: "Aniversario",
      location: "Teatro Municipal, Lima",
      attendees: "300 invitados",
      status: "Evento realizado",
    },
    {
      id: 4,
      title: "Encuentro Nacional de Artistas Folclóricos",
      excerpt:
        "Reunión anual de bailarines y músicos folclóricos de todo el Perú para intercambiar experiencias y preservar nuestras tradiciones.",
      image: "/placeholder.svg?height=250&width=400",
      date: "2024-04-20",
      category: "Folclore",
      location: "Centro de Convenciones, Cusco",
      attendees: "200+ artistas",
      status: "Próximo evento",
    },
    {
      id: 5,
      title: "Campaña de Afiliación 2024",
      excerpt:
        "Lanzamos nuestra campaña anual de afiliación con beneficios especiales para nuevos miembros y descuentos en servicios.",
      image: "/placeholder.svg?height=250&width=400",
      date: "2024-01-15",
      category: "Afiliación",
      location: "A nivel nacional",
      attendees: "Abierto a todos",
      status: "En curso",
    },
    {
      id: 6,
      title: "Feria de Oportunidades Laborales",
      excerpt:
        "Conectamos a nuestros artistas afiliados con empresas y organizadores de eventos en busca de talento profesional.",
      image: "/placeholder.svg?height=250&width=400",
      date: "2024-05-10",
      category: "Empleo",
      location: "Centro de Convenciones, Lima",
      attendees: "150+ empresas",
      status: "Próximo evento",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Próximo evento":
        return "bg-blue-500"
      case "En curso":
        return "bg-green-500"
      case "Completado":
      case "Evento realizado":
        return "bg-gray-500"
      default:
        return "bg-primary"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Eventos":
        return "bg-primary"
      case "Capacitación":
        return "bg-blue-500"
      case "Aniversario":
        return "bg-yellow-500"
      case "Folclore":
        return "bg-green-500"
      case "Afiliación":
        return "bg-purple-500"
      case "Empleo":
        return "bg-orange-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Blog de Eventos</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Mantente informado sobre todas las actividades, eventos y noticias de la comunidad artística SACITE PERÚ.
            </p>
          </div>

          {/* Featured post */}
          <div className="mb-16">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <Badge className={`${getCategoryColor(blogPosts[0].category)} text-white`}>
                      {blogPosts[0].category}
                    </Badge>
                    <Badge className={`${getStatusColor(blogPosts[0].status)} text-white`}>{blogPosts[0].status}</Badge>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{blogPosts[0].title}</h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(blogPosts[0].date).toLocaleDateString("es-PE", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {blogPosts[0].location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      {blogPosts[0].attendees}
                    </div>
                  </div>

                  <Button className="bg-primary hover:bg-primary/90">
                    Leer más
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Blog posts grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <Badge className={`${getCategoryColor(post.category)} text-white`}>{post.category}</Badge>
                  </div>
                  <Badge className={`absolute top-4 right-4 ${getStatusColor(post.status)} text-white`}>
                    {post.status}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">{post.title}</h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.date).toLocaleDateString("es-PE", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3 mr-1" />
                      {post.location}
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Leer más
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter signup */}
          <div className="mt-16">
            <div className="bg-primary/5 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">No te pierdas ningún evento</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Suscríbete a nuestro boletín y recibe notificaciones sobre todos los eventos, talleres y oportunidades
                para artistas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Tu email aquí"
                  className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground"
                />
                <Button className="bg-primary hover:bg-primary/90 px-6">Suscribirse</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
