import fs from 'fs';

function main() {
  const content = fs.readFileSync('./index_bundle.js', 'utf-8');
  console.log("Checking if sitemap slugs are present in the JS bundle...");

  const slugs = [
    '50-ideas-souvenirs-bodas-elegantes',
    'tendencias-souvenirs-2026',
    'como-elegir-souvenirs-premium',
    'regalos-corporativos-personalizados-ventajas'
  ];

  for (const slug of slugs) {
    const idx = content.indexOf(slug);
    console.log(`Slug "${slug}": ${idx !== -1 ? 'FOUND at ' + idx : 'NOT FOUND'}`);
  }
}

main();
