import fs from 'fs';

function balanceBrackets(text: string, startFrom: number): string {
  let bracketsCount = 0;
  let currentIdx = startFrom;
  let insideString: string | null = null;
  let escapeNext = false;

  while (currentIdx < text.length) {
    const char = text[currentIdx];

    if (escapeNext) {
      escapeNext = false;
      currentIdx++;
      continue;
    }

    if (char === '\\') {
      escapeNext = true;
      currentIdx++;
      continue;
    }

    if (insideString) {
      if (char === insideString) {
        insideString = null;
      }
      currentIdx++;
      continue;
    }

    if (char === '"' || char === "'" || char === "`") {
      insideString = char;
      currentIdx++;
      continue;
    }

    if (char === '[') {
      bracketsCount++;
    } else if (char === ']') {
      bracketsCount--;
      if (bracketsCount === 0) {
        return text.slice(startFrom, currentIdx + 1);
      }
    }
    currentIdx++;
  }
  return text.slice(startFrom);
}

function main() {
  const content = fs.readFileSync('./index_bundle.js', 'utf-8');

  // Extract f1 (Category/Events)
  const f1Index = content.indexOf('f1=[');
  let f1Content = '';
  if (f1Index !== -1) {
    f1Content = balanceBrackets(content, f1Index + 3);
  }

  // Extract Vl (Products)
  const VlIndex = content.indexOf('Vl=[');
  let VlContent = '';
  if (VlIndex !== -1) {
    VlContent = balanceBrackets(content, VlIndex + 3);
  }

  // Extract eh (Blog)
  // Let's find index of 'guia-souvenirs-boda' and go backward to finding the array start '['
  const blogKeywordIdx = content.indexOf('guia-souvenirs-boda');
  let ehContent = '';
  if (blogKeywordIdx !== -1) {
    const arrayStartIdx = content.lastIndexOf('[', blogKeywordIdx);
    if (arrayStartIdx !== -1) {
      ehContent = balanceBrackets(content, arrayStartIdx);
    }
  }

  // Let's print lengths
  console.log("f1 length:", f1Content.length);
  console.log("Vl length:", VlContent.length);
  console.log("eh length:", ehContent.length);

  // Write to src/data.ts
  const dataTsContent = `/**
 * Core Data backup of Sucupam.
 * Recovered from original production build assets.
 */

export interface EventCategory {
  name: string;
  slug: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  eventCategories: string[];
  shortDescription: string;
  longDescription: string;
  coverImageUrl: string;
  galleryImageUrls: string[];
  metaTitle: string;
  metaDescription: string;
  isPrensa?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: {
    name: string;
    role: string;
  };
  category: string;
  coverImage: string;
  metaTitle: string;
  metaDescription: string;
  keywords?: string[];
  faqs?: Array<{ question: string; answer: string }>;
}

export const eventCategories: EventCategory[] = ${f1Content || '[]'};

export const products: Product[] = ${VlContent || '[]'};

export const blogPosts: BlogPost[] = ${ehContent || '[]'};
`;

  fs.writeFileSync('./src/data.ts', dataTsContent);
  console.log("Successfully wrote and structured core data to /src/data.ts!");
}

main();
