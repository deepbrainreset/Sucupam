import fs from 'fs';

async function main() {
  try {
    console.log("Fetching JS bundle...");
    const jsRes = await fetch("https://sucupam.com/assets/index-BAS1oRze.js");
    const jsText = await jsRes.text();
    fs.writeFileSync("./index_bundle.js", jsText);
    console.log("JS bundle saved! Size:", jsText.length);

    console.log("Fetching CSS bundle...");
    const cssRes = await fetch("https://sucupam.com/assets/index-DUYdK_9p.css");
    const cssText = await cssRes.text();
    fs.writeFileSync("./index_bundle.css", cssText);
    console.log("CSS bundle saved! Size:", cssText.length);
  } catch (err) {
    console.error("Error fetching assets:", err);
  }
}

main();
