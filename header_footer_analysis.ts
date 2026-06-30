import fs from 'fs';

function main() {
  const content = fs.readFileSync('./index_bundle.js', 'utf-8');
  console.log("Analyzing header, footer, and floating buttons...");

  const targets = [
    { name: 'x2', pattern: 'x2=' },
    { name: 'q2', pattern: 'q2=' },
    { name: 'P2', pattern: 'P2=' }
  ];

  for (const t of targets) {
    const idx = content.indexOf(t.pattern);
    if (idx !== -1) {
      console.log(`Component '${t.name}' found at index ${idx}:`);
      console.log(content.slice(idx, idx + 1500));
      console.log("-----------------------------------------\n");
    } else {
      console.log(`Component '${t.name}' NOT found.`);
    }
  }
}

main();
