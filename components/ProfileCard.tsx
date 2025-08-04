import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, GraduationCap, Shield, MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"

interface ProfileCardProps {
  name: string
  title: string
  role: string
  image: string
  imageAlt: string
  academicBackground: string[]
  experience: string[]
  specialties: string
  phone?: string
  email?: string
  location?: string
  cmpLink?: string
  isMain?: boolean
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
  isMain = false
}: ProfileCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3 relative p-6">
          <Image
            src={image}
            alt={imageAlt}
            width={300}
            height={400}
            className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
          />
        </div>
        
        <div className="md:w-2/3 p-8">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-ocean-100 rounded-full flex items-center justify-center mr-3">
              <Award className="w-5 h-5 text-ocean-600" />
            </div>
            <span className="text-ocean-600 font-semibold">{role}</span>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{name}</h2>
          <p className="text-xl text-gray-600 mb-6">{title}</p>

          <div className="space-y-6 mb-6">
            <div className="flex items-start space-x-3">
              <GraduationCap className="w-5 h-5 text-ocean-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Formación Académica</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  {academicBackground.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-ocean-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Award className="w-5 h-5 text-ocean-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Experiencia</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  {experience.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-ocean-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-ocean-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Especialidades</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{specialties}</p>
              </div>
            </div>

            {(phone || email || location) && (
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 text-ocean-600 mt-1 flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Contacto</h4>
                  <div className="space-y-1 text-sm">
                    {location && (
                      <p className="text-gray-600 flex items-center">
                        <MapPin className="w-3 h-3 mr-2 text-ocean-500" />
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