import fs from 'fs';

function main() {
  const content = fs.readFileSync('./index_bundle.js', 'utf-8');
  const targetIdx = 250292;
  console.log("Dumping 4.5KB from x2 header definition...");
  fs.writeFileSync('./header_snippet.js', content.slice(targetIdx, targetIdx + 4500));
  console.log("Finished! Output saved to header_snippet.js");
}

main();
