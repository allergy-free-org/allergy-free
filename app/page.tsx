import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Clock, Calendar, Shield, Award, Heart } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                <span className="text-ocean-600">Allergy Free</span>
                <br />
                Tu salud es nuestra prioridad
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Estamos aquí para ayudarte y cuidarte. Especialistas en alergología e inmunología con diagnóstico y
                tratamiento integral para adultos y niños.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/reservar">
                  <Button size="lg" className="bg-ocean-600 hover:bg-ocean-700 w-full sm:w-auto">
                    <Calendar className="w-5 h-5 mr-2" />
                    Agendar Cita
                  </Button>
                </Link>
                <Link href="/servicios">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-ocean-200 text-ocean-700 hover:bg-ocean-50">
                    Conocer Servicios
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/logo.jpg?height=500&width=600"
                alt="Consulta médica especializada en alergias"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-ocean-600 to-seafoam-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-ocean-100">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">5000+</div>
              <div className="text-ocean-100">Pacientes Atendidos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">2</div>
              <div className="text-ocean-100">Sedes en Lima</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-ocean-100">Satisfacción</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios Especializados</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ofrecemos evaluación, diagnóstico y tratamiento integral para todo tipo de alergias
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-seafoam-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-seafoam-600" />
                </div>
                <CardTitle>Alergias Respiratorias</CardTitle>
                <CardDescription>
                  Diagnóstico y tratamiento de asma, rinitis alérgica y otras afecciones respiratorias
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-seafoam-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-seafoam-600" />
                </div>
                <CardTitle>Alergias Alimentarias</CardTitle>
                <CardDescription>
                  Identificación y manejo de alergias a alimentos con pruebas especializadas
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-seafoam-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-seafoam-600" />
                </div>
                <CardTitle>Pruebas de Alergia</CardTitle>
                <CardDescription>
                  Prick test, pruebas intradérmicas y de provocación para diagnóstico preciso
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/servicios">
              <Button size="lg" variant="outline">
                Ver Todos los Servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nuestras Ubicaciones</h2>
            <p className="text-xl text-gray-700">Dos sedes estratégicamente ubicadas para tu comodidad</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-ocean-600" />
                  San Borja - Clínica SANNA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Av. Guardia Civil 337, San Borja</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-2 text-gray-400" />
                    <span>Lunes, Miércoles, Viernes: Turnos mañana</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-2 text-gray-400" />
                    <span>Jueves: Turnos tarde</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-ocean-600" />
                  San Isidro - Consultorio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Av. Guardia Civil 770, San Isidro</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-2 text-gray-400" />
                    <span>Martes, Jueves, Viernes: Turnos tarde</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-2 text-gray-400" />
                    <span>Sábado: Turnos mañana y tarde</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-ocean-600 to-seafoam-600 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">¿Listo para cuidar tu salud?</h2>
          <p className="text-xl text-ocean-100 mb-8">Agenda tu cita hoy mismo y recibe atención especializada</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-white">
              <Phone className="w-5 h-5 mr-2" />
              <span>982 915 613 • 996 958 473</span>
            </div>
            <Link href="/reservar">
              <Button size="lg" className="bg-white text-ocean-600 hover:bg-gray-50">
                Reservar Ahora
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
