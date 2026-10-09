import { build } from 'esbuild';
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { pathToFileURL } from 'node:url';

const entry = resolve('node_modules/.cache/sucupam-prerender.mjs');
await mkdir(dirname(entry), { recursive: true });
const escape = (value) => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
try {
  await build({ entryPoints: ['src/prerender.tsx'], outfile: entry, bundle: true, platform: 'node', format: 'esm', packages: 'external', jsx: 'automatic' });
  const { paths, renderPage } = await import(pathToFileURL(entry).href);
  const template = await readFile('dist/index.html', 'utf8');
  const rootStart = template.indexOf('<div id="root">');
  const rootEnd = template.lastIndexOf('</div>');
  if (rootStart < 0 || rootEnd < rootStart) throw new Error('Cannot locate root in HTML template');
  for (const path of paths) {
    const { html: body, seo, schemas } = renderPage(path);
    // Replace the homepage fallback with the actual route, using the same React components.
    let html = template.slice(0, rootStart) + `<div id="root">${body}</div>` + template.slice(rootEnd + 6);
    html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '');
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(seo.title)}</title>`);
    const url = `https://sucupam.com${path}`;
    const image = new URL(seo.image || 'https://res.cloudinary.com/dyaun9c0q/image/upload/v1774488189/portada_mantas_mno1nu.webp', url).href;
    const tags = {
      description: seo.description, keywords: (seo.keywords || []).join(', '),
      'og:type': seo.type || 'website', 'og:title': seo.title, 'og:description': seo.description, 'og:url': url, 'og:image': image,
      'twitter:title': seo.title, 'twitter:description': seo.description, 'twitter:url': url, 'twitter:image': image,
    };
    for (const [name, value] of Object.entries(tags)) {
      const attr = name.startsWith('og:') ? 'property' : 'name';
      html = html.replace(new RegExp(`<meta ${attr}="${name}" content="[^"]*"\\s*/?>`), `<meta ${attr}="${name}" content="${escape(value)}" />`);
    }
    html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}" />`);
    const jsonLd = Object.entries(schemas).map(([type, data]) => `<script id="schema-${type.toLowerCase()}" type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': type, ...data }).replaceAll('<', '\\u003c')}</script>`).join('\n');
    html = html.replace('</head>', `${jsonLd}\n</head>`);
    const file = resolve('dist', `.${path}`, 'index.html');
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, html);
    console.log(`Prerendered ${path}`);
  }
} finally {
  await rm(entry, { force: true });
}
