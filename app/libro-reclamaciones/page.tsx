'use client';

import { useState } from 'react';

export default function LibroReclamacionesPage() {
  // Estado del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    documento: '',
    direccion: '',
    email: '',
    telefono: '',
    servicio: '',
    monto: '',
    tipo: 'reclamo',
    detalle: '',
    pedido: ''
  });

  // Manejo del envío
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formatear mensaje para correo o WhatsApp
    const msg = `*LIBRO DE RECLAMACIONES - MUnityZ*%0A%0A` +
      `*1. DATOS DEL CONSUMIDOR*%0A` +
      `Nombre: ${formData.nombre}%0A` +
      `DNI/CE: ${formData.documento}%0A` +
      `Dirección: ${formData.direccion}%0A` +
      `Email: ${formData.email}%0A` +
      `Teléfono: ${formData.telefono}%0A%0A` +
      `*2. IDENTIFICACIÓN DEL BIEN/SERVICIO*%0A` +
      `Servicio: ${formData.servicio}%0A` +
      `Monto Reclamado: S/ ${formData.monto}%0A%0A` +
      `*3. DETALLE DEL ${formData.tipo.toUpperCase()}*%0A` +
      `Detalle: ${formData.detalle}%0A` +
      `Pedido: ${formData.pedido}`;

    // Abrir WhatsApp con el reclamo (o puedes cambiarlo a un API/Email)
    const waUrl = `https://wa.me/51940185343?text=${msg}`;
    window.open(waUrl, '_blank');
    
    alert("Reclamo registrado exitosamente. Te responderemos en un plazo máximo de 15 días hábiles.");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-slate-800">
      {/* Cabecera legal */}
      <div className="mb-8 border-b pb-6 border-gray-200">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Libro de Reclamaciones Virtual</h1>
        <p className="text-gray-600 mb-4">Conforme al Código de Protección y Defensa del Consumidor (Ley N° 29571).</p>
        <div className="bg-slate-50 p-4 rounded-lg border border-gray-200 text-sm text-slate-600">
          <p><strong>Razón Social:</strong> WILLIANS LEONARDO MALQUE ZURITA</p>
          <p><strong>RUC:</strong> 10714271577</p>
          <p><strong>Dirección:</strong> JLByR Urb. Santa Mónica L5, Arequipa</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200">
        
        {/* Sección 1: Consumidor */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">1. Identificación del Consumidor Reclamante</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nombre Completo</label>
              <input required type="text" className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600" 
                onChange={e => setFormData({...formData, nombre: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">DNI / CE</label>
              <input required type="text" className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600"
                onChange={e => setFormData({...formData, documento: e.target.value})} />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Dirección Exacta</label>
              <input required type="text" className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600"
                onChange={e => setFormData({...formData, direccion: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Correo Electrónico</label>
              <input required type="email" className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600"
                onChange={e => setFormData({...formData, email: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Teléfono</label>
              <input required type="tel" className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600"
                onChange={e => setFormData({...formData, telefono: e.target.value})} />
            </div>
          </div>
        </div>

        {/* Sección 2: Bien / Servicio */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">2. Identificación del Servicio Contratado</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Servicio (Ej. Landing Page)</label>
              <input required type="text" className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600"
                onChange={e => setFormData({...formData, servicio: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Monto Reclamado (S/)</label>
              <input required type="number" step="0.01" className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600"
                onChange={e => setFormData({...formData, monto: e.target.value})} />
            </div>
          </div>
        </div>

        {/* Sección 3: Detalle */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">3. Detalle de la Reclamación</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Tipo</label>
              <select className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600" 
                onChange={e => setFormData({...formData, tipo: e.target.value})}>
                <option value="reclamo">RECLAMO: Disconformidad relacionada a los servicios prestados.</option>
                <option value="queja">QUEJA: Malestar respecto a la atención al público.</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Detalle del reclamo o queja</label>
              <textarea required rows={3} className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600"
                onChange={e => setFormData({...formData, detalle: e.target.value})}></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Pedido (¿Qué solicita?)</label>
              <textarea required rows={2} className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600"
                onChange={e => setFormData({...formData, pedido: e.target.value})}></textarea>
            </div>
          </div>
        </div>

        {/* Aviso legal obligatorio */}
        <div className="bg-gray-50 p-4 rounded-lg text-xs text-gray-500 border border-gray-200">
          <p>
            * La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante INDECOPI.
            <br/>
            * El proveedor deberá dar respuesta al reclamo en un plazo no mayor a quince (15) días hábiles improrrogables.
          </p>
        </div>

        <button type="submit" className="w-full bg-slate-900 text-white py-3.5 rounded-lg hover:bg-blue-600 transition-colors font-medium text-lg">
          Enviar Reclamo
        </button>
      </form>
    </div>
  );
}