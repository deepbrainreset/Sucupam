import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
}

export function SEO({ title, description, path, keywords = [], image }: SEOProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // Set meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (keywords.length > 0) {
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute("content", keywords.join(", "));
    } else if (metaKeywords) {
      metaKeywords.remove();
    }

    // Set canonical URL
    const canonicalURL = `https://sucupam.com${path}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonicalURL);

    // Set Open Graph tags
    const ogTags = [
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Sucupam" },
      { property: "og:locale", content: "es_AR" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonicalURL },
    ];

    if (image) {
      ogTags.push({ property: "og:image", content: image });
    }

    ogTags.forEach((tag) => {
      let element = document.querySelector(`meta[property="${tag.property}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", tag.property);
        document.head.appendChild(element);
      }
      element.setAttribute("content", tag.content);
    });

  }, [title, description, path, keywords, image]);

  return null;
}
