import fs from 'fs';

function main() {
  const content = fs.readFileSync('./index_bundle.js', 'utf-8');
  console.log("Searching for yN blog post details in index_bundle.js...");

  const ynIdx = content.indexOf('yN=');
  if (ynIdx !== -1) {
    console.log("Found yN definition at", ynIdx);
    console.log(content.slice(ynIdx - 100, ynIdx + 2000));
  } else {
    console.log("yN= not found directly. Let's lookup route binding...");
  }
}

main();
