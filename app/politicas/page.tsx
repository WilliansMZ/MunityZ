export default function PoliticasPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-slate-800">
      <h1 className="text-4xl font-extrabold mb-8 text-slate-900">Políticas de Cambio y Devolución</h1>
      
      <div className="space-y-8 leading-relaxed">
        <p className="text-sm text-gray-500">Última actualización: {new Date().toLocaleDateString()}</p>
        
        {/* Naturaleza */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-slate-900">1. Naturaleza de los Servicios</h2>
          <p>
            MUnityZ ofrece servicios digitales intangibles y desarrollo de software a medida. Por la naturaleza de estos servicios, no aplican las políticas de devolución tradicionales aplicables a productos físicos.
          </p>
        </section>
        
        {/* Casos de devolucion */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-slate-900">2. Casos de Reembolso</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li><strong>Reembolso Total:</strong> Aplica únicamente si el cliente solicita la cancelación antes de que nuestro equipo inicie la fase de análisis, diseño o desarrollo. También aplica para cobros duplicados por error de la pasarela.</li>
            <li><strong>Reembolso Parcial:</strong> Si el cliente decide cancelar un proyecto en curso, se retendrá un porcentaje del pago equivalente a las horas de trabajo ya invertidas por nuestro equipo de desarrollo.</li>
            <li><strong>No Reembolsable:</strong> No hay devoluciones por proyectos entregados, aprobados o en producción. Tampoco se reembolsan pagos destinados a terceros (ej. compra de dominios, hosting o licencias).</li>
          </ul>
        </section>
        
        {/* Proceso */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-slate-900">3. Proceso de Solicitud</h2>
          <p className="mb-2">Para iniciar una solicitud de reembolso, el cliente debe:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Enviar un correo electrónico a <strong>contacto@munityz.com</strong> o comunicarse a nuestro canal de atención (+51 940 185 343).</li>
            <li>Indicar el motivo detallado de la solicitud.</li>
            <li>Adjuntar el comprobante de pago original, nombre completo y DNI o RUC asociado a la compra.</li>
          </ul>
        </section>

        {/* Plazos */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-slate-900">4. Plazos de Procesamiento</h2>
          <p>
            Toda solicitud será evaluada por nuestro equipo en un plazo máximo de <strong>5 días hábiles</strong>. De ser aprobada, el dinero será reembolsado a través del mismo medio de pago utilizado (transferencia, Yape o pasarela de tarjetas) en un periodo de <strong>7 a 15 días hábiles</strong>, dependiendo de los tiempos de procesamiento de la entidad bancaria o procesador de pagos.
          </p>
        </section>

        {/* Cambios */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-slate-900">5. Política de Cambios</h2>
          <p>
            Los cambios en los requerimientos o funcionalidades del software, una vez iniciado el desarrollo, no se consideran motivos de devolución. Dichos cambios serán evaluados técnicamente y cotizados como adicionales, requiriendo la aprobación de un nuevo presupuesto por parte del cliente.
          </p>
        </section>
      </div>
    </div>
  );
}