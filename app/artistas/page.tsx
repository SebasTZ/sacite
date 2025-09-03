import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ArtistsSection } from "@/components/artists-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Star, CheckCircle, Phone, Mail } from "lucide-react"

export default function ArtistasPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="py-16 bg-gradient-to-r from-primary/10 via-background to-secondary/10">
          <div className="container-responsive">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Contrata Artistas <span className="text-primary">Profesionales</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Encuentra y contrata a los mejores artistas peruanos certificados por SACITE. Calidad garantizada y
                respaldo profesional.
              </p>

              <div className="bg-background rounded-2xl shadow-xl p-6 border">
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="relative md:col-span-2">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <Input placeholder="Buscar por nombre o especialidad..." className="pl-10 h-12 text-lg" />
                  </div>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos</SelectItem>
                      <SelectItem value="musicos">Músicos</SelectItem>
                      <SelectItem value="cantantes">Cantantes</SelectItem>
                      <SelectItem value="bailarines">Bailarines</SelectItem>
                      <SelectItem value="circenses">Circenses</SelectItem>
                      <SelectItem value="actores">Actores</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button size="lg" className="h-12 btn-primary">
                    <Search className="w-5 h-5 mr-2" />
                    Buscar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card/30">
          <div className="container-responsive">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Proceso de Contratación</h2>
              <p className="text-lg text-muted-foreground">Simple, rápido y seguro</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Explora", desc: "Navega por nuestro catálogo de artistas", icon: Search },
                {
                  step: "2",
                  title: "Selecciona",
                  desc: "Elige el artista que mejor se adapte a tu evento",
                  icon: CheckCircle,
                },
                { step: "3", title: "Contacta", desc: "Comunícate directamente para coordinar detalles", icon: Phone },
                { step: "4", title: "Contrata", desc: "Confirma la contratación con respaldo de SACITE", icon: Star },
              ].map(({ step, title, desc, icon: Icon }) => (
                <Card key={step} className="text-center shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-2">{step}</div>
                    <h3 className="font-bold text-foreground mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-responsive">
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <Card className="sticky top-24 shadow-lg border-0">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-4 flex items-center">
                      <Filter className="w-5 h-5 mr-2" />
                      Filtros
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Ubicación</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar ciudad" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="lima">Lima</SelectItem>
                            <SelectItem value="arequipa">Arequipa</SelectItem>
                            <SelectItem value="cusco">Cusco</SelectItem>
                            <SelectItem value="trujillo">Trujillo</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Precio</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Rango de precio" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-500">S/ 0 - 500</SelectItem>
                            <SelectItem value="500-1000">S/ 500 - 1,000</SelectItem>
                            <SelectItem value="1000-2000">S/ 1,000 - 2,000</SelectItem>
                            <SelectItem value="2000+">S/ 2,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Disponibilidad</label>
                        <div className="space-y-2">
                          {["Inmediata", "Esta semana", "Este mes"].map((option) => (
                            <label key={option} className="flex items-center">
                              <input type="checkbox" className="mr-2" />
                              <span className="text-sm">{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Calificación</label>
                        <div className="space-y-2">
                          {[5, 4, 3].map((stars) => (
                            <label key={stars} className="flex items-center">
                              <input type="checkbox" className="mr-2" />
                              <div className="flex items-center">
                                {Array.from({ length: stars }).map((_, i) => (
                                  <Star key={i} className="w-4 h-4 text-accent fill-current" />
                                ))}
                                <span className="text-sm ml-1">y más</span>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-3">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-foreground">Artistas Disponibles</h2>
                  <Select>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Ordenar por" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevancia">Relevancia</SelectItem>
                      <SelectItem value="precio-asc">Precio: Menor a Mayor</SelectItem>
                      <SelectItem value="precio-desc">Precio: Mayor a Menor</SelectItem>
                      <SelectItem value="calificacion">Mejor Calificados</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <ArtistsSection />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-responsive text-center">
            <h2 className="text-3xl font-bold mb-4">¿Necesitas ayuda para elegir?</h2>
            <p className="text-xl mb-8 opacity-90">
              Nuestro equipo te ayuda a encontrar el artista perfecto para tu evento
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                <a
                  href="https://api.whatsapp.com/send/?phone=51981394905&text=Necesito+ayuda+para+contratar+un+artista&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contactar por WhatsApp
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Mail className="w-5 h-5 mr-2" />
                Enviar consulta por email
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
