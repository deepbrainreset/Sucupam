import fs from 'fs';

function main() {
  const content = fs.readFileSync('./index_bundle.css', 'utf-8');
  console.log("Searching for hex color declarations in index_bundle.css...");

  // Match hex colors of length 3, 4, 6, 8 with word boundaries or near properties
  const matches = content.match(/#[0-9a-fA-F]{3,8}\b/g) || [];
  const uniqueHex = Array.from(new Set(matches));
  console.log("Unique hex colors found:", uniqueHex);

  // Let's also print context around each hex code in index_bundle.css to see which color belongs to what!
  for (const hex of uniqueHex) {
    let idx = content.indexOf(hex);
    console.log(`Hex "${hex}" context near index ${idx}:`);
    console.log(content.slice(idx - 60, idx + 100));
    console.log("-----------------------------------------\n");
  }
}

main();
