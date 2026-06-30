import { useState } from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { SchemaMarkup } from "../components/SchemaMarkup";
import { SocialShare } from "../components/SocialShare";
import { ProductCard } from "../components/ProductCard";
import { products, blogPosts } from "../data";
import { Sparkles, MessageCircle, ArrowRight, Heart, Calendar, Star, CheckCircle, Package, Send, HelpCircle, ChevronRight } from "lucide-react";

export function Home() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [isCoverHovered, setIsCoverHovered] = useState(false);

  const categories = [
    { id: "todos", name: "Todos los Souvenirs" },
    { id: "casamientos", name: "Casamientos" },
    { id: "15-anos", name: "15 Años" },
    { id: "bautismos", name: "Bautismos / Baby" },
    { id: "corporativos", name: "Corporativos" }
  ];

  // Filter products based on selected tab category
  const filteredProducts = activeCategory === "todos"
    ? products
    : products.filter(p => {
        if (activeCategory === "corporativos") {
          // Some custom classification for corporative or event categories checking
          return p.slug.includes("corporativo") || p.categorySlug.includes("valijita") || p.slug.includes("abanico") || p.slug.includes("tarjeta");
        }
        if (activeCategory === "bautismos") {
          return p.eventCategories.includes("bautismos") || p.eventCategories.includes("baby-shower");
        }
        return p.eventCategories.includes(activeCategory);
      });

  const landingFaqs = [
    {
      q: "¿Hacen envíos a toda Argentina?",
      a: "Sí. Coordinamos envíos a CABA, GBA y a todas las provincias de Argentina con embalaje de alta densidad y seguimiento personalizado para asegurar que tu lote arribe en perfecto estado."
    },
    {
      q: "¿Los souvenirs son personalizados?",
      a: "Por supuesto. Cada detalle visual de nuestros souvenirs, desde los monogramas y las tipografías hasta la paleta de colores de las mantas y papelería, se diseña de manera personalizada para coordinar con la ambientación general de tu fiesta."
    },
    {
      q: "¿Qué demora tiene la producción?",
      a: "Generalmente, solicitamos un plazo de entre 15 y 30 días de anticipación según la complejidad y el volumen del encargo. No obstante, te sugerimos consultarnos con mayor tiempo para asegurar un lugar prioritario en nuestra agenda artesanal."
    },
    {
      q: "¿Pueden hacer designs exclusivos?",
      a: "Sí, nos encanta co-crear. Podés enviarnos las ideas o tarjetas digitales que ya tengas listas para tu evento y nuestro taller adaptará el diseño a los souvenirs para lograr una armonía e identidad de marca visual perfecta."
    },
    {
      q: "¿Qué tipos de eventos cubren?",
      a: "Ofrecemos soluciones premium para bodas, casamientos religiosos o civiles, cumpleaños de 15 años, bautismos, comuniones, baby showers, lanzamientos corporativos, jornadas de fidelización empresarial y festejos familiares exclusivos."
    },
    {
      q: "¿Cómo se realiza el pedido?",
      a: "Es muy sencillo: explorás nuestro catálogo digital en Sucupam, nos contactás a través de los enlaces de WhatsApp de asesoría y te guiaremos paso a paso para definir las cantidades estimadas, ultimar el diseño de la papelería, coordinar el pago seguro y reservar la fecha garantizada de despacho."
    }
  ];

  const testimonials = [
    {
      name: "Sofía & Lautaro",
      event: "Boda en Pilar",
      text: "¡Las mantas de Sucupam fueron el éxito absoluto de nuestro casamiento! Hizo frío a la noche y todos los invitados agradecieron el detalle. Además de ser hermosas, la tarjetita calada y la presentación con cinta quedaron tan finas que decoraban el salón.",
      rating: 5
    },
    {
      name: "Martina G.",
      event: "Cumpleaños de 15",
      text: "Compramos las raspaditas personalizadas y los abanicos paleta para mis 15. A mis amigas les encantó el juego del raspón para ver quién se ganaba el souvenir de chocolate. Súper originales, prolijos y súper amables en la atención.",
      rating: 5
    },
    {
      name: "Victoria R.",
      event: "Evento Corporativo – Lancôme",
      text: "Desarrollamos kits con valijitas personalizadas y tarjetitas perfumadas para un lanzamiento de prensa. La calidad del relieve del logo y la entrega a tiempo superaron nuestras expectativas. Definitivamente volveremos a trabajar con ellas.",
      rating: 5
    }
  ];

  const instagramMedia = [
    { id: 1, url: "https://res.cloudinary.com/dyaun9c0q/image/upload/v1774488189/portada_mantas_mno1nu.webp", tag: "@sucupam" },
    { id: 2, url: "https://i.ibb.co/RpdSL657/4.jpg", tag: "@sucupam" },
    { id: 3, url: "https://i.ibb.co/NnJdmmKq/1762114158184.jpg", tag: "@sucupam" },
    { id: 4, url: "https://res.cloudinary.com/dyaun9c0q/image/upload/v1774488385/1774028143018_ffrp3f.jpg", tag: "@sucupam" },
    { id: 5, url: "https://i.ibb.co/4kfq2pV/V.png", tag: "@sucupam" },
    { id: 6, url: "https://i.ibb.co/Z1xLdf4Y/5.jpg", tag: "@sucupam" }
  ];

  return (
    <>
      <SEO
        title="Sucupam | Souvenirs personalizados en Argentina"
        description="Souvenirs personalizados para bodas, 15 años y eventos corporativos. Diseños premium hechos a mano en Argentina."
        path="/"
        image="https://res.cloudinary.com/dyaun9c0q/image/upload/v1774488189/portada_mantas_mno1nu.webp"
      />
      
      {/* SCHEMA MARKUPS */}
      <SchemaMarkup
        type="LocalBusiness"
        data={{
          name: "Sucupam",
          url: "https://sucupam.com",
          logo: "https://i.ibb.co/DH3hNbmN/logo-2.png",
          image: "https://res.cloudinary.com/dyaun9c0q/image/upload/v1774488189/portada_mantas_mno1nu.webp",
          areaServed: {
            "@type": "Country",
            name: "Argentina"
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Buenos Aires",
            addressCountry: "AR"
          },
          priceRange: "$$",
          telephone: "Consultar link de WhatsApp directo",
          sameAs: [
            "https://www.instagram.com/sucupam",
            "https://www.tiktok.com/@sucupam"
          ]
        }}
      />
      <SchemaMarkup
        type="Organization"
        data={{
          name: "Sucupam",
          url: "https://sucupam.com",
          logo: "https://i.ibb.co/DH3hNbmN/logo-2.png",
          sameAs: [
            "https://www.instagram.com/sucupam",
            "https://www.tiktok.com/@sucupam"
          ]
        }}
      />
      <SchemaMarkup
        type="FAQPage"
        data={{
          mainEntity: landingFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a
            }
          }))
        }}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={{
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Inicio",
              item: "https://sucupam.com/"
            }
          ]
        }}
      />

      <main className="min-h-screen bg-brand-paper overflow-hidden">
        {/* SECTION 1: HERO SECTION - SOFT FEMININE PREMIUM BOUTIQUE IDENTITY */}
        <section className="relative py-20 lg:py-32 bg-gradient-to-tr from-[#FFFDF9] via-[#F4E8DD]/40 to-[#EBC7D4]/15 border-b border-brand-accent/20">
          {/* Subtle decorative watercolor circle elements */}
          <div className="absolute top-1/4 right-[5%] w-80 h-80 rounded-full bg-brand-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 left-[5%] w-96 h-96 rounded-full bg-[#DCCFEA]/8 blur-3xl pointer-events-none" />

          {/* Delicate Botanical Flourish (background overlay) */}
          <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none select-none hidden lg:block">
            <svg width="400" height="400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
              <path d="M50 10 C60 30, 40 50, 50 90 M50 30 C70 30, 80 40, 65 50 C50 60, 40 70, 50 90 M50 50 C20 40, 15 55, 30 65 C45 75, 48 85, 50 90" />
            </svg>
          </div>

          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Text Area */}
              <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-primary/20 border border-brand-primary/40 text-[10px] uppercase tracking-widest font-bold text-brand-dark/90 mb-6 shadow-sm">
                  <Heart className="w-3.5 h-3.5 text-brand-primary fill-current" />
                  Atelier de Recuerdos Premium
                </span>
                
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-brand-dark leading-[1.15] mb-6 text-center lg:text-left">
                  Souvenirs Personalizados para <br className="hidden md:inline" />
                  Casamientos, Cumpleaños y <br className="hidden md:inline" />
                  <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-primary to-brand-secondary">
                    Eventos Especiales
                  </span>
                </h1>

                <p className="font-sans text-brand-ink/90 text-base md:text-xl leading-relaxed max-w-xl mb-10">
                  Creamos souvenirs premium personalizados y papelería artesanal fina en Argentina. Diseños mimados, hechos a mano para que atesores tus momentos eternamente.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                  <Link
                    to="/souvenirs"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4.5 bg-brand-dark text-brand-paper hover:bg-brand-primary hover:text-brand-dark rounded-2xl font-bold tracking-wider text-xs uppercase shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  >
                    Ver Catálogo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>

                  <a
                    href="https://wa.me/message/LBWHWZBR3OQ3G1?text=Hola!%20Deseo%20hacer%20una%20consulta%20por%20un%20pedido%20de%20souvenirs%20personalizados."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4.5 bg-white border border-brand-primary/40 text-brand-dark hover:bg-brand-accent/40 rounded-2xl font-bold tracking-wider text-xs uppercase shadow-sm transition-all duration-300 hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-4 h-4 mr-2 text-brand-primary" />
                    Personalizar Pedido
                  </a>
                </div>

                {/* Micro guarantees strip */}
                <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start text-[11px] uppercase tracking-widest text-[#8F8884] font-medium">
                  <span>✦ Hecho a mano</span>
                  <span>✦ Envíos a todo el país</span>
                  <span>✦ Diseño 100% único</span>
                </div>
              </div>

              {/* Showcase Hero Illustration / Photo Collage */}
              <div className="lg:col-span-5 relative mt-8 lg:mt-0">
                {/* Visual decorative watercolor shadow */}
                <div className="absolute inset-4 rounded-[3rem] bg-brand-primary/25 blur-xl pointer-events-none" />

                <div
                  onMouseEnter={() => setIsCoverHovered(true)}
                  onMouseLeave={() => setIsCoverHovered(false)}
                  className="relative rounded-[3rem] overflow-hidden border-2 border-brand-accent shadow-xl bg-white aspect-[4/5] max-w-sm mx-auto transition-all duration-500 hover:border-transparent hover:shadow-[0_30px_75px_-12px_rgba(197,168,128,0.35)] hover:-translate-y-2.5 active:translate-y-[-2px] group"
                >
                  {/* Dynamic Circulating Border Sheen */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-[3rem] z-20" fill="none">
                    <rect
                      x="1"
                      y="1"
                      width="calc(100% - 2px)"
                      height="calc(100% - 2px)"
                      rx="46"
                      stroke="#C5A880"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      style={{
                        strokeDasharray: '2000',
                        strokeDashoffset: isCoverHovered ? '0' : '2000',
                        transition: 'stroke-dashoffset 1500ms cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    />
                  </svg>

                  <img
                    src="https://res.cloudinary.com/dyaun9c0q/image/upload/v1774488189/portada_mantas_mno1nu.webp"
                    alt="Mantas premium personalizadas Sucupam"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-118"
                    referrerPolicy="no-referrer"
                  />
                  {/* Embedded float branding */}
                  <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 backdrop-blur-sm shadow-lg border border-brand-accent/40">
                    <span className="text-[9px] uppercase tracking-[0.2em] font-black text-brand-gold block mb-1">BEST SELLER</span>
                    <h4 className="font-serif text-lg font-bold text-brand-dark">Mantas Polares de Eventos</h4>
                    <p className="text-[11px] text-brand-ink/90 mt-1">Con fajita contenedora y tarjetitas personalizadas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: FEATURED EVENT CATEGORIES (6 SOUVENIRS SEO LANDINGS) */}
        <section className="py-20 bg-white border-b border-brand-accent/20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-luxury font-bold text-brand-gold">Nuestras Soluciones</span>
              <h2 className="font-serif text-3xl md:text-5xl text-brand-dark font-medium mt-2">Categorías de Souvenirs Destacadas</h2>
              <p className="text-brand-ink text-sm md:text-base mt-2 max-w-xl mx-auto font-sans">
                Explorá propuestas pensadas con amor y delicadeza para responder a la identidad visual de tu gran día.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-6 gap-5">
              {/* Event 1 - Casamientos */}
              <Link
                to="/souvenirs-casamientos"
                className="group flex flex-col items-center text-center p-6 bg-brand-paper hover:bg-brand-primary/10 rounded-[2rem] border border-brand-accent/35 transition-all duration-300 hover:shadow-md cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-brand-primary/25 flex items-center justify-center text-brand-dark group-hover:scale-110 transition-transform duration-300 mb-4 font-serif text-lg font-semibold border border-brand-primary/30">
                  👰
                </div>
                <h3 className="font-serif text-sm font-bold text-brand-dark mb-1 whitespace-nowrap">Casamientos</h3>
                <p className="text-[9px] text-brand-ink/80 italic">Bodas & Civiles</p>
              </Link>

              {/* Event 2 - Cumpleaños */}
              <Link
                to="/souvenirs-cumpleanos"
                className="group flex flex-col items-center text-center p-6 bg-brand-paper hover:bg-[#DCCFEA]/15 rounded-[2rem] border border-brand-accent/35 transition-all duration-300 hover:shadow-md cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-brand-secondary/25 flex items-center justify-center text-brand-dark group-hover:scale-110 transition-transform duration-300 mb-4 font-serif text-lg font-semibold border border-brand-secondary/30">
                  🎂
                </div>
                <h3 className="font-serif text-sm font-bold text-brand-dark mb-1 whitespace-nowrap">Cumpleaños</h3>
                <p className="text-[9px] text-brand-ink/80 italic">Festejos de Adultos</p>
              </Link>

              {/* Event 3 - Bautismos */}
              <Link
                to="/souvenirs-bautismos"
                className="group flex flex-col items-center text-center p-6 bg-brand-paper hover:bg-brand-accent/40 rounded-[2rem] border border-brand-accent/35 transition-all duration-300 hover:shadow-md cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-brand-accent/50 flex items-center justify-center text-brand-dark group-hover:scale-110 transition-transform duration-300 mb-4 font-serif text-lg font-semibold border border-brand-accent/60">
                  🕊
                </div>
                <h3 className="font-serif text-sm font-bold text-brand-dark mb-1 whitespace-nowrap">Bautismos</h3>
                <p className="text-[9px] text-brand-ink/80 italic">Nene, Nena & Comunión</p>
              </Link>

              {/* Event 4 - Baby Shower */}
              <Link
                to="/souvenirs-baby-shower"
                className="group flex flex-col items-center text-center p-6 bg-brand-paper hover:bg-brand-primary/10 rounded-[2rem] border border-brand-accent/35 transition-all duration-300 hover:shadow-md cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-brand-primary/15 flex items-center justify-center text-brand-dark group-hover:scale-110 transition-transform duration-300 mb-4 font-serif text-lg font-semibold border border-brand-primary/20">
                  🍼
                </div>
                <h3 className="font-serif text-sm font-bold text-brand-dark mb-1 whitespace-nowrap">Baby Shower</h3>
                <p className="text-[9px] text-brand-ink/80 italic">Dulce Espera</p>
              </Link>

              {/* Event 5 - XV Años */}
              <Link
                to="/souvenirs-xv-anos"
                className="group flex flex-col items-center text-center p-6 bg-brand-paper hover:bg-[#DCCFEA]/20  rounded-[2rem] border border-brand-accent/35 transition-all duration-300 hover:shadow-md cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-[#DCCFEA]/25 flex items-center justify-center text-brand-dark group-hover:scale-110 transition-transform duration-300 mb-4 font-serif text-lg font-semibold border border-[#DCCFEA]/30">
                  ✨
                </div>
                <h3 className="font-serif text-sm font-bold text-brand-dark mb-1 whitespace-nowrap">XV Años</h3>
                <p className="text-[9px] text-brand-ink/80 italic">Ideas Modernas</p>
              </Link>

              {/* Event 6 - Eventos Corporativos */}
              <Link
                to="/souvenirs-eventos-corporativos"
                className="group flex flex-col items-center text-center p-6 bg-brand-paper hover:bg-brand-accent/20 rounded-[2rem] border border-brand-accent/35 transition-all duration-300 hover:shadow-md cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-brand-accent/30 flex items-center justify-center text-brand-dark group-hover:scale-110 transition-transform duration-300 mb-4 font-serif text-lg font-semibold border border-brand-accent/40">
                  💼
                </div>
                <h3 className="font-serif text-sm font-bold text-brand-dark mb-1 whitespace-nowrap">Corporativos</h3>
                <p className="text-[9px] text-brand-ink/80 italic">Regalos para Empresas</p>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 3: FEATURED CATALOG - PRODUCT ROWS & CATEGORIES SELECTOR */}
        <section className="py-24 bg-brand-paper relative">
          <div className="container mx-auto px-6 max-w-6xl">
            {/* Header section with badge */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-xs uppercase tracking-luxury font-bold text-brand-gold">Catálogo Artesanal</span>
                <h2 className="font-serif text-4xl md:text-5xl text-brand-dark font-medium mt-1 leading-tight">Colección de Souvenirs Destacados</h2>
                <p className="text-brand-ink mt-2 max-w-lg">Buscá los souvenirs más elegidos por novias y organizadores de eventos en Argentina.</p>
              </div>

              {/* Ver Todo Button */}
              <Link
                to="/souvenirs"
                className="self-start md:self-auto inline-flex items-center text-xs font-bold uppercase tracking-widest text-brand-dark hover:text-brand-primary transition-colors pb-1 border-b-2 border-brand-primary/40 group"
              >
                Ver Catálogo Completo
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 duration-200" />
              </Link>
            </div>

            {/* Category tabs selector */}
            <div className="flex flex-wrap gap-2 md:gap-3 mb-12 justify-center lg:justify-start pb-4 border-b border-brand-accent/20">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory(c.id)}
                  className={`px-5 py-2.5 rounded-full font-sans text-xs font-semibold tracking-wide transition-all border duration-300 cursor-pointer ${
                    activeCategory === c.id
                      ? "bg-brand-dark text-white border-brand-dark shadow-sm"
                      : "bg-white text-brand-ink hover:text-brand-dark bg-white border-brand-accent/50 hover:border-brand-primary"
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>

            {/* Grid display */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {filteredProducts.slice(0, 6).map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>

            {/* Bottom showcase highlight */}
            <div className="mt-16 text-center">
              <Link
                to="/souvenirs"
                className="inline-flex items-center justify-center px-10 py-5 bg-brand-accent/40 hover:bg-brand-primary/20 text-brand-dark font-serif text-base rounded-2xl border-2 border-brand-primary/20 transition-all transform hover:scale-[1.01] font-medium"
              >
                Descubrí todos los souvenirs en el Catálogo Digital
                <ArrowRight className="w-5 h-5 ml-2 text-brand-primary" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 4: THE CUSTOMIZATION PROCESS - TIMELINE */}
        <section className="py-24 bg-white border-y border-brand-accent/20 relative">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-xs uppercase tracking-luxury font-bold text-brand-gold">Hecho Especialmente</span>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-dark font-medium mt-2 leading-tight">Proceso de Personalización</h2>
              <p className="text-brand-ink font-sans text-sm md:text-base mt-2">
                Nos tomamos el tiempo para diseñar cada pieza a juego con tu historia. Diseñamos con mimo y delicadeza.
              </p>
            </div>

            {/* Horizontal or Vertical flow timeline */}
            <div className="relative">
              {/* Central connection line (desktop) */}
              <div className="hidden md:block absolute top-[44px] left-8 right-8 h-0.5 bg-gradient-to-r from-brand-primary/20 via-brand-gold/40 to-brand-secondary/20" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-brand-accent flex items-center justify-center font-serif text-lg font-bold text-brand-dark mb-4 border-2 border-brand-primary/40 shadow-sm relative">
                    1
                    <div className="absolute inset-0.5 rounded-full border border-dashed border-brand-dark/20" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-brand-dark mb-2">1. Elegí</h4>
                  <p className="text-xs text-brand-ink/90 leading-relaxed max-w-[200px]">
                    Elegí el recuerdo o souvenir perfecto cargado en nuestro catálogo digital interactivo.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-[#EBC7D4]/30 flex items-center justify-center font-serif text-lg font-bold text-brand-dark mb-4 border-2 border-brand-primary/40 shadow-sm relative">
                    2
                    <div className="absolute inset-0.5 rounded-full border border-dashed border-brand-dark/20" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-brand-dark mb-2">2. Personalizá</h4>
                  <p className="text-xs text-brand-ink/90 leading-relaxed max-w-[200px]">
                    Personalizá el diseño, la paleta cromática, el tipo de cinta y los nombres para tu papelería artesanal.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-[#DCCFEA]/30 flex items-center justify-center font-serif text-lg font-bold text-brand-dark mb-4 border-2 border-[#DCCFEA]/40 shadow-sm relative">
                    3
                    <div className="absolute inset-0.5 rounded-full border border-dashed border-brand-dark/20" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-brand-dark mb-2">3. Confirmá</h4>
                  <p className="text-xs text-brand-ink/90 leading-relaxed max-w-[200px]">
                    Confirmá el volumen final del pedido y validá las muestras digitales en alta definición por WhatsApp.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-brand-accent flex items-center justify-center font-serif text-lg font-bold text-brand-dark mb-4 border-2 border-brand-primary/40 shadow-sm relative">
                    4
                    <div className="absolute inset-0.5 rounded-full border border-dashed border-brand-dark/20" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-brand-dark mb-2">4. Recibí</h4>
                  <p className="text-xs text-brand-ink/90 leading-relaxed max-w-[200px]">
                    Recibí de manera ágil y segura tu pedido embalado en cajas reforzadas en cualquier punto de Argentina.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: TESTIMONIALS SECTION */}
        <section className="py-24 bg-gradient-to-b from-brand-paper to-[#F4E8DD]/20">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-luxury font-bold text-brand-gold">Experiencias Reales</span>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-dark font-medium mt-2">Lo que dicen las novias y empresas</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-3xl border border-brand-accent/20 shadow-sm flex flex-col justify-between relative"
                >
                  {/* Heart decoration accent */}
                  <span className="absolute top-6 right-6 text-2xl text-brand-primary/20">❤</span>

                  <div>
                    {/* Stars bar */}
                    <div className="flex items-center gap-0.5 mb-5 text-[#C5A880]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-brand-gold" />
                      ))}
                    </div>

                    <p className="text-brand-ink leading-relaxed text-sm italic mb-6">
                      "{t.text}"
                    </p>
                  </div>

                  <div className="pt-5 border-t border-brand-accent/10">
                    <h5 className="font-serif text-sm font-bold text-brand-dark">{t.name}</h5>
                    <p className="text-[10px] text-brand-ink/90">{t.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: INSTAGRAM REAL GALLERY */}
        <section className="py-24 bg-white border-t border-brand-accent/20">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-luxury font-bold text-brand-gold">Inspiración Diario</span>
              <h2 className="font-serif text-3xl text-brand-dark font-medium mt-2">Nuestras Creaciones en Instagram</h2>
              <a
                href="https://www.instagram.com/sucupam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-sans text-brand-primary hover:underline block mt-2 font-medium"
              >
                @sucupam ✦ Atelier Digital
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {instagramMedia.map((m) => (
                <a
                  key={m.id}
                  href="https://www.instagram.com/sucupam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative aspect-square rounded-2xl overflow-hidden border border-brand-accent/10 shadow-sm transition-all duration-500 hover:border-brand-gold hover:shadow-[0_0_0_1.5px_#C5A880,_0_15px_30px_-5px_rgba(197,168,128,0.3)] max-w-[200px] mx-auto"
                >
                  <img
                    src={m.url}
                    alt="Colecciones artesanales premium Sucupam"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] cubic-bezier(0.16,1,0.3,1) group-hover:scale-120"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center font-sans text-[11px] font-bold text-white uppercase tracking-widest text-shadow">
                    Instagram
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: BLOG JOURNAL PREVIEW - DISCRETE, NEAR THE BOTTOM */}
        <section className="py-24 bg-brand-paper border-t border-brand-accent/20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs uppercase tracking-luxury font-bold text-brand-gold">Inspiration Journal</span>
                <h2 className="font-serif text-3xl md:text-4xl text-brand-dark font-medium mt-1">Últimas notas de nuestro blog</h2>
              </div>
              <Link
                to="/blog"
                className="text-xs uppercase tracking-widest font-bold text-brand-ink hover:text-brand-primary pb-1 border-b border-brand-accent transition-colors self-start sm:self-auto"
              >
                Visitar el Blog
              </Link>
            </div>

            {/* Clean row setup that is strictly non-competitive with catalog */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.slice(0, 2).map((post) => (
                <article
                  key={post.id}
                  className="flex flex-col sm:flex-row gap-6 bg-white p-6 rounded-3xl border border-brand-accent/20 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-full sm:w-28 h-28 flex-shrink-0 rounded-2xl overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex flex-col justify-between flex-grow">
                    <div>
                      <span className="text-[9px] uppercase tracking-luxury text-[#C5A880] font-bold block mb-1">
                        {post.category}
                      </span>
                      <h4 className="font-serif text-lg font-bold text-brand-dark mb-2 leading-snug hover:text-brand-primary transition-colors">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h4>
                      <p className="text-xs text-brand-ink/90 line-clamp-2 italic mb-2 leading-normal">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-brand-accent/10">
                      <span className="flex items-center text-[10px] uppercase font-semibold text-brand-ink/90 tracking-wider">
                        <Calendar className="w-3 h-3 mr-1 text-brand-primary" />
                        {new Date(post.date).toLocaleDateString("es-AR")}
                      </span>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-[10px] uppercase tracking-widest font-black text-brand-dark hover:text-brand-primary transition-colors"
                      >
                        Leer más &rarr;
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: SEO FOOTPRINT AND DETAILED INDEXABLE EXPANSIONS */}
        <section className="py-20 bg-[#FFFDF9] border-t border-brand-accent/25 relative">
          <div className="container mx-auto px-6 max-w-4xl">
            {/* SEO Accordion triggers or static details, cleanly structured beneath everything */}
            <div className="border-t border-brand-accent/20 pt-16">
              <span className="text-xs uppercase tracking-luxury font-bold text-brand-gold block mb-2 text-center md:text-left">
                Información de Nuestro Atelier
              </span>
              <h2 className="font-serif text-4xl text-brand-dark mb-8 leading-tight text-center md:text-left">
                Souvenirs premium para eventos inolvidables
              </h2>

              <div className="prose prose-sm text-brand-ink/90 space-y-8 text-sm leading-relaxed font-sans text-justify">
                <p>
                  En <strong>Sucupam</strong> entendemos que un souvenir no es solo un objeto: es una extensión emocional del evento. Por eso cada pieza se piensa desde la historia de la persona o marca que celebra. Diseñamos con criterio estético, imprimimos con materiales seleccionados y terminamos cada trabajo de forma manual para mantener un estándar premium. Esta combinación entre diseño estratégico y oficio artesanal permite resultados memorables que se sienten auténticos cuando llegan a manos de cada invitado.
                </p>
                <p>
                  Ofrecemos soluciones boutique integradas en el ecosistema de souvenirs de mayor prestigio en Argentina. Nos especializamos en la producción de <strong>mantas polares personalizadas</strong> para bodas elegantes y ceremonias campestres, abanicos tradicionales en papel Kraft, pañuelos lágrimas de felicidad con carátulas personalizadas, y raspaditas interactivas para fiestas de quince años.
                </p>
                <p>
                  Diseñamos y producimos en Argentina con conocimiento de temporadas, climas y dinámicas logísticas locales. Coordinamos despachos a CABA, GBA, Córdoba, Mendoza, Santa Fe y toda la república con embalajes reforzados de alta resistencia para garantizar que toda la papelería artesanal y los acabados en hilo yute o raso lleguen impecables para tu fecha especial.
                </p>
              </div>

              {/* Sitemaps direct indexing sitemap menu */}
              <nav className="mt-16 p-8 bg-brand-accent/20 rounded-3xl border border-brand-accent/40" aria-label="Ecosistema de Páginas SEO Sucupam">
                <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-gold mb-4 block">
                  Explorar Ecosistema de Souvenirs
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    to="/souvenirs-para-bodas"
                    className="text-brand-dark hover:text-brand-primary transition-colors font-serif text-base flex items-center justify-between pb-2 border-b border-brand-accent/60 group"
                  >
                    <span>Mantas y Souvenirs para Bodas</span>
                    <span className="text-xs transform group-hover:translate-x-1 duration-200">&rarr;</span>
                  </Link>
                  <Link
                    to="/souvenirs-15-anos"
                    className="text-brand-dark hover:text-brand-primary transition-colors font-serif text-base flex items-center justify-between pb-2 border-b border-brand-accent/60 group"
                  >
                    <span>Raspaditas y Recuerdos de 15 Años</span>
                    <span className="text-xs transform group-hover:translate-x-1 duration-200">&rarr;</span>
                  </Link>
                  <Link
                    to="/souvenirs-corporativos"
                    className="text-brand-dark hover:text-brand-primary transition-colors font-serif text-base flex items-center justify-between pb-2 border-b border-brand-accent/60 group"
                  >
                    <span>Merchandising y Souvenirs Corporativos</span>
                    <span className="text-xs transform group-hover:translate-x-1 duration-200">&rarr;</span>
                  </Link>
                  <Link
                    to="/abanicos-personalizados"
                    className="text-brand-dark hover:text-brand-primary transition-colors font-serif text-base flex items-center justify-between pb-2 border-b border-brand-accent/60 group"
                  >
                    <span>Abanicos Paleta Personalizados</span>
                    <span className="text-xs transform group-hover:translate-x-1 duration-200">&rarr;</span>
                  </Link>
                  <Link
                    to="/papeleria-personalizada"
                    className="text-brand-dark hover:text-brand-primary transition-colors font-serif text-base flex items-center justify-between pb-2 border-b border-brand-accent/60 sm:border-0 group"
                  >
                    <span>Papelería Fina y Tags de Eventos</span>
                    <span className="text-xs transform group-hover:translate-x-1 duration-200">&rarr;</span>
                  </Link>
                  <Link
                    to="/souvenirs"
                    className="text-brand-dark hover:text-brand-primary transition-colors font-serif text-base flex items-center justify-between pb-2 border-b border-brand-accent/60 sm:border-0 group"
                  >
                    <span>Catálogo General de Souvenirs</span>
                    <span className="text-xs transform group-hover:translate-x-1 duration-200">&rarr;</span>
                  </Link>
                </div>
              </nav>

              {/* FAQs accordion block */}
              <section className="mt-20 pt-16 border-t border-brand-accent/20">
                <span className="text-[10px] uppercase tracking-luxury font-bold text-brand-gold block mb-2 text-center md:text-left">
                  Respuestas Claras de Nuestro Atelier
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-10 leading-tight text-center md:text-left">
                  Preguntas frecuentes
                </h2>
                <div className="space-y-8">
                  {landingFaqs.map((faq, i) => (
                    <article key={i} className="group font-sans border-b border-brand-accent/20 pb-6">
                      <h3 className="font-semibold text-base md:text-lg text-brand-dark mb-2 flex items-start gap-2.5">
                        <HelpCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                        <span>{faq.q}</span>
                      </h3>
                      <div className="text-brand-ink/90 leading-relaxed pl-7 text-sm italic">
                        {faq.a}
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* SOCIAL SHARES AT THE FOOTER LEVEL */}
              <section id="homepage-share-block" className="mt-12 pt-10 border-t border-brand-accent/10">
                <SocialShare
                  title="Sucupam | Souvenirs personalizados en Argentina"
                  description="Souvenirs de diseño hechos a mano para bodas y quince años. ¡Mirá su catálogo!"
                  relativeUrl="/"
                />
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
