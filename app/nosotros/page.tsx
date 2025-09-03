import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Target,
  Eye,
  Heart,
  Calendar,
  Star,
  Shield,
  Award,
  Building,
} from "lucide-react";

export default function NosotrosPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="relative py-20 bg-gradient-to-br from-background via-card to-background overflow-hidden">
          <div className="absolute inset-0 star-pattern opacity-10"></div>
          <div className="container-responsive relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Building className="w-8 h-8 text-primary mr-3" />
                  <span className="text-lg font-semibold text-primary">
                    Desde 1962
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Comunidad Artística{" "}
                  <span className="text-primary">SACITE PERÚ</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Más de 60 años defendiendo los derechos de los artistas
                  peruanos y promoviendo el desarrollo cultural de nuestro país.
                </p>
                <Button asChild size="lg" className="btn-primary">
                  <a
                    href="https://form.jotform.com/231316496134656"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Star className="w-5 h-5 mr-2" />
                    Únete a nuestra comunidad
                  </a>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/peruvian-folk-dancers.png"
                  alt="Comunidad SACITE PERÚ"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/30">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nuestra Historia
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Un recorrido por los momentos más importantes de SACITE PERÚ
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-l-4 border-l-primary shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Calendar className="w-6 h-6 text-primary mr-2" />
                    <span className="text-2xl font-bold text-primary">
                      1962
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Fundación</h3>
                  <p className="text-muted-foreground">
                    Se funda SACITE como respuesta a la necesidad de defender
                    los derechos de los artistas peruanos.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Award className="w-6 h-6 text-secondary mr-2" />
                    <span className="text-2xl font-bold text-secondary">
                      1985
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Reconocimiento Oficial
                  </h3>
                  <p className="text-muted-foreground">
                    Obtención del reconocimiento oficial como entidad
                    representativa de los artistas del Perú.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Shield className="w-6 h-6 text-accent mr-2" />
                    <span className="text-2xl font-bold text-accent">2024</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Era Digital</h3>
                  <p className="text-muted-foreground">
                    Modernización de servicios y creación de plataforma digital
                    para conectar artistas con clientes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-responsive">
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="text-center shadow-xl border-0 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Misión
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Defender y promover los derechos laborales de los artistas
                    peruanos, garantizando condiciones justas y oportunidades de
                    desarrollo profesional.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-xl border-0 bg-gradient-to-br from-secondary/5 to-secondary/10">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Visión
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser la organización líder en la defensa de los derechos
                    artísticos, reconocida por su compromiso con la excelencia y
                    el desarrollo cultural del Perú.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-xl border-0 bg-gradient-to-br from-accent/5 to-accent/10">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Valores
                  </h3>
                  <div className="space-y-2">
                    {[
                      "Integridad",
                      "Compromiso",
                      "Excelencia",
                      "Solidaridad",
                    ].map((value) => (
                      <div
                        key={value}
                        className="flex items-center justify-center"
                      >
                        <Star className="w-4 h-4 text-accent mr-2" />
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/30">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Equipo Directivo
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Conoce a los líderes que guían nuestra organización
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Jorge Luis Condenamarin Niño",
                  role: "Secretario General Nacional",
                  image: "executive-1",
                },
                {
                  name: "Jaqueline Moroni Flores",
                  role: "Sub Secretaria General",
                  image: "executive-2",
                },
                {
                  name: "Pedro David Herrera",
                  role: "Secretario de Organización",
                  image: "executive-3",
                },
                {
                  name: "Emanuel Ita Maldonado Heredia",
                  role: "Secretario de Defensa y Trabajo",
                  image: "executive-4",
                },
                {
                  name: "José Manuel Rebaza Rodriguez",
                  role: "Secretario de Bienestar Social",
                  image: "executive-5",
                },
                {
                  name: "Imagen Elli Neri",
                  role: "Secretario de Cultura",
                  image: "executive-6",
                },
              ].map((member) => (
                <Card
                  key={member.name}
                  className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg"
                >
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4">
                      <img
                        src="/placeholder-user.jpg"
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors"
                      />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                      Comprometido con la defensa de los derechos artísticos y
                      el desarrollo cultural del Perú.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
