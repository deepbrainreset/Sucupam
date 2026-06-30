import fs from 'fs';

function main() {
  const content = fs.readFileSync('./index_bundle.js', 'utf-8');
  const i2Idx = content.indexOf('I2=');
  if (i2Idx !== -1) {
    console.log("Found I2 definition at", i2Idx);
    console.log(content.slice(i2Idx, i2Idx + 2200));
  }
}

main();
