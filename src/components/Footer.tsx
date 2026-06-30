import { Link } from "react-router-dom";
import { MapPin, Mail, Star } from "lucide-react";
import { eventCategories } from "../data";

export function Footer() {
  return (
    <footer id="contacto" className="bg-brand-dark text-[#FFFDF9] font-sans pt-24 pb-12 border-t border-brand-accent/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Column 1 - Brand Summary */}
          <div className="flex flex-col space-y-8">
            <Link to="/" className="flex items-center group w-fit">
              <img
                src="https://i.ibb.co/DH3hNbmN/logo-2.png"
                alt="Atelier Sucupam - Diseños premium personalizados"
                width={64}
                height={64}
                className="h-16 w-auto bg-white/10 rounded-full p-2 group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <span className="font-serif text-3xl ml-4 tracking-tight">Sucupam</span>
            </Link>
            <p className="text-gray-400 text-sm italic leading-relaxed">
              Definiendo el lujo en la papelería artesanal y souvenirs premium en Argentina. Diseños que capturan la esencia de tus momentos más valiosos.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/sucupam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-gold transition-colors"
              >
                <img
                  src="https://i.ibb.co/DHWJ4ZQw/instagram.png"
                  alt="Instagram"
                  className="h-5 w-5 object-contain"
                />
              </a>
              <a
                href="https://www.tiktok.com/@sucupam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-gold transition-colors"
              >
                <img
                  src="https://i.ibb.co/wrWPjMJv/tiktok-1.png"
                  alt="TikTok"
                  className="h-5 w-5 object-contain"
                />
              </a>
              <a
                href="https://wa.me/message/LBWHWZBR3OQ3G1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-gold transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.04 20.12c-1.58 0-3.12-.42-4.44-1.21l-.32-.19-3.3 1.08 1.1-3.21-.21-.33c-.87-1.38-1.33-2.94-1.33-4.58 0-4.89 3.99-8.88 8.88-8.88 4.89 0 8.88 3.99 8.88 8.88s-3.99 8.88-8.88 8.88z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - SEO Navigation */}
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-gold mb-8">
              Navegación SEO
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/eventos/souvenirs-para-bodas"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Souvenirs para Bodas
                </Link>
              </li>
              {eventCategories
                .filter((cat) => cat.slug !== "casamientos")
                .map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      to={`/eventos/${cat.slug}`}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      Souvenirs {cat.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-gold mb-8">
              Recursos
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/blog"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Inspiration Journal
                </Link>
              </li>
              <li>
                <Link
                  to="/prensa"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Media Kit & Prensa
                </Link>
              </li>
              <li>
                <Link
                  to="/souvenirs"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Catálogo Exclusivo
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Asesoría Personalizada
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact Details */}
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-gold mb-8">
              Contacto
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <span className="italic">
                  Atelier en Buenos Aires, Argentina. Despachos premium a todo el país.
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a href="mailto:sucupam@hotmail.com" className="hover:text-brand-gold transition-colors">
                  sucupam@hotmail.com
                </a>
              </li>
              <li className="pt-4">
                <div className="flex items-center space-x-2 text-brand-gold">
                  <Star className="w-3 h-3 fill-current" />
                  <span className="text-[9px] uppercase tracking-[0.18em] font-bold">
                    Artesanía Certificada
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom copyright notes */}
        <div className="border-t border-white/5 pt-12 text-center">
          <p className="text-[10px] uppercase tracking-widest text-gray-600">
            © {new Date().getFullYear()} SUCUPAM — MOMENTOS INOLVIDABLES. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <p className="mt-4 text-[9px] uppercase tracking-[0.18em] text-gray-700 select-none">
            SEO & AIO Optimized for Modern Search Paradigms
          </p>
        </div>
      </div>
    </footer>
  );
}
