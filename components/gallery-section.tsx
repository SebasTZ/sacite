"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, ImageIcon, Calendar } from "lucide-react"

export function GallerySection() {
  const [activeTab, setActiveTab] = useState("fotos")

  const photos = [
    {
      id: 1,
      src: "/peruvian-mario-bros.png",
      alt: "Pasa Calle 2023 - Personajes Mario Bros",
      category: "Pasa Calle 2023",
    },
    {
      id: 2,
      src: "/peruvian-mime-artist.png",
      alt: "Artista Mimo en presentación",
      category: "Presentaciones",
    },
    {
      id: 3,
      src: "/peruvian-acrobat-circus.png",
      alt: "Acróbata en espectáculo circense",
      category: "Circo",
    },
    {
      id: 4,
      src: "/peruvian-folk-dancers.png",
      alt: "Bailarines folclóricos",
      category: "Danza",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Músicos callejeros",
      category: "Música",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Actores en presentación teatral",
      category: "Teatro",
    },
  ]

  const videos = [
    {
      id: 1,
      thumbnail: "/placeholder.svg?height=200&width=300",
      title: "Ceremonia de Premiación SACITE 2023",
      duration: "5:32",
      category: "Eventos",
    },
    {
      id: 2,
      thumbnail: "/placeholder.svg?height=200&width=300",
      title: "Mejores Momentos del Circo Peruano",
      duration: "8:15",
      category: "Circo",
    },
    {
      id: 3,
      thumbnail: "/placeholder.svg?height=200&width=300",
      title: "Reunión Directiva SACITE 2023",
      duration: "12:45",
      category: "Institucional",
    },
    {
      id: 4,
      thumbnail: "/placeholder.svg?height=200&width=300",
      title: "Festival de Artistas Callejeros",
      duration: "6:28",
      category: "Festival",
    },
  ]

  const historicalPhotos = [
    {
      id: 1,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Artistas circenses históricos - Década 1960",
      year: "1962-1970",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Músicos y artistas - Década 1970",
      year: "1970-1980",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Actores y teatristas - Década 1980",
      year: "1980-1990",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Bailarines folclóricos tradicionales",
      year: "1990-2000",
    },
  ]

  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Galería</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Revive los mejores momentos de nuestra comunidad artística a través de fotografías y videos de nuestros
              eventos y presentaciones.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-background rounded-lg p-1 shadow-sm">
              <Button
                variant={activeTab === "fotos" ? "default" : "ghost"}
                onClick={() => setActiveTab("fotos")}
                className="px-6"
              >
                <ImageIcon className="mr-2 h-4 w-4" />
                Fotos Actuales
              </Button>
              <Button
                variant={activeTab === "historicas" ? "default" : "ghost"}
                onClick={() => setActiveTab("historicas")}
                className="px-6"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Fotos Históricas
              </Button>
              <Button
                variant={activeTab === "videos" ? "default" : "ghost"}
                onClick={() => setActiveTab("videos")}
                className="px-6"
              >
                <Play className="mr-2 h-4 w-4" />
                Videos
              </Button>
            </div>
          </div>

          {/* Current Photos */}
          {activeTab === "fotos" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo) => (
                <Card
                  key={photo.id}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative group">
                    <img
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.alt}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{photo.category}</Badge>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">{photo.alt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Historical Photos */}
          {activeTab === "historicas" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {historicalPhotos.map((photo) => (
                <Card
                  key={photo.id}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative group">
                    <img
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.alt}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 sepia"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">{photo.year}</Badge>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">{photo.alt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Videos */}
          {activeTab === "videos" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <Card
                  key={video.id}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative group cursor-pointer">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                      <div className="bg-primary rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-8 w-8 text-primary-foreground fill-current" />
                      </div>
                    </div>
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{video.category}</Badge>
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">{video.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Call to action */}
          <div className="text-center mt-16">
            <div className="bg-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">¿Quieres ser parte de nuestra galería?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Únete a SACITE y participa en nuestros eventos. Tu talento podría ser el próximo en brillar en nuestra
                galería.
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <a href="https://form.jotform.com/231316496134656" target="_blank" rel="noopener noreferrer">
                  Únete Ahora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
