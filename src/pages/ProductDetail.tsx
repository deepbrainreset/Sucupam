import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, Maximize2, X, MessageCircle, Sparkles, ShieldCheck, Heart, Send } from "lucide-react";
import { SEO } from "../components/SEO";
import { SchemaMarkup } from "../components/SchemaMarkup";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data";

export function ProductDetail() {
  const { productSlug } = useParams<{ productSlug: string }>();
  const product = products.find((p) => p.slug === productSlug);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const galleryImages = product
    ? (product.galleryImageUrls.length > 0 ? product.galleryImageUrls : [product.coverImageUrl])
    : [];
  const showPreviousImage = () => setSelectedImageIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  const showNextImage = () => setSelectedImageIndex((i) => (i + 1) % galleryImages.length);

  useEffect(() => {
    setSelectedImageIndex(0);
    setIsLightboxOpen(false);
  }, [productSlug]);

  useEffect(() => {
    if (!isLightboxOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsLightboxOpen(false);
      if (event.key === "ArrowLeft") showPreviousImage();
      if (event.key === "ArrowRight") showNextImage();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen, galleryImages.length]);

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
                <button type="button" onClick={() => setIsLightboxOpen(true)} className="absolute inset-0 z-0 h-full w-full cursor-zoom-in focus-visible:outline focus-visible:outline-4 focus-visible:outline-brand-primary" aria-label={`Ampliar imagen ${selectedImageIndex + 1} de ${galleryImages.length}: ${product.name}`}>
                  <img src={galleryImages[selectedImageIndex]} alt={`${product.name}, imagen ${selectedImageIndex + 1} de ${galleryImages.length}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
                {galleryImages.length > 1 && (
                  <>
                    <button type="button" onClick={showPreviousImage} className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 text-brand-dark shadow-md hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-primary" aria-label="Ver imagen anterior"><ChevronLeft className="h-5 w-5" /></button>
                    <button type="button" onClick={showNextImage} className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 text-brand-dark shadow-md hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-primary" aria-label="Ver imagen siguiente"><ChevronRight className="h-5 w-5" /></button>
                    <span className="absolute bottom-4 right-4 z-10 rounded-full bg-black/65 px-3 py-1 text-xs font-semibold text-white" aria-live="polite">{selectedImageIndex + 1} / {galleryImages.length}</span>
                  </>
                )}
                <span className="pointer-events-none absolute bottom-4 left-4 z-10 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-brand-dark shadow-sm"><Maximize2 className="h-4 w-4" />Tocar para ampliar</span>
                <div className="pointer-events-none absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full border border-brand-accent shadow-sm">
                  <span className="text-[10px] font-sans tracking-widest font-bold text-brand-dark uppercase">{product.category}</span>
                </div>
              </div>
              {galleryImages.length > 1 && (
                <div className="grid grid-cols-4 gap-3" aria-label="Elegí una imagen de la galería">
                  {galleryImages.map((url, i) => (
                    <button key={url} type="button" onClick={() => setSelectedImageIndex(i)} aria-label={`Ver imagen ${i + 1} de ${galleryImages.length}`} aria-pressed={selectedImageIndex === i} className={`aspect-square rounded-2xl overflow-hidden border bg-white shadow-sm transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-primary ${selectedImageIndex === i ? "border-brand-primary ring-2 ring-brand-primary/40" : "border-brand-accent"}`}>
                      <img src={url} alt="" className="w-full h-full object-cover" loading="lazy" referrerPolicy="no-referrer" />
                    </button>
                  ))}
                </div>
              )}
              {isLightboxOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 sm:p-8" role="dialog" aria-modal="true" aria-label={`Galería de ${product.name}`} onClick={() => setIsLightboxOpen(false)}>
                  <button type="button" onClick={() => setIsLightboxOpen(false)} className="absolute right-4 top-4 z-20 rounded-full bg-white/15 p-3 text-white hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white" aria-label="Cerrar imagen ampliada"><X className="h-6 w-6" /></button>
                  <img src={galleryImages[selectedImageIndex]} alt={`${product.name}, imagen ${selectedImageIndex + 1} de ${galleryImages.length}`} className="max-h-[88vh] max-w-[92vw] select-none object-contain" onClick={(event) => event.stopPropagation()} referrerPolicy="no-referrer" />
                  {galleryImages.length > 1 && (
                    <>
                      <button type="button" onClick={(event) => { event.stopPropagation(); showPreviousImage(); }} className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-3 text-white hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white" aria-label="Ver imagen anterior"><ChevronLeft className="h-7 w-7" /></button>
                      <button type="button" onClick={(event) => { event.stopPropagation(); showNextImage(); }} className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-3 text-white hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white" aria-label="Ver imagen siguiente"><ChevronRight className="h-7 w-7" /></button>
                      <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-sm text-white" aria-live="polite">{selectedImageIndex + 1} / {galleryImages.length}</span>
                    </>
                  )}
                </div>
              )}
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
