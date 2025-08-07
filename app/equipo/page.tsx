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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Médicos Colaboradores</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProfileCard
              name="Dra. Silvana Cisneros Díaz"
              title="Especialista en Alergia e Inmunología Clínica"
              role="Especialista"
              academicBackground={[
                "Médico Cirujano de la Universidad Privada San Martín de Porres",
                "Médico especialista en Inmunología Clínica y Alergología en la Universidad Federico Villarreal, sede en el Hospital Nacional E. Rebagliati Martins"
              ]}
              experience={[
                "Médico especialista en Clínica Javier Prado y Clínica Internacional San Borja"
              ]}
              specialties="Alergia e Inmunología Clínica"
              cmpLink="https://aplicaciones.cmp.org.pe/conoce_a_tu_medico/datos-colegiado-detallado.php?id=RTB3aVNYVEh3SDh5cUw2SUdqS2hCUT09"
              compact={true}
            />

            <ProfileCard
              name="Dra. Ivette Sotomayor Carranza"
              title="Especialista en Alergia e Inmunología Clínica"
              role="Especialista"
              academicBackground={[
                "Médico Cirujano de la Universidad Particular San Martín de Porres",
                "Médico especialista en Inmunología Clínica y Alergología en la Universidad Ricardo Palma, sede en el Hospital Militar Central"
              ]}
              experience={[
                "Hospital Militar Central"
              ]}
              specialties="Alergia e Inmunología Clínica"
              cmpLink="https://aplicaciones.cmp.org.pe/conoce_a_tu_medico/datos-colegiado-detallado.php?id=UnA4YUFuRWZNb2ZBZWl6RHZDY3RaZz09"
              compact={true}
            />

            <ProfileCard
              name="Dra. Claudia Renteria Valdiviezo"
              title="Especialista en Alergia e Inmunología Clínica"
              role="Especialista"
              academicBackground={[
                "Médico Cirujano de la Universidad Nacional de Piura",
                "Médico especialista en Inmunología Clínica y Alergología en la Universidad Nacional Mayor de San Marcos, sede en el Hospital Nacional Edgardo Rebagliati Martins"
              ]}
              experience={[
                "Hospital del Niño en Breña",
                "Instituto Hematológico de Piura"
              ]}
              specialties="Alergia e Inmunología Clínica"
              cmpLink="https://aplicaciones.cmp.org.pe/conoce_a_tu_medico/datos-colegiado-detallado.php?id=RHZ3ZlhFdk9ZeU55dS9rVUpMSVdVQT09"
              compact={true}
            />
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
