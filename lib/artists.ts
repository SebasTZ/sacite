export interface Artist {
  id: string
  name: string
  category: string
  specialty: string
  image: string
  experience: string
  rating: number
  location: string
  email: string
  phone: string
  socialMedia: {
    instagram: string
    facebook: string
  }
  price: string
  gallery: string[]
  packages: Package[]
  achievements: string[]
  content: string
}

export interface Package {
  name: string
  duration: string
  price: string
  includes: string[]
}

const artistsData: Artist[] = [
  {
    id: "carlos-mendoza",
    name: "Carlos Mendoza",
    category: "Musical",
    specialty: "Cantante de música criolla",
    image: "/artists/carlos-mendoza/profile.jpg",
    experience: "15+ años",
    rating: 5,
    location: "Lima, Perú",
    email: "carlos.mendoza@sacite.pe",
    phone: "+51 987 654 321",
    socialMedia: {
      instagram: "@carlosmendozamusic",
      facebook: "Carlos Mendoza Música",
    },
    price: "Desde S/. 800",
    gallery: [
      "/artists/carlos-mendoza/gallery-1.jpg",
      "/artists/carlos-mendoza/gallery-2.jpg",
      "/artists/carlos-mendoza/gallery-3.jpg",
      "/artists/carlos-mendoza/gallery-4.jpg",
    ],
    packages: [
      {
        name: "Serenata Romántica",
        duration: "1 hora",
        price: "S/. 800",
        includes: [
          "Repertorio de 15 canciones",
          "Guitarra acústica",
          "Vestuario tradicional",
          "Transporte incluido (Lima)",
        ],
      },
      {
        name: "Show Completo",
        duration: "2 horas",
        price: "S/. 1,500",
        includes: [
          "Repertorio de 30 canciones",
          "Guitarra y cajón",
          "Vestuario tradicional",
          "Interacción con el público",
          "Transporte incluido",
        ],
      },
      {
        name: "Evento Corporativo",
        duration: "3 horas",
        price: "S/. 2,200",
        includes: [
          "Repertorio personalizado",
          "Equipo de sonido básico",
          "Vestuario formal",
          "Dedicatorias especiales",
          "Transporte y setup incluido",
        ],
      },
    ],
    achievements: [
      "Ganador del Festival de Música Criolla 2020",
      "Participación en programa 'Yo Soy' de Latina",
      "Más de 500 presentaciones realizadas",
    ],
    content:
      "Carlos Mendoza es un reconocido intérprete de música criolla peruana con más de 15 años de experiencia. Su voz cálida y su dominio de la guitarra lo han convertido en uno de los artistas más solicitados para serenatas, eventos familiares y celebraciones corporativas.",
  },
  {
    id: "maria-torres",
    name: "María Torres",
    category: "Danza",
    specialty: "Danza folklórica peruana",
    image: "/artists/maria-torres/profile.jpg",
    experience: "12+ años",
    rating: 5,
    location: "Cusco, Perú",
    email: "maria.torres@sacite.pe",
    phone: "+51 965 432 187",
    socialMedia: {
      instagram: "@mariatorresfolklore",
      facebook: "María Torres Danza",
    },
    price: "Desde S/. 600",
    gallery: [
      "/artists/maria-torres/gallery-1.jpg",
      "/artists/maria-torres/gallery-2.jpg",
      "/artists/maria-torres/gallery-3.jpg",
      "/artists/maria-torres/gallery-4.jpg",
    ],
    packages: [
      {
        name: "Danza Tradicional",
        duration: "30 minutos",
        price: "S/. 600",
        includes: ["Marinera norteña", "Huayno cusqueño", "Vestuario tradicional", "Música en vivo opcional"],
      },
      {
        name: "Show Cultural",
        duration: "1 hora",
        price: "S/. 1,100",
        includes: ["Danzas de 3 regiones", "Vestuarios regionales", "Narración cultural", "Interacción con público"],
      },
      {
        name: "Espectáculo Completo",
        duration: "1.5 horas",
        price: "S/. 1,800",
        includes: [
          "Danzas de todo el Perú",
          "Múltiples vestuarios",
          "Músicos acompañantes",
          "Taller de danza para invitados",
          "Fotografías incluidas",
        ],
      },
    ],
    achievements: [
      "Campeona Nacional de Marinera 2019",
      "Directora del Ballet Folklórico Cusco",
      "Participación en Festival Internacional de Danza",
    ],
    content:
      "María Torres es una bailarina profesional especializada en danza folklórica peruana con más de 12 años de experiencia. Originaria de Cusco, ha dedicado su carrera a preservar y difundir las tradiciones dancísticas del Perú.",
  },
  {
    id: "circo-magico",
    name: "Circo Mágico",
    category: "Circense",
    specialty: "Espectáculo circense familiar",
    image: "/artists/circo-magico/profile.jpg",
    experience: "10+ años",
    rating: 5,
    location: "Lima, Perú",
    email: "info@circomagico.pe",
    phone: "+51 912 345 678",
    socialMedia: {
      instagram: "@circomagicoperu",
      facebook: "Circo Mágico Perú",
    },
    price: "Desde S/. 1,200",
    gallery: [
      "/artists/circo-magico/gallery-1.jpg",
      "/artists/circo-magico/gallery-2.jpg",
      "/artists/circo-magico/gallery-3.jpg",
      "/artists/circo-magico/gallery-4.jpg",
    ],
    packages: [
      {
        name: "Show Infantil",
        duration: "45 minutos",
        price: "S/. 1,200",
        includes: ["Malabarismo y acrobacias", "Payasos interactivos", "Magia para niños", "Participación del público"],
      },
      {
        name: "Espectáculo Familiar",
        duration: "1.5 horas",
        price: "S/. 2,000",
        includes: [
          "Actos de circo completos",
          "Números de equilibrio",
          "Show de payasos",
          "Magia y sorpresas",
          "Animación continua",
        ],
      },
      {
        name: "Evento Corporativo",
        duration: "2 horas",
        price: "S/. 3,500",
        includes: [
          "Espectáculo personalizado",
          "Recepción con zanquistas",
          "Shows temáticos",
          "Fotografías con artistas",
          "Montaje completo incluido",
        ],
      },
    ],
    achievements: [
      "Más de 1000 shows realizados",
      "Participación en Feria Internacional del Libro",
      "Reconocimiento Municipal de Lima",
    ],
    content:
      "Circo Mágico es una compañía circense peruana que se especializa en crear experiencias mágicas e inolvidables para toda la familia. Con más de 10 años de experiencia, nuestro equipo de artistas profesionales combina acrobacias, malabarismo, magia y comedia.",
  },
]

export function getAllArtists(): Artist[] {
  return artistsData.sort((a, b) => a.name.localeCompare(b.name))
}

export function getArtistById(id: string): Artist | null {
  return artistsData.find((artist) => artist.id === id) || null
}

export function getArtistsByCategory(category: string): Artist[] {
  return artistsData.filter((artist) => artist.category === category)
}

export function getCategories(): string[] {
  const categories = [...new Set(artistsData.map((artist) => artist.category))]
  return categories.sort()
}
