import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";

export function NotFound() {
  return (
    <>
      <SEO
        title="Página no encontrada | Sucupam"
        description="La página que estás buscando no existe o fue trasladada."
        path="/404"
        robots="noindex, nofollow"
      />
      <section className="py-24 bg-brand-paper text-center fade-in">
        <div className="container mx-auto px-6 max-w-xl">
          <span className="text-4xl block mb-4">🌸</span>
          <h1 className="font-serif text-4xl mb-4 text-brand-dark">Página no encontrada</h1>
          <p className="text-brand-ink mb-8">
            La dirección que ingresaste no existe o fue trasladada. Explorá nuestro catálogo de souvenirs personalizados o volvé al inicio.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-dark text-white rounded-xl font-sans text-xs uppercase tracking-widest font-bold hover:bg-brand-primary hover:text-brand-dark transition-colors"
            >
              Ir al inicio
            </Link>
            <Link
              to="/souvenirs"
              className="inline-flex items-center justify-center px-6 py-3 bg-white border border-brand-accent text-brand-dark rounded-xl font-sans text-xs uppercase tracking-widest font-bold hover:bg-brand-accent/40 transition-colors"
            >
              Ver catálogo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
