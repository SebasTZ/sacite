"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UwmaclonR2z1EOaqOahhedPNKEjw3K.png"
              alt="SACITE PERÚ Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors hover:text-primary ${
                isActive("/") ? "text-primary font-medium" : "text-foreground"
              }`}
            >
              Inicio
            </Link>
            <Link
              href="/nosotros"
              className={`transition-colors hover:text-primary ${
                isActive("/nosotros") ? "text-primary font-medium" : "text-foreground"
              }`}
            >
              Nosotros
            </Link>
            <Link
              href="/artistas"
              className={`transition-colors hover:text-primary ${
                isActive("/artistas") ? "text-primary font-medium" : "text-foreground"
              }`}
            >
              Contratar Artistas
            </Link>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="https://form.jotform.com/231316496134656" target="_blank" rel="noopener noreferrer">
                Afíliate
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`text-left transition-colors hover:text-primary ${
                  isActive("/") ? "text-primary font-medium" : "text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/nosotros"
                className={`text-left transition-colors hover:text-primary ${
                  isActive("/nosotros") ? "text-primary font-medium" : "text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="/artistas"
                className={`text-left transition-colors hover:text-primary ${
                  isActive("/artistas") ? "text-primary font-medium" : "text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contratar Artistas
              </Link>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-fit">
                <a href="https://form.jotform.com/231316496134656" target="_blank" rel="noopener noreferrer">
                  Afíliate
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
