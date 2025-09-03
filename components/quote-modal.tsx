"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Calendar, MapPin, Users, Clock, Send } from "lucide-react"

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
  artist: any
}

export function QuoteModal({ isOpen, onClose, artist }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventTime: "",
    location: "",
    attendees: "",
    eventType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create WhatsApp message
    const message = `¡Hola! Me interesa contratar a ${artist?.name} para mi evento.

📅 Fecha: ${formData.eventDate}
⏰ Hora: ${formData.eventTime}
📍 Ubicación: ${formData.location}
👥 Asistentes: ${formData.attendees}
🎭 Tipo de evento: ${formData.eventType}

Contacto:
👤 Nombre: ${formData.name}
📧 Email: ${formData.email}
📱 Teléfono: ${formData.phone}

Mensaje adicional: ${formData.message}

¡Espero su respuesta para coordinar los detalles!`

    const whatsappUrl = `https://api.whatsapp.com/send/?phone=51981394905&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`

    window.open(whatsappUrl, "_blank")
    onClose()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (!artist) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">Cotizar Show - {artist.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Artist info */}
          <div className="bg-muted/30 rounded-lg p-4">
            <div className="flex items-center space-x-4">
              <img
                src={artist.image || "/placeholder.svg"}
                alt={artist.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-semibold text-foreground">{artist.name}</h3>
                <p className="text-sm text-primary">{artist.specialty}</p>
                <p className="text-sm text-muted-foreground">{artist.price}</p>
              </div>
            </div>
          </div>

          {/* Quote form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Nombre completo *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="phone">Teléfono *</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="+51 999 999 999"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="eventDate">
                  <Calendar className="inline h-4 w-4 mr-1" />
                  Fecha del evento *
                </Label>
                <Input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="eventTime">
                  <Clock className="inline h-4 w-4 mr-1" />
                  Hora del evento *
                </Label>
                <Input
                  id="eventTime"
                  name="eventTime"
                  type="time"
                  value={formData.eventTime}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="location">
                <MapPin className="inline h-4 w-4 mr-1" />
                Ubicación del evento *
              </Label>
              <Input
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
                placeholder="Dirección completa del evento"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="attendees">
                  <Users className="inline h-4 w-4 mr-1" />
                  Número de asistentes *
                </Label>
                <Input
                  id="attendees"
                  name="attendees"
                  type="number"
                  value={formData.attendees}
                  onChange={handleInputChange}
                  required
                  placeholder="Ej: 50"
                />
              </div>
              <div>
                <Label htmlFor="eventType">Tipo de evento *</Label>
                <Input
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  required
                  placeholder="Ej: Cumpleaños, Boda, Corporativo"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="message">Mensaje adicional</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Cuéntanos más detalles sobre tu evento, requerimientos especiales, etc."
                rows={4}
              />
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
                Cancelar
              </Button>
              <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                <Send className="mr-2 h-4 w-4" />
                Enviar Cotización por WhatsApp
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
