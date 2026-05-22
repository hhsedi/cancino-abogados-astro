import { services } from "./services";

export type LocationLanding = {
  city: string;
  slug: string;
  keyword: string;
  h1: string;
  summary: string;
  audience: string;
  highlights: string[];
  faqs: { question: string; answer: string }[];
  metaDescription: string;
};

const sharedHighlights = (city: string) => [
  `Empresas, constructoras y contratistas que necesitan abogado en ${city} para contratos, controversias o decisiones estratégicas.`,
  `Empleadores que requieren defensa laboral, revisión de despidos, finiquitos o prevención de riesgos.`,
  `Propietarios, inversionistas y compradores que necesitan asesoría inmobiliaria o estudio de títulos en ${city}.`,
  `Personas y empresas con conflictos civiles, comerciales, contractuales o societarios que requieren una estrategia legal clara.`
];

const sharedFaqs = (city: string) => [
  {
    question: `¿Cancino Abogados atiende clientes en ${city}?`,
    answer:
      `Sí. Cancino Abogados atiende clientes en ${city} y puede coordinar reuniones, revisión documental y seguimiento del caso de forma presencial o remota según la materia y disponibilidad.`
  },
  {
    question: `¿Qué servicios legales ofrece un abogado en ${city}?`,
    answer:
      "El estudio ofrece asesoría en controversias de construcción y contratación pública, asesoría legal de empresa, litigación civil y comercial, defensa laboral para empleadores, contratos, derecho inmobiliario, sociedades, estudio de títulos, compliance corporativo y negociación de conflictos."
  },
  {
    question: `¿Puedo pedir una evaluación legal desde ${city} antes de iniciar un juicio?`,
    answer:
      "Sí. La evaluación inicial permite revisar antecedentes, identificar riesgos, ordenar documentos y definir si conviene negociar, prevenir el conflicto o preparar una estrategia judicial."
  }
];

export const locations: LocationLanding[] = [
  {
    city: "Viña del Mar",
    slug: "abogado-vina-del-mar",
    keyword: "abogado en Viña del Mar para empresas, construcción y litigios",
    h1: "Abogado en Viña del Mar para empresas, construcción y conflictos legales",
    summary:
      "Asesoría legal estratégica en Viña del Mar para empresas, constructoras, contratistas, empleadores, propietarios e inversionistas.",
    audience:
      "Cancino Abogados asesora a clientes de Viña del Mar que necesitan respaldo jurídico en contratos, litigios civiles y comerciales, controversias de construcción, contratación pública, derecho inmobiliario, sociedades, compliance y defensa laboral para empleadores.",
    highlights: sharedHighlights("Viña del Mar"),
    faqs: sharedFaqs("Viña del Mar"),
    metaDescription:
      "Abogado en Viña del Mar para empresas, constructoras, contratistas y empleadores. Litigios, contratos, derecho inmobiliario y contratación pública."
  },
  {
    city: "Santiago",
    slug: "abogado-santiago",
    keyword: "abogado en Santiago para empresas, construcción y litigios",
    h1: "Abogado en Santiago para empresas, construcción y conflictos legales",
    summary:
      "Asesoría legal estratégica en Santiago para empresas, constructoras, contratistas, empleadores, propietarios e inversionistas.",
    audience:
      "Cancino Abogados asesora a clientes de Santiago que necesitan respaldo jurídico en contratos, litigios civiles y comerciales, controversias de construcción, contratación pública, derecho inmobiliario, sociedades, compliance y defensa laboral para empleadores.",
    highlights: sharedHighlights("Santiago"),
    faqs: sharedFaqs("Santiago"),
    metaDescription:
      "Abogado en Santiago para empresas, constructoras, contratistas y empleadores. Litigios, contratos, derecho inmobiliario y contratación pública."
  },
  {
    city: "Quillota",
    slug: "abogado-quillota",
    keyword: "abogado en Quillota para empresas, contratos y derecho inmobiliario",
    h1: "Abogado en Quillota para empresas, propiedades y conflictos legales",
    summary:
      "Asesoría legal en Quillota para empresas, propietarios, inversionistas, empleadores y personas que requieren tomar decisiones con respaldo jurídico.",
    audience:
      "Cancino Abogados orienta a clientes de Quillota en materias civiles, comerciales, inmobiliarias, laborales para empleadores, contratos, sociedades, estudio de títulos y resolución de controversias vinculadas a empresas o proyectos.",
    highlights: sharedHighlights("Quillota"),
    faqs: sharedFaqs("Quillota"),
    metaDescription:
      "Abogado en Quillota para empresas, empleadores, propietarios e inversionistas. Contratos, litigios, derecho inmobiliario y asesoría legal."
  },
  {
    city: "San Felipe",
    slug: "abogado-san-felipe",
    keyword: "abogado en San Felipe para empresas, empleadores y propiedades",
    h1: "Abogado en San Felipe para empresas, empleadores y conflictos legales",
    summary:
      "Asesoría legal estratégica en San Felipe para pymes, empresas familiares, constructoras, contratistas, empleadores y personas naturales.",
    audience:
      "Cancino Abogados atiende a clientes de San Felipe que necesitan asesoría en contratos, propiedades, terrenos, parcelas, litigación civil y comercial, derecho inmobiliario, sociedades, construcción, contratación pública y defensa laboral para empleadores.",
    highlights: sharedHighlights("San Felipe"),
    faqs: sharedFaqs("San Felipe"),
    metaDescription:
      "Abogado en San Felipe para empresas, empleadores, constructoras y personas. Derecho inmobiliario, contratos, litigios y asesoría legal."
  }
];

export const locationServices = services;

export const getLocationBySlug = (slug: string) =>
  locations.find((location) => location.slug === slug);
