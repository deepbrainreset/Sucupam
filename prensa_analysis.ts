import fs from 'fs';

function main() {
  const content = fs.readFileSync('./index_bundle.js', 'utf-8');
  const targetIdx = content.indexOf('Media Kit Sucupam');
  if (targetIdx !== -1) {
    console.log("Found Media Kit rendering block near index", targetIdx);
    console.log(content.slice(targetIdx - 200, targetIdx + 2000));
  } else {
    console.log("Could not find 'Media Kit Sucupam' in bundle");
  }
}

main();
