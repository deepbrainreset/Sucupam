import { useParams, Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { SchemaMarkup } from "../components/SchemaMarkup";
import { ProductCard } from "../components/ProductCard";
import { eventCategories, products } from "../data";

interface EventLandingProps {
  overrideEventSlug?: string;
}

export function EventLanding({ overrideEventSlug }: EventLandingProps) {
  const { eventSlug } = useParams<{ eventSlug: string }>();
  const activeSlug = overrideEventSlug || eventSlug;

  const category = eventCategories.find((cat) => cat.slug === activeSlug);

  if (!category) {
    return (
      <section className="py-24 bg-brand-paper text-center fade-in">
        <div className="container mx-auto px-6">
          <h1 className="font-serif text-5xl mb-6 text-brand-ink">Evento no encontrado</h1>
          <Link
            to="/souvenirs"
            className="text-brand-gold uppercase tracking-widest text-xs font-bold hover:underline"
          >
            Ver catálogo
          </Link>
        </div>
      </section>
    );
  }

  const categoryProducts = products.filter((prod) =>
    prod.eventCategories.includes(category.slug)
  );

  const canonicalPath =
    category.slug === "casamientos"
      ? "/eventos/souvenirs-para-bodas"
      : `/eventos/${category.slug}`;

  return (
    <>
      <SEO
        title={category.metaTitle}
        description={category.metaDescription}
        path={canonicalPath}
        image={category.heroImage}
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
              name: category.name,
              item: `https://sucupam.com${canonicalPath}`,
            },
          ],
        }}
      />
      <SchemaMarkup
        type="ItemList"
        data={{
          name: category.metaTitle,
          description: category.metaDescription,
          itemListElement: categoryProducts.map((p, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: p.name,
          })),
        }}
      />

      {/* Hero Banner Area */}
      <section className="relative py-28 md:py-36 bg-brand-ink text-white overflow-hidden fade-in">
        {category.heroImage && (
          <img
            src={category.heroImage}
            alt={category.name}
            className="absolute inset-0 w-full h-full object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-6 text-center max-w-4xl">
          <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-brand-gold">
            Souvenirs para eventos
          </span>
          <h1 className="font-serif text-5xl md:text-7xl mt-4 mb-6 leading-tight">
            Souvenirs para {category.name}
          </h1>
          <p className="text-gray-100 text-lg leading-relaxed font-sans">
            {category.description}
          </p>
        </div>
      </section>

      {/* Categorized list section */}
      <section className="py-24 bg-brand-paper">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>
    </>
  );
}
export default EventLanding;
