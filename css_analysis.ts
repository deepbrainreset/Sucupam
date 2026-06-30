import fs from 'fs';

function main() {
  const content = fs.readFileSync('./index_bundle.css', 'utf-8');
  console.log("Reading first 4000 characters of index_bundle.css to get theme colors...");
  console.log(content.slice(0, 4000));
}

main();
