export type Service = {
  title: string;
  slug: string;
  keyword: string;
  summary: string;
  intro: string;
  specializedHeading: string;
  cases: string[];
  approach: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  metaDescription: string;
};

const servicePriority = [
  "controversias-construccion-contratacion-publica",
  "desarrollo-inmobiliario-estructuracion-proyectos",
  "asesoria-legal-empresas",
  "litigacion-civil-comercial",
  "defensa-laboral-empleador"
];

export const services: Service[] = [
  {
    title: "Desarrollo inmobiliario y estructuración de proyectos",
    slug: "desarrollo-inmobiliario-estructuracion-proyectos",
    keyword: "abogado desarrollo inmobiliario estructuración de proyectos",
    summary:
      "Asesoría legal integral para inmobiliarias, inversionistas y constructoras en compraventas, due diligence, regularización y conflictos inmobiliarios.",
    intro:
      "El desarrollo de un proyecto inmobiliario exige ordenar la operación desde su origen: adquisición del activo, revisión de antecedentes, estructura contractual, permisos, financiamiento, relación con inversionistas y eventuales contingencias. Cancino Abogados asesora a inmobiliarias, inversionistas y empresas constructoras con una mirada preventiva, técnica y orientada a decisiones comerciales.",
    specializedHeading:
      "Asesoría legal para desarrollo inmobiliario, due diligence y estructuración de proyectos",
    cases: [
      "Inmobiliarias que evalúan comprar, vender o desarrollar terrenos, edificios o proyectos por etapas.",
      "Inversionistas que requieren due diligence legal antes de comprometer capital o cerrar una operación.",
      "Empresas constructoras que necesitan estructurar contratos, promesas, compraventas o acuerdos de inversión.",
      "Proyectos con observaciones registrales, regularización pendiente, antecedentes incompletos o restricciones de dominio.",
      "Conflictos derivados de compraventas, entregas, deslindes, servidumbres, documentación inmobiliaria o incumplimientos contractuales."
    ],
    approach: [
      "Levantamiento jurídico del proyecto, partes involucradas, activos, plazos, documentos disponibles y riesgos críticos.",
      "Revisión de títulos, inscripciones, certificados, gravámenes, prohibiciones, permisos y antecedentes contractuales relevantes.",
      "Diseño o revisión de la estructura legal para compraventa, promesa, inversión, mandato, construcción o explotación del proyecto.",
      "Preparación de observaciones, plan de regularización y estrategia de cierre, negociación o defensa según el estado del asunto.",
      "Acompañamiento preventivo o contencioso ante conflictos asociados al desarrollo o ejecución del proyecto inmobiliario."
    ],
    benefits: [
      "Permite detectar riesgos antes de adquirir, vender, financiar o estructurar un proyecto.",
      "Ordena contratos, títulos y antecedentes para tomar decisiones de inversión con mayor respaldo.",
      "Reduce contingencias en operaciones inmobiliarias complejas y mejora la posición negociadora del cliente."
    ],
    faqs: [
      {
        question: "¿Cuándo conviene pedir asesoría legal en un desarrollo inmobiliario?",
        answer:
          "Conviene consultar antes de comprar un terreno, firmar una promesa, estructurar una inversión, iniciar una regularización o cerrar acuerdos con socios, mandantes, contratistas o compradores. La asesoría temprana permite detectar riesgos y ordenar la operación antes de comprometer recursos relevantes."
      },
      {
        question: "¿El due diligence inmobiliario incluye revisión de títulos?",
        answer:
          "Sí. El due diligence puede incluir revisión de títulos, inscripciones, certificados, gravámenes, prohibiciones, permisos, antecedentes contractuales y otros documentos que permitan evaluar la viabilidad legal de la operación."
      },
      {
        question: "¿Este servicio está dirigido solo a inmobiliarias?",
        answer:
          "No. También puede ser útil para inversionistas, empresas constructoras, propietarios, compradores o sociedades que necesitan estructurar, regularizar o resolver conflictos vinculados a activos y proyectos inmobiliarios."
      }
    ],
    metaDescription:
      "Abogado para desarrollo inmobiliario y estructuración de proyectos. Due diligence, compraventas, estudios de títulos, regularización y conflictos inmobiliarios."
  },
  {
    title: "Litigación civil y comercial",
    slug: "litigacion-civil-comercial",
    keyword: "abogado litigios civiles y comerciales",
    summary:
      "Defensa y estrategia legal en demandas civiles, conflictos comerciales e incumplimientos contractuales.",
    intro:
      "Los conflictos civiles y comerciales requieren una estrategia jurídica ordenada, basada en antecedentes, riesgos, costos y objetivos reales. La asesoría temprana permite evaluar si conviene negociar, preparar una defensa o iniciar acciones legales.",
    specializedHeading:
      "Asesoría legal especializada en litigios civiles y comerciales",
    cases: [
      "Demandas civiles o comerciales recibidas por personas o empresas.",
      "Incumplimiento de contratos, pagos u obligaciones.",
      "Conflictos con clientes, proveedores o socios comerciales.",
      "Cobros, indemnizaciones y responsabilidad civil.",
      "Preparación de una estrategia judicial o extrajudicial."
    ],
    approach: [
      "Análisis de documentos, hechos relevantes y riesgos procesales.",
      "Definición de una estrategia de defensa, negociación o acción judicial.",
      "Preparación de escritos, comunicaciones y antecedentes.",
      "Acompañamiento durante las etapas relevantes del conflicto."
    ],
    benefits: [
      "Permite actuar con método y evitar decisiones impulsivas.",
      "Ordena la prueba y los antecedentes desde el inicio.",
      "Facilita evaluar alternativas antes de judicializar."
    ],
    faqs: [
      {
        question: "¿Siempre es necesario demandar?",
        answer:
          "No. En muchos casos conviene evaluar negociación, acuerdos o medidas preparatorias antes de iniciar un juicio."
      },
      {
        question: "¿Qué documentos debo reunir para una evaluación?",
        answer:
          "Contratos, correos, comprobantes, facturas, cartas, demandas o cualquier antecedente que permita reconstruir los hechos."
      }
    ],
    metaDescription:
      "Abogado para litigios civiles y comerciales, demandas, incumplimientos de contrato y conflictos entre empresas o particulares."
  },
  {
    title: "Resolución de Controversias en Construcción y Contratación Pública",
    slug: "controversias-construccion-contratacion-publica",
    keyword: "abogado construcción contratación pública",
    summary:
      "Asesoría y litigación para constructoras y contratistas en conflictos derivados de contratos de obra pública y privada.",
    intro:
      "Asesoría y litigación para constructoras y contratistas en conflictos derivados de contratos de obra pública y privada. Defensa frente a incumplimientos del mandante, estados de pago impagos, aumentos de obra, atrasos, perjuicios y desequilibrios económicos del contrato.",
    specializedHeading:
      "Resolución de controversias en construcción, contratos de obra y contratación pública",
    cases: [
      "Conflictos derivados de contratos de obra pública o privada.",
      "Estados de pago impagos o diferencias en la liquidación del contrato.",
      "Aumentos de obra, obras extraordinarias o modificaciones no reconocidas.",
      "Atrasos, perjuicios y responsabilidades asociadas a la ejecución del proyecto.",
      "Desequilibrios económicos del contrato que afectan a constructoras o contratistas."
    ],
    approach: [
      "Revisión del contrato, bases, anexos, estados de pago, comunicaciones y antecedentes técnicos disponibles.",
      "Identificación de incumplimientos, riesgos probatorios y posibles vías de reclamación o defensa.",
      "Preparación de una estrategia legal orientada a negociación, reclamación administrativa, litigación o resolución de controversias.",
      "Acompañamiento jurídico para ordenar antecedentes y defender la posición de la constructora o contratista."
    ],
    benefits: [
      "Permite ordenar técnicamente los antecedentes antes de escalar el conflicto.",
      "Ayuda a evaluar incumplimientos, perjuicios y alternativas de reclamación.",
      "Entrega respaldo jurídico para negociar o litigar con una estrategia clara."
    ],
    faqs: [
      {
        question: "¿Qué tipo de conflictos de construcción puede revisar Cancino Abogados?",
        answer:
          "Puede revisar conflictos asociados a contratos de obra pública o privada, estados de pago impagos, aumentos de obra, atrasos, perjuicios e incumplimientos del mandante."
      },
      {
        question: "¿La asesoría está dirigida a constructoras y contratistas?",
        answer:
          "Sí. Este servicio está pensado para constructoras, contratistas y empresas que necesitan evaluar o defender su posición en controversias contractuales."
      },
      {
        question: "¿Es necesario iniciar un juicio de inmediato?",
        answer:
          "No necesariamente. Primero conviene revisar contrato, documentos, comunicaciones y antecedentes técnicos para definir si corresponde negociar, reclamar o preparar una estrategia litigiosa."
      }
    ],
    metaDescription:
      "Abogado construcción contratación pública. Asesoría y litigación para constructoras y contratistas en controversias de obra pública y privada."
  },
  {
    title: "Defensa laboral para empleadores",
    slug: "defensa-laboral-empleador",
    keyword: "abogado laboral para empleadores",
    summary:
      "Asesoría para empleadores en demandas laborales, despidos, finiquitos, cumplimiento y prevención de riesgos.",
    intro:
      "La gestión laboral de una empresa exige decisiones documentadas, cumplimiento normativo y una estrategia cuidadosa ante conflictos. Esta asesoría está enfocada en empleadores, pymes y empresas que necesitan prevenir riesgos o enfrentar reclamaciones laborales.",
    specializedHeading:
      "Abogado laboral para empleadores y empresas",
    cases: [
      "Defensa ante demandas laborales o reclamos de trabajadores.",
      "Revisión de despidos, cartas de término y causales.",
      "Finiquitos, anexos, contratos y documentación laboral.",
      "Prevención de riesgos laborales en la operación diaria.",
      "Orientación a empresas y empleadores antes de tomar decisiones sensibles."
    ],
    approach: [
      "Revisión de contratos, anexos, liquidaciones, comunicaciones y registros.",
      "Evaluación de riesgos laborales y alternativas de gestión.",
      "Preparación de documentación y estrategia de defensa.",
      "Asesoría preventiva para mejorar el orden laboral de la empresa."
    ],
    benefits: [
      "Disminuye riesgos derivados de despidos o documentación incompleta.",
      "Permite tomar decisiones laborales con respaldo jurídico.",
      "Ayuda a ordenar procesos internos y prevenir contingencias."
    ],
    faqs: [
      {
        question: "¿Esta asesoría está dirigida a trabajadores?",
        answer:
          "No principalmente. Esta página está enfocada en empleadores, empresas y pymes que necesitan orientación laboral preventiva o defensa."
      },
      {
        question: "¿Pueden revisar un despido antes de comunicarlo?",
        answer:
          "Sí. Es recomendable revisar antecedentes, causal, carta y documentación antes de tomar una decisión."
      }
    ],
    metaDescription:
      "Abogado laboral para empleadores. Defensa ante demandas laborales, despidos, finiquitos y prevención de riesgos para empresas."
  },
  {
    title: "Contratos estratégicos y negociación empresarial",
    slug: "contratos-estrategicos-negociacion-empresarial",
    keyword: "abogado contratos estratégicos negociación empresarial",
    summary:
      "Diseño, negociación y ejecución de contratos civiles y comerciales complejos, con foco en prevención de riesgos y protección patrimonial.",
    intro:
      "Los contratos estratégicos no solo documentan una operación: definen responsabilidades, reparten riesgos, protegen activos y sostienen la continuidad operacional de la empresa. Cancino Abogados asesora en el diseño, negociación y ejecución de contratos civiles y comerciales complejos, con una mirada preventiva, técnica y orientada a decisiones empresariales.",
    specializedHeading:
      "Asesoría legal en contratos estratégicos, negociación y ejecución contractual",
    cases: [
      "Empresas que deben negociar contratos relevantes con clientes, proveedores, socios, mandantes o contratistas.",
      "Operaciones civiles o comerciales que involucran obligaciones complejas, hitos de cumplimiento, pagos diferidos o garantías.",
      "Contratos que pueden afectar continuidad operacional, responsabilidad patrimonial, flujo de caja o relaciones comerciales críticas.",
      "Negociaciones donde se requiere definir cláusulas de incumplimiento, terminación, multas, indemnidades, confidencialidad o solución de controversias.",
      "Ejecución de contratos en curso con diferencias interpretativas, incumplimientos, atrasos, pagos pendientes o necesidad de renegociación."
    ],
    approach: [
      "Levantamiento de la operación, objetivos comerciales, partes involucradas, riesgos y puntos no negociables.",
      "Diseño o revisión de la estructura contractual, obligaciones principales, garantías, plazos, responsabilidades y mecanismos de salida.",
      "Preparación de observaciones, contrapropuestas y cláusulas orientadas a prevenir conflictos o reducir exposición patrimonial.",
      "Acompañamiento en la negociación para alinear el contrato con la realidad operacional y financiera del negocio.",
      "Apoyo durante la ejecución contractual cuando surgen incumplimientos, controversias, ajustes o renegociaciones."
    ],
    benefits: [
      "Permite negociar desde una posición informada antes de asumir obligaciones relevantes.",
      "Reduce riesgos derivados de cláusulas ambiguas, garantías insuficientes o responsabilidades mal distribuidas.",
      "Protege patrimonio, continuidad operacional y relaciones comerciales estratégicas."
    ],
    faqs: [
      {
        question: "¿Qué se entiende por contrato estratégico?",
        answer:
          "Es un contrato que puede impactar de forma relevante en la operación, patrimonio, ingresos, responsabilidades o relaciones comerciales de una empresa. Por eso requiere revisar no solo el texto, sino también los riesgos del negocio y la forma en que se ejecutará."
      },
      {
        question: "¿Pueden acompañar la negociación y no solo revisar el documento?",
        answer:
          "Sí. La asesoría puede incluir preparación de observaciones, contrapropuestas, cláusulas alternativas y acompañamiento estratégico durante la negociación con la contraparte."
      },
      {
        question: "¿También asesoran contratos que ya están en ejecución?",
        answer:
          "Sí. Cuando un contrato ya se está ejecutando, es posible revisar obligaciones, incumplimientos, comunicaciones, pagos, garantías y alternativas de renegociación o defensa."
      }
    ],
    metaDescription:
      "Abogado en contratos estratégicos y negociación empresarial. Diseño, negociación y ejecución de contratos civiles y comerciales complejos."
  },
  {
    title: "Asesoría legal de empresa",
    slug: "asesoria-legal-empresas",
    keyword: "asesoría legal para empresas",
    summary:
      "Asesoría legal permanente o puntual para empresas, pymes, empleadores y negocios familiares.",
    intro:
      "Las empresas enfrentan riesgos legales en contratos, trabajadores, proveedores, socios y decisiones operativas. Una asesoría legal estratégica ayuda a ordenar documentos, prevenir contingencias y tomar decisiones con mejor información.",
    specializedHeading:
      "Asesoría legal especializada para empresas, pymes y empleadores",
    cases: [
      "Empresas que necesitan apoyo legal permanente o por proyecto.",
      "Revisión de contratos con clientes, proveedores o trabajadores.",
      "Conflictos entre socios, proveedores o terceros.",
      "Prevención de riesgos legales en la operación diaria.",
      "Ordenamiento de poderes, documentos y relaciones comerciales."
    ],
    approach: [
      "Diagnóstico de necesidades legales y documentación existente.",
      "Priorización de riesgos y medidas preventivas.",
      "Redacción o revisión de documentos relevantes.",
      "Acompañamiento en decisiones comerciales o laborales sensibles."
    ],
    benefits: [
      "Permite anticipar problemas antes de que se transformen en conflictos.",
      "Ordena contratos y documentos clave de la empresa.",
      "Entrega respaldo jurídico para decisiones de administración."
    ],
    faqs: [
      {
        question: "¿La asesoría puede ser permanente?",
        answer:
          "Sí. Puede estructurarse como apoyo recurrente o como asesoría puntual según las necesidades de la empresa."
      },
      {
        question: "¿Trabajan con pymes y empresas familiares?",
        answer:
          "Sí. La asesoría está pensada para empresas de distintos tamaños, especialmente cuando necesitan orden y prevención."
      }
    ],
    metaDescription:
      "Asesoría legal para empresas, pymes y empleadores. Contratos, trabajadores, socios, proveedores y prevención de riesgos legales."
  },
  {
    title: "Gobierno corporativo y estructuras societarias",
    slug: "gobierno-corporativo-estructuras-societarias",
    keyword: "abogado gobierno corporativo estructuras societarias",
    summary:
      "Asesoría en constitución, reorganización y operación de sociedades, juntas de accionistas, directorios, pactos corporativos y empresas familiares.",
    intro:
      "El gobierno corporativo permite ordenar cómo se administra una sociedad, cómo se toman decisiones relevantes, cómo se relacionan socios o accionistas y qué reglas protegen la continuidad del negocio. Cancino Abogados asesora a empresas familiares, sociedades de capital, inversionistas y administradores en la constitución, reorganización y operación societaria con enfoque preventivo y estratégico.",
    specializedHeading:
      "Asesoría legal en gobierno corporativo, reorganización y estructuras societarias",
    cases: [
      "Empresas que necesitan constituir o reorganizar sociedades para ordenar su operación.",
      "Sociedades que requieren preparar juntas de accionistas, sesiones de directorio o acuerdos de administración.",
      "Empresas familiares que necesitan reglas claras para continuidad, sucesión, ingreso o salida de socios.",
      "Inversionistas o socios que requieren pactos corporativos, modificaciones estatutarias o estructuras de control.",
      "Compañías con documentos societarios desactualizados, poderes insuficientes o decisiones que deben formalizarse correctamente."
    ],
    approach: [
      "Diagnóstico de la estructura actual, estatutos, poderes, administración, socios y necesidades de gobierno corporativo.",
      "Diseño o revisión de sociedades, pactos, actas, juntas, sesiones de directorio y documentos de reorganización.",
      "Identificación de riesgos en toma de decisiones, representación, mayorías, conflictos entre socios y continuidad empresarial.",
      "Preparación de modificaciones societarias, acuerdos internos y documentación necesaria para respaldar decisiones relevantes.",
      "Acompañamiento en la implementación legal de la estructura definida y en la operación societaria recurrente."
    ],
    benefits: [
      "Ordena reglas de administración, representación y toma de decisiones dentro de la empresa.",
      "Reduce riesgos de conflictos entre socios, accionistas, directores o administradores.",
      "Entrega una estructura jurídica más clara para crecimiento, inversión, sucesión o reorganización empresarial."
    ],
    faqs: [
      {
        question: "¿Qué incluye una asesoría en gobierno corporativo?",
        answer:
          "Puede incluir revisión de estatutos, poderes, pactos corporativos, actas, juntas de accionistas, sesiones de directorio, reglas de administración y documentación necesaria para ordenar la operación de la sociedad."
      },
      {
        question: "¿Este servicio sirve para empresas familiares?",
        answer:
          "Sí. Las empresas familiares suelen requerir reglas claras sobre administración, continuidad, ingreso o salida de familiares, sucesión y mecanismos para prevenir conflictos internos."
      },
      {
        question: "¿Pueden apoyar una reorganización societaria?",
        answer:
          "Sí. La asesoría puede considerar diagnóstico, diseño de estructura, modificaciones societarias, pactos, poderes y documentos necesarios para implementar una reorganización de forma ordenada."
      }
    ],
    metaDescription:
      "Abogado en gobierno corporativo y estructuras societarias. Constitución, reorganización, juntas de accionistas, directorios, pactos y empresas familiares."
  },
  {
    title: "Compliance corporativo",
    slug: "compliance-corporativo",
    keyword: "compliance corporativo abogado",
    summary:
      "Asesoría en cumplimiento corporativo, políticas internas, protocolos y prevención de riesgos legales.",
    intro:
      "El compliance corporativo ayuda a las empresas a prevenir riesgos legales, ordenar procesos internos y establecer reglas claras para la toma de decisiones. Es especialmente relevante para compañías que buscan profesionalizar su gestión.",
    specializedHeading:
      "Compliance corporativo y prevención de riesgos legales",
    cases: [
      "Empresas que necesitan políticas o protocolos internos.",
      "Directorios o administradores que buscan ordenar responsabilidades.",
      "Prevención de riesgos legales en operaciones y relaciones comerciales.",
      "Revisión de procesos internos y documentación corporativa.",
      "Gestión de cumplimiento para pymes en crecimiento."
    ],
    approach: [
      "Diagnóstico de riesgos legales y necesidades de cumplimiento.",
      "Revisión de documentos, contratos y prácticas internas.",
      "Propuesta de políticas, protocolos o medidas de control.",
      "Acompañamiento en implementación y revisión periódica."
    ],
    benefits: [
      "Mejora el orden interno y la trazabilidad de decisiones.",
      "Reduce exposición a contingencias legales y reputacionales.",
      "Fortalece la gestión corporativa de la empresa."
    ],
    faqs: [
      {
        question: "¿El compliance es solo para grandes empresas?",
        answer:
          "No. Las pymes también pueden implementar medidas proporcionales para prevenir riesgos y ordenar su gestión."
      },
      {
        question: "¿Qué incluye una asesoría de compliance?",
        answer:
          "Puede incluir diagnóstico, revisión documental, políticas internas, protocolos y recomendaciones de implementación."
      }
    ],
    metaDescription:
      "Compliance corporativo para empresas. Prevención de riesgos legales, políticas internas, protocolos y gestión de cumplimiento."
  },
  {
    title: "Negociación y resolución de conflictos",
    slug: "negociacion-resolucion-conflictos",
    keyword: "abogado resolución de conflictos",
    summary:
      "Estrategia legal para negociar acuerdos, resolver conflictos civiles, comerciales o societarios y preparar escenarios judiciales.",
    intro:
      "No todo conflicto debe terminar en juicio. Una negociación bien preparada puede proteger intereses, reducir costos y preservar relaciones cuando existe espacio para acuerdo. Cuando el conflicto escala, la preparación jurídica sigue siendo clave.",
    specializedHeading:
      "Abogado para negociación y resolución de conflictos",
    cases: [
      "Conflictos civiles o comerciales con posibilidad de acuerdo.",
      "Problemas entre socios, proveedores, clientes o terceros.",
      "Preparación de acuerdos, transacciones o comunicaciones formales.",
      "Negociaciones previas a una demanda o defensa judicial.",
      "Evaluación de escenarios antes de judicializar."
    ],
    approach: [
      "Análisis de posición legal, riesgos y objetivos reales.",
      "Preparación de estrategia de negociación y documentación.",
      "Redacción o revisión de acuerdos y transacciones.",
      "Definición de pasos si la negociación no prospera."
    ],
    benefits: [
      "Ayuda a resolver conflictos con mayor control de costos y tiempos.",
      "Permite negociar desde una posición informada.",
      "Prepara mejor el caso si luego es necesario iniciar un juicio."
    ],
    faqs: [
      {
        question: "¿Negociar significa renunciar a mis derechos?",
        answer:
          "No necesariamente. La negociación busca evaluar alternativas, riesgos y beneficios para tomar una decisión informada."
      },
      {
        question: "¿Pueden redactar un acuerdo o transacción?",
        answer:
          "Sí. Es importante que todo acuerdo relevante quede documentado con claridad y resguarde los intereses de las partes."
      }
    ],
    metaDescription:
      "Abogado para negociación y resolución de conflictos civiles, comerciales y societarios. Acuerdos, transacciones y estrategia legal."
  }
].sort((a, b) => {
  const aIndex = servicePriority.indexOf(a.slug);
  const bIndex = servicePriority.indexOf(b.slug);

  if (aIndex === -1 && bIndex === -1) return 0;
  if (aIndex === -1) return 1;
  if (bIndex === -1) return -1;

  return aIndex - bIndex;
});

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
