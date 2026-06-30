import fs from 'fs';

function main() {
  const content = fs.readFileSync('./index_bundle.js', 'utf-8');
  console.log("Searching for vN constant in index_bundle.js...");

  const vnIdx = content.indexOf('vN=');
  if (vnIdx !== -1) {
    console.log("Found vN definition at", vnIdx);
    console.log(content.slice(vnIdx - 100, vnIdx + 2000));
  } else {
    // maybe "const vN=" or custom catalog page
    console.log("vN= not found directly. Let's search for '/souvenirs' in router bindings...");
    const routeIdx = content.indexOf('path:"/souvenirs"');
    if (routeIdx !== -1) {
      console.log("Found path:\"/souvenirs\" near:", content.slice(routeIdx - 200, routeIdx + 200));
    }
  }
}

main();
