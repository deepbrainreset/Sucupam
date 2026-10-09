import { useContext, useEffect } from "react";
import { PageMetadataContext } from "../pageMetadata";

interface SchemaMarkupProps {
  type: string;
  data: any;
}

export function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const metadata = useContext(PageMetadataContext);
  if (metadata) metadata.schemas[type] = data;

  useEffect(() => {
    // Check if script already exists for this schema type to avoid duplication
    const scriptId = `schema-${type.toLowerCase()}`;
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": type,
      ...data,
    });

    document.head.appendChild(script);

    // Clean up on unmount
    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [type, data]);

  return null;
}
