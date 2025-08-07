import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, GraduationCap, Shield, MapPin, Phone, Mail, User } from "lucide-react"
import Image from "next/image"

interface ProfileCardProps {
  name: string
  title: string
  role: string
  image?: string
  imageAlt?: string
  academicBackground: string[]
  experience: string[]
  specialties: string
  phone?: string
  email?: string
  location?: string
  cmpLink?: string
  isMain?: boolean
  compact?: boolean
}

export default function ProfileCard({
  name,
  title,
  role,
  image,
  imageAlt,
  academicBackground,
  experience,
  specialties,
  phone,
  email,
  location,
  cmpLink,
  isMain = false,
  compact = false
}: ProfileCardProps) {
  if (compact) {
    return (
      <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white overflow-hidden h-full flex flex-col">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center mr-4">
                <User className="w-6 h-6 text-ocean-600" />
              </div>
              <div>
                <CardTitle className="text-lg font-bold text-gray-900 mb-1">{name}</CardTitle>
                <CardDescription className="text-ocean-600 font-medium text-sm">{title}</CardDescription>
              </div>
            </div>
            {isMain && (
              <div className="bg-ocean-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                Directora
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className="pt-0 px-6 pb-6 flex-1 flex flex-col">
          <div className="space-y-4 flex-1">
            <div className="flex items-start space-x-4">
              <GraduationCap className="w-5 h-5 text-ocean-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 text-sm mb-2">Formación Académica</h4>
                <ul className="text-gray-600 space-y-1.5 text-xs leading-relaxed">
                  {academicBackground.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-ocean-500 mr-2 mt-0.5">•</span>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Award className="w-5 h-5 text-ocean-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 text-sm mb-2">Actividad Asistencial</h4>
                <ul className="text-gray-600 space-y-1.5 text-xs leading-relaxed">
                  {experience.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-ocean-500 mr-2 mt-0.5">•</span>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Shield className="w-5 h-5 text-ocean-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 text-sm mb-2">Especialidades</h4>
                <p className="text-gray-600 text-xs leading-relaxed">{specialties}</p>
              </div>
            </div>
          </div>

          {cmpLink && (
            <div className="mt-6 pt-4 border-t border-gray-100 mt-auto">
              <Button asChild size="sm" className="bg-ocean-600 hover:bg-ocean-700 w-full">
                <Link href={cmpLink} target="_blank">
                  Ver Perfil en CMP
                </Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white overflow-hidden">
      <div className="md:flex">
        {image && (
          <div className="md:w-1/3 relative p-6">
            <Image
              src={image}
              alt={imageAlt || name}
              width={300}
              height={400}
              className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
            />
          </div>
        )}
        
        <div className={`${image ? 'md:w-2/3' : 'w-full'} p-8`}>
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center mr-4">
              <Award className="w-6 h-6 text-ocean-600" />
            </div>
            <span className="text-ocean-600 font-semibold text-lg">{role}</span>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{name}</h2>
          <p className="text-xl text-gray-600 mb-6">{title}</p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start space-x-4">
              <GraduationCap className="w-6 h-6 text-ocean-600 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-3">Formación Académica</h4>
                <ul className="text-gray-600 space-y-2 text-sm leading-relaxed">
                  {academicBackground.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-ocean-500 mr-3 mt-1">•</span>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Award className="w-6 h-6 text-ocean-600 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-3">Actividad Asistencial</h4>
                <ul className="text-gray-600 space-y-2 text-sm leading-relaxed">
                  {experience.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-ocean-500 mr-3 mt-1">•</span>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Shield className="w-6 h-6 text-ocean-600 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-3">Especialidades</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{specialties}</p>
              </div>
            </div>

            {(phone || email || location) && (
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 text-ocean-600 mt-1 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-3">Contacto</h4>
                  <div className="space-y-2 text-sm">
                    {location && (
                      <p className="text-gray-600 flex items-center">
                        <MapPin className="w-4 h-4 mr-3 text-ocean-500" />
                        {location}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {cmpLink && (
            <Button asChild className="bg-ocean-600 hover:bg-ocean-700">
              <Link href={cmpLink} target="_blank">
                Ver Perfil en CMP
              </Link>
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
} 