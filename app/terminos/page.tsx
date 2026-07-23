export default function TerminosPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-slate-800">
      <h1 className="text-4xl font-extrabold mb-8 text-slate-900">Términos y Condiciones</h1>
      
      <div className="space-y-8 leading-relaxed">
        <p className="text-sm text-gray-500">Última actualización: {new Date().toLocaleDateString()}</p>
        
        {/* Intro */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-slate-900">1. Introducción</h2>
          <p>
            Bienvenido a MUnityZ. Los presentes Términos y Condiciones regulan el acceso y uso de nuestro sitio web y los servicios de desarrollo de software ofrecidos. Al contratar nuestros servicios, el cliente acepta íntegramente estas políticas.
          </p>
        </section>
        
        {/* Servicios */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-slate-900">2. Naturaleza de los Servicios</h2>
          <p className="mb-2">MUnityZ ofrece soluciones digitales intangibles que incluyen, pero no se limitan a:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Desarrollo de Landing Pages optimizadas.</li>
            <li>Implementación de Tiendas Online (WooCommerce y Headless).</li>
            <li>Desarrollo de Aplicaciones Móviles Multiplataforma.</li>
            <li>Automatización de tareas con Inteligencia Artificial.</li>
            <li>Sistemas de Gestión Interna.</li>
          </ul>
          <p className="mt-4">
            Al ser proyectos a medida, cada servicio se rige por especificaciones técnicas acordadas previamente con el cliente.
          </p>
        </section>
        
        {/* Pagos */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-slate-900">3. Pagos, Precios y Facturación</h2>
          <p className="mb-2">
            Todos los precios están expresados en Soles Peruanos (S/) e incluyen los impuestos de ley correspondientes.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Los pagos se procesan de forma segura a través de transferencias bancarias (BCP), Yape o pasarelas de pago autorizadas (ej. Culqi).</li>
            <li>El desarrollo del proyecto inicia únicamente tras la confirmación del pago inicial o el pago total, según el acuerdo comercial.</li>
            <li>En caso de pagos fraccionados, la entrega del código fuente o pase a producción está sujeta a la cancelación del 100% del saldo.</li>
          </ul>
        </section>

        {/* Entregas */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-slate-900">4. Plazos de Entrega y Modificaciones</h2>
          <p>
            Los plazos de entrega se estiman en días hábiles y dependen de la complejidad del proyecto y la entrega oportuna de información por parte del cliente. Cualquier requerimiento adicional no contemplado en el alcance inicial generará costos y tiempos adicionales.
          </p>
        </section>

        {/* Propiedad Intelectual */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-slate-900">5. Propiedad Intelectual</h2>
          <p>
            Una vez cancelado el 100% del servicio, el cliente obtiene los derechos de uso sobre el software desarrollado. MUnityZ se reserva el derecho de utilizar fragmentos de código genérico, librerías de código abierto y exhibir el proyecto finalizado en su portafolio comercial, salvo que se firme un acuerdo de confidencialidad (NDA).
          </p>
        </section>

        {/* Garantia */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-slate-900">6. Garantía y Soporte</h2>
          <p>
            Garantizamos el correcto funcionamiento del software entregado según los requerimientos iniciales por un periodo de 30 días calendario tras el pase a producción. Esta garantía cubre errores de código ("bugs"), pero no cubre fallas derivadas de manipulaciones de terceros, actualizaciones de servidores externos o cambios en APIs de terceros.
          </p>
        </section>

        {/* Jurisdiccion */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-slate-900">7. Jurisdicción y Ley Aplicable</h2>
          <p>
            Estos términos se rigen por las leyes de la República del Perú. Cualquier controversia será sometida a la jurisdicción de los jueces y tribunales de la ciudad de Arequipa, Perú, renunciando expresamente a cualquier otro fuero.
          </p>
        </section>
      </div>
    </div>
  );
}