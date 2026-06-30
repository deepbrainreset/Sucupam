import fs from 'fs';

function main() {
  const content = fs.readFileSync('./index_bundle.js', 'utf-8');
  console.log("Searching for words in the JS bundle to isolate the blog posts...");

  const searchWords = ['tendencias', 'ide', 'boda', 'elegante', 'como-elegir', 'sitemap', '50-ideas', '50_ideas', 'ideas-souvenirs', '50 ideas', 'corporativo', 'merchandising'];
  for (const word of searchWords) {
    const idx = content.indexOf(word);
    if (idx !== -1) {
      console.log(`Matched word "${word}" at index ${idx}. Surrounding (500 chars):`);
      console.log("-----------------------------------------");
      console.log(content.slice(Math.max(0, idx - 100), Math.min(content.length, idx + 400)));
      console.log("-----------------------------------------\n");
    } else {
      console.log(`Word "${word}" NOT found.`);
    }
  }
}

main();
