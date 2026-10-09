import { createContext } from 'react';

export interface PageSEO {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article';
}

// A separate collector per server render keeps initial HTML and client metadata in sync.
export interface PageMetadata {
  seo?: PageSEO;
  schemas: Record<string, Record<string, unknown>>;
}
export const PageMetadataContext = createContext<PageMetadata | null>(null);
