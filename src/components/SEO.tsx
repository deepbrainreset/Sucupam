import { useContext, useEffect } from "react";
import { PageMetadataContext, type PageSEO } from "../pageMetadata";

const DEFAULT_TITLE = "Sucupam | Souvenirs para Casamientos y Eventos Personalizados";
const DEFAULT_DESCRIPTION =
  "Atelier Sucupam: souvenirs para casamientos, bodas y eventos personalizados. Abanicos, pañuelos lágrimas de felicidad, mantas y tarjetas raspaditas.";

export function normalizeCanonicalPath(rawPath: string): string {
  if (!rawPath) return "/";
  let cleaned = rawPath.trim();
  // Strip any accidental domain or protocol prefix (including concatenated /sucupam.com/...)
  cleaned = cleaned.replace(/^(?:https?:\/\/)?(?:www\.)?sucupam\.com/i, "");
  cleaned = cleaned.replace(/^\/+(?:www\.)?sucupam\.com/i, "");
  // Strip query string and hash
  cleaned = cleaned.split("?")[0].split("#")[0];
  if (!cleaned || cleaned === "/") return "/";
  if (!cleaned.startsWith("/")) cleaned = `/${cleaned}`;
  // Collapse multiple slashes and remove trailing slash on non-root paths
  cleaned = cleaned.replace(/\/+/g, "/").replace(/\/$/, "");
  return cleaned || "/";
}

export function buildCanonicalUrl(rawPath: string): string {
  const cleanPath = normalizeCanonicalPath(rawPath);
  return cleanPath === "/" ? "https://sucupam.com/" : `https://sucupam.com${cleanPath}`;
}

export function SEO({
  title,
  description,
  path,
  keywords = [],
  image,
  type = "website",
  robots = "index, follow",
}: PageSEO) {
  const safeTitle = title?.trim() || DEFAULT_TITLE;
  const safeDescription = description?.trim() || DEFAULT_DESCRIPTION;
  const cleanPath = normalizeCanonicalPath(path);
  const canonicalURL = buildCanonicalUrl(cleanPath);

  const metadata = useContext(PageMetadataContext);
  if (metadata) {
    metadata.seo = {
      title: safeTitle,
      description: safeDescription,
      path: cleanPath,
      keywords,
      image,
      type,
      robots,
    };
  }

  useEffect(() => {
    // Set document title (never allow empty or undefined overwrite)
    document.title = safeTitle;

    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", safeDescription);

    // Set meta robots
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement("meta");
      metaRobots.setAttribute("name", "robots");
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute("content", robots);

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
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonicalURL);

    // Default image if not provided
    const ogImage = image
      ? new URL(image, "https://sucupam.com").href
      : "https://res.cloudinary.com/dyaun9c0q/image/upload/v1774488189/portada_mantas_mno1nu.webp";

    // Set Open Graph & Twitter tags
    const metaTags = [
      { property: "og:type", content: type },
      { property: "og:site_name", content: "Sucupam" },
      { property: "og:locale", content: "es_AR" },
      { property: "og:title", content: safeTitle },
      { property: "og:description", content: safeDescription },
      { property: "og:url", content: canonicalURL },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: safeTitle },
      { name: "twitter:description", content: safeDescription },
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
  }, [safeTitle, safeDescription, canonicalURL, keywords, image, type, robots]);

  return null;
}

