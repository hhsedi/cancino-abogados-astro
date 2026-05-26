import { locations } from "@data/locations";
import { services } from "@data/services";
import { site } from "@data/site";
import { getPosts } from "@lib/blog";

const staticPages = ["", "nosotros", "trayectoria", "faq", "blog", "contacto"];

export async function GET() {
  const servicePages = services.map((service) => service.slug);
  const locationPages = locations
    .filter((location) => !location.isPrimaryMarket)
    .map((location) => location.slug);
  const blogPages = (await getPosts()).map((post) => `blog/${post.slug}`);
  const pages = [...staticPages, ...servicePages, ...locationPages, ...blogPages];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((page) => {
    const loc = new URL(page, site.url).toString();
    return `  <url>
    <loc>${loc}</loc>
    <changefreq>monthly</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
