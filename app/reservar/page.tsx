"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, Shield, Calendar, MapPin, Phone, Clock } from "lucide-react"
import Navigation from "@/components/Navigation"

export default function ReservarPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    dni: "",
    edad: "",
    telefono: "",
    sede: "",
    modalidad: "",
    fecha: "",
    hora: "",
    motivo: "",
    tieneEps: "",
    eps: "",
    otraEps: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Crear mensaje para WhatsApp
    let epsInfo = "Sin EPS"
    if (formData.tieneEps === "si") {
      if (formData.eps === "otro") {
        epsInfo = `EPS: ${formData.otraEps}`
      } else {
        epsInfo = `EPS: ${formData.eps}`
      }
    }
    
    const mensaje = `Hola, quiero agendar una cita:
    
Nombre: ${formData.nombre}
DNI: ${formData.dni}
Edad: ${formData.edad}
Teléfono: ${formData.telefono}
Sede: ${formData.sede}
Modalidad: ${formData.modalidad}
Fecha preferida: ${formData.fecha}
Hora preferida: ${formData.hora}
${epsInfo}
Motivo de consulta: ${formData.motivo}`

    const whatsappUrl = `https://wa.me/51982915613?text=${encodeURIComponent(mensaje)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-ocean-600 [&:hover]:text-ocean-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Reservar Cita</h1>
          <p className="text-xl text-gray-600">
            Completa el formulario y nos pondremos en contacto contigo para confirmar tu cita
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-6 h-6 mr-2 text-ocean-600" />
                  Información de la Cita
                </CardTitle>
                <CardDescription>Completa todos los campos para procesar tu solicitud</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Información Personal */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Información Personal</h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nombre" className="mb-2 block">Nombre Completo *</Label>
                        <Input
                          id="nombre"
                          value={formData.nombre}
                          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                          placeholder="Ingresa tu nombre completo"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="dni" className="mb-2 block">DNI *</Label>
                        <Input
                          id="dni"
                          value={formData.dni}
                          onChange={(e) => setFormData({ ...formData, dni: e.target.value })}
                          placeholder="12345678"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="edad" className="mb-2 block">Edad *</Label>
                        <Input
                          id="edad"
                          type="number"
                          value={formData.edad}
                          onChange={(e) => setFormData({ ...formData, edad: e.target.value })}
                          placeholder="25"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="telefono" className="mb-2 block">Teléfono *</Label>
                        <Input
                          id="telefono"
                          value={formData.telefono}
                          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                          placeholder="987654321"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Información de EPS */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Información de EPS</h3>

                    <div>
                      <Label className="mb-2 block">¿Tienes EPS? *</Label>
                      <RadioGroup
                        value={formData.tieneEps}
                        onValueChange={(value) => setFormData({ ...formData, tieneEps: value, eps: value === "no" ? "" : formData.eps })}
                        className="flex space-x-6 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="si" id="eps-si" />
                          <Label htmlFor="eps-si">Sí</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="eps-no" />
                          <Label htmlFor="eps-no">No</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {formData.tieneEps === "si" && (
                      <div>
                        <Label className="mb-2 block">Selecciona tu EPS *</Label>
                        <Select
                          value={formData.eps}
                          onValueChange={(value) => setFormData({ ...formData, eps: value, otraEps: value !== "otro" ? "" : formData.otraEps })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona tu EPS" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="rimac">Rímac EPS</SelectItem>
                            <SelectItem value="pacifico">Pacífico EPS</SelectItem>
                            <SelectItem value="mapfre">Mapfre EPS</SelectItem>
                            <SelectItem value="sanitas">Sanitas Perú EPS</SelectItem>
                            <SelectItem value="positiva">La Positiva EPS</SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                        
                        {formData.eps === "otro" && (
                          <div className="mt-4">
                            <Label htmlFor="otraEps" className="mb-2 block">Especifica tu EPS *</Label>
                            <Input
                              id="otraEps"
                              value={formData.otraEps}
                              onChange={(e) => setFormData({ ...formData, otraEps: e.target.value })}
                              placeholder="Escribe el nombre de tu EPS"
                              required={formData.eps === "otro"}
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Preferencias de Cita */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Preferencias de Cita</h3>

                    <div>
                      <Label className="mb-2 block">Sede de Preferencia *</Label>
                      <Select
                        value={formData.sede}
                        onValueChange={(value) => setFormData({ ...formData, sede: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una sede" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="san-borja">San Borja - Clínica SANNA</SelectItem>
                          <SelectItem value="san-isidro">San Isidro - Consultorio Particular</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="mb-2 block">Modalidad *</Label>
                      <RadioGroup
                        value={formData.modalidad}
                        onValueChange={(value) => setFormData({ ...formData, modalidad: value })}
                        className="flex space-x-6 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="presencial" id="presencial" />
                          <Label htmlFor="presencial">Presencial</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="teleconsulta" id="teleconsulta" />
                          <Label htmlFor="teleconsulta">Teleconsulta</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fecha" className="mb-2 block">Fecha Preferida *</Label>
                        <Input
                          id="fecha"
                          type="date"
                          value={formData.fecha}
                          onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="hora" className="mb-2 block">Hora Preferida</Label>
                        <Select
                          value={formData.hora}
                          onValueChange={(value) => setFormData({ ...formData, hora: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona horario" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mañana">Turno Mañana (8:00 - 12:00)</SelectItem>
                            <SelectItem value="tarde">Turno Tarde (14:00 - 18:00)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="motivo" className="mb-2 block">Motivo de Consulta</Label>
                      <Textarea
                        id="motivo"
                        value={formData.motivo}
                        onChange={(e) => setFormData({ ...formData, motivo: e.target.value })}
                        placeholder="Describe brevemente el motivo de tu consulta (opcional)"
                        rows={3}
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-ocean-600 [&:hover]:bg-ocean-700" size="lg">
                    Enviar Solicitud por WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-ocean-600" />
                  Contacto Directo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold">Teléfonos</p>
                  <p className="text-gray-600">📞 982 915 613</p>
                  <p className="text-gray-600">📞 996 958 473</p>
                </div>
              </CardContent>
            </Card>

            {/* Locations */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <div className="w-8 h-8 bg-ocean-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-ocean-200 transition-colors">
                    <MapPin className="w-4 h-4 text-ocean-600" />
                  </div>
                  Nuestras Ubicaciones
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-6">
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-ocean-50 to-seafoam-50 rounded-lg border border-ocean-100">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-900 text-base">San Borja</h4>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">Clínica SANNA San Borja</p>
                    <a 
                      href="https://maps.app.goo.gl/9UApsfzb9tkgjn5bA" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-ocean-600 hover:text-ocean-700 font-medium group/link text-sm"
                    >
                      <span className="underline decoration-2 underline-offset-2 group-hover/link:decoration-ocean-400">
                        Av. Guardia Civil 337, San Borja
                      </span>
                      <svg className="w-3 h-3 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-start">
                        <Clock className="w-3 h-3 mr-2 mt-0.5 text-ocean-500 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-gray-900">Lun, Mié, Vie</p>
                          <p className="text-xs text-gray-600">Turnos mañana</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-3 h-3 mr-2 mt-0.5 text-ocean-500 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-gray-900">Jueves</p>
                          <p className="text-xs text-gray-600">Turnos tarde</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-seafoam-50 to-ocean-50 rounded-lg border border-seafoam-100">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-900 text-base">San Isidro</h4>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">Consultorio Particular</p>
                    <a 
                      href="https://maps.app.goo.gl/gjZoss1shHhJMgTi8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-seafoam-600 hover:text-seafoam-700 font-medium group/link text-sm"
                    >
                      <span className="underline decoration-2 underline-offset-2 group-hover/link:decoration-seafoam-400">
                        Av. Guardia Civil 770, San Isidro
                      </span>
                      <svg className="w-3 h-3 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-start">
                        <Clock className="w-3 h-3 mr-2 mt-0.5 text-seafoam-500 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-gray-900">Mar, Jue, Vie</p>
                          <p className="text-xs text-gray-600">Turnos tarde</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-3 h-3 mr-2 mt-0.5 text-seafoam-500 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-gray-900">Sábado</p>
                          <p className="text-xs text-gray-600">Turnos mañana y tarde</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>


            {/* EPS Info */}
            <Card className="bg-ocean-50 border-ocean-200">
              <CardHeader>
                <CardTitle className="text-ocean-800">Pacientes con EPS</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-ocean-700 text-sm">
                  Si tienes EPS, podemos ayudarte a agendar tu cita. Envíanos tu información por WhatsApp y te asistiremos con el proceso de agendamiento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
