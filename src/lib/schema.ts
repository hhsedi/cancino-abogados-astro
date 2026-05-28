import { site } from "@data/site";

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type ServiceSchemaInput = {
  name: string;
  description: string;
  url: string;
  areaServed?: string[];
};

export type ArticleSchemaInput = {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
};

type LegacyServiceItem = {
  title: string;
  slug: string;
  keyword: string;
  summary: string;
  metaDescription: string;
};

const canonicalUrl = (pathOrUrl = "/") => new URL(pathOrUrl, site.url).toString();

const areaServedSchema = (areas = site.areasServed) =>
  areas.map((area) => ({
    "@type": area === "Chile" ? "Country" : "Place",
    name: area
  }));

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: site.address.streetAddress,
  addressLocality: site.address.addressLocality,
  addressRegion: site.address.addressRegion,
  addressCountry: site.address.addressCountry
};

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.name,
  url: site.url,
  inLanguage: "es-CL",
  publisher: {
    "@id": `${site.url}/#organization`
  }
});

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: canonicalUrl(site.logo),
  email: site.email,
  telephone: site.phone,
  address: postalAddress,
  sameAs: site.sameAs
});

export const legalServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${site.url}/#legalservice`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: canonicalUrl(site.logo),
  image: canonicalUrl(site.logo),
  description: site.description,
  telephone: site.phone,
  email: site.email,
  address: postalAddress,
  areaServed: areaServedSchema(),
  serviceType: site.services,
  hasMap: site.googleBusinessProfileUrl,
  sameAs: site.sameAs,
  availableLanguage: site.lawyer.languages,
  founder: {
    "@id": `${site.url}/#person`
  }
});

export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#localbusiness`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: canonicalUrl(site.logo),
  description: site.description,
  telephone: site.phone,
  email: site.email,
  address: postalAddress,
  areaServed: areaServedSchema(),
  priceRange: "$$",
  hasMap: site.googleBusinessProfileUrl,
  sameAs: site.sameAs,
  founder: {
    "@id": `${site.url}/#person`
  }
});

export const personSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}/#person`,
  name: site.lawyerName,
  jobTitle: site.lawyer.title,
  worksFor: {
    "@id": `${site.url}/#legalservice`
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Universidad de Valparaíso"
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Pontificia Universidad Católica de Chile"
    }
  ],
  knowsLanguage: site.lawyer.languages,
  sameAs: site.sameAs
});

export const baseBusinessSchema = () => [
  websiteSchema(),
  organizationSchema(),
  legalServiceSchema(),
  localBusinessSchema(),
  personSchema()
];

export const serviceSchema = ({ name, description, url, areaServed = site.areasServed }: ServiceSchemaInput) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  url: canonicalUrl(url),
  areaServed: areaServedSchema(areaServed),
  provider: {
    "@id": `${site.url}/#legalservice`
  }
});

export const faqSchema = (faqs: FAQItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
});

export const articleSchema = ({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified = datePublished
}: ArticleSchemaInput) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  url: canonicalUrl(url),
  image: image ? canonicalUrl(image) : undefined,
  datePublished,
  dateModified,
  inLanguage: "es-CL",
  author: {
    "@id": `${site.url}/#person`
  },
  publisher: {
    "@id": `${site.url}/#organization`
  }
});

export const breadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: canonicalUrl(item.url)
  }))
});

export const attorneySchema = personSchema;
export const faqPageSchema = faqSchema;

export const servicePageSchema = (service: LegacyServiceItem, path: string) =>
  serviceSchema({
    name: service.title,
    description: service.metaDescription || service.summary,
    url: path
  });
