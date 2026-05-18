const WORDPRESS_API_URL =
  import.meta.env.PUBLIC_WORDPRESS_API_URL || "https://cms.cancinoabogados.cl/wp-json/wp/v2";

export async function getPageBySlug(slug: string) {
  void slug;
  void WORDPRESS_API_URL;
  // Futura integración WordPress Headless: consultar página por slug.
  return null;
}

export async function getPosts() {
  void WORDPRESS_API_URL;
  // Futura integración WordPress Headless: consultar entradas del blog.
  return [];
}
