import { services } from "@data/services";
import { site } from "@data/site";

const staticPages = [
  "",
  "servicios",
  "abogado-saul-cancino",
  "blog",
  "contacto"
];

export function GET() {
  const servicePages = services.map((service) => `servicios/${service.slug}`);
  const pages = [...staticPages, ...servicePages];
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
