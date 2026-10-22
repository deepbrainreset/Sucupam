import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppContent } from './App';
import { blogPosts, eventCategories, products } from './data';
import { PageMetadataContext, type PageMetadata } from './pageMetadata';

export const paths = [
  '/',
  '/souvenirs',
  '/souvenirs-para-bodas',
  '/souvenirs-casamientos',
  '/souvenirs-cumpleanos',
  '/souvenirs-bautismos',
  '/souvenirs-baby-shower',
  '/souvenirs-xv-anos',
  '/souvenirs-eventos-corporativos',
  '/souvenirs-15-anos',
  '/souvenirs-corporativos',
  '/abanicos-personalizados',
  '/panuelos-descartables-personalizados',
  '/tarjetas-raspaditas-personalizadas',
  '/mantas-personalizadas-eventos',
  '/papeleria-personalizada',
  ...products.map((product) => `/producto/${product.slug}`),
  '/eventos/souvenirs-para-bodas',
  ...eventCategories.map((cat) => `/eventos/${cat.slug}`),
  '/blog',
  ...blogPosts.map((post) => `/blog/${post.slug}`),
  '/prensa',
  '/contacto',
  '/404',
];

export function renderPage(path: string) {
  const metadata: PageMetadata = { schemas: {} };
  const html = renderToString(
    <PageMetadataContext.Provider value={metadata}>
      <StaticRouter location={path}><AppContent /></StaticRouter>
    </PageMetadataContext.Provider>,
  );
  if (!metadata.seo) throw new Error(`Missing SEO metadata for ${path}`);
  return { html, ...metadata };
}
