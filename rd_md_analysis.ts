import fs from 'fs';

function main() {
  const content = fs.readFileSync('./index_bundle.js', 'utf-8');
  
  // Find Rd = or Md =
  const rdIdx = content.indexOf('Rd=[');
  if (rdIdx !== -1) {
    console.log("Found Rd=[ at index", rdIdx);
    // balance brackets to get the full array
    let brackets = 0;
    let endIdx = rdIdx + 3;
    while (endIdx < content.length) {
      if (content[endIdx] === '[') brackets++;
      if (content[endIdx] === ']') {
        brackets--;
        if (brackets === 0) {
          endIdx++;
          break;
        }
      }
      endIdx++;
    }
    console.log("RdContent:", content.slice(rdIdx, endIdx));
  } else {
    // maybe Rd declared near Md? Let's check around 555902
    console.log("Rd=[ not found, scanning surrounding around 555902");
    console.log(content.slice(555902 - 1000, 555902));
  }

  const mdIdx = content.indexOf('Md=[');
  if (mdIdx !== -1) {
    console.log("\nFound Md=[ at index", mdIdx);
    let brackets = 0;
    let endIdx = mdIdx + 3;
    while (endIdx < content.length) {
      if (content[endIdx] === '[') brackets++;
      if (content[endIdx] === ']') {
        brackets--;
        if (brackets === 0) {
          endIdx++;
          break;
        }
      }
      endIdx++;
    }
    console.log("MdContent:", content.slice(mdIdx, endIdx));
  }
}

main();
