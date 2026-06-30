import fs from 'fs';

function main() {
  const content = fs.readFileSync('./index_bundle.css', 'utf-8');
  console.log("Searching for utility definitions in index_bundle.css...");

  const classes = ['brand-paper', 'brand-ink', 'brand-gold', 'brand-ivory', 'whatsapp-green', 'whatsapp-dark'];
  for (const cls of classes) {
    const idx = content.indexOf(cls);
    if (idx !== -1) {
      console.log(`Class context for "${cls}":`);
      console.log(content.slice(idx - 100, idx + 300));
      console.log("-----------------------------------------\n");
    } else {
      console.log(`Class "${cls}" NOT found.`);
    }
  }
}

main();
