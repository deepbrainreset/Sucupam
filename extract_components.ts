import fs from 'fs';

function main() {
  const content = fs.readFileSync('./index_bundle.js', 'utf-8');
  console.log("Extracting React components from Javascript bundle...");

  const components = [
    { name: 'Bv', pattern: 'Bv=()' },
    { name: 'ex', pattern: 'ex=({post:' },
    { name: 'bN', pattern: 'bN=()' },
    { name: 'SN', pattern: 'SN=()' },
    { name: 'TN', pattern: 'TN=()' },
    { name: 'EN', pattern: 'EN=()' },
    { name: 'AN', pattern: 'AN=()' },
    { name: 'G2', pattern: 'G2=()' },
    { name: 'F2', pattern: 'F2=()' },
    { name: 'X2', pattern: 'X2=()' }
  ];

  for (const comp of components) {
    let idx = content.indexOf(comp.pattern);
    if (idx === -1) {
      // try a simpler search
      idx = content.indexOf(comp.name + '=');
    }
    if (idx !== -1) {
      console.log(`Component ${comp.name} found at index ${idx}:`);
      console.log("-----------------------------------------");
      console.log(content.slice(idx, idx + 1500));
      console.log("-----------------------------------------\n");
    } else {
      console.log(`Component ${comp.name} NOT found.`);
    }
  }
}

main();
