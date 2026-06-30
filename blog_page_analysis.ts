import fs from 'fs';

function main() {
  const content = fs.readFileSync('./index_bundle.js', 'utf-8');
  const targetIdx = content.indexOf('Blog Sucupam');
  if (targetIdx !== -1) {
    console.log("Found Blog index rendering block near index", targetIdx);
    console.log(content.slice(targetIdx - 500, targetIdx + 1500));
  } else {
    console.log("Could not find 'Blog Sucupam' in bundle");
  }
}

main();
