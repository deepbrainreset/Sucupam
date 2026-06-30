import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppWidget } from "./components/WhatsAppWidget";

// Pages
import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import { ProductDetail } from "./pages/ProductDetail";
import { EventLanding } from "./pages/EventLanding";
import { CategoryLanding } from "./pages/CategoryLanding";
import { BlogList } from "./pages/BlogList";
import { BlogPostDetail } from "./pages/BlogPostDetail";
import { Prensa } from "./pages/Prensa";
import { Contacto } from "./pages/Contacto";

// Scroll to Top Hook for SPA page transitions
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Restores scroll on navigation */}
      <ScrollToTop />

      <div className="flex flex-col min-h-screen bg-brand-paper min-w-[320px]">
        {/* Navigation bar */}
        <Header />

        {/* Dynamic Route Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/souvenirs" element={<Catalog />} />
            <Route path="/producto/:productSlug" element={<ProductDetail />} />

            {/* Special category matching */}
            <Route
              path="/eventos/souvenirs-para-bodas"
              element={<EventLanding overrideEventSlug="casamientos" />}
            />
            <Route path="/eventos/:eventSlug" element={<EventLanding />} />

            {/* Core Funnel Landings (built with Wl / CategoryLanding) */}
            <Route
              path="/souvenirs-casamientos"
              element={
                <CategoryLanding
                  slug="souvenirs-casamientos"
                  h1="Souvenirs para casamientos originales"
                  title="Souvenirs para casamientos originales y personalizados | Sucupam"
                  description="Descubrí los mejores souvenirs para casamientos en Argentina. Mantas polares, pañuelos lágrimas de felicidad y conitos personalizados."
                  heroImage="https://res.cloudinary.com/dyaun9c0q/image/upload/v1774488189/portada_mantas_mno1nu.webp"
                  intro={[
                    "Diseños premium de souvenirs de casamiento hechos a mano para que tus seres queridos recuerden tu día especial con total calidez.",
                  ]}
                />
              }
            />

            <Route
              path="/souvenirs-cumpleanos"
              element={
                <CategoryLanding
                  slug="souvenirs-cumpleanos"
                  h1="Souvenirs para cumpleaños personalizados"
                  title="Souvenirs para cumpleaños originales y personalizados | Sucupam"
                  description="Souvenirs personalizados para cumpleaños de adultos e infantiles. Abanicos, chocolate fino y tarjetas raspaditas interactivas."
                  heroImage="https://i.ibb.co/Z1xLdf4Y/5.jpg"
                  intro={[
                    "Refrescantes y dulces detalles para celebrar cumpleaños con alegría, calidez y un diseño de papelería artesanal único.",
                  ]}
                />
              }
            />

            <Route
              path="/souvenirs-bautismos"
              element={
                <CategoryLanding
                  slug="souvenirs-bautismos"
                  h1="Souvenirs para bautismos y comuniones"
                  title="Souvenirs para bautismos y comuniones personalizados | Sucupam"
                  description="Recuerdos delicados para el bautismo o comunión de tu bebé. Valijitas, estampitas y tarjetitas personalizadas con chocolate."
                  heroImage="https://i.ibb.co/BKSC2j8W/Whats-App-Image-2025-10-30-at-14-21-03-3.png"
                  intro={[
                    "Confeccionamos recuerdos de bautismo con estética suave, tipografía delicada y terminaciones nobles hechas a mano.",
                  ]}
                />
              }
            />

            <Route
              path="/souvenirs-baby-shower"
              element={
                <CategoryLanding
                  slug="souvenirs-baby-shower"
                  h1="Souvenirs para baby shower originales"
                  title="Souvenirs para baby shower originales y tiernos | Sucupam"
                  description="Celebrá la llegada del bebé con souvenirs tiernos y prácticos. Valijitas personalizadas, tags y chocolates temáticos artesanales."
                  heroImage="https://i.ibb.co/4kfq2pV/V.png"
                  intro={[
                    "Sorprendé a tus seres queridos en tu baby shower con detalles estéticos de línea suave, diseñados especialmente por nuestro atelier.",
                  ]}
                />
              }
            />

            <Route
              path="/souvenirs-xv-anos"
              element={
                <CategoryLanding
                  slug="souvenirs-xv-anos"
                  h1="Souvenirs para 15 años modernos"
                  title="Souvenirs para fiestas de 15 años personalizados | Sucupam"
                  description="Buscás souvenirs para 15 años? Abanicos, tarjetas raspaditas lúdicas y kits de supervivencia personalizados."
                  heroImage="https://i.ibb.co/RpdSL657/4.jpg"
                  intro={[
                    "Diseñamos recuerdos para mis 15 que reflejan tu estilo y se lucen espectaculares en redes sociales con un diseño moderno.",
                  ]}
                />
              }
            />

            <Route
              path="/souvenirs-eventos-corporativos"
              element={
                <CategoryLanding
                  slug="souvenirs-eventos-corporativos"
                  h1="Souvenirs corporativos y de marcas"
                  title="Souvenirs corporativos premium para empresas | Sucupam"
                  description="Desarrollamos souvenirs corporativos de diseño premium en Argentina. Regalos finos, abanicos impresos y chocolates personalizados."
                  heroImage="https://i.ibb.co/4kfq2pV/V.png"
                  intro={[
                    "Merchandising de lujo y obsequios empresariales confeccionados artesanalmente para potenciar tu marca con total distinción.",
                  ]}
                />
              }
            />

            <Route
              path="/souvenirs-bodas"
              element={
                <CategoryLanding
                  slug="souvenirs-para-bodas"
                  h1="Souvenirs para bodas en Argentina"
                  title="Souvenirs para bodas personalizados en Argentina | Sucupam"
                  description="Diseños artesanales para bodas elegantes: recuerdos personalizados con envío a toda Argentina."
                  heroImage="https://res.cloudinary.com/dyaun9c0q/image/upload/v1774488189/portada_mantas_mno1nu.webp"
                  intro={[
                    "Creamos souvenirs para bodas con estética premium, diseño sensible y producción artesanal para celebrar historias de amor con identidad propia.",
                  ]}
                />
              }
            />

            <Route
              path="/souvenirs-para-bodas"
              element={
                <CategoryLanding
                  slug="souvenirs-para-bodas"
                  h1="Souvenirs para bodas en Argentina"
                  title="Souvenirs para bodas personalizados en Argentina | Sucupam"
                  description="Diseños artesanales para bodas elegantes: recuerdos personalizados con envío a toda Argentina."
                  heroImage="https://res.cloudinary.com/dyaun9c0q/image/upload/v1774488189/portada_mantas_mno1nu.webp"
                  intro={[
                    "Creamos souvenirs para bodas con estética premium, diseño sensible y producción artesanal para celebrar historias de amor con identidad propia.",
                  ]}
                />
              }
            />

            <Route
              path="/souvenirs-15-anos"
              element={
                <CategoryLanding
                  slug="souvenirs-15-anos"
                  h1="Souvenirs para 15 años personalizados"
                  title="Souvenirs para 15 años modernos y personalizados | Sucupam"
                  description="Ideas originales para fiestas de 15: souvenirs personalizados, papelería y detalles inolvidables."
                  heroImage="https://i.ibb.co/RpdSL657/4.jpg"
                  intro={[
                    "Diseñamos recuerdos para 15 años que reflejan personalidad, estilo y emoción, cuidando cada detalle de principio a fin.",
                  ]}
                />
              }
            />

            <Route
              path="/souvenirs-corporativos"
              element={
                <CategoryLanding
                  slug="souvenirs-corporativos"
                  h1="Souvenirs corporativos y merchandising premium"
                  title="Souvenirs corporativos personalizados para empresas | Sucupam"
                  description="Regalos corporativos y piezas de branding para eventos empresariales en Argentina."
                  heroImage="https://i.ibb.co/4kfq2pV/V.png"
                  intro={[
                    "Desarrollamos souvenirs corporativos alineados a objetivos de marca, comunicación y experiencia de cliente en eventos empresariales.",
                  ]}
                />
              }
            />

            <Route
              path="/abanicos-personalizados"
              element={
                <CategoryLanding
                  slug="abanicos-personalizados"
                  h1="Abanicos personalizados para eventos"
                  title="Abanicos personalizados para bodas y 15 años | Sucupam"
                  description="Abanicos artesanales con diseño a medida para eventos sociales y corporativos en Argentina."
                  heroImage="https://i.ibb.co/NnJdmmKq/1762114158184.jpg"
                  intro={[
                    "Nuestros abanicos personalizados combinan funcionalidad, elegancia y coherencia visual para eventos al aire libre y celebraciones masivas.",
                  ]}
                />
              }
            />

            <Route
              path="/papeleria-personalizada"
              element={
                <CategoryLanding
                  slug="papeleria-personalizada"
                  h1="Papelería personalizada para eventos"
                  title="Papelería personalizada artesanal para eventos | Sucupam"
                  description="Tags, tarjetas, señalética y piezas impresas personalizadas para bodas, 15 años y eventos corporativos."
                  heroImage="https://res.cloudinary.com/dyaun9c0q/image/upload/v1774488385/1774028143018_ffrp3f.jpg"
                  intro={[
                    "Creamos papelería personalizada con terminaciones premium para que cada evento tenga un lenguaje visual consistente y memorable.",
                  ]}
                />
              }
            />

            {/* Blog list and inner details */}
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPostDetail />} />

            {/* Auxiliary Routes */}
            <Route path="/prensa" element={<Prensa />} />
            <Route path="/contacto" element={<Contacto />} />

            {/* Sitemaps wildcard fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>

        {/* Footer Area */}
        <Footer />

        {/* Flying CTA badge */}
        <WhatsAppWidget />
      </div>
    </BrowserRouter>
  );
}
