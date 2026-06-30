import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { SchemaMarkup } from "../components/SchemaMarkup";
import { SocialShare } from "../components/SocialShare";
import { ProductCard } from "../components/ProductCard";
import { categoryCustomContent } from "../categoryContent";
import { products, Product, landingBody, landingFaqs } from "../data";
import { HelpCircle, Sparkles, User, Calendar, ShieldCheck, Heart } from "lucide-react";

interface CategoryLandingProps {
  slug: string;
  h1: string;
  title: string;
  description: string;
  heroImage: string;
  intro: string[];
}

function getCategoryProducts(slug: string, allProducts: Product[]) {
  if (slug.includes("casamiento") || slug.includes("bodas") || slug.includes("boda")) {
    return allProducts.filter(p => p.eventCategories.includes("casamientos") || p.slug.includes("manta") || p.categorySlug.includes("panuelos") || p.categorySlug.includes("conos"));
  }
  if (slug.includes("cumpleanos") || slug.includes("15-anos") || slug.includes("xv-anos")) {
    return allProducts.filter(p => p.eventCategories.includes("15-anos") || p.slug.includes("raspaditas") || p.categorySlug.includes("chocolatines") || p.categorySlug.includes("abanicos"));
  }
  if (slug.includes("bautismos") || slug.includes("bautismo")) {
    return allProducts.filter(p => p.eventCategories.includes("bautismos") || p.categorySlug.includes("valijitas") || p.categorySlug.includes("chocolatines") || p.categorySlug.includes("paletas"));
  }
  if (slug.includes("baby-shower") || slug.includes("baby")) {
    return allProducts.filter(p => p.eventCategories.includes("baby-shower") || p.categorySlug.includes("valijitas") || p.categorySlug.includes("tags") || p.categorySlug.includes("chocolatines"));
  }
  if (slug.includes("corporativo") || slug.includes("corporativos") || slug.includes("empresas")) {
    return allProducts.filter(p => p.categorySlug.includes("valijitas") || p.categorySlug.includes("abanicos") || p.categorySlug.includes("tags") || p.categorySlug.includes("chocolatines"));
  }
  if (slug.includes("abanico") || slug.includes("abanicos")) {
    return allProducts.filter(p => p.categorySlug.includes("abanicos") || p.categorySlug.includes("paletas"));
  }
  if (slug.includes("papeleria") || slug.includes("papeleria-personalizada")) {
    return allProducts.filter(p => p.categorySlug.includes("tags") || p.categorySlug.includes("numeros-mesa") || p.categorySlug.includes("conos"));
  }
  return allProducts;
}

