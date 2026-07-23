'use client';

import { useState } from 'react';
import Link from 'next/link';
import { products, type Product } from '@/data/produtcs';

export default function Home() {
  // Estado UI
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  
  // Datos cliente
  const [formData, setFormData] = useState({
    name: '',
    document: '',
    email: '',
    phone: ''
  });
  const [paymentMethod, setPaymentMethod] = useState<'yape' | 'transfer'>('yape');

  // Modal
  const handleBuy = (prod: Product) => {
    setSelectedProduct(prod);
    setStep(1);
    setIsModalOpen(true);
  };

  // Enviar pedido
  const handleConfirmOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct) return;

    // Mensaje WA
    const msg = `*NUEVA ORDEN - MUnityZ*%0A%0A` +
      `*Servicio:* ${selectedProduct.name}%0A` +
      `*Monto:* ${selectedProduct.displayPrice}%0A` +
      `*Método:* ${paymentMethod === 'yape' ? 'Yape' : 'Transferencia'}%0A%0A` +
      `*DATOS DEL CLIENTE*%0A` +
      `*Nombre:* ${formData.name}%0A` +
      `*DNI/RUC:* ${formData.document}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Teléfono:* ${formData.phone}%0A%0A` +
      `_Adjunto comprobante._`;

    // Abrir WA
    const waUrl = `https://wa.me/51940185343?text=${msg}`;
    window.open(waUrl, '_blank');
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white scroll-smooth relative">
      {/* Navbar */}
      <nav className="fixed w-full z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <span className="text-2xl font-bold text-slate-900">MUnityZ</span>
              <span className="text-blue-600 font-bold text-3xl leading-none">.</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-600 hover:text-blue-600 font-medium transition">Inicio</a>
              <a href="#servicios" className="text-gray-600 hover:text-blue-600 font-medium transition">Servicios</a>
              <a href="#contacto" className="text-gray-600 hover:text-blue-600 font-medium transition">Contacto</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="inicio" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Desarrollo Web <span className="text-blue-600">Profesional</span>
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto mb-10 leading-relaxed">
            Escalamos tu negocio con soluciones digitales a medida.
          </p>
          <a href="#servicios" className="bg-slate-900 text-white px-8 py-3.5 rounded-full text-lg font-medium hover:bg-slate-800 transition shadow-xl shadow-slate-900/20">
            Ver Servicios
          </a>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Nuestros Servicios</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((prod) => (
              <div key={prod.id} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{prod.name}</h3>
                <p className="text-gray-500 mb-8 flex-grow leading-relaxed">
                  Desarrollo optimizado con Core Web Vitals y arquitectura limpia.
                </p>
                <div className="border-t border-gray-100 pt-6 mt-auto">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-bold text-blue-600">{prod.displayPrice}</span>
                  </div>
                  <button
                    onClick={() => handleBuy(prod)}
                    className="w-full bg-slate-900 text-white py-3.5 rounded-xl hover:bg-blue-600 transition-colors font-medium"
                  >
                    Contratar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checkout Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            
            {/* Resumen */}
            <div className="bg-slate-50 w-full md:w-1/3 p-8 border-b md:border-b-0 md:border-r border-gray-100">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Resumen de Orden</h3>
              <div className="bg-white p-4 rounded-xl border border-gray-200 mb-4">
                <p className="font-semibold text-gray-800">{selectedProduct.name}</p>
              </div>
              <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
                <span className="text-gray-600 font-medium">Total</span>
                <span className="text-2xl font-bold text-blue-600">{selectedProduct.displayPrice}</span>
              </div>
            </div>

            {/* Formulario */}
            <div className="w-full md:w-2/3 p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  {step === 1 ? 'Tus Datos' : 'Método de Pago'}
                </h3>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>

              <form onSubmit={step === 1 ? (e) => { e.preventDefault(); setStep(2); } : handleConfirmOrder}>
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                        <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-600 outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">DNI / RUC</label>
                        <input required type="text" value={formData.document} onChange={(e) => setFormData({...formData, document: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-600 outline-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
                      <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-600 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono (WhatsApp)</label>
                      <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-600 outline-none" />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-medium mt-6 hover:bg-blue-700 transition">
                      Continuar al Pago
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    {/* Selector */}
                    <div className="grid grid-cols-2 gap-4">
                      <div 
                        onClick={() => setPaymentMethod('yape')}
                        className={`cursor-pointer border-2 rounded-xl p-4 text-center transition ${paymentMethod === 'yape' ? 'border-purple-600 bg-purple-50' : 'border-gray-200 hover:border-purple-300'}`}
                      >
                        <p className="font-bold text-purple-700">Yape</p>
                      </div>
                      <div 
                        onClick={() => setPaymentMethod('transfer')}
                        className={`cursor-pointer border-2 rounded-xl p-4 text-center transition ${paymentMethod === 'transfer' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                      >
                        <p className="font-bold text-blue-700">Transferencia</p>
                      </div>
                    </div>

                    {/* Instrucciones */}
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      {paymentMethod === 'yape' ? (
                        <div className="text-center">
                          <p className="text-gray-600 text-sm mb-2">Yapea el monto exacto al número:</p>
                          <p className="text-3xl font-extrabold text-purple-600 tracking-widest">940185343</p>
                          <p className="text-gray-500 font-medium mt-2">Titular: Malque Zurita Willians</p>
                        </div>
                      ) : (
                        <div className="text-center">
                          <p className="text-gray-600 text-sm mb-2">Transfiere a la cuenta BCP:</p>
                          <p className="text-xl font-bold text-blue-600 tracking-wider">191-96818516-0-75</p>
                          <p className="text-gray-500 font-medium mt-2 text-sm">CCI: 002-215-196818516075-28</p>
                          <p className="text-gray-500 mt-1 text-sm">Titular: Malque Zurita Willians</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex gap-4">
                      <button type="button" onClick={() => setStep(1)} className="w-1/3 bg-gray-100 text-gray-700 py-3.5 rounded-xl font-medium hover:bg-gray-200 transition">
                        Volver
                      </button>
                      <button type="submit" className="w-2/3 bg-slate-900 text-white py-3.5 rounded-xl font-medium hover:bg-slate-800 transition">
                        Enviar Comprobante
                      </button>
                    </div>
                    <p className="text-xs text-center text-gray-400 mt-2">Al confirmar, se abrirá WhatsApp para que envíes la captura.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer id="contacto" className="bg-slate-900 text-white pt-20 pb-10 border-t-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-3xl font-bold mb-4">MUnityZ<span className="text-blue-500">.</span></div>
          <p className="text-slate-400 mb-8">Soluciones digitales de alto rendimiento.</p>
          
          {/* Enlaces legales */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 text-sm text-slate-300">
            <Link href="/terminos" className="hover:text-white transition">Términos y Condiciones</Link>
            <span className="hidden md:inline">|</span>
            <Link href="/politicas" className="hover:text-white transition">Políticas de Devolución</Link>
            <span className="hidden md:inline">|</span>
            <Link href="/libro-reclamaciones" className="hover:text-white transition">Libro de Reclamaciones</Link>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} MUnityZ. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}