import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppContent } from './App';
import { blogPosts } from './data';
import { PageMetadataContext, type PageMetadata } from './pageMetadata';

export const paths = [
  '/blog',
  ...blogPosts.map((post) => `/blog/${post.slug}`),
  '/abanicos-personalizados',
  '/producto/abanicos-personalizados',
  '/producto/abanicos-paleta-personalizado',
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
