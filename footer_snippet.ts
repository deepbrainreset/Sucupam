import fs from 'fs';

function main() {
  const content = fs.readFileSync('./index_bundle.js', 'utf-8');
  const targetIdx = 273409;
  console.log("Dumping 5KB from footer index...");
  fs.writeFileSync('./footer_snippet.js', content.slice(targetIdx, targetIdx + 5000));
  console.log("Finished! Output saved to footer_snippet.js");
}

main();
