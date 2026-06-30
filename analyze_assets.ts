import fs from 'fs';

function main() {
  const content = fs.readFileSync('./index_bundle.js', 'utf-8');
  console.log("Locating 'eh=' around index 428000...");

  // Let's find 'eh=' or the array start near index 428700.
  // We can look backward from index 428700 to find the assignment of the array.
  const targetIndex = 428700;
  const snippet = content.slice(targetIndex - 10000, targetIndex + 10000);
  
  // Let's write the snippet of 20KB around 428700 to a file so we can view or parse it
  fs.writeFileSync('./blog_snippet.js', snippet);
  console.log("Wrote a 20KB snippet surrounding the blog data to blog_snippet.js");
  
  // Let's write a script that specifically extracts eh, f1, and Vl array declarations intact, and outputs them as a clean JS file.
  // Let's find 'eh=' by finding the word 'eh=[' or similar.
  const ehIndex = content.lastIndexOf('=[{id:"ideas-', targetIndex);
  if (ehIndex !== -1) {
    console.log("Found start of eh at", ehIndex);
    // Find the end of eh array.
    // It will be the closing bracket of the array. Since the array has objects, let's balance the brackets.
    let bracketsCount = 0;
    let endIdx = ehIndex + 1; // skip '='
    while (endIdx < content.length) {
      if (content[endIdx] === '[') bracketsCount++;
      if (content[endIdx] === ']') {
        bracketsCount--;
        if (bracketsCount === 0) {
          endIdx++; // include the closing bracket
          break;
        }
      }
      endIdx++;
    }
    const ehContent = content.slice(ehIndex, endIdx);
    console.log("Extracted eh Content! Length:", ehContent.length);
    fs.writeFileSync('./extracted_eh.js', ehContent);
  } else {
    console.log("Could not find the exact start of eh. Let's look for =[{ in the slice.");
    // Let's find the nearest `=[{` before 428700
    const nearEquals = content.slice(0, targetIndex).lastIndexOf('=[');
    console.log("Nearest '=[' before targetIndex is at position", nearEquals);
    if (nearEquals !== -1) {
      console.log(content.slice(nearEquals, nearEquals + 1000));
    }
  }
}

main();
