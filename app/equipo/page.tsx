import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Shield, Award, GraduationCap, Users } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/Navigation"

export default function EquipoPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-ocean-600 hover:text-ocean-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nuestro Equipo Médico</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Especialistas altamente calificados en alergología e inmunología, comprometidos con brindar la mejor
            atención a nuestros pacientes.
          </p>
        </div>

        {/* Main Doctor */}
        <div className="mb-16">
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Dra. Mariela Milla Pimentel"
                  width={300}
                  height={400}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-ocean-600 mr-2" />
                  <span className="text-ocean-600 font-semibold">Directora Médica</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Dra. Mariela Milla Pimentel</h2>
                <p className="text-xl text-gray-600 mb-6">Especialista en Alergología e Inmunología Clínica</p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="w-5 h-5 text-ocean-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Formación Académica</h4>
                      <p className="text-gray-600">
                        Médico Cirujano - Universidad Nacional Mayor de San Marcos
                        <br />
                        Especialista en Alergia e Inmunología Clínica - Hospital Nacional Guillermo Almenara Irigoyen
                        <br />
                        Fellowship en Alergia a Medicamentos en el Hospital De Día del Hospital Universitario La Paz de España
                        <br />
                        Fellowship en Inmunodeficiencias Primarias en Hospital Universitario Doce de Octubre
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-ocean-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Experiencia</h4>
                      <p className="text-gray-600">
                        Más de 15 años de experiencia en el diagnóstico y tratamiento de alergias e Inmunología
                        <br />
                        Past presidente de la Sociedad Peruana de Inmunodeficiencias Primarias
                        <br />
                        Miembro de la Sociedad Peruana de Alergología e Inmunología
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-ocean-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Especialidades</h4>
                      <p className="text-gray-600">
                        Asma bronquial, Rinitis alérgica, Alergias alimentarias, Urticaria crónica, Alergias a Medicamentos, Inmunodeficiencias, Inmunoterapia
                      </p>
                    </div>
                  </div>
                </div>

                <Button asChild>
                  <Link href="https://aplicaciones.cmp.org.pe/conoce_a_tu_medico/datos-colegiado-detallado.php?id=ZXJlcVZRR2FOS3NBc2IrVXVQUnZ5dz09" target="_blank">
                    Ver Perfil en CMP
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Other Doctors */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Equipo de Especialistas</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Dra. Ana García López"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle>Dra. Ana García López</CardTitle>
                <CardDescription>Especialista en Alergología Pediátrica</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Especialista en alergias infantiles con más de 10 años de experiencia. Experta en asma pediátrico y
                  alergias alimentarias en niños.
                </p>
                <Button variant="outline" size="sm">
                  Ver Perfil Completo
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Dra. Carmen Rodríguez"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle>Dra. Carmen Rodríguez</CardTitle>
                <CardDescription>Inmunóloga Clínica</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Especialista en inmunodeficiencias y enfermedades autoinmunes. Experta en terapias biológicas y
                  tratamientos de vanguardia.
                </p>
                <Button variant="outline" size="sm">
                  Ver Perfil Completo
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Dra. Patricia Mendoza"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle>Dra. Patricia Mendoza</CardTitle>
                <CardDescription>Dermatóloga - Alergóloga</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Especialista en dermatitis atópica, urticaria y alergias cutáneas. Experta en pruebas de parche y
                  alergias de contacto.
                </p>
                <Button variant="outline" size="sm">
                  Ver Perfil Completo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Stats */}
        <div className="bg-ocean-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Nuestro Compromiso con la Excelencia</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <Users className="w-12 h-12 text-ocean-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">4</div>
              <div className="text-gray-600">Especialistas</div>
            </div>
            <div>
              <Award className="w-12 h-12 text-ocean-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Años de Experiencia Combinada</div>
            </div>
            <div>
              <GraduationCap className="w-12 h-12 text-ocean-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Certificados por CMP</div>
            </div>
            <div>
              <Shield className="w-12 h-12 text-ocean-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">5000+</div>
              <div className="text-gray-600">Pacientes Atendidos</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-8 bg-gray-50 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Agenda tu cita con nuestros especialistas</h3>
          <p className="text-gray-600 mb-6">Recibe atención personalizada de médicos altamente calificados</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reservar">
              <Button size="lg" className="bg-ocean-600 hover:bg-ocean-700">
                Reservar Cita
              </Button>
            </Link>
            <Link href="/contacto">
              <Button size="lg" variant="outline">
                Contactar Equipo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
