import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { SEO } from "../components/SEO";
import { SchemaMarkup } from "../components/SchemaMarkup";
import { blogPosts } from "../data";

interface BlogPostCardProps {
  post: typeof blogPosts[0];
}

function BlogPostCard({ post }: BlogPostCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex flex-col bg-white border border-brand-accent/40 rounded-2xl overflow-hidden transition-all duration-500 hover:border-transparent hover:shadow-[0_30px_75px_-12px_rgba(197,168,128,0.35)] hover:-translate-y-2.5 active:translate-y-[-2px] group"
    >
      {/* Dynamic Circulating Border Sheen */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl z-20" fill="none">
        <rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx="14"
          stroke="#C5A880"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{
            strokeDasharray: '2000',
            strokeDashoffset: isHovered ? '0' : '2000',
            transition: 'stroke-dashoffset 1500ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
      </svg>

      <Link to={`/blog/${post.slug}`} className="block overflow-hidden relative aspect-[16/10]">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-[1200ms] cubic-bezier(0.16,1,0.3,1) group-hover:scale-118"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
      </Link>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-gray-400 mb-4 font-sans font-medium">
          <span className="text-brand-gold font-bold">{post.category}</span>
          <span className="flex items-center">
            <Calendar className="w-3.5 h-3.5 mr-1" />
            {new Date(post.date).toLocaleDateString("es-AR")}
          </span>
        </div>

        <h2 className="font-serif text-2xl text-brand-ink mb-4 group-hover:text-gray-600 transition-colors">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>

        <p className="text-gray-400 text-sm leading-relaxed mb-8 font-sans">
          {post.excerpt}
        </p>

        <div className="mt-auto pt-6 border-t border-gray-50">
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center text-[10px] uppercase tracking-widest font-bold text-brand-ink group-hover:text-brand-gold transition-colors"
          >
            Leer artículo
            <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function BlogList() {
  return (
    <>
      <SEO
        title="Inspiration Journal — Ideas y Consejos para Eventos | Sucupam"
        description="Artículos sobre souvenirs, decoración para bodas, organización de eventos y tendencias de diseño en Argentina."
        path="/blog"
      />
      <SchemaMarkup
        type="Blog"
        data={{
          name: "Inspiration Journal Sucupam",
          description: "Ideas y consejos para planificar los souvenirs y la papelería de tus eventos.",
          publisher: {
            "@type": "Organization",
            name: "Sucupam",
            logo: "https://i.ibb.co/DH3hNbmN/logo-2.png"
          }
        }}
      />

      {/* Blog list main section */}
      <section className="bg-brand-paper py-24 fade-in">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-brand-gold">
              Inspiration Journal
            </span>
            <h1 className="font-serif text-5xl md:text-6xl mt-4 mb-6 leading-tight">
              Ideas y tendencias
            </h1>
            <p className="text-gray-500 leading-relaxed font-sans text-base">
              Consejos delicados del atelier para guiarte en los preparativos de tu evento, de forma artesanal y sofisticada.
            </p>
          </div>

          {/* Posts list grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
