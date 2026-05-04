import { site } from "@data/site";

export const buildTitle = (title?: string) =>
  title ? `${title} | ${site.name}` : `${site.name} | ${site.tagline}`;

export const buildCanonical = (path = "/") => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, site.url).toString();
};
