"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const whatsappUrl =
      "https://api.whatsapp.com/send/?phone=51981394905&text=Quiero+informacion+sobre+la+afiliacion+a+SACITE&type=phone_number&app_absent=0"
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="floating-whatsapp bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full w-16 h-16 p-0"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </Button>
  )
}
