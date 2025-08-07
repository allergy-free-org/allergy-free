import Link from "next/link"
import Image from "next/image"
import { FacebookIcon } from "@/components/icons/FacebookIcon"

export default function Footer() {
  return (
    <footer className="bg-ocean-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image src="/light-icon.png" alt="Allergy Free" width={48} height={48} />
              <span className="text-xl font-bold">Allergy Free</span>
            </div>
            <p className="text-ocean-200">Centro especializado en alergología e inmunología</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Enlaces</h3>
            <div className="space-y-2">
              <Link href="/servicios" className="block text-ocean-200 [&:hover]:text-white">
                Servicios
              </Link>
              <Link href="/equipo" className="block text-ocean-200 [&:hover]:text-white">
                Equipo
              </Link>
              <Link href="/faq" className="block text-ocean-200 [&:hover]:text-white">
                FAQ
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <div className="space-y-2 text-ocean-200">
              <p>📞 982 915 613</p>
              <p>📞 996 958 473</p>
              <p>allergyfree.org.pe</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Síguenos</h3>
            <Link href="https://facebook.com/consultorio.allergyfree" className="flex items-center">
              <FacebookIcon className="w-4 h-4 mr-2" color="white" />
              <p className="text-ocean-200 [&:hover]:text-white">Facebook</p>
            </Link>
          </div>
        </div>

        {/* <div className="border-t border-ocean-800 mt-8 pt-8 text-center text-ocean-200">
          <p>&copy; 2024 Allergy Free. Todos los derechos reservados.</p>
        </div> */}
      </div>
    </footer>
  )
} 