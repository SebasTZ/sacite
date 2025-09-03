# Cómo Agregar Nuevos Artistas

## Estructura de Archivos

Para agregar un nuevo artista, necesitas:

### 1. Crear el archivo .md
Crear un archivo en `data/artists/[id-del-artista].md`

### 2. Subir las fotos siguiendo esta convención:
\`\`\`
public/artists/[id-del-artista]/
├── profile.jpg          # Foto principal del artista
├── gallery-1.jpg        # Primera foto de la galería
├── gallery-2.jpg        # Segunda foto de la galería
├── gallery-3.jpg        # Tercera foto de la galería
└── gallery-n.jpg        # Más fotos según necesites
\`\`\`

### 3. Estructura del archivo .md

\`\`\`yaml
---
id: "nombre-del-artista"                    # ID único (sin espacios, usar guiones)
name: "Nombre Completo"                     # Nombre que se mostrará
category: "Musical|Circense|Teatro|Danza"   # Categoría del artista
specialty: "Descripción corta"              # Especialidad específica
image: "/artists/[id]/profile.jpg"          # Foto principal
experience: "X+ años"                       # Años de experiencia
rating: 5                                   # Calificación (1-5)
location: "Ciudad, Perú"                    # Ubicación
email: "email@sacite.pe"                    # Email de contacto
phone: "+51 xxx xxx xxx"                    # Teléfono
socialMedia:                                # Redes sociales
  instagram: "@usuario"
  facebook: "Página de Facebook"
  youtube: "Canal de YouTube"               # Opcional
  tiktok: "@usuario"                        # Opcional
price: "Desde S/. XXX"                      # Precio base
gallery:                                    # Fotos de la galería
  - "/artists/[id]/gallery-1.jpg"
  - "/artists/[id]/gallery-2.jpg"
  - "/artists/[id]/gallery-3.jpg"
packages:                                   # Paquetes de servicios
  - name: "Nombre del Paquete"
    duration: "X horas"
    price: "S/. XXX"
    includes:
      - "Servicio incluido 1"
      - "Servicio incluido 2"
      - "Servicio incluido 3"
achievements:                               # Logros del artista
  - "Logro 1"
  - "Logro 2"
  - "Logro 3"
---

# Descripción del Artista

Aquí va la descripción completa del artista en formato Markdown.
Puedes usar **negritas**, *cursivas*, listas, etc.

## Especialidades
- Especialidad 1
- Especialidad 2
- Especialidad 3
\`\`\`

## Ejemplo Práctico

Si quieres agregar a "Ana García" (cantante), harías:

1. **Crear**: `data/artists/ana-garcia.md`
2. **Subir fotos**:
   - `public/artists/ana-garcia/profile.jpg`
   - `public/artists/ana-garcia/gallery-1.jpg`
   - `public/artists/ana-garcia/gallery-2.jpg`
3. **El sistema automáticamente**:
   - Mostrará a Ana en la lista de artistas
   - Creará su página individual en `/artistas/ana-garcia`
   - Cargará todas sus fotos y datos

## Ventajas de este Sistema

✅ **Fácil mantenimiento**: Solo editas archivos .md
✅ **Fotos organizadas**: Cada artista tiene su carpeta
✅ **Automático**: No necesitas tocar código
✅ **Flexible**: Puedes agregar más campos si necesitas
