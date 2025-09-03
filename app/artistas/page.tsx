"use client";
import { useState, useMemo, useRef } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ArtistsSection } from "@/components/artists-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, Star, CheckCircle, Phone, Mail } from "lucide-react";
import { getAllArtists } from "@/lib/artists";

export default function ArtistasPage() {
  // Estado de filtros y búsqueda
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("todos");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [availability, setAvailability] = useState<string[]>([]);
  const [ratings, setRatings] = useState<number[]>([]);
  const [sort, setSort] = useState("");

  // Cachear la lista total de artistas en un ref
  const allArtistsRef = useRef(getAllArtists());

  // Filtrado sobre la lista cacheada
  const filteredArtists = useMemo(() => {
    let result = [...allArtistsRef.current];
    // Búsqueda por nombre/especialidad
    if (search.trim()) {
      const s = search.trim().toLowerCase();
      result = result.filter(
        (a) =>
          a.name.toLowerCase().includes(s) ||
          a.specialty.toLowerCase().includes(s)
      );
    }
    // Categoría
    if (category !== "todos") {
      result = result.filter((a) =>
        a.category.toLowerCase().includes(category)
      );
    }
    // Ubicación
    if (location && location !== "todas") {
      result = result.filter((a) =>
        a.location.toLowerCase().includes(location)
      );
    }
    // Precio
    if (price && price !== "todos") {
      result = result.filter((a) => {
        const priceStr = a.price.replace(/[^\d]/g, "");
        const priceNum = parseInt(priceStr);
        if (price === "0-500") return priceNum <= 500;
        if (price === "500-1000") return priceNum > 500 && priceNum <= 1000;
        if (price === "1000-2000") return priceNum > 1000 && priceNum <= 2000;
        if (price === "2000+") return priceNum > 2000;
        return true;
      });
    }
    // Calificación
    if (ratings.length > 0) {
      result = result.filter((a) => ratings.some((r) => a.rating >= r));
    }
    // Ordenamiento
    if (sort && sort !== "relevancia") {
      if (sort === "precio-asc") {
        result = result.sort((a, b) => {
          const pa = parseInt(a.price.replace(/[^\d]/g, ""));
          const pb = parseInt(b.price.replace(/[^\d]/g, ""));
          return pa - pb;
        });
      } else if (sort === "precio-desc") {
        result = result.sort((a, b) => {
          const pa = parseInt(a.price.replace(/[^\d]/g, ""));
          const pb = parseInt(b.price.replace(/[^\d]/g, ""));
          return pb - pa;
        });
      } else if (sort === "calificacion") {
        result = result.sort((a, b) => b.rating - a.rating);
      }
    }
    // Disponibilidad: (no implementado, placeholder)
    // Si tienes datos de disponibilidad, aquí puedes filtrar
    return result;
  }, [search, category, location, price, ratings, sort]);

  // Handlers
  const handleAvailability = (option: string) => {
    setAvailability((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };
  const handleRating = (stars: number) => {
    setRatings((prev) =>
      prev.includes(stars) ? prev.filter((r) => r !== stars) : [...prev, stars]
    );
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="py-16 bg-gradient-to-r from-primary/10 via-background to-secondary/10">
          <div className="container-responsive">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Contrata Artistas{" "}
                <span className="text-primary">Profesionales</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Encuentra y contrata a los mejores artistas peruanos
                certificados por SACITE. Calidad garantizada y respaldo
                profesional.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card/30">
          <div className="container-responsive">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Proceso de Contratación
              </h2>
              <p className="text-lg text-muted-foreground">
                Simple, rápido y seguro
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Explora",
                  desc: "Navega por nuestro catálogo de artistas",
                  icon: Search,
                },
                {
                  step: "2",
                  title: "Selecciona",
                  desc: "Elige el artista que mejor se adapte a tu evento",
                  icon: CheckCircle,
                },
                {
                  step: "3",
                  title: "Contacta",
                  desc: "Comunícate directamente para coordinar detalles",
                  icon: Phone,
                },
                {
                  step: "4",
                  title: "Contrata",
                  desc: "Confirma la contratación con respaldo de SACITE",
                  icon: Star,
                },
              ].map(({ step, title, desc, icon: Icon }) => (
                <Card
                  key={step}
                  className="text-center shadow-lg border-0 hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-2">
                      {step}
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-background to-card/20">
          <div className="container-responsive">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Buscar Artistas
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Utiliza nuestro buscador y filtros para encontrar el artista
                perfecto
              </p>

              <div className="bg-background rounded-2xl shadow-xl p-8 border-2 border-primary/10">
                <div className="space-y-6">
                  {/* Buscador principal */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Buscar por nombre o especialidad
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                      <Input
                        placeholder="Ej: Carlos, música criolla, danza folklórica..."
                        className="pl-10 h-14 text-lg border-2 focus:border-primary/50"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                      {search && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                          onClick={() => setSearch("")}
                        >
                          ✕
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Filtro de categoría */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Categoría
                      </label>
                      <Select value={category} onValueChange={setCategory}>
                        <SelectTrigger className="h-12 border-2">
                          <SelectValue placeholder="Todas las categorías" />
                        </SelectTrigger>
                        <SelectContent className="bg-white shadow-lg rounded-xl border border-primary/20">
                          <SelectItem value="todos">
                            Todas las categorías
                          </SelectItem>
                          <SelectItem value="musical">🎵 Músicos</SelectItem>
                          <SelectItem value="cantante">🎤 Cantantes</SelectItem>
                          <SelectItem value="danza">💃 Bailarines</SelectItem>
                          <SelectItem value="circense">🎪 Circenses</SelectItem>
                          <SelectItem value="teatro">🎭 Actores</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-end">
                      <Button
                        size="lg"
                        className="h-12 w-full bg-primary hover:bg-primary/90 font-semibold"
                        onClick={() => {}}
                      >
                        <Search className="w-5 h-5 mr-2" />
                        Buscar Artistas
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-responsive">
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <Card className="shadow-xl border-2 border-primary/10 bg-gradient-to-b from-background to-background/90">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-foreground text-lg flex items-center">
                          <Filter className="w-6 h-6 mr-3 text-primary" />
                          Filtros Avanzados
                        </h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setLocation("todas");
                            setPrice("todos");
                            setAvailability([]);
                            setRatings([]);
                          }}
                          className="text-xs text-muted-foreground hover:text-primary"
                        >
                          Limpiar
                        </Button>
                      </div>

                      <div className="space-y-8">
                        <div className="space-y-3">
                          <label className="text-sm font-semibold text-foreground flex items-center">
                            📍 Ubicación
                          </label>
                          <Select value={location} onValueChange={setLocation}>
                            <SelectTrigger className="h-12 border-2 hover:border-primary/50 transition-colors">
                              <SelectValue placeholder="Todas las ciudades" />
                            </SelectTrigger>
                            <SelectContent className="bg-white shadow-lg rounded-xl border border-primary/20">
                              <SelectItem value="todas">
                                🌍 Todas las ciudades
                              </SelectItem>
                              <SelectItem value="lima">🏙️ Lima</SelectItem>
                              <SelectItem value="arequipa">
                                🏔️ Arequipa
                              </SelectItem>
                              <SelectItem value="cusco">🏛️ Cusco</SelectItem>
                              <SelectItem value="trujillo">
                                🌊 Trujillo
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-3">
                          <label className="text-sm font-semibold text-foreground flex items-center">
                            💰 Rango de Precio
                          </label>
                          <Select value={price} onValueChange={setPrice}>
                            <SelectTrigger className="h-12 border-2 hover:border-primary/50 transition-colors">
                              <SelectValue placeholder="Todos los precios" />
                            </SelectTrigger>
                            <SelectContent className="bg-white shadow-lg rounded-xl border border-primary/20">
                              <SelectItem value="todos">
                                💸 Todos los precios
                              </SelectItem>
                              <SelectItem value="0-500">
                                💵 S/ 0 - 500
                              </SelectItem>
                              <SelectItem value="500-1000">
                                💴 S/ 500 - 1,000
                              </SelectItem>
                              <SelectItem value="1000-2000">
                                💶 S/ 1,000 - 2,000
                              </SelectItem>
                              <SelectItem value="2000+">
                                💷 S/ 2,000+
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-3">
                          <label className="text-sm font-semibold text-foreground flex items-center">
                            ⏰ Disponibilidad
                          </label>
                          <div className="space-y-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
                            {["Inmediata", "Esta semana", "Este mes"].map(
                              (option) => (
                                <label
                                  key={option}
                                  className="flex items-center group cursor-pointer"
                                >
                                  <input
                                    type="checkbox"
                                    className="mr-3 w-4 h-4 text-primary border-2 border-gray-300 rounded focus:ring-primary focus:ring-2"
                                    checked={availability.includes(option)}
                                    onChange={() => handleAvailability(option)}
                                  />
                                  <span className="text-sm font-medium group-hover:text-primary transition-colors">
                                    {option}
                                  </span>
                                </label>
                              )
                            )}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <label className="text-sm font-semibold text-foreground flex items-center">
                            ⭐ Calificación Mínima
                          </label>
                          <div className="space-y-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
                            {[5, 4, 3].map((stars) => (
                              <label
                                key={stars}
                                className="flex items-center group cursor-pointer"
                              >
                                <input
                                  type="checkbox"
                                  className="mr-3 w-4 h-4 text-primary border-2 border-gray-300 rounded focus:ring-primary focus:ring-2"
                                  checked={ratings.includes(stars)}
                                  onChange={() => handleRating(stars)}
                                />
                                <div className="flex items-center">
                                  {Array.from({ length: stars }).map((_, i) => (
                                    <Star
                                      key={i}
                                      className="w-4 h-4 text-yellow-400 fill-current"
                                    />
                                  ))}
                                  <span className="text-sm font-medium ml-2 group-hover:text-primary transition-colors">
                                    {stars} estrellas y más
                                  </span>
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>

                        {/* Resumen de filtros activos */}
                        {(location !== "todas" ||
                          price !== "todos" ||
                          availability.length > 0 ||
                          ratings.length > 0) && (
                          <div className="pt-4 border-t border-primary/20">
                            <p className="text-xs text-muted-foreground mb-2">
                              Filtros activos:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {location !== "todas" && (
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                                  📍 {location}
                                </span>
                              )}
                              {price !== "todos" && (
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                                  💰 {price}
                                </span>
                              )}
                              {availability.map((item) => (
                                <span
                                  key={item}
                                  className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary"
                                >
                                  ⏰ {item}
                                </span>
                              ))}
                              {ratings.map((rating) => (
                                <span
                                  key={rating}
                                  className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary"
                                >
                                  ⭐ {rating}+
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-foreground">
                    Artistas Disponibles
                  </h2>
                  <Select value={sort} onValueChange={setSort}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Ordenar por" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevancia">Relevancia</SelectItem>
                      <SelectItem value="precio-asc">
                        Precio: Menor a Mayor
                      </SelectItem>
                      <SelectItem value="precio-desc">
                        Precio: Mayor a Menor
                      </SelectItem>
                      <SelectItem value="calificacion">
                        Mejor Calificados
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <ArtistsSection artists={filteredArtists} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-responsive text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Necesitas ayuda para elegir?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Nuestro equipo te ayuda a encontrar el artista perfecto para tu
              evento
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
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
  );
}
