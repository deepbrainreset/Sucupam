import fs from 'fs';

function main() {
  const content = fs.readFileSync('./index_bundle.css', 'utf-8');
  console.log("Analyzing index_bundle.css for colors...");

  // Look for any --color or color definition
  const matches = content.match(/--[\w-]+:\s*[^;]+;/g) || [];
  console.log("Custom variables found:", matches.filter(m => m.includes('brand') || m.includes('gold') || m.includes('ink') || m.includes('paper') || m.includes('ivory')));

  // Let's also output any hex colors or hsl colors that appear close to the word brand-paper or bg-brand-paper
  // Let's search for "brand-paper" or other values in the body selector or utility declarations
  const idx = content.indexOf('--color-brand-paper');
  if (idx !== -1) {
    console.log("Found --color-brand-paper declaration:", content.slice(idx, idx + 500));
  } else {
    // maybe there's no prefix "--color-" in Tailwind v3 compilation or standard CSS output
    console.log("Looking for color variables near --color...");
    const themeIdx = content.indexOf(':root');
    if (themeIdx !== -1) {
      console.log(":root contents:");
      console.log(content.slice(themeIdx, themeIdx + 1500));
    } else {
      // search for other color declarations
      console.log("No :root found, searching for common hex codes...");
      const bgMatch = content.match(/\.bg-brand-[^{]+\{[^}]+\}/g);
      if (bgMatch) {
         console.log("Found bg-brand- utilities:", bgMatch);
      }
    }
  }
}

main();
