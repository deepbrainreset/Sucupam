import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Calendar, User, ChevronDown, ChevronUp, Sparkles, ShoppingBag, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SEO } from "../components/SEO";
import { SchemaMarkup } from "../components/SchemaMarkup";
import { blogPosts, products } from "../data";

export function BlogPostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  if (!post) {
    return (
      <section className="py-24 bg-brand-paper text-center fade-in">
        <div className="container mx-auto px-6">
          <span className="text-4xl block mb-4">🌸</span>
          <h1 className="font-serif text-3xl mb-4 text-brand-dark">Artículo no encontrado</h1>
          <p className="text-brand-ink mb-6">El contenido que buscas no existe o fue trasladado.</p>
          <Link
            to="/blog"
            className="inline-flex items-center justify-center px-6 py-3 bg-brand-dark text-white rounded-xl font-sans text-xs uppercase tracking-widest font-bold hover:bg-brand-primary hover:text-brand-dark transition-colors"
          >
            Volver al blog
          </Link>
        </div>
      </section>
    );
  }

  // Determine which premium catalog products relate to this article to satisfy "Blog -> Catalog" rule
  const getRelatedProducts = (slug: string) => {
    if (slug === "guia-souvenirs-boda") {
      return products.filter((p) =>
        ["mantas-para-eventos-personalizadas", "conos-para-arroz-confeti-petalos", "abanicos-personalizados"].includes(p.slug)
      );
    } else {
      // defaults for other articles/trends
      return products.filter((p) =>
        ["valijitas-personalizadas", "tarjetas-personalizadas-con-chocolatin", "panuelos-para-lagrimas-de-felicidad"].includes(p.slug)
      );
    }
  };

  const relatedProducts = getRelatedProducts(post.slug);
  const faqs = post.faqs || [];

  return (
    <>
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        keywords={post.keywords}
        image={post.coverImage}
      />
      <SchemaMarkup
        type="BlogPosting"
        data={{
          headline: post.title,
          description: post.excerpt,
          image: post.coverImage,
          datePublished: post.date,
          author: {
            "@type": "Person",
            name: post.author.name,
          },
        }}
      />
      {faqs.length > 0 && (
        <SchemaMarkup
          type="FAQPage"
          data={{
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.answer,
              },
            })),
          }}
        />
      )}

      <article className="bg-[#FFFDF9] py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Breadcrumbs back button */}
          <Link
            to="/blog"
            className="inline-flex items-center text-[10px] uppercase tracking-luxury font-bold text-brand-ink hover:text-brand-primary mb-8 transition-colors"
          >
            &larr; Volver a notas de inspiración
          </Link>

          {/* Title and stats layout */}
          <header className="mb-12 text-center md:text-left">
            <span className="bg-brand-primary/20 text-brand-dark/95 border border-brand-primary/40 text-[10px] font-sans px-3.5 py-1 rounded-full font-bold uppercase tracking-wider inline-block mb-4">
              {post.category}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-dark leading-tight font-medium mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-[10px] uppercase tracking-wider font-bold text-brand-ink/90 font-sans">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1.5 text-brand-primary" />
                {new Date(post.date).toLocaleDateString("es-AR")}
              </span>
              <span className="flex items-center">
                <User className="w-4 h-4 mr-1.5 text-brand-secondary" />
                {post.author.name}
              </span>
            </div>
          </header>

          {/* Banner cover image with rounded contours */}
          <div className="w-full aspect-[21/9] max-h-[420px] rounded-[2rem] overflow-hidden border border-brand-accent/40 shadow-md mb-12">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Main content body */}
          <div className="prose prose-sm md:prose-base leading-relaxed text-brand-ink/90 font-sans mb-16 text-justify">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          {/* MANDATORY RELATED PRODUCTS SECTION: BLOG -> CATALOG (PRODUCTS MUST NOT displays blogs back) */}
          {relatedProducts.length > 0 && (
            <section className="py-12 px-6 md:px-10 rounded-[2.5rem] bg-brand-accent/30 border border-brand-accent/50 mb-16 animate-fadeIn">
              <div className="text-center md:text-left mb-8">
                <div className="flex items-center gap-1.5 justify-center md:justify-start">
                  <Sparkles className="w-4 h-4 text-brand-gold animate-pulse" />
                  <span className="text-[10px] uppercase tracking-luxury font-bold text-brand-gold">
                    Colección Sugerida para esta Edición
                  </span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-brand-dark font-medium mt-1">
                  Souvenirs destacados recomendados
                </h3>
                <p className="text-brand-ink text-xs mt-1">
                  Hacé clic en "Ver Producto" para consultar presupuesto o solicitar layouts virtuales adaptados a tu evento.
                </p>
              </div>

              {/* Related product cards grid format */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="flex flex-col bg-white border border-brand-accent/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Visual aspect */}
                    <div className="aspect-[4/3] bg-brand-accent/10 relative overflow-hidden">
                      <img
                        src={prod.coverImageUrl}
                        alt={prod.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-2 left-2 bg-white/95 text-[9px] font-sans font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-brand-accent">
                        {prod.category}
                      </div>
                    </div>

                    {/* Metadata aspect */}
                    <div className="p-5 flex-grow flex flex-col justify-between">
                      <div>
                        <span className="text-[9px] font-serif text-[#C5A880] font-bold block mb-1">
                          {prod.price}
                        </span>
                        <h4 className="font-sans text-sm font-bold text-brand-dark line-clamp-2 leading-snug mb-3">
                          {prod.name}
                        </h4>
                      </div>

                      {/* Primary CTA button as required: "Ver Producto" */}
                      <Link
                        to={`/producto/${prod.slug}`}
                        className="w-full text-center py-3 bg-brand-dark text-[#FFFDF9] hover:bg-brand-primary hover:text-brand-dark text-[10px] uppercase tracking-widest font-bold font-sans rounded-xl transition-colors inline-block"
                      >
                        Ver Producto
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Accordion FAQ Area (corresponds to gN) */}
          {faqs.length > 0 && (
            <section id="faq-section" className="py-12 border-t border-brand-accent/20 mt-12">
              <h2 className="font-serif text-3xl text-brand-dark mb-8 font-medium">
                Preguntas frecuentes de nuestros lectores
              </h2>
              <div className="space-y-4 font-sans">
                {faqs.map((f, idx) => (
                  <div
                    key={idx}
                    className="border border-brand-accent/40 rounded-2xl overflow-hidden bg-white transition-all hover:border-brand-primary/30 shadow-sm"
                  >
                    <button
                      id={`faq-btn-${idx}`}
                      className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-brand-accent/10 transition-colors cursor-pointer"
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      aria-expanded={activeFaq === idx}
                    >
                      <span className="font-bold text-brand-dark pr-8 text-base">
                        {f.question}
                      </span>
                      {activeFaq === idx ? (
                        <ChevronUp className="w-4 h-4 text-brand-ink/80 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-brand-ink/80 flex-shrink-0" />
                      )}
                    </button>

                    <AnimatePresence initial={false}>
                      {activeFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="p-5 pt-0 text-brand-ink leading-relaxed text-sm border-t border-brand-accent/10 bg-brand-paper italic font-serif">
                            {f.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Bottom redirection element */}
          <div className="mt-16 pt-8 border-t border-brand-accent/20 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center uppercase tracking-luxury text-xs font-bold text-brand-dark hover:text-brand-primary transition-colors hover:scale-105 duration-200"
            >
              Volver al listado del blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

export default BlogPostDetail;
