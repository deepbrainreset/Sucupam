import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Sparkles, ShieldCheck, Heart, Send } from "lucide-react";
import { SEO } from "../components/SEO";
import { SchemaMarkup } from "../components/SchemaMarkup";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data";

export function ProductDetail() {
  const { productSlug } = useParams<{ productSlug: string }>();
  const product = products.find((p) => p.slug === productSlug);

  if (!product) {
    return (
      <section className="py-24 bg-brand-paper text-center fade-in">
        <div className="container mx-auto px-6">
          <span className="text-4xl block mb-4">🌸</span>
          <h1 className="font-serif text-3xl mb-4 text-brand-dark">Producto no encontrado</h1>
          <p className="text-brand-ink mb-6">El producto que estás buscando no existe o fue descontinuado.</p>
          <Link
            to="/souvenirs"
            className="inline-flex items-center justify-center px-6 py-3 bg-brand-dark text-white rounded-xl font-sans text-xs uppercase tracking-widest font-bold hover:bg-brand-primary hover:text-brand-dark transition-colors"
          >
            Volver al catálogo
          </Link>
        </div>
      </section>
    );
  }

  const galleryImages =
    product.galleryImageUrls.length > 0
      ? product.galleryImageUrls
      : [product.coverImageUrl];

  // Get related products (same category, or random from dataset, max 3)
  const relatedProducts = products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  // Custom highlights based on slug
  const getFeatures = (slug: string) => {
    switch (slug) {
      case "mantas-para-eventos-personalizadas":
        return [
          "Manta polar supersuave de alta densidad de 1,20 x 0,80 m.",
          "Presentación enrollada, sujeta con cinta de raso premium y tarjeta floral calada.",
          "Diseño gráfico 100% personalizado a juego con tus invitaciones.",
          "Ideal para casamientos de noche, bodas al aire libre o civiles invernales."
        ];
      case "valijitas-personalizadas":
        return [
          "Valijitas plásticas reforzadas de 15 x 11 x 7 cm.",
          "Personalización frontal en vinilo adhesivo de alta definición resistente al agua.",
          "Muy versátiles: ideales para kit anti-resaca, golosinas o set de higiene.",
          "Disponible en colores pastel o transparente según diseño elegido."
        ];
      case "conos-para-arroz-confeti-petalos":
        return [
          "Conos confeccionados en papel importado de tacto aterciopelado.",
          "Diseño personalizado según temática floral o monograma de casamiento.",
          "Boca amplia de 8 x 20 cm lista para rellenar de forma ágil.",
          "Se entregan armados listos para que incorpores pétalos o confeti."
        ];
      case "abanicos-personalizados":
        return [
          "Abanicos plegables en papel mate italiano de alto gramaje.",
          "Impresión nítida con colores estables y tipografías caligráficas elegantes.",
          "Varilla rígida estructural que resiste manipulación continua.",
          "Ideal para ceremonias religiosas o banquetes al aire libre bajo el sol."
        ];
      default:
        return [
          "Elaboración completamente artesanal cuidando la prolijidad en cada pieza.",
          "Papelería fina y acabados premium diseñados a tu entero gusto.",
          "Despacho súper protegido para mitigar riesgos en traslados logísticos.",
          "Diseños personalizados coordinados directamente a través de WhatsApp."
        ];
    }
  };

  const features = getFeatures(product.slug);

  const whatsappMessage = encodeURIComponent(
    `Hola Sucupam! Deseo consultar presupuesto y detalles para personalizar el producto "${product.name}" para un evento.`
  );
  const whatsappLink = `https://wa.me/message/LBWHWZBR3OQ3G1?text=${whatsappMessage}`;

  return (
    <>
      <SEO
        title={product.metaTitle || `${product.name} | Souvenirs Sucupam`}
        description={product.metaDescription || product.shortDescription}
        path={`/producto/${product.slug}`}
        image={product.coverImageUrl}
      />
      
      {/* SCHEMA MARKUPS FOR GOOGLE SEARCH COMPLIANCE */}
      <SchemaMarkup
        type="BreadcrumbList"
        data={{
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Inicio",
              item: "https://sucupam.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Souvenirs",
              item: "https://sucupam.com/souvenirs",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: product.name,
              item: `https://sucupam.com/producto/${product.slug}`,
            },
          ],
        }}
      />
      <SchemaMarkup
        type="Product"
        data={{
          name: product.name,
          description: product.shortDescription,
          image: product.coverImageUrl,
          brand: {
            "@type": "Brand",
            name: "Sucupam",
          },
          offers: {
            "@type": "Offer",
            priceCurrency: "ARS",
            price: product.price.replace(/[^0-9]/g, "") || "0.00",
            availability: "https://schema.org/PreOrder",
            url: `https://sucupam.com/producto/${product.slug}`
          }
        }}
      />

      <main className="min-h-screen bg-brand-paper py-12 md:py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Elegant breadcrumb trigger back button */}
          <Link
            to="/souvenirs"
            className="inline-flex items-center text-[10px] uppercase tracking-luxury font-bold text-brand-ink hover:text-brand-primary mb-10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al catálogo general
          </Link>

          {/* Core Info Display Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Visuals Gallery Panel - Span 6 */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-[2.5rem] overflow-hidden border border-brand-accent/40 shadow-lg bg-white aspect-square">
                <img
                  src={product.coverImageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Event Tag overlay */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full border border-brand-accent shadow-sm">
                  <span className="text-[10px] font-sans tracking-widest font-bold text-brand-dark uppercase">
                    {product.category}
                  </span>
                </div>
              </div>

              {galleryImages.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {galleryImages.map((url, i) => (
                    <div key={i} className="aspect-square rounded-2xl overflow-hidden border border-brand-accent bg-white shadow-sm hover:scale-105 transition-transform duration-300">
                      <img
                        key={i}
                        src={url}
                        alt={`${product.name} galería ${i + 1}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Content Context Panel - Span 6 */}
            <div className="lg:col-span-6 lg:sticky lg:top-28">
              {/* Category tags & pricing badge */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="bg-brand-primary/20 text-brand-dark/90 border border-brand-primary/40 text-[10px] font-sans px-3.5 py-1 rounded-full font-bold uppercase tracking-wider">
                  {product.price}
                </span>
                <span className="text-xs uppercase tracking-widest text-[#C5A880] font-sans font-bold">
                  ✦ Souvenir Premium
                </span>
              </div>

              <h1 className="font-serif text-3xl md:text-5xl text-brand-dark mb-6 leading-tight font-medium">
                {product.name}
              </h1>

              {/* High precision description */}
              <div className="text-brand-ink text-sm md:text-base leading-relaxed whitespace-pre-line mb-8 font-sans">
                {product.longDescription}
              </div>

              {/* Personalization key highlights */}
              <div className="p-6 rounded-3xl bg-brand-accent/30 border border-brand-accent/60 mb-8 space-y-4">
                <h4 className="text-xs uppercase tracking-luxury font-bold text-brand-gold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-primary" />
                  Qué incluye cada unidad
                </h4>
                <ul className="space-y-2">
                  {features.map((feat, idx) => (
                    <li key={idx} className="text-xs text-brand-dark flex items-start gap-2.5 leading-relaxed font-serif">
                      <span className="text-brand-primary font-bold mt-0.5">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Elegant trust items strip */}
              <div className="grid grid-cols-3 gap-3 mb-8 text-center border-y border-brand-accent/20 py-4 text-[9px] uppercase tracking-widest text-brand-ink/90 font-bold">
                <div className="flex flex-col items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
                  <span>Compra Segura</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Heart className="w-4 h-4 text-brand-primary" />
                  <span>Hecho a Mano</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Send className="w-4 h-4 text-[#DCCFEA]" />
                  <span>Envíos Asegurados</span>
                </div>
              </div>

              {/* Dynamic Call To Action consultation bar */}
              <div className="space-y-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-whatsapp-green text-white py-4 px-8 rounded-2xl font-bold tracking-wider font-sans text-xs uppercase hover:bg-whatsapp-dark transition-all duration-300 w-full shadow-lg hover:shadow-xl gap-2 hover:scale-[1.01]"
                >
                  <MessageCircle className="w-5 h-5" />
                  Quiero Cotizar por WhatsApp
                </a>

                {/* Social media connections option */}
                <div className="bg-brand-accent/30 border border-brand-accent/60 rounded-2xl p-4.5 space-y-3">
                  <h5 className="text-[10px] uppercase font-bold tracking-wider text-brand-dark font-sans text-center">
                    ¿Preferís redes sociales? Escribinos por mensaje directo:
                  </h5>
                  <div className="grid grid-cols-2 gap-2 text-center text-xs font-bold font-sans">
                    <a
                      href="https://www.instagram.com/sucupam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white border border-brand-accent py-2.5 rounded-xl text-brand-dark hover:bg-brand-primary hover:text-white transition-all shadow-sm"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.tiktok.com/@sucupam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white border border-brand-accent py-2.5 rounded-xl text-brand-dark hover:bg-brand-primary hover:text-white transition-all shadow-sm"
                    >
                      TikTok
                    </a>
                  </div>
                </div>

                <p className="text-[11px] text-brand-ink/90 leading-relaxed text-center font-sans bg-[#FDF8F5] p-3 rounded-xl border border-brand-accent/40 italic">
                  * Los precios se otorgan mediante un presupuesto personalizado que se arma según la cantidad que necesites para tu lote. No manejamos compra directa automatizada en la web para asegurar el mejor valor personalizado.
                </p>
              </div>
            </div>
          </div>

          {/* Related Products Showcase - NO LINKS BACK TO BLOG */}
          {relatedProducts.length > 0 && (
            <section className="mt-24 pt-20 border-t border-brand-accent/20" aria-label="Productos recomendados">
              <span className="text-xs uppercase tracking-luxury font-bold text-brand-gold block mb-2 text-center md:text-left">
                Colección Exclusiva
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-10 leading-tight text-center md:text-left">
                También te puede interesar
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                {relatedProducts.map((prod) => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
}

export default ProductDetail;
