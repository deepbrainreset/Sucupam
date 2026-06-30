import fs from 'fs';

function main() {
  const content = fs.readFileSync('./index_bundle.js', 'utf-8');
  console.log("Analyzing routing components: Bw, Mt, ze...");

  const terms = ['Bw=', 'Mt=', 'ze=', 'react-router-dom', 'click', 'history'];
  for (const t of terms) {
    const idx = content.indexOf(t);
    if (idx !== -1) {
      console.log(`Term "${t}" found at index ${idx}:`);
      console.log(content.slice(idx - 100, idx + 400));
      console.log("-----------------------------------------\n");
    } else {
      console.log(`Term "${t}" NOT found`);
    }
  }

  // Let's print out what lies around Mount Router path configuration (near index 561756 where routing is defined)
  console.log("Segment of routes declaration around 561756:");
  console.log(content.slice(561756 - 500, 561756 + 1000));
}

main();
