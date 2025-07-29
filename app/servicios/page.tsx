import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ArrowLeft, Heart, Shield, TestTube, Syringe, Microscope, Pill } from "lucide-react"
import Navigation from "@/components/Navigation"

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="/servicios" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-ocean-600 hover:text-ocean-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Ofrecemos evaluación, diagnóstico y tratamiento especializado en alergología e inmunología para pacientes de
            todas las edades.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-8">
          {/* Evaluación y Diagnóstico */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Microscope className="w-8 h-8 mr-3 text-seafoam-600" />
                Evaluación, Diagnóstico y Tratamiento
              </CardTitle>
              <CardDescription>Atención especializada para las siguientes patologías</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-seafoam-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Alergias Respiratorias</h4>
                      <p className="text-gray-700 text-sm">Asma bronquial, rinitis alérgica, sinusitis</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-seafoam-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Alergias Alimentarias</h4>
                      <p className="text-gray-700 text-sm">Reacciones a leche, huevo, frutos secos, mariscos</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Pill className="w-5 h-5 text-seafoam-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Alergias a Medicamentos</h4>
                      <p className="text-gray-700 text-sm">Antibióticos, analgésicos, anestésicos</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <TestTube className="w-5 h-5 text-seafoam-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Urticarias y Dermatitis</h4>
                      <p className="text-gray-700 text-sm">Eccema, dermatitis atópica, urticaria crónica</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-seafoam-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Angioedema</h4>
                      <p className="text-gray-700 text-sm">Hinchazón de labios, párpados, garganta</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-seafoam-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Otras Alergias</h4>
                      <p className="text-gray-700 text-sm">Oculares, picaduras, látex, químicos</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pruebas de Alergia */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <TestTube className="w-8 h-8 mr-3 text-seafoam-600" />
                Pruebas de Alergia
              </CardTitle>
              <CardDescription>Diagnóstico preciso con las pruebas más avanzadas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <span className="font-semibold">Prick Test de Alérgenos Ambientales</span>
                    <ChevronDown className="w-5 h-5" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 border-l-4 border-ocean-600 bg-ocean-50 mt-2">
                    <p className="text-gray-700">
                      Pruebas cutáneas para detectar alergias a ácaros del polvo, hongos ambientales, caspa de animales
                      (perros, gatos), polen de árboles y gramíneas.
                    </p>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <span className="font-semibold">Prick Test de Alérgenos Alimentarios</span>
                    <ChevronDown className="w-5 h-5" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 border-l-4 border-ocean-600 bg-ocean-50 mt-2">
                    <p className="text-gray-700 mb-2">Evaluación completa de alergias alimentarias incluyendo:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Leche, caseína, alfa-lactoalbúmina, beta-lactoglobulina</li>
                      <li>Yema y clara de huevo</li>
                      <li>Trigo, maní, nueces</li>
                      <li>Pescado, mariscos</li>
                      <li>Cítricos, fresa y otras frutas</li>
                    </ul>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <span className="font-semibold">Pruebas Especializadas</span>
                    <ChevronDown className="w-5 h-5" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 border-l-4 border-ocean-600 bg-ocean-50 mt-2">
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Prick test a medicamentos</li>
                      <li>Pruebas intradérmicas a medicamentos</li>
                      <li>Prueba del parche</li>
                      <li>Pruebas de provocación a medicamentos</li>
                      <li>Pruebas de tolerancia con exposición controlada</li>
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </CardContent>
          </Card>

          {/* Tratamientos */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Syringe className="w-8 h-8 mr-3 text-ocean-600" />
                Tratamientos Específicos
              </CardTitle>
              <CardDescription>Terapias avanzadas y personalizadas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 border rounded-lg">
                  <Syringe className="w-12 h-12 text-ocean-600 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Inmunoterapia</h4>
                  <p className="text-gray-600 text-sm">
                    Sublingual e inyectable-subcutánea para desensibilización gradual
                  </p>
                </div>
                <div className="text-center p-6 border rounded-lg">
                  <Pill className="w-12 h-12 text-ocean-600 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Desensibilización</h4>
                  <p className="text-gray-600 text-sm">Tratamiento para medicamentos bajo supervisión médica</p>
                </div>
                <div className="text-center p-6 border rounded-lg">
                  <TestTube className="w-12 h-12 text-ocean-600 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Biológicos</h4>
                  <p className="text-gray-600 text-sm">Omalizumab y otros tratamientos de última generación</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Promociones */}
          <Card className="bg-ocean-50 border-ocean-200">
            <CardHeader>
              <CardTitle className="text-2xl text-ocean-800">Promociones Especiales</CardTitle>
              <CardDescription className="text-ocean-700">Consulta nuestras ofertas actuales</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">Evaluación Integral de Alergias</h4>
                <p className="text-gray-600 mb-4">
                  Incluye consulta especializada + prick test básico + plan de tratamiento personalizado
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  *Promoción válida para nuevos pacientes. Consulta condiciones.
                </p>
                <Link href="/reservar">
                  <Button className="bg-ocean-600 hover:bg-ocean-700">Consultar Precio</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 p-8 bg-gray-50 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Necesitas una evaluación especializada?</h3>
          <p className="text-gray-600 mb-6">Agenda tu cita y recibe atención personalizada de nuestros especialistas</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reservar">
              <Button size="lg" className="bg-ocean-600 hover:bg-ocean-700">
                Reservar Cita
              </Button>
            </Link>
            <Link href="/contacto">
              <Button size="lg" variant="outline">
                Más Información
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
