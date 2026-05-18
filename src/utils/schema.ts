import { site } from "@data/site";

type BreadcrumbItem = {
  name: string;
  url: string;
};

type FAQItem = {
  question: string;
  answer: string;
};

const areaServed = site.locations.map((location) => ({
  "@type": "City",
  name: location
}));

export const legalServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: site.name,
  url: site.url,
  description: site.description,
  telephone: site.phone,
  email: site.email,
  areaServed,
  availableLanguage: site.lawyer.languages,
  founder: {
    "@type": "Person",
    name: site.lawyer.name
  }
});

export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  url: site.url,
  description: site.description,
  telephone: site.phone,
  email: site.email,
  areaServed,
  priceRange: "$$",
  founder: {
    "@type": "Person",
    name: site.lawyer.name,
    jobTitle: site.lawyer.title
  }
});

export const attorneySchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.lawyer.name,
  jobTitle: site.lawyer.title,
  worksFor: {
    "@type": "LegalService",
    name: site.name,
    url: site.url
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
  knowsLanguage: site.lawyer.languages
});

export const faqPageSchema = (items: FAQItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
});

export const breadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});
