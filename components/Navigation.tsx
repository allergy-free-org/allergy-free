import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Image from "next/image"

interface NavigationProps {
  currentPage?: string
}

export default function Navigation({ currentPage }: NavigationProps) {
  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios" },
    { href: "/equipo", label: "Equipo" },
    { href: "/faq", label: "FAQ" },
    { href: "/noticias", label: "Noticias" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/light-icon.png" alt="Allergy Free" width={48} height={48} />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Allergy Free</h1>
              <p className="text-xs text-gray-600">Centro de Alergias</p>
            </div>
          </Link>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  currentPage === item.href
                    ? "text-blue-600 font-medium"
                    : "text-gray-700 hover:text-blue-600"
                }
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link href="/reservar">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Calendar className="w-4 h-4 mr-2" />
              Reservar Cita
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
} 