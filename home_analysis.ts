import fs from 'fs';

function main() {
  const content = fs.readFileSync('./index_bundle.js', 'utf-8');
  const targetIdx = 288084;
  console.log("Dumping 12KB of Bv home page content starting from", targetIdx);
  fs.writeFileSync('./home_snippet.js', content.slice(targetIdx, targetIdx + 12000));
  console.log("Fished! Output saved to home_snippet.js");
}

main();
