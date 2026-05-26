import { services } from "./services";

const allServiceItems = services.map((service) => service.title);

export type LocationLanding = {
  city: string;
  slug: string;
  href?: string;
  isPrimaryMarket?: boolean;
  keyword: string;
  titleTag: string;
  h1: string;
  summary: string;
  audience: string;
  contentHeading: string;
  content: string[];
  servicesHeading: string;
  serviceItems: string[];
  whyHeading?: string;
  whyText?: string;
  highlights: string[];
  faqs: { question: string; answer: string }[];
  metaDescription: string;
};

const sharedFaqs = (city: string) => [
  {
    question: `¿Cancino Abogados atiende clientes en ${city}?`,
    answer:
      `Sí. Cancino Abogados atiende clientes en ${city} y puede coordinar reuniones, revisión documental y seguimiento del caso de forma presencial o remota según la materia y disponibilidad.`
  },
  {
    question: `¿Qué servicios legales ofrece un abogado en ${city}?`,
    answer:
      "El estudio ofrece asesoría en litigación civil y comercial, derecho inmobiliario y desarrollo de proyectos, defensa laboral para empleadores, asesoría legal de empresa, gobierno corporativo, contratos estratégicos, compliance y resolución de controversias en construcción."
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
    slug: "home",
    href: "/",
    isPrimaryMarket: true,
    keyword: "asesor legal en viña del mar",
    titleTag: "Asesor legal en Viña del Mar | Cancino Abogados",
    h1: "Asesor legal en Viña del Mar",
    summary:
      "Asesoría legal estratégica para empresas, PYMES y personas desde la oficina principal de Cancino Abogados en Viña del Mar.",
    audience:
      "Cancino Abogados tiene su oficina principal en Avenida San Martín 1330, Viña del Mar, atendiendo a empresas, PYMES y personas de la Región de Valparaíso desde 2014.",
    contentHeading: "Asesoría legal estratégica en Viña del Mar",
    content: [
      "Cancino Abogados tiene su oficina principal en Avenida San Martín 1330, Viña del Mar, atendiendo a empresas, PYMES y personas de la Región de Valparaíso desde 2014.",
      "Desde Viña del Mar asesoro en materias de derecho civil y comercial, derecho inmobiliario, defensa laboral para empleadores, estructuración de sociedades y compliance corporativo. Cada caso recibe atención directa del abogado, sin intermediarios."
    ],
    servicesHeading: "Servicios disponibles en Viña del Mar",
    serviceItems: allServiceItems,
    whyHeading: "¿Por qué elegir un abogado local en Viña del Mar?",
    whyText:
      "Conocer el contexto local —los tribunales, los registros, las prácticas del mercado inmobiliario de la región— marca la diferencia en los resultados. Llevo más de 10 años litigando y asesorando en Viña del Mar y la Región de Valparaíso.",
    highlights: [
      "Empresas y PYMES que necesitan asesoría legal directa en Viña del Mar.",
      "Propietarios e inversionistas que requieren apoyo inmobiliario en la Región de Valparaíso.",
      "Empleadores que necesitan defensa laboral y prevención de riesgos.",
      "Personas y empresas con conflictos civiles, comerciales o contractuales relevantes."
    ],
    faqs: sharedFaqs("Viña del Mar"),
    metaDescription:
      "Asesor legal en Viña del Mar especializado en derecho civil, comercial, inmobiliario y laboral. Saúl Cancino, Magíster LL.M. UC. Atención presencial y virtual."
  },
  {
    city: "Santiago",
    slug: "abogado-santiago",
    keyword: "abogado santiago",
    titleTag: "Abogado en Santiago | Cancino Abogados",
    h1: "Abogado en Santiago",
    summary:
      "Asesoría legal para empresas y personas en Santiago, con foco en derecho comercial, gobierno corporativo, contratos y litigación civil.",
    audience:
      "Cancino Abogados atiende clientes en Santiago con foco en asesoría estratégica empresarial: estructuración de negocios, contratos comerciales de alto valor, gobierno corporativo y litigación civil y mercantil.",
    contentHeading: "Asesoría legal para empresas y personas en Santiago",
    content: [
      "Cancino Abogados atiende clientes en Santiago con foco en asesoría estratégica empresarial: estructuración de negocios, contratos comerciales de alto valor, gobierno corporativo y litigación civil y mercantil.",
      "La atención en Santiago se realiza en modalidad presencial y virtual, adaptada a los tiempos y necesidades de ejecutivos, empresas y emprendedores que requieren un abogado de confianza con alto nivel técnico."
    ],
    servicesHeading: "Servicios en Santiago",
    serviceItems: allServiceItems,
    highlights: [
      "Empresas que necesitan soporte legal para contratos comerciales de alto valor.",
      "Socios, directorios y administradores que requieren gobierno corporativo.",
      "PYMES y emprendedores que buscan asesoría jurídica con estándar técnico alto.",
      "Personas y empresas con litigios civiles o comerciales en Santiago."
    ],
    faqs: sharedFaqs("Santiago"),
    metaDescription:
      "Abogado en Santiago para empresas y personas. Derecho comercial, gobierno corporativo, contratos y litigación civil. Saúl Cancino — Magíster LL.M. UC."
  },
  {
    city: "Quillota",
    slug: "abogado-quillota",
    keyword: "abogado quillota",
    titleTag: "Abogado en Quillota | Cancino Abogados",
    h1: "Abogado en Quillota",
    summary:
      "Asesoría legal en Quillota para empresas y personas en materias civiles, inmobiliarias, laborales y comerciales.",
    audience:
      "Quillota y su provincia tienen una dinámica económica propia, con creciente actividad inmobiliaria, agroindustrial y empresarial.",
    contentHeading: "Asesoría legal en Quillota y la Región de Valparaíso",
    content: [
      "Quillota y su provincia tienen una dinámica económica propia, con creciente actividad inmobiliaria, agroindustrial y empresarial. Cancino Abogados asesora a empresas y personas en Quillota en materias de derecho civil, inmobiliario, laboral y comercial.",
      "Atención presencial disponible en Quillota o en nuestra oficina principal de Viña del Mar, y de forma virtual para quienes lo prefieran."
    ],
    servicesHeading: "Servicios en Quillota",
    serviceItems: allServiceItems,
    highlights: [
      "Empresas locales que necesitan asesoría civil, comercial o laboral.",
      "Propietarios e inversionistas con operaciones inmobiliarias en Quillota.",
      "Empleadores que requieren defensa laboral y documentación preventiva.",
      "Personas con conflictos contractuales, patrimoniales o inmobiliarios."
    ],
    faqs: sharedFaqs("Quillota"),
    metaDescription:
      "Abogado en Quillota para empresas y personas. Derecho civil, inmobiliario, laboral y comercial. Atención presencial y virtual en la Región de Valparaíso."
  },
  {
    city: "San Felipe",
    slug: "abogado-san-felipe",
    keyword: "abogado san felipe",
    titleTag: "Abogado en San Felipe | Cancino Abogados",
    h1: "Abogado en San Felipe",
    summary:
      "Abogado en San Felipe para empresas, PYMES, propietarios, empleadores y personas naturales.",
    audience:
      "San Felipe es una zona con actividad agroindustrial, inmobiliaria y empresarial que requiere asesoría legal especializada y cercana.",
    contentHeading: "Abogado en San Felipe",
    content: [
      "San Felipe es una zona con actividad agroindustrial, inmobiliaria y empresarial que requiere asesoría legal especializada y cercana. Cancino Abogados atiende a empresas y personas de esta ciudad con el mismo estándar técnico de un estudio metropolitano.",
      "Ofrecemos atención presencial en San Felipe o en nuestra oficina de Viña del Mar, y consultas virtuales para quienes lo prefieran."
    ],
    servicesHeading: "Servicios en San Felipe",
    serviceItems: allServiceItems,
    highlights: [
      "Empresas agroindustriales y PYMES que requieren respaldo jurídico.",
      "Propietarios, compradores e inversionistas en operaciones rurales o urbanas.",
      "Empleadores que necesitan defensa laboral o prevención de contingencias.",
      "Personas y empresas de San Felipe con conflictos civiles o comerciales."
    ],
    faqs: sharedFaqs("San Felipe"),
    metaDescription:
      "Abogado en San Felipe. Derecho civil, inmobiliario, comercial y laboral para empresas y personas. Saúl Cancino, más de 10 años de experiencia."
  }
];

export const locationServices = services;

export const getLocationBySlug = (slug: string) =>
  locations.find((location) => location.slug === slug);
