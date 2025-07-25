import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ArrowLeft, Shield, ChevronDown, HelpCircle } from "lucide-react"

export default function FAQPage() {
  const faqs = [
    {
      category: "Sobre las Alergias",
      questions: [
        {
          q: "¿Qué es una alergia?",
          a: "Una alergia es una reacción exagerada del sistema inmunológico ante sustancias que normalmente son inofensivas (alérgenos). Estas sustancias pueden ser alimentos, medicamentos, polen, ácaros del polvo, entre otros.",
        },
        {
          q: "¿Cuáles son los síntomas más comunes de las alergias?",
          a: "Los síntomas varían según el tipo de alergia, pero pueden incluir: estornudos, congestión nasal, picazón en ojos y nariz, erupciones cutáneas, dificultad para respirar, hinchazón, y en casos severos, anafilaxia.",
        },
        {
          q: "¿Las alergias se pueden curar?",
          a: "Aunque no existe una 'cura' definitiva, las alergias se pueden controlar muy efectivamente con tratamiento adecuado. La inmunoterapia puede lograr una desensibilización significativa en muchos casos.",
        },
      ],
    },
    {
      category: "Diagnóstico y Pruebas",
      questions: [
        {
          q: "¿Qué es un prick test y duele?",
          a: "El prick test es una prueba cutánea donde se aplican pequeñas cantidades de alérgenos en la piel del antebrazo y se hace una pequeña punción. Es prácticamente indoloro, similar a un pequeño pinchazo, y los resultados se ven en 15-20 minutos.",
        },
        {
          q: "¿Necesito prepararme de alguna manera para las pruebas de alergia?",
          a: "Sí, es importante suspender los antihistamínicos 7 días antes de la prueba, ya que pueden interferir con los resultados. También debes informar sobre todos los medicamentos que tomas. Te daremos instrucciones específicas al agendar tu cita.",
        },
        {
          q: "¿A qué edad se pueden hacer las pruebas de alergia?",
          a: "Las pruebas cutáneas se pueden realizar desde los 6 meses de edad, aunque son más confiables después de los 2 años. En bebés muy pequeños, a veces preferimos análisis de sangre específicos.",
        },
        {
          q: "¿Cuánto tiempo toman los resultados?",
          a: "Las pruebas cutáneas (prick test) dan resultados inmediatos en 15-20 minutos. Los análisis de sangre pueden tomar 3-5 días hábiles.",
        },
      ],
    },
    {
      category: "Tratamientos",
      questions: [
        {
          q: "¿Qué es la inmunoterapia y cómo funciona?",
          a: "La inmunoterapia consiste en administrar dosis gradualmente crecientes del alérgeno para 'entrenar' al sistema inmunológico a tolerarlo. Puede ser sublingual (gotas bajo la lengua) o subcutánea (inyecciones). Es muy efectiva para alergias respiratorias.",
        },
        {
          q: "¿Cuánto tiempo dura el tratamiento con inmunoterapia?",
          a: "El tratamiento completo suele durar 3-5 años. Los primeros meses son de escalada de dosis, y luego se mantiene una dosis de mantenimiento. Los beneficios pueden durar muchos años después de completar el tratamiento.",
        },
        {
          q: "¿Qué son los medicamentos biológicos?",
          a: "Son medicamentos de última generación como el Omalizumab, diseñados para casos severos de asma alérgica y urticaria crónica que no responden a tratamientos convencionales. Son muy efectivos pero requieren evaluación especializada.",
        },
      ],
    },
    {
      category: "Citas y Consultas",
      questions: [
        {
          q: "¿Cómo puedo agendar una cita?",
          a: "Puedes agendar por WhatsApp (982 915 613), llamando directamente, o llenando el formulario en nuestra página web. Si tienes EPS de SANNA, también puedes usar su app móvil.",
        },
        {
          q: "¿Ofrecen teleconsultas?",
          a: "Sí, ofrecemos teleconsultas para seguimientos, revisión de resultados, y consultas de control. La primera consulta generalmente debe ser presencial para realizar las pruebas necesarias.",
        },
        {
          q: "¿Qué debo llevar a mi primera consulta?",
          a: "Trae tu DNI, historia clínica previa si la tienes, lista de medicamentos actuales, y cualquier estudio previo relacionado con alergias. También es útil anotar los síntomas y posibles desencadenantes.",
        },
        {
          q: "¿Cuánto dura una consulta?",
          a: "La primera consulta suele durar 45-60 minutos, incluyendo la evaluación clínica y las pruebas si son necesarias. Las consultas de seguimiento duran aproximadamente 30 minutos.",
        },
      ],
    },
    {
      category: "Seguros y Pagos",
      questions: [
        {
          q: "¿Aceptan seguros médicos?",
          a: "Trabajamos con EPS de SANNA en nuestra sede de San Borja. Para otros seguros, consulta directamente ya que las coberturas varían. También atendemos pacientes particulares.",
        },
        {
          q: "¿Tienen planes de pago o promociones?",
          a: "Sí, manejamos promociones especiales para evaluaciones integrales y tenemos facilidades de pago para tratamientos prolongados como la inmunoterapia. Consulta nuestras ofertas actuales.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Allergy Free</h1>
                <p className="text-xs text-gray-600">Centro de Alergias</p>
              </div>
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                Inicio
              </Link>
              <Link href="/servicios" className="text-gray-700 hover:text-blue-600">
                Servicios
              </Link>
              <Link href="/equipo" className="text-gray-700 hover:text-blue-600">
                Equipo
              </Link>
              <Link href="/faq" className="text-blue-600 font-medium">
                FAQ
              </Link>
              <Link href="/noticias" className="text-gray-700 hover:text-blue-600">
                Noticias
              </Link>
              <Link href="/contacto" className="text-gray-700 hover:text-blue-600">
                Contacto
              </Link>
            </div>
            <Link href="/reservar">
              <Button className="bg-blue-600 hover:bg-blue-700">Reservar Cita</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
          <div className="text-center">
            <HelpCircle className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Encuentra respuestas a las preguntas más comunes sobre alergias, diagnóstico, tratamientos y nuestros
              servicios.
            </p>
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <Card key={categoryIndex}>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-800">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <Collapsible key={faqIndex}>
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <span className="font-semibold text-gray-900">{faq.q}</span>
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="p-4 border-l-4 border-blue-600 bg-blue-50 mt-2 rounded-r-lg">
                        <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center p-8 bg-blue-50 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">¿No encontraste la respuesta que buscabas?</h3>
          <p className="text-gray-600 mb-6">
            Nuestro equipo está listo para resolver todas tus dudas sobre alergias y tratamientos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Contactar Especialista
              </Button>
            </Link>
            <Link href="/reservar">
              <Button size="lg" variant="outline">
                Agendar Consulta
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
