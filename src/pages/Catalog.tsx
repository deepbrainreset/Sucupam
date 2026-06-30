import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { SEO } from "../components/SEO";
import { SchemaMarkup } from "../components/SchemaMarkup";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data";

export function Catalog() {
  const [selectedEvent, setSelectedEvent] = useState("todos");

  const eventFilters = [
    { id: "todos", name: "Todos los Recuerdos" },
    { id: "casamientos", name: "Casamientos" },
    { id: "15-anos", name: "15 Años" },
    { id: "baby-shower", name: "Baby Shower" },
    { id: "bautismos", name: "Bautismos" },
    { id: "corporativos", name: "Eventos Corporativos" }
  ];

  const filteredProducts = selectedEvent === "todos"
    ? products
    : products.filter(p => {
        if (selectedEvent === "corporativos") {
          return p.slug.includes("corporativo") || p.categorySlug.includes("valijita") || p.slug.includes("abanico") || p.slug.includes("tarjeta");
        }
        return p.eventCategories.includes(selectedEvent);
      });

  return (
    <>
      <SEO
        title="Catálogo de Souvenirs Personalizados y Papelería Fina | Sucupam"
        description="Explorá nuestro catálogo premium de recuerdos para casamientos, cumpleaños de 15, bautismos y regalos corporativos en toda Argentina."
        path="/souvenirs"
        keywords={[
          "souvenirs personalizados",
          "merchandising para bodas",
          "souvenirs infantiles",
          "recuerdos bautismo",
          "mantas para casamientos",
          "abanicos bodas"
        ]}
      />
      <SchemaMarkup
        type="ItemList"
        data={{
          name: "Catálogo de souvenirs Sucupam",
          numberOfItems: filteredProducts.length,
          itemListElement: filteredProducts.map((prod, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: prod.name,
            url: `https://sucupam.com/producto/${prod.slug}`
          }))
        }}
      />

      {/* Catalog Premium Hero */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-tr from-[#FFFDF9] via-[#F4E8DD]/40 to-[#EBC7D4]/15 border-b border-brand-accent/20">
        <div className="absolute top-10 right-1/4 w-72 h-72 rounded-full bg-brand-primary/10 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <span className="text-[10px] uppercase tracking-luxury font-bold text-brand-gold bg-white/90 backdrop-blur-sm border border-brand-accent px-4 py-1.5 rounded-full inline-block mb-3">
            Atelier Sucupam
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-brand-dark leading-tight mt-3 mb-6 font-medium">
            Catálogo de souvenirs
          </h1>
          <p className="text-brand-ink max-w-xl mx-auto leading-relaxed text-sm md:text-base font-sans italic">
            "Diseñado con mimo, elaborado con paciencia y entregado con el corazón para tus días memorables."
          </p>
        </div>
      </section>

      {/* Pricing and Quote Clarification Banner */}
      <section className="bg-brand-paper pt-10 pb-2">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-gradient-to-r from-[#FFFDF9] via-[#FDF8F5] to-[#F5E6E8]/40 border border-brand-accent rounded-3xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-center md:text-left space-y-2">
              <span className="text-[9px] tracking-widest font-bold uppercase text-brand-gold bg-brand-primary/20 px-3 py-1 rounded-full inline-block">
                ✦ Cotizaciones Atelier
              </span>
              <h2 className="font-serif text-lg md:text-2xl font-bold text-brand-dark">
                Presupuestos personalizados según cantidad
              </h2>
              <p className="text-xs md:text-sm text-brand-ink/90 leading-relaxed font-sans">
                Como cada pieza se confecciona de manera artesanal y única para tu gran día, <strong>no contamos con precios fijos en la web</strong>. Los valores finales se otorgan mediante un presupuesto a medida que se arma en base a la <strong>cantidad total solicitada</strong>. 
                Escribinos hoy para recibir tu cotización personalizada.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0 justify-center">
              <a
                href="https://wa.me/message/LBWHWZBR3OQ3G1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-whatsapp-green hover:bg-whatsapp-dark text-white px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider font-sans transition-all duration-300 shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <div className="flex gap-2 justify-center">
                <a
                  href="https://www.instagram.com/sucupam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-white border border-brand-accent text-brand-dark px-3.5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider font-sans hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-sm"
                >
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@sucupam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-white border border-brand-accent text-brand-dark px-3.5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider font-sans hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-sm"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Filter Pill Bar */}
      <section className="bg-brand-paper py-8 border-b border-brand-accent/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
            {eventFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedEvent(filter.id)}
                className={`px-5 py-2.5 rounded-full font-sans text-xs font-semibold tracking-wide transition-all border duration-300 cursor-pointer ${
                  selectedEvent === filter.id
                    ? "bg-brand-dark text-white border-brand-dark shadow-sm"
                    : "bg-white text-brand-ink hover:text-brand-dark border-brand-accent hover:border-brand-primary"
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Elements */}
      <section className="py-20 bg-brand-paper">
        <div className="container mx-auto px-6 max-w-6xl">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {filteredProducts.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 max-w-md mx-auto">
              <span className="text-4xl block mb-4">🌸</span>
              <h3 className="font-serif text-lg font-bold text-brand-dark mb-2">Próximamente más novedades</h3>
              <p className="text-xs text-brand-ink font-sans">Estamos terminando de confeccionar diseños exclusivos en esta categoría. Escribinos para consultas personalizadas.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
export default Catalog;
