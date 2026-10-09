import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { SchemaMarkup } from "../components/SchemaMarkup";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data";
import { HelpCircle } from "lucide-react";

interface SeoLandingProps {
  path: string;
  h1: string;
  title: string;
  description: string;
  heroImage: string;
  intro: string;
  paragraphs: string[];
  faqs: Array<{ q: string; a: string }>;
  productSlugs: string[];
  keywords: string[];
}

const relatedSearches = [
  { href: "/abanicos-personalizados", label: "Abanicos personalizados de papel" },
  { href: "/panuelos-descartables-personalizados", label: "Pañuelitos descartables personalizados" },
  { href: "/tarjetas-raspaditas-personalizadas", label: "Tarjetas raspaditas personalizadas" },
  { href: "/mantas-personalizadas-eventos", label: "Mantas personalizadas para eventos" },
  { href: "/souvenirs-cumpleanos", label: "Souvenirs para cumpleaños" },
  { href: "/souvenirs-xv-anos", label: "Souvenirs para 15 años" },
  { href: "/souvenirs-eventos-corporativos", label: "Souvenirs corporativos" },
];

export function SeoLanding({
  path,
  h1,
  title,
  description,
  heroImage,
  intro,
  paragraphs,
  faqs,
  productSlugs,
  keywords,
}: SeoLandingProps) {
  const featuredProducts = products.filter((product) => productSlugs.includes(product.slug));
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const galleryImages = featuredProducts
    .flatMap((product) =>
      product.galleryImageUrls.map((src, index) => ({
        src,
        alt: `${product.name.toLowerCase()} — ${h1.toLowerCase()} — foto ${index + 1}`,
        productSlug: product.slug,
      })),
    )
    .slice(0, 8);

  return (
    <>
      <SEO
        title={title}
        description={description}
        path={canonicalPath}
        image={heroImage}
        keywords={keywords}
      />

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
              item: `https://sucupam.com${canonicalPath}`,
            },
          ],
        }}
      />

      {featuredProducts.length > 0 && (
        <SchemaMarkup
          type="ItemList"
          data={{
            name: h1,
            itemListElement: featuredProducts.map((product, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: product.name,
              url: `https://sucupam.com/producto/${product.slug}`,
            })),
          }}
        />
      )}

      <SchemaMarkup
        type="FAQPage"
        data={{
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        }}
      />

      <header className="relative overflow-hidden bg-[#5F5A57] py-20 text-white lg:py-28">
        <img
          src={heroImage}
          alt={h1}
          width={1600}
          height={900}
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:text-left">
          <span className="mb-5 inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
            Colección Sucupam
          </span>
          <h1 className="mb-6 font-serif text-4xl font-medium leading-tight text-white md:text-6xl">
            {h1}
          </h1>
          <p className="max-w-2xl text-base font-light leading-relaxed text-gray-100 md:text-lg">
            {intro}
          </p>
        </div>
      </header>

      <main className="bg-[#FFFDF9] py-16">
        <div className="mx-auto max-w-4xl px-6">
          <article className="mb-14 space-y-6 text-sm leading-relaxed text-gray-700 md:text-base">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>

          {featuredProducts.length > 0 && (
            <section className="mb-16 border-t border-brand-accent/25 pt-10" aria-labelledby="productos-destacados">
              <h2 id="productos-destacados" className="mb-3 font-serif text-3xl font-medium text-brand-dark md:text-4xl">
                Productos relacionados
              </h2>
              <p className="mb-8 text-sm text-brand-ink">
                Opciones del catálogo directamente relacionadas con esta búsqueda.
              </p>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          )}

          {galleryImages.length > 0 && (
            <section className="mb-16 border-t border-brand-accent/25 pt-10" aria-labelledby="galeria-seo">
              <h2 id="galeria-seo" className="mb-3 font-serif text-3xl font-medium text-brand-dark md:text-4xl">
                Galería de trabajos
              </h2>
              <p className="mb-8 text-sm text-brand-ink">
                Ejemplos reales del catálogo relacionados con esta categoría.
              </p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {galleryImages.map((image, index) => (
                  <Link
                    key={`${image.src}-${index}`}
                    to={`/producto/${image.productSlug}`}
                    className="group block overflow-hidden rounded-2xl border border-brand-accent/20 bg-white"
                    aria-label={`Ver producto relacionado: ${image.alt}`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="aspect-square h-full w-full object-contain"
                    />
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className="border-t border-brand-accent/25 pt-10" id="preguntas-frecuentes">
            <h2 className="mb-8 font-serif text-3xl text-brand-dark">Preguntas frecuentes</h2>
            <div className="space-y-5">
              {faqs.map((faq, index) => (
                <article key={index} className="rounded-2xl border border-brand-accent/20 bg-white p-6">
                  <h3 className="mb-2 flex items-start gap-2 text-base font-semibold text-brand-dark">
                    <HelpCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-primary" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="pl-7 text-sm leading-relaxed text-[#5F5A57]">{faq.a}</p>
                </article>
              ))}
            </div>
          </section>

          <nav className="mt-14 border-t border-brand-accent/25 pt-10" aria-label="Búsquedas relacionadas">
            <h2 className="mb-6 font-serif text-2xl text-brand-ink">También puede interesarte</h2>
            <div className="flex flex-wrap gap-3">
              {relatedSearches
                .filter((item) => item.href !== canonicalPath)
                .map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="rounded-full border border-brand-accent/40 bg-white px-4 py-2 text-sm text-brand-ink transition-colors hover:border-brand-primary hover:text-brand-dark"
                  >
                    {item.label}
                  </Link>
                ))}
            </div>
          </nav>

          <section className="mt-14 rounded-3xl border border-brand-accent/40 bg-white p-8 text-center shadow-sm md:p-10 md:text-left">
            <h2 className="mb-4 font-serif text-3xl text-brand-dark">Pedí tu diseño personalizado</h2>
            <p className="mb-7 max-w-2xl text-sm leading-relaxed text-brand-ink">
              Contanos el tipo de evento, la cantidad aproximada y el estilo que buscás para recibir una propuesta personalizada.
            </p>
            <a
              href="https://wa.me/message/LBWHWZBR3OQ3G1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-white transition-transform hover:scale-[1.01]"
            >
              Consultar por WhatsApp
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
