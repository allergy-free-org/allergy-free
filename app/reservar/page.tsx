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
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Crear mensaje para WhatsApp
    const mensaje = `Hola, quiero agendar una cita:
    
Nombre: ${formData.nombre}
DNI: ${formData.dni}
Edad: ${formData.edad}
Teléfono: ${formData.telefono}
Sede: ${formData.sede}
Modalidad: ${formData.modalidad}
Fecha preferida: ${formData.fecha}
Hora preferida: ${formData.hora}
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
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-ocean-600" />
                  Nuestras Ubicaciones
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold">San Borja</p>
                  <p className="text-gray-600 text-sm">Clínica SANNA San Borja</p>
                  <p className="text-gray-600 text-sm">Av. Guardia Civil 337</p>
                </div>
                <div>
                  <p className="font-semibold">San Isidro</p>
                  <p className="text-gray-600 text-sm">Consultorio Particular</p>
                  <p className="text-gray-600 text-sm">Av. Guardia Civil 770</p>
                </div>
              </CardContent>
            </Card>

            {/* Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-ocean-600" />
                  Horarios de Atención
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold">San Borja</p>
                  <p className="text-gray-600 text-sm">Lun, Mié, Vie: Mañana</p>
                  <p className="text-gray-600 text-sm">Jueves: Tarde</p>
                </div>
                <div>
                  <p className="font-semibold">San Isidro</p>
                  <p className="text-gray-600 text-sm">Mar, Jue, Vie: Tarde</p>
                  <p className="text-gray-600 text-sm">Sábado: Mañana y Tarde</p>
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
                  Si tienes EPS de SANNA, puedes agendar directamente desde la app de SANNA.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
