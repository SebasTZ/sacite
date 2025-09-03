"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Music, Theater, Palette, Users, Star, Eye } from "lucide-react"
import Link from "next/link"
import { getAllArtists, getCategories, type Artist } from "@/lib/artists"

export function ArtistsSection() {
  const [artists, setArtists] = useState<Artist[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  useEffect(() => {
    const loadArtists = async () => {
      const artistsData = getAllArtists()
      const categoriesData = getCategories()
      setArtists(artistsData)
      setCategories(["Todos", ...categoriesData])
    }
    loadArtists()
  }, [])

  const filteredArtists =
    selectedCategory === "Todos" ? artists : artists.filter((artist) => artist.category === selectedCategory)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Musical":
        return Music
      case "Circense":
        return Users
      case "Teatro":
        return Theater
      case "Danza":
        return Palette
      case "Performance":
        return Theater
      default:
        return Users
    }
  }

  return (
    <section id="artistas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contratar Artistas</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explora los perfiles de nuestros artistas profesionales. Ve sus trabajos, paquetes y contrata
              directamente.
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Artists grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtists.map((artist) => {
              const IconComponent = getCategoryIcon(artist.category)
              return (
                <Card
                  key={artist.id}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative">
                    <img
                      src={artist.image || "/placeholder.svg"}
                      alt={artist.name}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      {artist.category}
                    </Badge>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <IconComponent className="h-5 w-5 text-primary mr-2" />
                      <h3 className="text-xl font-semibold text-foreground">{artist.name}</h3>
                    </div>

                    <p className="text-sm text-primary font-medium mb-2">{artist.specialty}</p>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {artist.content.split("\n")[0].replace(/^#+ /, "")}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < artist.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                          />
                        ))}
                        <span className="text-sm text-muted-foreground ml-2">({artist.rating}.0)</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{artist.experience}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-primary">{artist.price}</span>
                      <Button size="sm" asChild className="bg-primary hover:bg-primary/90">
                        <Link href={`/artistas/${artist.id}`}>
                          <Eye className="h-4 w-4 mr-1" />
                          Ver Perfil
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <div className="bg-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">¿Eres artista y quieres unirte?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Forma parte de nuestra comunidad artística y accede a oportunidades laborales, protección sindical y una
                red de contactos profesionales.
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <a href="https://form.jotform.com/231316496134656" target="_blank" rel="noopener noreferrer">
                  <Users className="mr-2 h-5 w-5" />
                  Únete a SACITE
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
