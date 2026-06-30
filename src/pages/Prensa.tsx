import { MessageSquare, Instagram, ExternalLink } from "lucide-react";
import { SEO } from "../components/SEO";

export function Prensa() {
  return (
    <>
      <SEO
        title="Media kit de Sucupam | Souvenirs corporativos y personalizados"
        description="Información de marca de Sucupam, especializada en souvenirs corporativos, regalos promocionales y merchandising para empresas."
        path="/prensa"
      />

      <section className="py-24 bg-brand-paper fade-in">
        <div className="container mx-auto px-6 max-w-5xl">
          <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-brand-gold">
            Prensa
          </span>
          <h1 className="font-serif text-5xl md:text-7xl mt-4 mb-8 text-brand-ink leading-tight">
            Media Kit Sucupam
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-12 font-sans max-w-3xl">
            Sucupam es un atelier argentino de souvenirs personalizados, papelería artesanal y detalles premium para eventos sociales y corporativos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
            {/* Instagram Card */}
            <a
              href="https://www.instagram.com/sucupam"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="h-10 w-10 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Instagram className="h-5 w-5" />
                </div>
                <h2 className="font-serif text-2xl text-brand-ink mb-2">Instagram</h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Trabajos, inspiración y novedades.
                </p>
              </div>
              <div className="mt-8 flex items-center text-xs uppercase tracking-wider font-bold text-brand-gold gap-1">
                Ver perfil <ExternalLink className="h-3 w-3" />
              </div>
            </a>

            {/* TikTok Card */}
            <a
              href="https://www.tiktok.com/@sucupam"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="h-10 w-10 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.62 2.89 2.89 0 0 1 2.31-4.51c.32 0 .63.06.94.16V9.41a6.32 6.32 0 0 0-3.25-.87 6.34 6.34 0 0 0-6.34 6.34c0 3.5 2.84 6.34 6.34 6.34a6.33 6.33 0 0 0 6.34-6.34V6.2a8.14 8.14 0 0 0 4.68 1.49V4.24a4.8 4.8 0 0 1-1.76-1.25z" />
                  </svg>
                </div>
                <h2 className="font-serif text-2xl text-brand-ink mb-2">TikTok</h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Procesos creativos y contenido de marca.
                </p>
              </div>
              <div className="mt-8 flex items-center text-xs uppercase tracking-wider font-bold text-brand-gold gap-1">
                Ver videos <ExternalLink className="h-3 w-3" />
              </div>
            </a>

            {/* Contact Card */}
            <a
              href="https://wa.me/message/LBWHWZBR3OQ3G1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="h-10 w-10 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <h2 className="font-serif text-2xl text-brand-ink mb-2">Contacto</h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Consultas comerciales y colaboraciones.
                </p>
              </div>
              <div className="mt-8 flex items-center text-xs uppercase tracking-wider font-bold text-brand-gold gap-1">
                Escribir mensaje <ExternalLink className="h-3 w-3" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
export default Prensa;
