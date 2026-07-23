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
    }

    // Standardize canonical URL
    const cleanPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
    const canonicalURL = `https://sucupam.com${cleanPath}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonicalURL);

    // Default image if not provided
    const ogImage = image || "https://res.cloudinary.com/dyaun9c0q/image/upload/v1774488189/portada_mantas_mno1nu.webp";

    // Set Open Graph & Twitter tags
    const metaTags = [
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Sucupam" },
      { property: "og:locale", content: "es_AR" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonicalURL },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:url", content: canonicalURL },
      { name: "twitter:image", content: ogImage },
    ];

    metaTags.forEach((tag) => {
      const selector = tag.property ? `meta[property="${tag.property}"]` : `meta[name="${tag.name}"]`;
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        if (tag.property) element.setAttribute("property", tag.property);
        if (tag.name) element.setAttribute("name", tag.name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", tag.content);
    });

  }, [title, description, path, keywords, image]);

  return null;
}

