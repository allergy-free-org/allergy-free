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
                  <Button size="lg" className="bg-ocean-600 [&:hover]:bg-ocean-700 w-full sm:w-auto">
                    <Calendar className="w-5 h-5 mr-2" />
                    Agendar Cita
                  </Button>
                </Link>
                <Link href="/servicios">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-ocean-200 text-ocean-700 [&:hover]:bg-ocean-50">
                    Conocer Servicios
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/consulta-pediatria.png?height=500&width=600"
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
            <Card className="[&:hover]:shadow-lg transition-shadow">
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

            <Card className="[&:hover]:shadow-lg transition-shadow">
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

            <Card className="[&:hover]:shadow-lg transition-shadow">
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
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nuestras Ubicaciones</h2>
            <p className="text-xl text-gray-700">Dos sedes estratégicamente ubicadas para tu comodidad</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white">
              <CardHeader className="pb-0">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center text-xl">
                    <div className="w-10 h-10 bg-ocean-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-ocean-200 transition-colors">
                      <MapPin className="w-5 h-5 text-ocean-600" />
                    </div>
                    San Borja - Clínica SANNA
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="mb-6">
                  <a 
                    href="https://maps.app.goo.gl/9UApsfzb9tkgjn5bA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-ocean-600 hover:text-ocean-700 font-medium group/link"
                  >
                    <span className="underline decoration-2 underline-offset-4 group-hover/link:decoration-ocean-400">
                      Av. Guardia Civil 337, San Borja
                    </span>
                    <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Clock className="w-4 h-4 mr-3 mt-0.5 text-ocean-500 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Lunes, Miércoles, Viernes</p>
                      <p className="text-sm text-gray-600">Turnos mañana</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-4 h-4 mr-3 mt-0.5 text-ocean-500 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Jueves</p>
                      <p className="text-sm text-gray-600">Turnos tarde</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white">
              <CardHeader className="pb-0">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center text-xl">
                    <div className="w-10 h-10 bg-seafoam-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-seafoam-200 transition-colors">
                      <MapPin className="w-5 h-5 text-seafoam-600" />
                    </div>
                    San Isidro - Consultorio
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="mb-6">
                  <a 
                    href="https://maps.app.goo.gl/gjZoss1shHhJMgTi8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-seafoam-600 hover:text-seafoam-700 font-medium group/link"
                  >
                    <span className="underline decoration-2 underline-offset-4 group-hover/link:decoration-seafoam-400">
                      Av. Guardia Civil 770, San Isidro
                    </span>
                    <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Clock className="w-4 h-4 mr-3 mt-0.5 text-seafoam-500 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Martes, Jueves, Viernes</p>
                      <p className="text-sm text-gray-600">Turnos tarde</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-4 h-4 mr-3 mt-0.5 text-seafoam-500 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Sábado</p>
                      <p className="text-sm text-gray-600">Turnos mañana y tarde</p>
                    </div>
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
              <Button size="lg" className="bg-white text-ocean-600 [&:hover]:bg-gray-50">
                Reservar Ahora
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
