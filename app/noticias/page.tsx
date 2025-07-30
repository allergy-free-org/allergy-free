import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/Navigation"

export default function NoticiasPage() {
  const noticias = [
    {
      id: 1,
      titulo: "Nueva Terapia Biológica para Asma Severa",
      resumen:
        "Incorporamos el tratamiento con Omalizumab para pacientes con asma alérgica severa que no responde a tratamientos convencionales.",
      fecha: "15 Enero 2024",
      categoria: "Tratamientos",
      imagen: "/placeholder.svg?height=200&width=300",
      contenido: "El Omalizumab representa un avance significativo en el tratamiento del asma alérgica severa...",
    },
    {
      id: 2,
      titulo: "Temporada de Alergias: Consejos para el Otoño",
      resumen:
        "Con la llegada del otoño, aumentan las alergias por ácaros del polvo y hongos ambientales. Te damos consejos para prevenirlas.",
      fecha: "8 Enero 2024",
      categoria: "Prevención",
      imagen: "/placeholder.svg?height=200&width=300",
      contenido: "Durante el otoño, la humedad y las hojas en descomposición favorecen la proliferación de hongos...",
    },
    {
      id: 3,
      titulo: "Alergias Alimentarias en Niños: Guía para Padres",
      resumen:
        "Información esencial sobre cómo identificar, manejar y prevenir las alergias alimentarias más comunes en la infancia.",
      fecha: "2 Enero 2024",
      categoria: "Pediatría",
      imagen: "/placeholder.svg?height=200&width=300",
      contenido: "Las alergias alimentarias afectan aproximadamente al 8% de los niños menores de 5 años...",
    },
    {
      id: 4,
      titulo: "Inmunoterapia Sublingual: Una Alternativa Cómoda",
      resumen:
        "Descubre las ventajas de la inmunoterapia sublingual frente a las inyecciones tradicionales para el tratamiento de alergias respiratorias.",
      fecha: "28 Diciembre 2023",
      categoria: "Tratamientos",
      imagen: "/placeholder.svg?height=200&width=300",
      contenido: "La inmunoterapia sublingual ofrece una alternativa segura y cómoda para el tratamiento en casa...",
    },
    {
      id: 5,
      titulo: "Urticaria Crónica: Nuevos Enfoques de Tratamiento",
      resumen:
        "Avances en el diagnóstico y tratamiento de la urticaria crónica espontánea, una condición que afecta la calidad de vida.",
      fecha: "20 Diciembre 2023",
      categoria: "Dermatología",
      imagen: "/placeholder.svg?height=200&width=300",
      contenido: "La urticaria crónica espontánea puede ser muy frustrante para los pacientes...",
    },
    {
      id: 6,
      titulo: "Alergia al Látex: Prevención en el Ámbito Hospitalario",
      resumen:
        "Protocolo de prevención y manejo de la alergia al látex en personal de salud y pacientes hospitalizados.",
      fecha: "15 Diciembre 2023",
      categoria: "Ocupacional",
      imagen: "/placeholder.svg?height=200&width=300",
      contenido: "La alergia al látex es una preocupación importante en el ámbito sanitario...",
    },
  ]

  const eventos = [
    {
      titulo: "Charla Gratuita: Alergias en la Infancia",
      fecha: "25 Enero 2024",
      hora: "6:00 PM",
      lugar: "Auditorio Clínica SANNA San Borja",
      descripcion: "Charla informativa para padres sobre prevención y manejo de alergias en niños.",
    },
    {
      titulo: "Campaña de Detección de Alergias Respiratorias",
      fecha: "10 Febrero 2024",
      hora: "9:00 AM - 2:00 PM",
      lugar: "Ambas sedes",
      descripcion: "Evaluaciones gratuitas y prick test con descuento especial.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-ocean-600 hover:text-ocean-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Noticias y Eventos</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Mantente informado sobre los últimos avances en alergología, consejos de salud y eventos especiales de
            nuestro centro.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {noticias.map((noticia) => (
                <Card key={noticia.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <Image
                        src={noticia.imagen || "/placeholder.svg"}
                        alt={noticia.titulo}
                        width={300}
                        height={200}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary">{noticia.categoria}</Badge>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {noticia.fecha}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{noticia.titulo}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{noticia.resumen}</p>
                      <Button variant="outline" size="sm">
                        Leer más
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  Anterior
                </Button>
                <Button size="sm" className="bg-ocean-600">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Siguiente
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Próximos Eventos */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-ocean-600" />
                  Próximos Eventos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {eventos.map((evento, index) => (
                  <div key={index} className="border-l-4 border-ocean-600 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{evento.titulo}</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {evento.fecha}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {evento.hora}
                      </div>
                      <p className="mt-2">{evento.descripcion}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Categorías */}
            <Card>
              <CardHeader>
                <CardTitle>Categorías</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Tratamientos</span>
                    <Badge variant="secondary">8</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Prevención</span>
                    <Badge variant="secondary">5</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Pediatría</span>
                    <Badge variant="secondary">4</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Dermatología</span>
                    <Badge variant="secondary">3</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Ocupacional</span>
                    <Badge variant="secondary">2</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="bg-ocean-50 border-ocean-200">
              <CardHeader>
                <CardTitle className="text-ocean-800">Suscríbete</CardTitle>
                <CardDescription className="text-ocean-700">
                  Recibe las últimas noticias sobre alergias y salud
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="w-full px-3 py-2 border border-ocean-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ocean-500"
                  />
                  <Button className="w-full bg-ocean-600 hover:bg-ocean-700">Suscribirse</Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <Card>
              <CardHeader>
                <CardTitle>¿Tienes dudas?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Nuestros especialistas están listos para resolver tus consultas</p>
                <Link href="/reservar">
                  <Button className="w-full bg-ocean-600 hover:bg-ocean-700">Agendar Consulta</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
