import fs from 'fs';

function main() {
  const content = fs.readFileSync('./index_bundle.js', 'utf-8');
  console.log("Searching for gN constant inside index_bundle.js...");

  const gnIdx = content.indexOf('gN=');
  if (gnIdx !== -1) {
    console.log("Found gN definition at", gnIdx);
    console.log(content.slice(gnIdx - 100, gnIdx + 1100));
  } else {
    console.log("gN= not found directly. Let's look around yN start standard index...");
    console.log(content.slice(552500 - 1500, 552500));
  }
}

main();