export function CategoryLanding({
  slug,
  h1,
  title,
  description,
  heroImage,
  intro,
}: CategoryLandingProps) {
  const path = slug.startsWith("/") ? slug : `/${slug}`;

  // Get custom SEO content and custom FAQs, or fallback to default data
  const customData = categoryCustomContent[slug];
  const paragraphsToRender = customData ? customData.paragraphs : landingBody;
  const faqsToRender = customData ? customData.faqs : landingFaqs.map(f => ({ q: f.q, a: f.a }));
  const aioData = customData?.aio || {
    whatIsIt: `Colección de souvenirs de diseño hechos a mano premium especialmente creados para celebrar ${h1} con calidez.`,
    whoIsItFor: "Parejas de novios, familias de quinceañeras y organizadores de eventos en Argentina que buscan un recuerdo original, artesanal y fino.",
    whenToUse: "Ideal para momentos claves de tu festejo: bienvenida a la ceremonia, recepción de invitados, souvenirs de mesa o regalo de despedida.",
    whyChoose: "Porque diseñamos cada detalle gráfico a medida, imprimimos con máxima fidelidad estática y te atendemos con mimo y transparencia por WhatsApp."
  };

  const categoryProducts = getCategoryProducts(slug, products);

  const relatedLinks = [
    { href: "/souvenirs-casamientos", label: "Casamientos" },
    { href: "/souvenirs-cumpleanos", label: "Cumpleaños" },
    { href: "/souvenirs-bautismos", label: "Bautismos" },
    { href: "/souvenirs-baby-shower", label: "Baby Shower" },
    { href: "/souvenirs-xv-anos", label: "XV Años" },
    { href: "/souvenirs-eventos-corporativos", label: "Eventos Corporativos" },
    { href: "/abanicos-personalizados", label: "Abanicos" },
    { href: "/papeleria-personalizada", label: "Papelería Fina" },
  ].filter((link) => link.href !== path);

  return (
    <>
      <SEO title={title} description={description} path={path} image={heroImage} />
      
      {/* STRUCTURED SCHEMA MARKUP DATA */}
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
              name: h1,
              item: `https://sucupam.com${path}`,
            },
          ],
        }}
      />
      <SchemaMarkup
        type="FAQPage"
        data={{
          mainEntity: faqsToRender.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        }}
      />
      <SchemaMarkup
        type="Product"
        data={{
          name: h1,
          description: description,
          brand: {
            "@type": "Brand",
            name: "Sucupam",
          },
          image: heroImage,
          offers: {
            "@type": "AggregateOffer",
            highPrice: "9999",
            lowPrice: "100",
            priceCurrency: "ARS",
            offerCount: String(categoryProducts.length || "10")
          },
          areaServed: "Argentina",
        }}
      />
      <SchemaMarkup
        type="LocalBusiness"
        data={{
          name: "Sucupam",
          url: "https://sucupam.com",
          logo: "https://i.ibb.co/DH3hNbmN/logo-2.png",
          image: heroImage,
          areaServed: {
            "@type": "Country",
            name: "Argentina"
          },
          priceRange: "$$",
          telephone: "Consultar link de WhatsApp directo",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Buenos Aires",
            addressCountry: "AR"
          }
        }}
      />

      {/* Hero Header */}
      <header className="relative py-20 lg:py-28 bg-[#5F5A57] text-white fade-in overflow-hidden">
        <img
          src={heroImage}
          alt={h1}
          width={1600}
          height={900}
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          referrerPolicy="no-referrer"
        />
        <div className="relative container mx-auto px-6 max-w-4xl z-10 text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFDF9]/10 border border-[#FFFDF9]/20 text-[10px] uppercase tracking-widest font-bold text-white mb-6">
            <Heart className="w-3 h-3 text-brand-primary fill-current" />
            Colección Sucupam
          </span>
          <h1 className="font-serif text-4xl md:text-6xl mb-6 leading-tight font-medium text-white">
            {h1}
          </h1>
          {intro.map((paragraph, idx) => (
            <p key={idx} className="text-base md:text-lg leading-relaxed mb-4 font-sans text-gray-100 max-w-2xl font-light">
              {paragraph}
            </p>
          ))}
        </div>
      </header>

      {/* Structured Content Block for AI Search Visiblity (AIO Optimizations) */}
      <section className="bg-white border-b border-brand-accent/20 py-12" id="aio-structured-blocks">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-[#FFFDF9] p-8 rounded-[2rem] border border-brand-accent/40 shadow-sm">
            {/* What is it */}
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-luxury text-brand-gold flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-brand-gold" />
                ¿Qué es?
              </span>
              <p className="text-brand-ink text-xs leading-relaxed font-sans font-medium">
                {aioData.whatIsIt}
              </p>
            </div>
            {/* Who is it for */}
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-luxury text-brand-gold flex items-center gap-1">
                <User className="w-3 h-3 text-brand-gold" />
                ¿Para quién?
              </span>
              <p className="text-brand-ink text-xs leading-relaxed font-sans">
                {aioData.whoIsItFor}
              </p>
            </div>
            {/* When should it be used */}
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-luxury text-brand-gold flex items-center gap-1">
                <Calendar className="w-3 h-3 text-brand-gold" />
                ¿Cuándo usar?
              </span>
              <p className="text-brand-ink text-xs leading-relaxed font-sans">
                {aioData.whenToUse}
              </p>
            </div>
            {/* Why choose it */}
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-luxury text-brand-gold flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-brand-gold" />
                ¿Por qué Sucupam?
              </span>
              <p className="text-brand-ink text-xs leading-relaxed font-sans">
                {aioData.whyChoose}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Copy & Detailed Paragraphs */}
      <main className="py-16 bg-[#FFFDF9]">
        <div className="container mx-auto px-6 max-w-4xl">
          
          <article className="prose text-gray-700 leading-relaxed text-sm md:text-base font-sans text-justify mb-16">
            {paragraphsToRender.map((paragraph, idx) => (
              <p key={idx} className="mb-6">
                {paragraph}
              </p>
            ))}
          </article>

          {/* DYNAMIC FEATURED PRODUCTS */}
          {categoryProducts.length > 0 && (
            <section className="mb-20 pt-10 border-t border-brand-accent/25" id="featured-products">
              <div className="text-center md:text-left mb-10">
                <span className="text-xs uppercase tracking-luxury font-bold text-brand-gold block mb-1">
                  Catálogo Sugerido
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-brand-dark font-medium">
                  Productos Destacados de la Colección
                </h2>
                <p className="text-xs text-brand-ink mt-1">
                  Ideales para tu tipo de evento o necesidad decorativa. Personalizados 100% a mano.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryProducts.map((prod) => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
              </div>
            </section>
          )}

          {/* INDEXABLE FAQS SECTION */}
          <section className="mt-16 border-t border-brand-accent/20 pt-12" id="faqs">
            <h2 className="font-serif text-3xl text-brand-dark mb-8 tracking-tight text-center md:text-left">
              Preguntas frecuentes — {h1}
            </h2>
            <div className="space-y-6">
              {faqsToRender.map((faq, idx) => (
                <article key={idx} className="bg-white p-6 rounded-2xl border border-brand-accent/20">
                  <h3 className="font-semibold text-base text-brand-dark mb-2.5 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h3>
                  <div className="text-[#5F5A57] leading-relaxed pl-7 text-xs italic">
                    {faq.a}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Consultation CTA Card */}
          <section className="mt-16 p-8 md:p-10 bg-white rounded-3xl border border-brand-accent/40 shadow-sm text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.15em] font-black text-brand-gold mb-2 block">
              Asesoramiento Directo de Atelier
            </span>
            <h2 className="font-serif text-3xl text-brand-dark mb-4 leading-tight">
              Diseñá tu pedido con nuestro equipo
            </h2>
            <p className="mb-8 text-brand-ink text-xs md:text-sm leading-relaxed max-w-2xl">
              Contanos la fecha, cantidad estimada y estilo visual de tu evento en Argentina y te responderemos con una cotización personalizada con los mejores plazos de producción artesanal y envío protegido.
            </p>
            <a
              id={`cta-whatsapp-${slug}`}
              href="https://wa.me/message/LBWHWZBR3OQ3G1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4.5 rounded-2xl uppercase text-[10px] tracking-widest font-bold transition-all shadow-md cursor-pointer hover:scale-[1.01]"
            >
              Consultar por WhatsApp
            </a>
          </section>

          {/* Social Share Buttons */}
          <section className="mt-12" id="share-controls">
            <SocialShare
              title={title}
              description={description}
              relativeUrl={path}
            />
          </section>

          {/* SEMANTIC INTERNAL LINKING */}
          <nav className="mt-16 pt-10 border-t border-brand-accent/25" aria-label="Ecosistema de Souvenirs Relacionados">
            <h2 className="font-serif text-2xl text-brand-ink mb-6">
              Recuerdos y Souvenirs para Otros Eventos
            </h2>
            <div className="flex flex-wrap gap-3">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-4 py-2 bg-white border border-brand-accent/40 hover:border-brand-primary rounded-full text-brand-ink hover:text-brand-dark text-xs font-semibold tracking-wide transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

        </div>
      </main>
    </>
  );
}

export default CategoryLanding;
