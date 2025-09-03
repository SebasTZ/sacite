"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Star, Phone, Mail, Instagram, Facebook, MapPin, Clock, Award, Camera, Package, DollarSign } from "lucide-react"
import { QuoteModal } from "@/components/quote-modal"
import { getArtistById, type Artist } from "@/lib/artists"
import ReactMarkdown from "react-markdown"

interface ArtistProfileProps {
  artistId: string
}

export function ArtistProfile({ artistId }: ArtistProfileProps) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<any>(null)
  const [artist, setArtist] = useState<Artist | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadArtist = async () => {
      try {
        const artistData = getArtistById(artistId)
        setArtist(artistData)
      } catch (error) {
        console.error("Error loading artist:", error)
        setArtist(null)
      } finally {
        setLoading(false)
      }
    }
    loadArtist()
  }, [artistId])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Cargando perfil del artista...</p>
        </div>
      </div>
    )
  }

  if (!artist) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Artista no encontrado</h1>
          <p className="text-muted-foreground">El perfil que buscas no existe o ha sido removido.</p>
        </div>
      </div>
    )
  }

  const handleQuoteRequest = (packageData: any) => {
    setSelectedPackage(packageData)
    setIsQuoteModalOpen(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Artist Header */}
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-1">
          <img
            src={artist.image || "/placeholder.svg"}
            alt={artist.name}
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-primary text-primary-foreground">{artist.category}</Badge>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < artist.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                />
              ))}
              <span className="text-sm text-muted-foreground ml-2">({artist.rating}.0)</span>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-2">{artist.name}</h1>
          <p className="text-xl text-primary font-medium mb-4">{artist.specialty}</p>

          <div className="text-muted-foreground mb-6 leading-relaxed prose prose-sm max-w-none">
            <ReactMarkdown>{artist.content}</ReactMarkdown>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center text-muted-foreground">
              <Clock className="h-5 w-5 mr-2" />
              <span>{artist.experience} de experiencia</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{artist.location}</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Mail className="h-5 w-5 mr-2" />
              <span>{artist.email}</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Phone className="h-5 w-5 mr-2" />
              <span>{artist.phone}</span>
            </div>
          </div>

          <div className="flex gap-4">
            <Button size="sm" variant="outline" asChild>
              <a
                href={`https://instagram.com/${artist.socialMedia.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-4 w-4 mr-2" />
                Instagram
              </a>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a href={`https://facebook.com/${artist.socialMedia.facebook}`} target="_blank" rel="noopener noreferrer">
                <Facebook className="h-4 w-4 mr-2" />
                Facebook
              </a>
            </Button>
          </div>
        </div>
      </div>

      <Separator className="my-12" />

      {/* Gallery Section */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <Camera className="h-6 w-6 mr-2 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Galería de Trabajos</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {artist.gallery.map((image: string, index: number) => (
            <img
              key={index}
              src={image || "/placeholder.svg"}
              alt={`Trabajo ${index + 1} de ${artist.name}`}
              className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          ))}
        </div>
      </section>

      <Separator className="my-12" />

      {/* Packages Section */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <Package className="h-6 w-6 mr-2 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Paquetes de Servicio</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artist.packages.map((pkg: any, index: number) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{pkg.name}</h3>
                <div className="flex items-center text-muted-foreground mb-3">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">{pkg.duration}</span>
                </div>
                <p className="text-muted-foreground mb-4">{pkg.description}</p>

                <div className="mb-4">
                  <h4 className="font-medium text-foreground mb-2">Incluye:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {pkg.includes.map((item: string, i: number) => (
                      <li key={i} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                  <Button
                    onClick={() => handleQuoteRequest({ ...artist, selectedPackage: pkg })}
                    className="bg-primary hover:bg-primary/90"
                  >
                    <DollarSign className="h-4 w-4 mr-1" />
                    Cotizar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-12" />

      {/* Achievements Section */}
      <section>
        <div className="flex items-center mb-6">
          <Award className="h-6 w-6 mr-2 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Logros y Reconocimientos</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {artist.achievements.map((achievement: string, index: number) => (
            <Card key={index} className="bg-primary/5">
              <CardContent className="p-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-primary mr-2" />
                  <span className="text-foreground">{achievement}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        artist={selectedPackage || artist}
      />
    </div>
  )
}
