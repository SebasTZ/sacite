"use client"

import { Button } from "@/components/ui/button"
import { Star, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 sacite-hero-gradient"></div>
      <div className="absolute inset-0 star-pattern opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20"></div>

      {/* Content */}
      <div className="relative z-10 container-responsive text-center text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center items-center space-x-3 mb-8 animate-pulse">
            <Star className="h-8 w-8 text-accent fill-current drop-shadow-lg" />
            <Star className="h-6 w-6 text-secondary fill-current drop-shadow-lg" />
            <Star className="h-10 w-10 text-accent fill-current drop-shadow-lg" />
            <Star className="h-6 w-6 text-secondary fill-current drop-shadow-lg" />
            <Star className="h-8 w-8 text-accent fill-current drop-shadow-lg" />
          </div>

          <h1 className="heading-xl mb-8 leading-tight drop-shadow-2xl font-heading">
            COMUNIDAD ARTÍSTICA
            <br />
            <span className="text-accent bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              SACITE PERÚ
            </span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl mb-6 font-semibold drop-shadow-lg">
            En defensa del artista peruano desde 1962
          </p>

          <p className="text-responsive mb-12 opacity-95 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
            Conectamos clientes con los mejores artistas profesionales del Perú. Únete a la comunidad artística más
            grande del país y accede a espectáculos únicos de músicos, actores, cantantes, circenses, bailarines e
            intérpretes.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="btn-primary text-lg px-10 py-4 rounded-xl shadow-2xl border-2 border-white/20 backdrop-blur-sm"
              asChild
            >
              <a href="https://form.jotform.com/231316496134656" target="_blank" rel="noopener noreferrer">
                <Users className="mr-3 h-6 w-6" />
                Únete a SACITE
                <ArrowRight className="ml-3 h-5 w-5" />
              </a>
            </Button>

            <Button
              size="lg"
              className="bg-white/10 text-white hover:bg-white hover:text-primary border-2 border-white/30 backdrop-blur-sm text-lg px-10 py-4 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/artistas">
                <Star className="mr-3 h-6 w-6" />
                Contratar Artistas
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-3 font-heading drop-shadow-lg">60+</div>
              <div className="text-base md:text-lg font-medium">Años de historia</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-3 font-heading drop-shadow-lg">1000+</div>
              <div className="text-base md:text-lg font-medium">Artistas profesionales</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-3 font-heading drop-shadow-lg">24/7</div>
              <div className="text-base md:text-lg font-medium">Atención al cliente</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110">
        <div className="w-8 h-12 border-2 border-white/70 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
          <div className="w-1.5 h-4 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
