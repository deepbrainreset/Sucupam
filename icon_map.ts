import fs from 'fs';

function main() {
  const content = fs.readFileSync('./index_bundle.js', 'utf-8');
  console.log("Searching for qa and Ht variables inside index_bundle.js...");

  const qaIdx = content.indexOf('qa=');
  if (qaIdx !== -1) {
    console.log("Found qa definition at", qaIdx);
    console.log(content.slice(qaIdx - 50, qaIdx + 850));
    console.log("-----------------------------------------\n");
  }

  const htIdx = content.indexOf('Ht=');
  if (htIdx !== -1) {
    console.log("Found Ht definition at", htIdx);
    console.log(content.slice(htIdx - 50, htIdx + 850));
    console.log("-----------------------------------------\n");
  }
}

main();
