"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, MapPin, Phone, Clock } from "lucide-react"
import { FacebookIcon } from "@/components/icons/FacebookIcon"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const mensaje = `Hola, me contacto desde la web:
    
Nombre: ${formData.nombre}
Email: ${formData.email}
Teléfono: ${formData.telefono}
Asunto: ${formData.asunto}

Mensaje:
${formData.mensaje}`

    const whatsappUrl = `https://wa.me/51982915613?text=${encodeURIComponent(mensaje)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-ocean-600 [&:hover]:text-ocean-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Estamos aquí para ayudarte. Contáctanos para resolver tus dudas, agendar una cita o recibir más información
            sobre nuestros servicios.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Envíanos un mensaje</CardTitle>
                <CardDescription>Completa el formulario y nos pondremos en contacto contigo</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nombre" className="mb-2 block">Nombre completo *</Label>
                      <Input
                        id="nombre"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="telefono" className="mb-2 block">Teléfono</Label>
                      <Input
                        id="telefono"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        placeholder="987654321"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="mb-2 block">Correo electrónico</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="asunto" className="mb-2 block">Asunto *</Label>
                    <Input
                      id="asunto"
                      value={formData.asunto}
                      onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                      placeholder="¿En qué podemos ayudarte?"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="mensaje" className="mb-2 block">Mensaje *</Label>
                    <Textarea
                      id="mensaje"
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      placeholder="Describe tu consulta o solicitud..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-ocean-600 [&:hover]:bg-ocean-700" size="lg">
                    Enviar mensaje
                  </Button>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white px-2 text-gray-500">o</span>
                    </div>
                  </div>
                  
                  <Link href="/reservar" className="block">
                    <Button variant="outline" className="w-full border-ocean-600 text-ocean-600 [&:hover]:bg-ocean-600 [&:hover]:text-white" size="lg">
                      Agendar Consulta
                    </Button>
                  </Link>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-ocean-600" />
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Teléfonos</h4>
                  <div className="space-y-1">
                    <p className="flex items-center text-gray-600">
                      <Phone className="w-4 h-4 mr-2" />
                      982 915 613
                    </p>
                    <p className="flex items-center text-gray-600">
                      <Phone className="w-4 h-4 mr-2" />
                      996 958 473
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Redes Sociales</h4>
                  <Link
                    href="https://facebook.com/consultorio.allergyfree"
                    target="_blank"
                    className="flex items-center text-ocean-600 [&:hover]:text-ocean-700"
                  >
                    <FacebookIcon className="w-4 h-4 mr-2" />
                    Facebook
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Locations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-ocean-600" />
                  Nuestras Ubicaciones
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">San Borja</h4>
                  <p className="text-gray-600 mb-2">Clínica SANNA San Borja</p>
                  <p className="text-gray-600 mb-3">Av. Guardia Civil 337, San Borja</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      Lun, Mié, Vie: Turnos mañana
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      Jueves: Turnos tarde
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">San Isidro</h4>
                  <p className="text-gray-600 mb-2">Consultorio Particular</p>
                  <p className="text-gray-600 mb-3">Av. Guardia Civil 770, San Isidro</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      Mar, Jue, Vie: Turnos tarde
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      Sábado: Turnos mañana y tarde
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>


          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Encuéntranos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>San Borja - Clínica SANNA</CardTitle>
                <CardDescription>Av. Guardia Civil 337, San Borja</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15604.982872111761!2d-77.01279308073424!3d-12.095323682326207!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7d645427add%3A0x4097d4fd161a70ed!2sAv.%20Guardia%20Civil%20337%2C%20San%20Borja%2015036%2C%20Peru!5e0!3m2!1sen!2sus!4v1754278069942!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Clínica SANNA San Borja"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>San Isidro - Consultorio</CardTitle>
                <CardDescription>Av. Guardia Civil 770, San Isidro</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.9647!2d-77.0019!3d-12.0464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ce8c8c8c8c8c%3A0x8c8c8c8c8c8c8c8c!2sAv.%20Guardia%20Civil%20770%2C%20San%20Isidro%2C%20Lima%2C%20Peru!5e0!3m2!1sen!2spe!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Consultorio San Isidro"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
