const WORDPRESS_API_URL =
  import.meta.env.PUBLIC_WORDPRESS_API_URL || "https://cms.saulcancino.cl/wp-json/wp/v2";

type WordPressRendered = {
  rendered: string;
};

export type WordPressPost = {
  id: number;
  slug: string;
  date: string;
  title: WordPressRendered;
  excerpt: WordPressRendered;
  content: WordPressRendered;
  _embedded?: Record<string, unknown>;
};

export async function getPageBySlug(slug: string) {
  void slug;
  void WORDPRESS_API_URL;
  // Futura integración WordPress Headless: consultar página por slug.
  return null;
}

export async function getWordPressPosts(perPage = 20): Promise<WordPressPost[]> {
  void perPage;
  void WORDPRESS_API_URL;
  // Fase 2:
  // GET https://cms.saulcancino.cl/wp-json/wp/v2/posts?_embed&per_page=20&status=publish
  return [];
}

export async function getWordPressPostBySlug(slug: string): Promise<WordPressPost | undefined> {
  void slug;
  void WORDPRESS_API_URL;
  // Fase 2:
  // GET https://cms.saulcancino.cl/wp-json/wp/v2/posts?_embed&slug={slug}&status=publish
  return undefined;
}

export const getPosts = getWordPressPosts;
