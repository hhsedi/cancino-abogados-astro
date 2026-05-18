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

export const locations: LocationLanding[] = [
  {
    city: "San Felipe",
    slug: "abogado-san-felipe",
    keyword: "abogado San Felipe",
    h1: "Abogado en San Felipe",
    summary:
      "Asesoría legal estratégica para pymes, empresas familiares, empleadores y personas naturales en San Felipe.",
    audience:
      "Cancino Abogados orienta a clientes de San Felipe en contratos, propiedades, terrenos, parcelas, conflictos civiles y comerciales, derecho inmobiliario y defensa laboral para empleadores.",
    highlights: [
      "Pymes y empresas familiares que necesitan ordenar contratos y documentos.",
      "Propietarios o compradores de terrenos, parcelas e inmuebles.",
      "Empleadores que requieren prevención o defensa laboral.",
      "Personas con conflictos civiles o comerciales relevantes."
    ],
    faqs: [
      {
        question: "¿Atienden consultas legales en San Felipe?",
        answer:
          "Sí. La atención puede coordinarse de forma online o presencial según disponibilidad y características del caso."
      },
      {
        question: "¿Qué servicios legales se ofrecen en San Felipe?",
        answer:
          "Derecho inmobiliario, litigación civil y comercial, contratos, asesoría para empresas y defensa laboral para empleadores."
      }
    ],
    metaDescription:
      "Abogado en San Felipe para empresas, empleadores y personas. Derecho inmobiliario, contratos, litigios civiles y comerciales."
  },
  {
    city: "Los Andes",
    slug: "abogado-los-andes",
    keyword: "abogado Los Andes",
    h1: "Abogado en Los Andes",
    summary:
      "Asesoría legal preventiva y estratégica para empresas locales, empleadores y personas en Los Andes.",
    audience:
      "El estudio asesora en Los Andes a empresas, empleadores, propietarios y personas que necesitan revisar contratos, resolver conflictos o prevenir riesgos legales.",
    highlights: [
      "Empresas locales que requieren asesoría legal clara.",
      "Empleadores con necesidades laborales preventivas o de defensa.",
      "Operaciones sobre propiedades, terrenos y contratos.",
      "Conflictos civiles, comerciales o societarios."
    ],
    faqs: [
      {
        question: "¿Puedo consultar desde Los Andes de forma online?",
        answer:
          "Sí. Muchas consultas pueden gestionarse por videollamada, correo y revisión digital de antecedentes."
      },
      {
        question: "¿Trabajan con empresas de Los Andes?",
        answer:
          "Sí. La asesoría está orientada a empresas, pymes, empleadores y negocios que requieren apoyo legal estratégico."
      }
    ],
    metaDescription:
      "Abogado en Los Andes para empresas, empleadores y personas. Contratos, derecho civil y comercial, propiedades y asesoría preventiva."
  },
  {
    city: "Viña del Mar",
    slug: "abogado-vina-del-mar",
    keyword: "abogado Viña del Mar",
    h1: "Abogado en Viña del Mar",
    summary:
      "Asesoría legal para empresas de servicios, profesionales independientes, propietarios e inversionistas inmobiliarios en Viña del Mar.",
    audience:
      "Cancino Abogados atiende en Viña del Mar materias civiles, comerciales, inmobiliarias, contractuales y laborales para empleadores, con foco en prevención y estrategia.",
    highlights: [
      "Empresas de servicios y profesionales independientes.",
      "Propietarios e inversionistas inmobiliarios.",
      "Litigios civiles y comerciales.",
      "Contratos, derecho inmobiliario y defensa laboral para empleadores."
    ],
    faqs: [
      {
        question: "¿Qué tipo de casos atienden en Viña del Mar?",
        answer:
          "Principalmente asuntos civiles, comerciales, inmobiliarios, contractuales y laborales para empleadores."
      },
      {
        question: "¿La asesoría sirve para revisar contratos antes de firmar?",
        answer:
          "Sí. Revisar contratos antes de firmar permite detectar riesgos y negociar mejores condiciones."
      }
    ],
    metaDescription:
      "Abogado en Viña del Mar para empresas, profesionales, propietarios e inversionistas. Contratos, litigios y derecho inmobiliario."
  }
];

export const locationServices = services.slice(0, 5);

export const getLocationBySlug = (slug: string) =>
  locations.find((location) => location.slug === slug);
