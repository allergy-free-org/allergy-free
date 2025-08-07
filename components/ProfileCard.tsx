import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, GraduationCap, Shield, User } from "lucide-react"
import Image from "next/image"

interface ProfileCardProps {
  name: string
  title: string
  image?: string
  imageAlt?: string
  academicBackground: string[]
  experience: string[]
  specialties: string
  cmpLink?: string
  isMain?: boolean
  compact?: boolean
}

export default function ProfileCard({
  name,
  title,
  image,
  imageAlt,
  academicBackground,
  experience,
  specialties,
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
      <div className="flex flex-col lg:flex-row lg:items-center">
                {image && (
          <div className="lg:w-2/5 xl:w-1/3 relative p-4 lg:p-6 flex-shrink-0 flex items-center">
            <div className="relative w-full h-80 sm:h-96 md:h-[400px] lg:h-[500px] xl:h-[600px]">
               <Image
                 src={image}
                 alt={imageAlt || name}
                 className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300 rounded-lg shadow-md"
                 fill
               />
             </div>
          </div>
        )}
        
        <div className={`${image ? 'lg:w-3/5 xl:w-2/3' : 'w-full'} p-4 lg:p-8`}>
          
          
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2">{name}</h2>
          <p className="text-lg lg:text-xl xl:text-2xl text-gray-600 mb-4 lg:mb-6">{title}</p>

          <div className="space-y-4 lg:space-y-6 mb-6 lg:mb-8">
            <div className="flex items-start space-x-3 lg:space-x-4">
              <GraduationCap className="w-5 h-5 lg:w-6 lg:h-6 text-ocean-600 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-2 lg:mb-3 text-sm lg:text-base xl:text-lg">Formación Académica</h4>
                <ul className="text-gray-600 space-y-1.5 lg:space-y-2 text-xs lg:text-sm xl:text-base leading-relaxed">
                  {academicBackground.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-ocean-500 mr-2 lg:mr-3 mt-1">•</span>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-3 lg:space-x-4">
              <Award className="w-5 h-5 lg:w-6 lg:h-6 text-ocean-600 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-2 lg:mb-3 text-sm lg:text-base xl:text-lg">Actividad Asistencial</h4>
                <ul className="text-gray-600 space-y-1.5 lg:space-y-2 text-xs lg:text-sm xl:text-base leading-relaxed">
                  {experience.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-ocean-500 mr-2 lg:mr-3 mt-1">•</span>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-3 lg:space-x-4">
              <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-ocean-600 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-2 lg:mb-3 text-sm lg:text-base xl:text-lg">Especialidades</h4>
                <p className="text-gray-600 text-xs lg:text-sm xl:text-base leading-relaxed">{specialties}</p>
              </div>
            </div>
          </div>

          {cmpLink && (
            <Button asChild className="bg-ocean-600 hover:bg-ocean-700 text-sm lg:text-base xl:text-lg px-4 lg:px-6 xl:px-8 py-2 lg:py-3 xl:py-4">
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