import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Shield, Award, GraduationCap, Users, MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/Navigation"
import ProfileCard from "@/components/ProfileCard"

export default function EquipoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-ocean-600 [&:hover]:text-ocean-700 mb-4">
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
          <ProfileCard
            name="Dra. Mariela Milla Pimentel"
            title="Especialista en Alergología e Inmunología Clínica"
            role="Directora Médica"
            image="/dra-milla.png"
            imageAlt="Dra. Mariela Milla Pimentel"
            academicBackground={[
              "Médico Cirujano - Universidad Particular San Martín de Porres",
              "Especialización en la Universidad Nacional Mayor de San Marcos",
              "Especialista en Alergia e Inmunología Clínica - Hospital Nacional Guillermo Almenara Irigoyen",
              "Fellowship en Alergia a Medicamentos en el Hospital De Día del Hospital Universitario La Paz de España",
              "Alergia Respiratoria y Alimentarias en el Hospital Universitario La Paz - España",
              "Fellowship en Inmunodeficiencias Primarias en Hospital Universitario Doce de Octubre"
            ]}
            experience={[
              "Más de 15 años de experiencia en el diagnóstico y tratamiento de alergias e Inmunología",
              "Past presidente de la Sociedad Peruana de Inmunodeficiencias Primarias (PERUSID)",
              "Miembro de la Sociedad Peruana de Alergia, Asma e Inmunología (SPAAI)"
            ]}
            specialties="Asma bronquial, Rinitis alérgica, Alergias respiratorias, Alergia alimentaria, Urticaria crónica, Angioedema, Alergias a Medicamentos, Inmunodeficiencias, Inmunoterapia antialergénica, etc."
            cmpLink="https://aplicaciones.cmp.org.pe/conoce_a_tu_medico/datos-colegiado-detallado.php?id=ZXJlcVZRR2FOS3NBc2IrVXVQUnZ5dz09"
            isMain={true}
          />
        </div>

        {/* Other Doctors */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Equipo de Especialistas</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg"
                  alt="Dra. Ana García López"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-seafoam-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Pediátrica
                  </div>
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Dra. Ana García López</CardTitle>
                <CardDescription className="text-ocean-600 font-medium">Especialista en Alergología Pediátrica</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 mb-4">
                  <div className="flex items-start space-x-2">
                    <GraduationCap className="w-4 h-4 text-ocean-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Formación</p>
                      <p className="text-xs text-gray-600">Médico Pediatra - Universidad Nacional Mayor de San Marcos</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Award className="w-4 h-4 text-ocean-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Experiencia</p>
                      <p className="text-xs text-gray-600">10+ años en alergias infantiles</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Shield className="w-4 h-4 text-ocean-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Especialidades</p>
                      <p className="text-xs text-gray-600">Asma pediátrico, alergias alimentarias, dermatitis atópica</p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Ver Perfil Completo
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg"
                  alt="Dra. Carmen Rodríguez"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-ocean-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Inmunología
                  </div>
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Dra. Carmen Rodríguez</CardTitle>
                <CardDescription className="text-ocean-600 font-medium">Inmunóloga Clínica</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 mb-4">
                  <div className="flex items-start space-x-2">
                    <GraduationCap className="w-4 h-4 text-ocean-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Formación</p>
                      <p className="text-xs text-gray-600">Especialista en Inmunología - Hospital Nacional</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Award className="w-4 h-4 text-ocean-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Experiencia</p>
                      <p className="text-xs text-gray-600">8+ años en inmunodeficiencias</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Shield className="w-4 h-4 text-ocean-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Especialidades</p>
                      <p className="text-xs text-gray-600">Inmunodeficiencias, enfermedades autoinmunes, terapias biológicas</p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Ver Perfil Completo
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg"
                  alt="Dra. Patricia Mendoza"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-seafoam-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Dermatología
                  </div>
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Dra. Patricia Mendoza</CardTitle>
                <CardDescription className="text-ocean-600 font-medium">Dermatóloga - Alergóloga</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 mb-4">
                  <div className="flex items-start space-x-2">
                    <GraduationCap className="w-4 h-4 text-ocean-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Formación</p>
                      <p className="text-xs text-gray-600">Dermatóloga - Universidad Cayetano Heredia</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Award className="w-4 h-4 text-ocean-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Experiencia</p>
                      <p className="text-xs text-gray-600">12+ años en dermatología alérgica</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Shield className="w-4 h-4 text-ocean-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Especialidades</p>
                      <p className="text-xs text-gray-600">Dermatitis atópica, urticaria, alergias cutáneas, pruebas de parche</p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Ver Perfil Completo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Stats */}
        <div className="bg-gradient-to-r from-ocean-600 to-seafoam-600 rounded-2xl p-8 mb-12 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">Nuestro Compromiso con la Excelencia</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="group hover:scale-105 transition-transform duration-300">
              <Users className="w-12 h-12 mx-auto mb-4 text-ocean-100" />
              <div className="text-3xl font-bold mb-2">4</div>
              <div className="text-ocean-100">Especialistas</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <Award className="w-12 h-12 mx-auto mb-4 text-ocean-100" />
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-ocean-100">Años de Experiencia</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <GraduationCap className="w-12 h-12 mx-auto mb-4 text-ocean-100" />
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-ocean-100">Certificados por CMP</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <Shield className="w-12 h-12 mx-auto mb-4 text-ocean-100" />
              <div className="text-3xl font-bold mb-2">5000+</div>
              <div className="text-ocean-100">Pacientes Atendidos</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Agenda tu cita con nuestros especialistas</h3>
          <p className="text-gray-600 mb-6">Recibe atención personalizada de médicos altamente calificados</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reservar">
              <Button size="lg" className="bg-ocean-600 [&:hover]:bg-ocean-700">
                Reservar Cita
              </Button>
            </Link>
            <Link href="/contacto">
              <Button size="lg" variant="outline" className="border-ocean-200 text-ocean-700 [&:hover]:bg-ocean-50">
                Contactar Equipo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
