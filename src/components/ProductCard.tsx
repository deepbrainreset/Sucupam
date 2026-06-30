import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Eye, X, Sparkles, Heart, Palette, MessageCircle } from "lucide-react";
import { Product } from "../data";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Determine personalization badges based on product characteristics
  const getBadges = (slug: string) => {
    switch (slug) {
      case "mantas-para-eventos-personalizadas":
        return ["Textil Premium", "Tarjetita Incluida", "Lazo de Raso"];
      case "valijitas-personalizadas":
        return ["Vinilo de Alta Resistencia", "Kit Anti-Resaca", "Diseño a Medida"];
      case "conos-para-arroz-confeti-petalos":
        return ["Armado Artesanal", "Listos para Rellenar", "Eco-friendly"];
      case "abanicos-personalizados":
        return ["Alto Gramaje", "Funcional & Elegante", "Estilo Rústico"];
      case "abanicos-paleta-personalizado":
        return ["Mango de Madera", "Doble Faz", "Campestre / Vintage"];
      case "numeros-de-mesa-personalizados":
        return ["Impresión Doble Cara", "Papel Kraft / Blanco", "Listo para Colocar"];
      case "panuelos-para-lagrimas-de-felicidad":
        return ["Soft Touch", "Presentación de Lujo", "Tarjetita Impresa"];
      case "tags-tarjetitas":
        return ["Ojalillos Metálicos", "Troquelado Fino", "Hilo Yute"];
      case "tarjetas-personalizadas-con-chocolatin":
        return ["Chocolate Fino", "Dulce Recuerdo", "Diseño Temático"];
      case "tarjetas-raspaditas-personalizadas":
        return ["Interactivo", "Más de 50 Modelos", "Raspador Seguro"];
      default:
        return ["100% Personalizado", "Hecho a Mano"];
    }
  };

  const badges = getBadges(product.slug);

  const whatsappMessage = encodeURIComponent(
    `Hola! Vi el producto "${product.name}" en tu catálogo y me encantaría consultar por un pedido personalizado para mi evento.`
  );
  const whatsappLink = `https://wa.me/message/LBWHWZBR3OQ3G1?text=${whatsappMessage}`;

  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex flex-col group bg-white border border-brand-accent/30 rounded-3xl overflow-hidden transition-all duration-500 hover:border-transparent hover:shadow-[0_30px_75px_-12px_rgba(197,168,128,0.35)] hover:-translate-y-2.5 active:translate-y-[-2px]"
      >
        {/* Dynamic Circulating Border Sheen */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-3xl z-20" fill="none">
          <rect
            x="1"
            y="1"
            width="calc(100% - 2px)"
            height="calc(100% - 2px)"
            rx="22"
            stroke="#C5A880"
            strokeWidth="2.5"
            strokeLinecap="round"
            style={{
              strokeDasharray: '2000',
              strokeDashoffset: isHovered ? '0' : '2000',
              transition: 'stroke-dashoffset 1500ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        </svg>

        {/* Image Frame */}
        <div className="block overflow-hidden relative aspect-[4/5] bg-brand-accent/10">
          <img
            src={product.coverImageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-[1200ms] cubic-bezier(0.16,1,0.3,1) group-hover:scale-118"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          {/* Top category pill */}
          <div className="absolute top-4 left-4 z-10">
            <span className="text-[10px] tracking-widest font-semibold uppercase px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-dark rounded-full border border-brand-primary/20 shadow-sm">
              {product.category}
            </span>
          </div>

          {/* Quick actions overlay */}
          <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            <button
              onClick={() => setIsQuickViewOpen(true)}
              className="bg-white hover:bg-brand-primary hover:text-white text-brand-dark p-3.5 rounded-full shadow-lg transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 flex items-center justify-center cursor-pointer"
              title="Vista Rápida"
              aria-label="Vista Rápida"
            >
              <Eye className="w-5 h-5" />
            </button>
            <Link
              to={`/producto/${product.slug}`}
              className="bg-white hover:bg-brand-primary hover:text-white text-brand-dark px-5 py-3 rounded-full shadow-lg font-sans text-xs font-bold tracking-wider uppercase transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
            >
              Ver Detalle
            </Link>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8 flex flex-col flex-grow text-center">
          {/* Price Tag */}
          <div className="mb-2">
            <span className="text-sm font-semibold font-sans text-brand-gold bg-brand-accent/50 px-3 py-0.5 rounded-full inline-block">
              {product.price}
            </span>
          </div>

          {/* Product Name */}
          <h3 className="font-serif text-xl md:text-2xl text-brand-dark mb-3 line-clamp-2 min-h-[3.5rem] flex items-center justify-center font-medium leading-tight">
            <Link to={`/producto/${product.slug}`} className="hover:text-brand-primary transition-colors">
              {product.name}
            </Link>
          </h3>

          {/* Badges Preview */}
          <div className="flex flex-wrap gap-1 justify-center mb-4">
            {badges.slice(0, 2).map((b, i) => (
              <span
                key={i}
                className="text-[9px] font-sans tracking-wide font-medium text-brand-ink/90 bg-brand-secondary/20 border border-brand-secondary/40 px-2 py-0.5 rounded-full"
              >
                ✦ {b}
              </span>
            ))}
          </div>

          {/* Short description */}
          <p className="text-brand-ink/80 text-xs md:text-sm line-clamp-2 leading-relaxed mb-6 italic">
            "{product.shortDescription}"
          </p>

          {/* Call to Actions */}
          <div className="mt-auto pt-5 border-t border-brand-accent/20 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={() => setIsQuickViewOpen(true)}
              className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/70 hover:text-brand-primary transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              Vista Rápida
            </button>

            <Link
              to={`/producto/${product.slug}`}
              className="text-[10px] uppercase tracking-widest font-bold text-brand-dark hover:text-brand-primary transition-colors flex items-center gap-1"
            >
              Explorar
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* QUICK VIEW MODAL COMPONENT */}
      {isQuickViewOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm"
            onClick={() => setIsQuickViewOpen(false)}
          />

          {/* Modal Container */}
          <div className="relative bg-brand-paper w-full max-w-3xl rounded-[2rem] overflow-hidden shadow-2xl border border-brand-accent max-h-[90vh] overflow-y-auto animate-fadeIn">
            {/* Close button */}
            <button
              onClick={() => setIsQuickViewOpen(false)}
              className="absolute top-4 right-4 z-50 bg-white/90 backdrop-blur-sm border border-brand-accent text-brand-dark p-2 rounded-full hover:bg-brand-primary hover:text-white transition-all shadow-md cursor-pointer"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image Section */}
              <div className="relative aspect-square md:aspect-auto md:h-full min-h-[300px] bg-brand-accent/20">
                <img
                  src={product.coverImageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-brand-primary/20 shadow-sm">
                  <span className="text-[11px] font-sans tracking-widest font-bold text-brand-dark uppercase">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Text Context Section */}
              <div className="p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-brand-primary/20 text-brand-ink/90 border border-brand-primary/40 text-[10px] font-sans px-3 py-1 rounded-full font-semibold">
                      {product.price}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl font-medium text-brand-dark mb-4 leading-tight">
                    {product.name}
                  </h3>

                  <p className="text-brand-ink text-sm leading-relaxed mb-6 font-sans">
                    {product.shortDescription}
                  </p>

                  {/* Highlights section inside quick view */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[10px] uppercase tracking-luxury font-bold text-brand-gold block border-b border-brand-accent/30 pb-1">
                      Características Premium
                    </span>
                    <ul className="grid grid-cols-1 gap-2">
                      {badges.map((b, i) => (
                        <li key={i} className="text-xs text-brand-ink/90 flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-brand-primary flex-shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-3 pt-6 border-t border-brand-accent/20 text-center">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-whatsapp-green text-white font-sans text-sm font-bold tracking-wider uppercase py-4 rounded-xl hover:bg-whatsapp-dark transition-all shadow-md hover:shadow-lg w-full gap-2 hover:scale-[1.01]"
                  >
                    <MessageCircle className="w-5 h-5 flex-shrink-0" />
                    Cotizar por WhatsApp
                  </a>

                  <p className="text-[10px] text-brand-ink/80 font-sans italic">
                    * El presupuesto final se calcula según la cantidad total pedida. También podés consultarnos por Instagram o TikTok.
                  </p>

                  <Link
                    to={`/producto/${product.slug}`}
                    onClick={() => setIsQuickViewOpen(false)}
                    className="flex items-center justify-center text-[11px] uppercase tracking-widest font-bold text-brand-dark hover:text-brand-primary transition-colors text-center w-full py-2"
                  >
                    Ver Ficha Completa
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
