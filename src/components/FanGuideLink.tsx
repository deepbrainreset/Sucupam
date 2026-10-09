import { Link } from 'react-router-dom';
import { fanGuide } from '../fanGuide';

export function FanGuideLink() {
  return (
    <aside className="my-10 rounded-2xl border border-brand-primary/50 bg-brand-accent/30 p-6 md:p-8">
      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-dark">Guía de abanicos</p>
      <h2 className="mb-3 font-serif text-2xl text-brand-dark">¿Qué abanico elegir para tu evento?</h2>
      <p className="mb-4 text-sm leading-relaxed text-brand-ink">Compará formatos, encontrá ideas de frases y prepará los datos para tu pedido.</p>
      <Link to={`/blog/${fanGuide.slug}`} className="font-semibold text-brand-dark underline underline-offset-4 hover:text-brand-ink">
        Cómo elegir abanicos personalizados <span aria-hidden="true">→</span>
      </Link>
    </aside>
  );
}
