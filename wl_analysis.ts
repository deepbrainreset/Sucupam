import fs from 'fs';

function main() {
  const content = fs.readFileSync('./index_bundle.js', 'utf-8');
  const wlIdx = content.indexOf('Wl=');
  if (wlIdx !== -1) {
    console.log("Found Wl definition near index", wlIdx);
    console.log(content.slice(wlIdx - 500, wlIdx + 2500));
  } else {
    // maybe "const Wl=" or similar
    console.log("Wl= not found, searching around 560000");
    console.log(content.slice(560000 - 1000, 560000 + 1000));
  }
}

main();
