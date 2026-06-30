import { useState } from "react";
import { Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { SEO } from "../components/SEO";

export function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventDate: "",
    eventType: "boda",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the email subject and body with the user's detailed input
    const subject = encodeURIComponent(`Consulta de Souvenirs - ${formData.name}`);
    const body = encodeURIComponent(
      `Nombre Completo: ${formData.name}\n` +
      `Email de contacto: ${formData.email}\n` +
      `Fecha aproximada del evento: ${formData.eventDate}\n` +
      `Tipo de Evento: ${formData.eventType.toUpperCase()}\n\n` +
      `Detalles y Cantidad Estimada:\n${formData.message}`
    );
    
    // Trigger local email client mailto protocol to send the details
    window.location.href = `mailto:sucupam@hotmail.com?subject=${subject}&body=${body}`;
    
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hola Sucupam! Me interesa recibir asesoramiento personalizado para mi evento.`
  );
  const whatsappLink = `https://wa.me/message/LBWHWZBR3OQ3G1?text=${whatsappMessage}`;

  return (
    <>
      <SEO
        title="Contacto Personalizado | Sucupam"
        description="Ponte en contacto con el atelier Sucupam para diseñar los souvenirs y la papelería de tu evento."
        path="/contacto"
      />

      <section className="py-24 bg-brand-paper fade-in">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-brand-gold">
              Inicie su Consulta
            </span>
            <h1 className="font-serif text-5xl md:text-6xl mt-4 mb-6 text-brand-ink leading-tight">
              Contacto Personalizado
            </h1>
            <p className="text-gray-500 leading-relaxed font-sans text-base">
              Contanos sobre tu evento. Trabajamos con dedicación artesanal para ofrecerte recuerdos que reflejen tu estilo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Information Sidebar */}
            <div className="lg:col-span-5 space-y-8 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm font-sans">
              <h2 className="font-serif text-2xl text-brand-ink mb-6">Atelier Sucupam</h2>

              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-brand-ink text-sm uppercase tracking-wide">Ubicación</h3>
                  <p className="text-xs text-gray-500 mt-1">Buenos Aires, Argentina. Despachos premium a todo el país.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-brand-ink text-sm uppercase tracking-wide">Email Directo</h3>
                  <p className="text-xs text-gray-500 mt-1 hover:text-brand-gold transition-colors">
                    <a href="mailto:sucupam@hotmail.com">sucupam@hotmail.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MessageCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-brand-ink text-sm uppercase tracking-wide">WhatsApp Asesoría</h3>
                  <p className="text-xs text-gray-500 mt-1 hover:text-brand-gold transition-colors">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      +54 (Consultar link directo)
                    </a>
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-50">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-whatsapp-green hover:bg-whatsapp-dark text-white py-3.5 rounded-xl font-bold transition-all text-xs uppercase tracking-wider shadow-md"
                >
                  Mensaje directo por WhatsApp
                </a>
              </div>
            </div>

            {/* Direct Form Block */}
            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm font-sans">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="h-14 w-14 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-3xl text-brand-ink mb-3">¡Consulta Enviada!</h3>
                  <p className="text-gray-500 max-w-sm mx-auto leading-relaxed text-sm">
                    Hemos recibido tus detalles. Un asesor de nuestro atelier se pondrá en contacto a la brevedad para enviarte una propuesta personalizada.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-xs uppercase tracking-widest font-bold text-brand-gold hover:text-brand-ink transition-colors"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-wider font-bold text-brand-ink mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-brand-paper/50 focus:bg-white focus:border-brand-gold focus:outline-none transition-all text-sm"
                      placeholder="Ej. María González"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-xs uppercase tracking-wider font-bold text-brand-ink mb-2">
                        Mail de contacto
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-brand-paper/50 focus:bg-white focus:border-brand-gold focus:outline-none transition-all text-sm"
                        placeholder="Ej. maria@ejemplo.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="eventDate" className="block text-xs uppercase tracking-wider font-bold text-brand-ink mb-2">
                        Fecha aproximada
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        required
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-brand-paper/50 focus:bg-white focus:border-brand-gold focus:outline-none transition-all text-sm text-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="eventType" className="block text-xs uppercase tracking-wider font-bold text-brand-ink mb-2">
                      Tipo de Evento
                    </label>
                    <select
                      id="eventType"
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-brand-paper/50 focus:bg-white focus:border-brand-gold focus:outline-none transition-all text-sm text-gray-600 appearance-none"
                    >
                      <option value="boda">Bodas / Casamiento</option>
                      <option value="15anos">Fiestas de 15 Años</option>
                      <option value="bautismo">Bautismos</option>
                      <option value="babyshower">Baby Shower</option>
                      <option value="corporativo">Corporativo / Empresa</option>
                      <option value="otro">Otro Momento Especial</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-wider font-bold text-brand-ink mb-2">
                      Detalles y Cantidad Estimada
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-brand-paper/50 focus:bg-white focus:border-brand-gold focus:outline-none transition-all text-sm resize-none"
                      placeholder="Contanos cuántos souvenirs necesitás y qué modelos te gustaron de nuestro catálogo..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-ink hover:bg-brand-gold text-white font-bold py-4 rounded-xl uppercase text-xs tracking-widest transition-colors cursor-pointer"
                  >
                    Enviar solicitud de cotización
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contacto;
