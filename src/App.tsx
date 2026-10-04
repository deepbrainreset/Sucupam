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
import { SeoLanding } from "./pages/SeoLanding";
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
                  title="Souvenirs para cumpleaños personalizados | Sucupam"
                  description="Souvenirs personalizados para cumpleaños y aniversarios de 20, 40, 50, 70, 80 y 90 años. Abanicos, raspaditas y regalos para eventos."
                  heroImage="https://i.ibb.co/Z1xLdf4Y/5.jpg"
                  intro={[
                    "Detalles personalizados para cumpleaños y aniversarios especiales de 20, 40, 50, 70, 80 y 90 años, además de celebraciones familiares y eventos temáticos.",
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
                  h1="Souvenirs para casamientos personalizados en Argentina"
                  title="Souvenirs para casamientos personalizados | Sucupam"
                  description="Souvenirs para casamientos personalizados en Buenos Aires y toda Argentina: mantas, abanicos, pañuelos, conos, tags y papelería para bodas."
                  heroImage="https://res.cloudinary.com/dyaun9c0q/image/upload/v1774488189/portada_mantas_mno1nu.webp"
                  intro={[
                    "Souvenirs para casamiento y bodas hechos a medida para celebraciones en Buenos Aires y toda Argentina, con opciones personalizadas de papelería y recuerdos para invitados.",
                    "Encontrá mantas, abanicos, pañuelos para lágrimas de felicidad, conos, tags y otros souvenirs de casamiento coordinados con la estética de tu evento.",
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

            {/* Priority SEO product landings */}
            <Route
              path="/abanicos-personalizados"
              element={
                <SeoLanding
                  path="/abanicos-personalizados"
                  h1="Abanicos personalizados de papel para eventos"
                  title="Abanicos personalizados de papel para eventos | Sucupam"
                  description="Abanicos personalizados de papel para casamientos, cumpleaños, 15 años y eventos corporativos. Diseños a medida para tu celebración."
                  heroImage="https://i.ibb.co/NnJdmmKq/1762114158184.jpg"
                  intro="Abanicos de papel personalizados y abanicos tipo paleta para celebraciones sociales y empresariales, con diseño adaptado a la identidad visual del evento."
                  paragraphs={[
                    "Los abanicos personalizados de papel son un souvenir funcional para celebraciones en días cálidos y eventos al aire libre. En Sucupam se personalizan con nombres, fechas, colores, textos y detalles visuales elegidos para cada ocasión.",
                    "La colección incluye abanicos de papel de alto gramaje y abanicos tipo paleta con mango de madera. Pueden utilizarse en casamientos, cumpleaños, fiestas de 15, comuniones y eventos empresariales, manteniendo una estética coordinada con la papelería y la ambientación.",
                    "Además de servir como recuerdo, los abanicos pueden incorporar información útil del evento, mensajes de agradecimiento o piezas gráficas que refuercen la identidad de la celebración.",
                  ]}
                  faqs={[
                    {
                      q: "¿Los abanicos se pueden personalizar con nombres y fecha?",
                      a: "Sí. El diseño se adapta con nombres, fecha, colores, textos y otros detalles visuales definidos para el evento.",
                    },
                    {
                      q: "¿Hay abanicos de papel y abanicos tipo paleta?",
                      a: "Sí. El catálogo incluye abanicos de papel personalizados y modelos tipo paleta con mango de madera.",
                    },
                    {
                      q: "¿Sirven para cumpleaños, 15 años y eventos corporativos?",
                      a: "Sí. Son una opción versátil para bodas, cumpleaños, fiestas de 15, comuniones y celebraciones empresariales.",
                    },
                  ]}
                  productSlugs={["abanicos-personalizados", "abanicos-paleta-personalizado"]}
                  keywords={[
                    "abanicos personalizados",
                    "abanicos personalizados de papel",
                    "abanicos de papel personalizados",
                    "abanicos para eventos",
                    "abanicos para 15 años",
                    "abanicos para cumpleaños",
                  ]}
                />
              }
            />

            <Route
              path="/panuelos-descartables-personalizados"
              element={
                <SeoLanding
                  path="/panuelos-descartables-personalizados"
                  h1="Pañuelitos descartables personalizados para eventos"
                  title="Pañuelitos descartables personalizados | Sucupam"
                  description="Pañuelitos descartables personalizados y lágrimas de felicidad para casamientos y ceremonias. Presentación en tarjeta diseñada a medida."
                  heroImage="https://res.cloudinary.com/dyaun9c0q/image/upload/v1774487881/1762970216496_ykkcrr.jpg"
                  intro="Pañuelos descartables presentados en una tarjeta personalizada para ceremonias y momentos emotivos, también conocidos como lágrimas de felicidad."
                  paragraphs={[
                    "Los pañuelitos descartables personalizados son un detalle pensado para ceremonias donde las emociones forman parte del momento. Cada kit incluye un pañuelo de papel descartable presentado en una tarjeta personalizada con el diseño elegido para el evento.",
                    "Esta propuesta suele utilizarse como lágrimas de felicidad en casamientos y ceremonias, colocándose antes del inicio para que los invitados tengan el pañuelo a mano y, al mismo tiempo, reciban una pieza gráfica integrada a la estética general.",
                    "El diseño puede coordinarse con la identidad visual del evento para mantener consistencia entre invitaciones, señalética, souvenirs y papelería personalizada.",
                  ]}
                  faqs={[
                    {
                      q: "¿Qué incluye cada pañuelito personalizado?",
                      a: "Cada kit incluye un pañuelo de papel descartable presentado en una tarjeta personalizada con diseño a elección.",
                    },
                    {
                      q: "¿Son los mismos pañuelos conocidos como lágrimas de felicidad?",
                      a: "Sí. Es una de las formas más habituales de presentar este detalle en casamientos y ceremonias emotivas.",
                    },
                    {
                      q: "¿Se puede adaptar el diseño a la invitación del evento?",
                      a: "La tarjeta se personaliza para acompañar la estética y los datos de la celebración.",
                    },
                  ]}
                  productSlugs={["panuelos-para-lagrimas-de-felicidad"]}
                  keywords={[
                    "pañuelitos descartables personalizados",
                    "pañuelos descartables personalizados",
                    "pañuelos lágrimas de felicidad",
                    "pañuelos para casamiento",
                    "lágrimas de felicidad casamiento",
                  ]}
                />
              }
            />

            <Route
              path="/tarjetas-raspaditas-personalizadas"
              element={
                <SeoLanding
                  path="/tarjetas-raspaditas-personalizadas"
                  h1="Tarjetas raspaditas personalizadas para eventos"
                  title="Tarjetas raspaditas personalizadas para eventos | Sucupam"
                  description="Tarjetas raspaditas personalizadas para cumpleaños, 15 años, casamientos, juegos, sorteos y acciones de marketing. Diseño a medida."
                  heroImage="https://i.ibb.co/9kPKh3pR/1761506119875.jpg"
                  intro="Tarjetas scratch off personalizadas para convertir sorteos, premios, juegos y mensajes sorpresa en una experiencia interactiva dentro del evento."
                  paragraphs={[
                    "Las tarjetas raspaditas personalizadas permiten ocultar un mensaje, premio, código o consigna bajo una superficie raspable. Son una alternativa interactiva para cumpleaños, fiestas de 15, casamientos, sorteos y acciones promocionales.",
                    "El diseño se desarrolla a medida para respetar los colores, la temática y el estilo visual de cada celebración. También pueden utilizarse para decidir premios, centros de mesa o dinámicas entre invitados.",
                    "Sucupam cuenta con un catálogo amplio de modelos de referencia y también puede trabajar a partir de una idea o diseño aportado para personalizar la pieza.",
                  ]}
                  faqs={[
                    {
                      q: "¿Para qué se pueden usar las tarjetas raspaditas?",
                      a: "Pueden utilizarse en juegos, sorteos, premios, mensajes sorpresa, centros de mesa y acciones promocionales.",
                    },
                    {
                      q: "¿Se personaliza el diseño?",
                      a: "Sí. La pieza se adapta a la temática, colores y estilo del evento o de la marca.",
                    },
                    {
                      q: "¿Sirven para cumpleaños y fiestas de 15?",
                      a: "Sí. Son especialmente útiles para cumpleaños, fiestas de 15, casamientos y otros eventos sociales o comerciales.",
                    },
                  ]}
                  productSlugs={["tarjetas-raspaditas-personalizadas"]}
                  keywords={[
                    "tarjetas raspaditas",
                    "tarjetas raspaditas personalizadas",
                    "raspaditas personalizadas",
                    "raspaditas para cumpleaños",
                    "raspaditas para 15 años",
                  ]}
                />
              }
            />

            <Route
              path="/mantas-personalizadas-eventos"
              element={
                <SeoLanding
                  path="/mantas-personalizadas-eventos"
                  h1="Mantas personalizadas para eventos y casamientos"
                  title="Mantas personalizadas para eventos y casamientos | Sucupam"
                  description="Mantas personalizadas para eventos y casamientos. Presentadas enrolladas con cinta y tarjeta personalizada para regalar a tus invitados."
                  heroImage="https://res.cloudinary.com/dyaun9c0q/image/upload/v1774488189/portada_mantas_mno1nu.webp"
                  intro="Mantas para eventos presentadas como souvenir, enrolladas con cinta y tarjeta personalizada con los datos y el diseño de la celebración."
                  paragraphs={[
                    "Las mantas personalizadas para eventos son una opción práctica para celebraciones al aire libre, eventos nocturnos y casamientos en temporadas de temperaturas bajas. El modelo del catálogo de Sucupam mide aproximadamente 1,20 x 0,80 m.",
                    "Cada manta se presenta enrollada y sujeta con una cinta, acompañada por una tarjeta o pieza de papel personalizada con nombre, fecha o diseño del evento. Esto permite que el producto funcione al mismo tiempo como abrigo y como recuerdo para los invitados.",
                    "Pueden incorporarse a bodas, fiestas de 15 y otros eventos donde sea útil ofrecer una solución de abrigo integrada a la ambientación y a la identidad visual de la celebración.",
                  ]}
                  faqs={[
                    {
                      q: "¿Cómo se presentan las mantas para eventos?",
                      a: "Se entregan enrolladas, sujetas con una cinta y acompañadas por una tarjeta o pieza personalizada con los datos del evento.",
                    },
                    {
                      q: "¿Qué medida tiene la manta del catálogo?",
                      a: "La medida informada para este modelo es de aproximadamente 1,20 x 0,80 m.",
                    },
                    {
                      q: "¿Para qué tipo de eventos se recomiendan?",
                      a: "Son especialmente útiles en bodas al aire libre, celebraciones nocturnas y eventos realizados en épocas de temperaturas bajas.",
                    },
                  ]}
                  productSlugs={["mantas-para-eventos-personalizadas"]}
                  keywords={[
                    "mantas personalizadas",
                    "mantas para eventos",
                    "mantas personalizadas para casamientos",
                    "mantas para bodas",
                    "souvenir mantas",
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
