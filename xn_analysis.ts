import fs from 'fs';

function main() {
  const content = fs.readFileSync('./index_bundle.js', 'utf-8');
  const targetIdx = content.indexOf('xN=');
  if (targetIdx !== -1) {
    console.log("Found xN definition near index", targetIdx);
    console.log(content.slice(targetIdx - 200, targetIdx + 2000));
  } else {
    console.log("Could not find xN=, searching around 558000");
    console.log(content.slice(558000, 558000 + 2000));
  }
}

main();
