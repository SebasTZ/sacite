import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UwmaclonR2z1EOaqOahhedPNKEjw3K.png"
                alt="SACITE PERÚ Logo"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              Comunidad Artística SACITE PERÚ - En defensa del artista peruano desde 1962. Protegemos los derechos de
              músicos, actores, cantantes, circenses, bailarines e intérpretes.
            </p>
            <div className="flex space-x-4">
              <Button
                size="icon"
                variant="outline"
                className="border-background/20 hover:bg-background hover:text-foreground bg-transparent"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-background/20 hover:bg-background hover:text-foreground bg-transparent"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-background/20 hover:bg-background hover:text-foreground bg-transparent"
              >
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-background/90">Central de llamadas:</p>
                  <p className="text-background font-medium">939 029 482</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-background/90">Email:</p>
                  <p className="text-background font-medium">info@saciteperu.pe</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-background/90">Oficina:</p>
                  <p className="text-background font-medium">Jr. Zepita N° 713 - Of. 301, Cercado de Lima</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Enlaces Rápidos</h3>
            <div className="space-y-3">
              <a href="#nosotros" className="block text-background/80 hover:text-background transition-colors">
                Nosotros
              </a>
              <a href="#logros" className="block text-background/80 hover:text-background transition-colors">
                Logros
              </a>
              <a href="#artistas" className="block text-background/80 hover:text-background transition-colors">
                Artistas Afiliados
              </a>
              <a href="#galeria" className="block text-background/80 hover:text-background transition-colors">
                Galería
              </a>
              <a href="#blog" className="block text-background/80 hover:text-background transition-colors">
                Blog de Eventos
              </a>
              <a
                href="https://form.jotform.com/231316496134656"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Afíliate Ahora
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm mb-4 md:mb-0">
              ©ING JUAN PABLO CASTRO | 2016 - 2024 | ALL RIGHTS RESERVED. SACITE PERU
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Términos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
