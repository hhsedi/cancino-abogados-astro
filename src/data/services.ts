export type ServiceSection = {
  heading: string;
  body?: string[];
  items?: string[];
};

export type Service = {
  title: string;
  slug: string;
  aliases?: string[];
  keyword: string;
  titleTag: string;
  h1: string;
  summary: string;
  intro: string;
  coverage?: string;
  specializedHeading: string;
  casesHeading?: string;
  cases: string[];
  approachHeading?: string;
  approach: string[];
  benefits: string[];
  sections: ServiceSection[];
  faqs: { question: string; answer: string }[];
  metaDescription: string;
};

const servicePriority = [
  "resolucion-controversias-construccion-contratacion-publica",
  "asesoria-legal-empresa",
  "litigacion-civil-comercial",
  "defensa-laboral-empleador",
  "desarrollo-inmobiliario-estructuracion-proyectos",
  "gobierno-corporativo-estructuras-societarias",
  "contratos-estrategicos-negociacion-empresarial",
  "negociacion-resolucion-conflictos",
  "compliance-corporativo"
];

export const services: Service[] = [
  {
    title: "Resolución de controversias en construcción y contratación pública",
    slug: "resolucion-controversias-construccion-contratacion-publica",
    aliases: ["controversias-construccion-contratacion-publica"],
    keyword: "abogado contrato construcción chile",
    titleTag: "Abogado en construcción y contratación pública | Cancino Abogados",
    h1: "Abogado en controversias de construcción y contratación pública",
    summary:
      "Asesoría para constructoras, mandantes, subcontratistas y proveedores en disputas técnicas, contractuales y de contratación pública.",
    intro:
      "Los contratos de construcción y los procesos de contratación pública generan disputas técnicas y jurídicas de alta complejidad: plazos incumplidos, aumentos de obra, vicios constructivos, resoluciones de contrato, multas y reclamaciones administrativas.",
    coverage:
      "Atendemos casos de construcción y contratación pública en Viña del Mar, Santiago, Quillota, San Felipe y otras ciudades de Chile, según la naturaleza del conflicto y la sede correspondiente.",
    specializedHeading: "Conflictos en construcción: soluciones jurídicas especializadas",
    casesHeading: "Áreas de actuación",
    cases: [
      "Disputas por incumplimiento de contratos de construcción",
      "Reclamaciones por aumentos de obra y modificaciones de contrato",
      "Vicios constructivos y responsabilidad del contratista",
      "Resolución anticipada de contratos",
      "Contratación pública: licitaciones, impugnaciones y reclamaciones ante la Contraloría",
      "Arbitrajes de construcción",
      "Cobros de retenciones de garantía",
      "Asesoría preventiva en estructuración de contratos de construcción"
    ],
    approachHeading: "Cómo abordamos controversias de construcción",
    approach: [
      "Revisión del contrato, bases, anexos, estados de pago, comunicaciones y antecedentes técnicos.",
      "Identificación de incumplimientos, riesgos probatorios y vías de reclamación o defensa.",
      "Preparación de estrategia judicial, arbitral, administrativa o negociada según el caso.",
      "Ordenamiento de antecedentes técnicos y jurídicos para defender la posición del cliente."
    ],
    benefits: [
      "Permite ordenar técnicamente los antecedentes antes de escalar el conflicto.",
      "Ayuda a evaluar incumplimientos, perjuicios y alternativas de reclamación.",
      "Entrega respaldo jurídico para negociar o litigar con una estrategia clara."
    ],
    sections: [
      {
        heading: "Conflictos en construcción: soluciones jurídicas especializadas",
        body: [
          "Cancino Abogados asesora a constructoras, mandantes, subcontratistas y proveedores en la prevención y resolución de estos conflictos, tanto en sede judicial como arbitral.",
          "Atendemos casos de construcción y contratación pública en Viña del Mar, Santiago, Quillota, San Felipe y otras ciudades de Chile, según la naturaleza del conflicto y la sede correspondiente."
        ]
      },
      {
        heading: "Áreas de actuación",
        items: [
          "Disputas por incumplimiento de contratos de construcción",
          "Reclamaciones por aumentos de obra y modificaciones de contrato",
          "Vicios constructivos y responsabilidad del contratista",
          "Resolución anticipada de contratos",
          "Contratación pública: licitaciones, impugnaciones y reclamaciones ante la Contraloría",
          "Arbitrajes de construcción",
          "Cobros de retenciones de garantía",
          "Asesoría preventiva en estructuración de contratos de construcción"
        ]
      }
    ],
    faqs: [
      {
        question: "¿Qué hago si la constructora no cumplió el plazo de entrega?",
        answer:
          "El incumplimiento de plazo puede dar lugar a cobro de multas pactadas, resolución del contrato y demanda de perjuicios. La estrategia depende de lo que estipule el contrato. Te asesoramos en el análisis de opciones y en la notificación formal al contratista."
      },
      {
        question: "¿Puedo impugnar una licitación pública adjudicada irregularmente?",
        answer:
          "Sí. Existen mecanismos de impugnación ante el propio organismo licitante y ante la Contraloría General de la República. Los plazos son estrictos, por lo que es importante actuar rápido al detectar una irregularidad en el proceso."
      },
      {
        question: "¿Cuándo conviene ir a arbitraje en lugar de ir a tribunales?",
        answer:
          "El arbitraje puede ser más eficiente cuando el contrato lo establece como vía obligatoria, cuando se requiere un árbitro con conocimientos técnicos en construcción, o cuando se busca confidencialidad en el proceso. Te asesoramos en la elección de la vía más conveniente según cada caso."
      }
    ],
    metaDescription:
      "Resolución de controversias en contratos de construcción y contratación pública en Chile. Reclamaciones, disputas técnicas y arbitrajes. Viña del Mar y Santiago."
  },
  {
    title: "Asesoría legal de empresa",
    slug: "asesoria-legal-empresa",
    aliases: ["asesoria-legal-empresas"],
    keyword: "asesoría legal empresas viña del mar",
    titleTag: "Asesoría legal para empresas en Viña del Mar | Cancino Abogados",
    h1: "Asesoría legal para empresas en Viña del Mar",
    summary:
      "Abogado externo para PYMES y empresas: prevención de riesgos, soporte legal continuo y decisiones empresariales con respaldo.",
    intro:
      "Las empresas que no cuentan con un abogado de cabecera suelen enfrentar los problemas legales cuando ya es tarde: contratos mal redactados, despidos sin respaldo, operaciones sin cobertura jurídica. Con Cancino Abogados tienes acceso a asesoría legal de calidad sin los costos de un abogado interno.",
    coverage:
      "Trabajamos como abogado externo para PYMES y empresas en Viña del Mar, Santiago, Quillota y San Felipe, con planes adaptados al tamaño y necesidades de cada negocio.",
    specializedHeading: "Tu abogado externo en Viña del Mar",
    casesHeading: "¿Qué incluye la asesoría legal para empresas?",
    cases: [
      "Consultas ilimitadas o acotadas según el plan acordado",
      "Revisión y redacción de contratos comerciales",
      "Asesoría en decisiones empresariales con impacto legal",
      "Gestión de conflictos con clientes, proveedores o trabajadores",
      "Prevención de riesgos legales y compliance básico",
      "Representación en negociaciones y mediaciones",
      "Atención de urgencias y contingencias legales"
    ],
    approachHeading: "Cómo se estructura el apoyo legal",
    approach: [
      "Diagnóstico de necesidades legales y documentación existente.",
      "Priorización de riesgos y medidas preventivas.",
      "Acompañamiento en decisiones comerciales, laborales o contractuales sensibles.",
      "Soporte legal recurrente o por proyecto según el tamaño de la empresa."
    ],
    benefits: [
      "Permite anticipar problemas antes de que se transformen en conflictos.",
      "Ordena contratos y documentos clave de la empresa.",
      "Entrega respaldo jurídico para decisiones de administración."
    ],
    sections: [
      {
        heading: "Tu abogado externo en Viña del Mar",
        body: [
          "Trabajamos como abogado externo para PYMES y empresas en Viña del Mar, Santiago, Quillota y San Felipe, con planes adaptados al tamaño y necesidades de cada negocio."
        ]
      },
      {
        heading: "¿Qué incluye la asesoría legal para empresas?",
        items: [
          "Consultas ilimitadas o acotadas según el plan acordado",
          "Revisión y redacción de contratos comerciales",
          "Asesoría en decisiones empresariales con impacto legal",
          "Gestión de conflictos con clientes, proveedores o trabajadores",
          "Prevención de riesgos legales y compliance básico",
          "Representación en negociaciones y mediaciones",
          "Atención de urgencias y contingencias legales"
        ]
      }
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta tener un abogado externo para mi empresa?",
        answer:
          "Los honorarios se acuerdan según el tipo y volumen de asesoría requerida. Existen modalidades de pago mensual fijo o por hora. En muchos casos, el costo de la asesoría preventiva es una fracción del costo de resolver un conflicto sin preparación."
      },
      {
        question: "¿Es útil para PYMES pequeñas tener un abogado externo?",
        answer:
          "Absolutamente. Las PYMES son las más expuestas a riesgos legales en contratos, relaciones laborales y operaciones inmobiliarias. Un abogado externo permite prevenir problemas antes de que ocurran, sin el costo de un empleado de tiempo completo."
      },
      {
        question: "¿Pueden atender urgencias fuera del horario habitual?",
        answer:
          "En situaciones de contingencia legal, coordinamos atención prioritaria. La disponibilidad exacta se acuerda al inicio de la relación de asesoría."
      }
    ],
    metaDescription:
      "Abogado externo para empresas y PYMES en Viña del Mar. Asesoría jurídica permanente, prevención de riesgos y soporte legal continuo para tu negocio."
  },
  {
    title: "Litigación civil y comercial",
    slug: "litigacion-civil-comercial",
    keyword: "abogado litigante viña del mar",
    titleTag: "Abogado litigante civil y comercial en Viña del Mar | Cancino Abogados",
    h1: "Abogado litigante civil y comercial en Viña del Mar",
    summary:
      "Defensa efectiva en juicios civiles, comerciales, cobros, incumplimientos contractuales y conflictos patrimoniales.",
    intro:
      "Cuando un conflicto no puede resolverse por la vía negociada, contar con un abogado litigante experimentado marca la diferencia entre ganar o perder un juicio. En Cancino Abogados diseñamos estrategias de litigación orientadas al resultado, con preparación técnica rigurosa en cada etapa del proceso.",
    coverage:
      "Representamos a empresas, PYMES y personas naturales en tribunales civiles y de comercio de la Región de Valparaíso y Santiago. Este servicio está disponible para clientes en Viña del Mar, Santiago, Quillota, San Felipe y otras ciudades mediante atención presencial o virtual según el caso.",
    specializedHeading: "Representación efectiva en juicios civiles y comerciales",
    casesHeading: "¿En qué casos puedo ayudarte?",
    cases: [
      "Demandas por incumplimiento de contrato",
      "Cobros judiciales y gestión de cartera morosa",
      "Conflictos entre socios y disputas societarias",
      "Daños y perjuicios en materia civil",
      "Acciones posesorias y disputas de dominio",
      "Litigios derivados de contratos de construcción",
      "Nulidades y resoluciones contractuales"
    ],
    approachHeading: "Proceso de trabajo",
    approach: [
      "Evaluación del caso: análisis de antecedentes y viabilidad de la acción",
      "Estrategia jurídica: definición del camino procesal más eficiente",
      "Preparación: redacción de demanda o contestación con argumentación técnica sólida",
      "Litigación: representación activa en audiencias y etapas procesales",
      "Resultado: seguimiento hasta sentencia firme y ejecución si corresponde"
    ],
    benefits: [
      "Permite actuar con método y evitar decisiones impulsivas.",
      "Ordena la prueba y los antecedentes desde el inicio.",
      "Facilita evaluar alternativas antes de judicializar."
    ],
    sections: [
      {
        heading: "Representación efectiva en juicios civiles y comerciales",
        body: [
          "Representamos a empresas, PYMES y personas naturales en tribunales civiles y de comercio de la Región de Valparaíso y Santiago.",
          "Este servicio está disponible para clientes en Viña del Mar, Santiago, Quillota, San Felipe y otras ciudades mediante atención presencial o virtual según el caso."
        ]
      },
      {
        heading: "¿En qué casos puedo ayudarte?",
        items: [
          "Demandas por incumplimiento de contrato",
          "Cobros judiciales y gestión de cartera morosa",
          "Conflictos entre socios y disputas societarias",
          "Daños y perjuicios en materia civil",
          "Acciones posesorias y disputas de dominio",
          "Litigios derivados de contratos de construcción",
          "Nulidades y resoluciones contractuales"
        ]
      },
      {
        heading: "Proceso de trabajo",
        items: [
          "Evaluación del caso: análisis de antecedentes y viabilidad de la acción",
          "Estrategia jurídica: definición del camino procesal más eficiente",
          "Preparación: redacción de demanda o contestación con argumentación técnica sólida",
          "Litigación: representación activa en audiencias y etapas procesales",
          "Resultado: seguimiento hasta sentencia firme y ejecución si corresponde"
        ]
      }
    ],
    faqs: [
      {
        question: "¿Cuánto tiempo dura un juicio civil en Chile?",
        answer:
          "Depende del tipo de procedimiento. Un juicio ordinario puede durar entre 1 y 3 años. Los procedimientos sumarios y las gestiones preparatorias de vía ejecutiva son más rápidos, con plazos de 3 a 12 meses en promedio. En cada caso evaluamos la vía más eficiente."
      },
      {
        question: "¿Puedo cobrar judicialmente una deuda sin contrato escrito?",
        answer:
          "Sí, es posible en muchos casos. Chile reconoce los contratos verbales y otros medios de prueba como correos electrónicos, mensajes y testigos. La viabilidad depende de los antecedentes disponibles. Te recomendamos consultar antes de descartar la acción judicial."
      },
      {
        question: "¿Qué pasa si pierdo el juicio?",
        answer:
          "Si el tribunal falla en tu contra, existen recursos procesales para impugnar la sentencia. También es posible que seas condenado en costas. Por eso es fundamental evaluar bien el caso antes de litigar y contar con una estrategia sólida desde el inicio."
      },
      {
        question: "¿Pueden representarme en Santiago si tienen oficina en Viña del Mar?",
        answer:
          "Sí. Cancino Abogados litiga en tribunales de la Región de Valparaíso y en Santiago. La distancia no es un obstáculo para una representación efectiva."
      }
    ],
    metaDescription:
      "Representación y defensa en juicios civiles y comerciales en Viña del Mar y la Región de Valparaíso. Más de 10 años de experiencia litigando en tribunales."
  },
  {
    title: "Defensa laboral para empleadores",
    slug: "defensa-laboral-empleador",
    keyword: "abogado laboral empleadores viña del mar",
    titleTag: "Abogado laboral para empleadores en Viña del Mar | Cancino Abogados",
    h1: "Abogado laboral para empleadores en Viña del Mar",
    summary:
      "Defensa laboral para empresas frente a demandas, tutelas de derechos fundamentales, despidos y fiscalizaciones.",
    intro:
      "Una demanda laboral puede poner en riesgo la operación y la reputación de cualquier empresa, independientemente de su tamaño. En Cancino Abogados defendemos a empleadores en procedimientos laborales con estrategia técnica sólida y respuesta rápida desde el primer requerimiento.",
    coverage:
      "Asesoramos a empresas de todos los sectores en Viña del Mar, Santiago, Quillota y San Felipe.",
    specializedHeading: "Protegemos a tu empresa en conflictos laborales",
    casesHeading: "¿En qué situaciones te podemos ayudar?",
    cases: [
      "Demandas por despido injustificado",
      "Acciones de tutela de derechos fundamentales",
      "Cobro de prestaciones: horas extra, feriados, gratificaciones",
      "Fiscalizaciones de la Inspección del Trabajo",
      "Negociación de finiquitos y acuerdos extrajudiciales",
      "Asesoría preventiva en gestión de contratos y reglamentos internos",
      "Procedimientos de despido: validación jurídica y minimización de riesgos",
      "Defensa en procedimientos monitorio y de aplicación general"
    ],
    approachHeading: "Cómo se prepara la defensa laboral",
    approach: [
      "Revisión inmediata de demanda, citación, carta de despido y antecedentes laborales.",
      "Evaluación de riesgos, prueba disponible y alternativas de acuerdo o defensa.",
      "Preparación de contestación, documentos y estrategia para audiencia.",
      "Acompañamiento preventivo para reducir contingencias futuras."
    ],
    benefits: [
      "Disminuye riesgos derivados de despidos o documentación incompleta.",
      "Permite tomar decisiones laborales con respaldo jurídico.",
      "Ayuda a ordenar procesos internos y prevenir contingencias."
    ],
    sections: [
      {
        heading: "Protegemos a tu empresa en conflictos laborales",
        body: [
          "Asesoramos a empresas de todos los sectores en Viña del Mar, Santiago, Quillota y San Felipe."
        ]
      },
      {
        heading: "¿En qué situaciones te podemos ayudar?",
        items: [
          "Demandas por despido injustificado",
          "Acciones de tutela de derechos fundamentales",
          "Cobro de prestaciones: horas extra, feriados, gratificaciones",
          "Fiscalizaciones de la Inspección del Trabajo",
          "Negociación de finiquitos y acuerdos extrajudiciales",
          "Asesoría preventiva en gestión de contratos y reglamentos internos",
          "Procedimientos de despido: validación jurídica y minimización de riesgos",
          "Defensa en procedimientos monitorio y de aplicación general"
        ]
      }
    ],
    faqs: [
      {
        question: "¿Qué debo hacer si recibo una demanda laboral?",
        answer:
          "Lo primero es no ignorarla. Tienes plazos procesales estrictos para contestar y ofrecer prueba. Contacta a un abogado laboral inmediatamente al recibir la notificación. Entre más pronto actúes, más opciones estratégicas tendrás disponibles."
      },
      {
        question: "¿Puedo despedir a un trabajador por bajo rendimiento?",
        answer:
          "El despido por necesidades de la empresa o incumplimiento del contrato requiere cumplir requisitos específicos del Código del Trabajo. Un despido mal gestionado puede resultar en condena al pago de indemnizaciones y recargos. Te asesoramos antes de ejecutar el despido para reducir el riesgo legal."
      },
      {
        question: "¿Qué es una tutela laboral y qué riesgos implica para la empresa?",
        answer:
          "La tutela laboral es una acción que protege derechos fundamentales del trabajador. Si el tribunal la acoge, la empresa puede ser condenada a indemnizaciones relevantes más recargos. La defensa técnica especializada es fundamental en este tipo de procedimientos."
      },
      {
        question: "¿Vale la pena llegar a acuerdo antes del juicio?",
        answer:
          "Depende del caso. En muchas situaciones, un acuerdo bien negociado reduce costos, tiempos y riesgos para la empresa. En otras, la defensa en juicio es la opción correcta. Evaluamos cada caso antes de recomendar una estrategia."
      }
    ],
    metaDescription:
      "Defensa laboral para empleadores en Viña del Mar. Demandas, tutela de derechos fundamentales, despidos y fiscalizaciones. Protegemos a tu empresa en el Juzgado del Trabajo."
  },
  {
    title: "Derecho inmobiliario y estructuración de proyectos",
    slug: "desarrollo-inmobiliario-estructuracion-proyectos",
    keyword: "abogado inmobiliario viña del mar",
    titleTag: "Abogado inmobiliario en Viña del Mar | Cancino Abogados",
    h1: "Abogado inmobiliario en Viña del Mar",
    summary:
      "Asesoría a inmobiliarias, desarrolladores y empresas constructoras en adquisición, estructuración y ejecución de proyectos.",
    intro:
      "Cancino Abogados asesora a inmobiliarias, desarrolladores y empresas constructoras en la adquisición, estructuración y ejecución de proyectos inmobiliarios. El foco está en ordenar antecedentes, anticipar riesgos y dar soporte jurídico a decisiones de alto impacto económico.",
    coverage:
      "Atendemos a inmobiliarias, desarrolladores, inversionistas y empresas constructoras en Viña del Mar, Santiago, Quillota, San Felipe y la Región de Valparaíso, con apoyo presencial o remoto según la naturaleza del proyecto.",
    specializedHeading: "Seguridad jurídica para estructurar y ejecutar proyectos inmobiliarios",
    casesHeading: "Servicios inmobiliarios",
    cases: [
      "Adquisición de terrenos, inmuebles o activos para proyectos inmobiliarios",
      "Estructuración legal de proyectos para inmobiliarias, desarrolladores y constructoras",
      "Estudio de títulos: análisis de dominio, hipotecas, gravámenes y prohibiciones",
      "Redacción de contratos de compraventa y promesas",
      "Contratos de arriendo residencial y comercial",
      "Regularización de propiedades y saneamiento de títulos",
      "Subdivisiones y loteos",
      "Negociación y resolución de conflictos vinculados a la ejecución de proyectos"
    ],
    approachHeading: "Cómo se estructura jurídicamente un proyecto inmobiliario",
    approach: [
      "Levantamiento de antecedentes del proyecto, inmueble, partes, permisos y documentos disponibles.",
      "Revisión de títulos, certificados, contratos, gravámenes, prohibiciones y riesgos relevantes.",
      "Preparación de observaciones, cláusulas, contratos o estructura jurídica para la ejecución del proyecto.",
      "Acompañamiento hasta la adquisición, cierre, ejecución o resolución del conflicto."
    ],
    benefits: [
      "Reduce riesgos antes de adquirir, estructurar o ejecutar un proyecto.",
      "Ordena títulos, contratos y antecedentes para tomar decisiones con respaldo.",
      "Permite anticipar problemas registrales, contractuales, societarios o patrimoniales."
    ],
    sections: [
      {
        heading: "Seguridad jurídica para estructurar y ejecutar proyectos inmobiliarios",
        body: [
          "Asesoría a inmobiliarias, desarrolladores y empresas constructoras en adquisición, estructuración y ejecución de proyectos.",
          "El servicio está disponible para clientes en Viña del Mar, Santiago, Quillota, San Felipe y la Región de Valparaíso, con revisión documental, coordinación de antecedentes y acompañamiento jurídico según la etapa del proyecto."
        ]
      },
      {
        heading: "Servicios inmobiliarios",
        items: [
          "Adquisición de terrenos, inmuebles o activos para proyectos inmobiliarios",
          "Estructuración legal de proyectos para inmobiliarias, desarrolladores y constructoras",
          "Estudio de títulos: análisis de dominio, hipotecas, gravámenes y prohibiciones",
          "Redacción de contratos de compraventa y promesas",
          "Contratos de arriendo residencial y comercial",
          "Regularización de propiedades y saneamiento de títulos",
          "Subdivisiones y loteos",
          "Negociación y resolución de conflictos vinculados a la ejecución de proyectos"
        ]
      }
    ],
    faqs: [
      {
        question: "¿Qué es un estudio de títulos y por qué es importante?",
        answer:
          "Un estudio de títulos es el análisis jurídico del historial de dominio de una propiedad. Permite verificar que quien vende es el verdadero dueño y que no existen hipotecas ocultas, prohibiciones, servidumbres o problemas legales que puedan afectar la transacción."
      },
      {
        question: "¿Puedo comprar una propiedad sin abogado en Chile?",
        answer:
          "Legalmente sí, pero no es recomendable. Sin asesoría jurídica, el comprador asume el riesgo de adquirir propiedades con deudas, gravámenes ocultos o problemas de dominio que pueden costar mucho más resolver que el costo de la asesoría preventiva."
      },
      {
        question: "¿Qué diferencia hay entre una promesa de compraventa y la escritura definitiva?",
        answer:
          "La promesa es un contrato que obliga a ambas partes a celebrar la compraventa en un plazo determinado, bajo ciertas condiciones. La escritura definitiva transfiere el dominio real de la propiedad y debe inscribirse en el Conservador de Bienes Raíces."
      },
      {
        question: "¿Atienden proyectos inmobiliarios en San Felipe y la Región de Valparaíso?",
        answer:
          "Sí. Asesoramos proyectos inmobiliarios en San Felipe, Quillota, Viña del Mar y la Región de Valparaíso, incluyendo adquisición, estructuración y ejecución de proyectos para inmobiliarias, desarrolladores y empresas constructoras."
      }
    ],
    metaDescription:
      "Asesoría a inmobiliarias, desarrolladores y empresas constructoras en adquisición, estructuración y ejecución de proyectos inmobiliarios."
  },
  {
    title: "Gobierno corporativo y estructuras societarias",
    slug: "gobierno-corporativo-estructuras-societarias",
    keyword: "gobierno corporativo empresa chile",
    titleTag: "Gobierno corporativo y estructuración societaria | Cancino Abogados",
    h1: "Abogado gobierno corporativo Chile",
    summary:
      "Constitución, reorganización y operación de sociedades, pactos de accionistas, juntas, directorios y estructuras empresariales.",
    intro:
      "La forma jurídica de tu empresa no es un trámite administrativo: define cómo proteges tu patrimonio personal, cómo distribuyes utilidades, cómo tomas decisiones y cómo escalas el negocio. Una estructura mal diseñada puede costar caro cuando el negocio crece.",
    coverage:
      "Atendemos a empresas y socios en Viña del Mar, Santiago, Quillota, San Felipe y otras ciudades mediante asesoría presencial o virtual.",
    specializedHeading: "Estructuras societarias que protegen tu negocio",
    casesHeading: "Servicios de gobierno corporativo",
    cases: [
      "Constitución de SpA, SRL, SA y otros tipos societarios",
      "Modificación de estatutos y adecuación a nuevas realidades",
      "Aportes de capital y reorganizaciones societarias",
      "Fusiones, divisiones y transformaciones",
      "Pactos de accionistas y acuerdos de gobierno",
      "Diseño de órganos de administración y reglamentos internos",
      "Trámites ante el Registro de Comercio y CBR",
      "Estructuración de grupos empresariales y holdings"
    ],
    approachHeading: "Cómo diseñamos una estructura societaria",
    approach: [
      "Diagnóstico de socios, objetivos, riesgos patrimoniales y proyección del negocio.",
      "Diseño de estatutos, pactos, órganos de administración y reglas de decisión.",
      "Preparación de documentos corporativos, modificaciones y trámites necesarios.",
      "Acompañamiento en la operación recurrente de la sociedad."
    ],
    benefits: [
      "Ordena reglas de administración, representación y toma de decisiones.",
      "Reduce riesgos de conflictos entre socios, accionistas o administradores.",
      "Entrega estructura jurídica para crecimiento, inversión, sucesión o reorganización."
    ],
    sections: [
      {
        heading: "Estructuras societarias que protegen tu negocio",
        body: [
          "Cancino Abogados diseña y estructura sociedades y grupos empresariales con criterio estratégico, adaptados a los objetivos de corto y largo plazo de cada cliente.",
          "Atendemos a empresas y socios en Viña del Mar, Santiago, Quillota, San Felipe y otras ciudades mediante asesoría presencial o virtual."
        ]
      },
      {
        heading: "Servicios de gobierno corporativo",
        items: [
          "Constitución de SpA, SRL, SA y otros tipos societarios",
          "Modificación de estatutos y adecuación a nuevas realidades",
          "Aportes de capital y reorganizaciones societarias",
          "Fusiones, divisiones y transformaciones",
          "Pactos de accionistas y acuerdos de gobierno",
          "Diseño de órganos de administración y reglamentos internos",
          "Trámites ante el Registro de Comercio y CBR",
          "Estructuración de grupos empresariales y holdings"
        ]
      }
    ],
    faqs: [
      {
        question: "¿Qué tipo de sociedad conviene para mi negocio?",
        answer:
          "Depende del número de socios, el giro, el régimen tributario que más conviene y los objetivos de crecimiento. La SpA es una forma flexible para PYMES y emprendedores; la SA suele ser más adecuada para empresas que buscan inversión. Te asesoramos antes de constituir."
      },
      {
        question: "¿Qué es un pacto de accionistas y para qué sirve?",
        answer:
          "Es un acuerdo privado entre los socios que regula materias que los estatutos no cubren: decisiones importantes, salida de socios, valorización de la empresa, cláusulas de no competencia y otros aspectos críticos."
      },
      {
        question: "¿Cuánto tarda constituir una sociedad en Chile?",
        answer:
          "Una SpA puede constituirse rápidamente mediante plataformas disponibles, pero la preparación de un estatuto adecuado, el pacto de accionistas y la estructura correcta requieren análisis previo para evitar costos de modificación futura."
      }
    ],
    metaDescription:
      "Asesoría en gobierno corporativo, constitución y modificación de sociedades en Chile. Estructuras societarias eficientes para empresas y grupos empresariales."
  },
  {
    title: "Contratos estratégicos y negociación empresarial",
    slug: "contratos-estrategicos-negociacion-empresarial",
    keyword: "contratos comerciales abogado chile",
    titleTag: "Contratos comerciales y negociación empresarial | Cancino Abogados",
    h1: "Abogado contratos comerciales Chile",
    summary:
      "Redacción, revisión y negociación de contratos comerciales, de servicios, distribución, asociación y construcción.",
    intro:
      "Un contrato mal redactado es una deuda futura. Las ambigüedades, los vacíos y las cláusulas desequilibradas suelen aparecer cuando surge el conflicto, no antes. En Cancino Abogados redactamos y revisamos contratos con visión estratégica: protegiendo tus intereses, anticipando riesgos y estructurando acuerdos que funcionen en la práctica.",
    coverage:
      "Asesoramos en contratos estratégicos a empresas, profesionales y personas en Viña del Mar, Santiago, Quillota y San Felipe.",
    specializedHeading: "Contratos que protegen tus intereses desde el primer día",
    casesHeading: "Tipos de contratos que trabajamos",
    cases: [
      "Contratos de prestación de servicios",
      "Contratos de distribución y representación comercial",
      "Contratos de asociación y joint venture",
      "Acuerdos de confidencialidad (NDA)",
      "Contratos de licencia de marca y propiedad intelectual",
      "Contratos de arriendo comercial y comodato",
      "Contratos de compraventa de bienes muebles e inmuebles",
      "Contratos de obra y servicio en construcción"
    ],
    approachHeading: "Cómo se negocia un contrato estratégico",
    approach: [
      "Levantamiento de objetivos comerciales, riesgos y puntos críticos de la operación.",
      "Revisión o redacción de cláusulas principales, garantías, responsabilidad y salida.",
      "Preparación de observaciones, contrapropuestas y documentos de negociación.",
      "Acompañamiento durante la ejecución cuando surgen ajustes o incumplimientos."
    ],
    benefits: [
      "Permite negociar desde una posición informada antes de asumir obligaciones relevantes.",
      "Reduce riesgos derivados de cláusulas ambiguas o responsabilidades mal distribuidas.",
      "Protege patrimonio, continuidad operacional y relaciones comerciales estratégicas."
    ],
    sections: [
      {
        heading: "Contratos que protegen tus intereses desde el primer día",
        body: [
          "Asesoramos en contratos estratégicos a empresas, profesionales y personas en Viña del Mar, Santiago, Quillota y San Felipe."
        ]
      },
      {
        heading: "Tipos de contratos que trabajamos",
        items: [
          "Contratos de prestación de servicios",
          "Contratos de distribución y representación comercial",
          "Contratos de asociación y joint venture",
          "Acuerdos de confidencialidad (NDA)",
          "Contratos de licencia de marca y propiedad intelectual",
          "Contratos de arriendo comercial y comodato",
          "Contratos de compraventa de bienes muebles e inmuebles",
          "Contratos de obra y servicio en construcción"
        ]
      }
    ],
    faqs: [
      {
        question: "¿Por qué es importante revisar un contrato antes de firmar?",
        answer:
          "Porque una vez firmado, el contrato obliga a ambas partes. Cláusulas de responsabilidad, penalidades, exclusividades o plazos que no se analizaron bien pueden generar costos inesperados o conflictos prolongados."
      },
      {
        question: "¿Pueden negociar en mi nombre con la contraparte?",
        answer:
          "Sí. Participamos activamente en procesos de negociación contractual, representando los intereses del cliente con criterio técnico y orientación práctica."
      },
      {
        question: "¿También revisan contratos en inglés?",
        answer:
          "Sí. Saúl Cancino tiene competencia profesional en inglés y puede revisar, negociar y redactar contratos en ambos idiomas para operaciones nacionales e internacionales."
      }
    ],
    metaDescription:
      "Redacción y negociación de contratos estratégicos para empresas en Chile. Contratos comerciales, de servicios, distribución y asociación. Viña del Mar y Santiago."
  },
  {
    title: "Negociación y resolución de conflictos",
    slug: "negociacion-resolucion-conflictos",
    keyword: "abogado negociación chile",
    titleTag: "Negociación y resolución de conflictos | Cancino Abogados Viña del Mar",
    h1: "Abogado negociación y resolución de conflictos Chile",
    summary:
      "Negociación, mediación y acuerdos extrajudiciales para resolver conflictos civiles, comerciales, laborales e inmobiliarios.",
    intro:
      "El litigio es costoso, lento y genera desgaste. En muchos casos, una negociación bien conducida o un proceso de mediación estructurado permite llegar a acuerdos satisfactorios en menos tiempo y con menor impacto económico y relacional.",
    coverage:
      "Este servicio está disponible para clientes en Viña del Mar, Santiago, Quillota, San Felipe y otras ciudades mediante atención presencial o virtual.",
    specializedHeading: "Resolver un conflicto no siempre requiere ir a juicio",
    casesHeading: "Cuando la negociación es la mejor estrategia",
    cases: [
      "Conflictos comerciales entre empresas o socios",
      "Disputas con proveedores o clientes de largo plazo",
      "Conflictos laborales antes de que lleguen al tribunal",
      "Disputas inmobiliarias entre propietarios, arrendatarios o vecinos",
      "Conflictos en contratos de construcción",
      "Situaciones donde preservar la relación comercial es prioritario"
    ],
    approachHeading: "Cómo se prepara una negociación",
    approach: [
      "Análisis de posición legal, riesgos y objetivos reales.",
      "Definición de escenarios, límites de negociación y alternativas.",
      "Redacción o revisión de acuerdos y comunicaciones formales.",
      "Preparación de pasos si la negociación no prospera."
    ],
    benefits: [
      "Ayuda a resolver conflictos con mayor control de costos y tiempos.",
      "Permite negociar desde una posición informada.",
      "Prepara mejor el caso si luego es necesario iniciar un juicio."
    ],
    sections: [
      {
        heading: "Resolver un conflicto no siempre requiere ir a juicio",
        body: [
          "Cancino Abogados asesora y representa a clientes en procesos de negociación y resolución de conflictos, priorizando soluciones prácticas sin renunciar a los derechos del cliente.",
          "Este servicio está disponible para clientes en Viña del Mar, Santiago, Quillota, San Felipe y otras ciudades mediante atención presencial o virtual."
        ]
      },
      {
        heading: "Cuando la negociación es la mejor estrategia",
        items: [
          "Conflictos comerciales entre empresas o socios",
          "Disputas con proveedores o clientes de largo plazo",
          "Conflictos laborales antes de que lleguen al tribunal",
          "Disputas inmobiliarias entre propietarios, arrendatarios o vecinos",
          "Conflictos en contratos de construcción",
          "Situaciones donde preservar la relación comercial es prioritario"
        ]
      }
    ],
    faqs: [
      {
        question: "¿Qué diferencia hay entre mediación y negociación?",
        answer:
          "En la negociación directa, las partes buscan un acuerdo por sí mismas. En la mediación, un tercero neutral facilita el diálogo. Ambas vías son más rápidas y económicas que el juicio y permiten soluciones creativas que un tribunal no puede otorgar."
      },
      {
        question: "¿Un acuerdo extrajudicial tiene valor legal?",
        answer:
          "Sí. Un acuerdo bien redactado tiene plena validez legal y puede ser ejecutado judicialmente si una parte lo incumple. La clave está en formalizar correctamente el acuerdo para que sea exigible."
      },
      {
        question: "¿Cuándo es mejor ir a juicio que negociar?",
        answer:
          "Cuando la contraparte actúa de mala fe, cuando el derecho del cliente es claro y la negociación solo dilata la solución, o cuando se requiere una sentencia. Evaluamos cada situación antes de recomendar la vía."
      }
    ],
    metaDescription:
      "Mediación, negociación y resolución extrajudicial de conflictos en Chile. Soluciones rápidas y menos costosas que el juicio. Viña del Mar y Santiago."
  },
  {
    title: "Compliance corporativo",
    slug: "compliance-corporativo",
    keyword: "compliance corporativo chile",
    titleTag: "Compliance corporativo para empresas en Chile | Cancino Abogados",
    h1: "Abogado compliance corporativo Chile",
    summary:
      "Diseño e implementación de programas de cumplimiento, modelo de prevención de delitos y políticas internas para empresas.",
    intro:
      "El compliance no es solo una obligación legal: es una señal de gobierno responsable que protege a la empresa, sus directivos y sus socios frente a riesgos regulatorios, penales y reputacionales.",
    coverage:
      "Asesoramos a empresas en Viña del Mar, Santiago, Quillota, San Felipe y otras ciudades del país, adaptando cada programa de cumplimiento al tamaño y riesgo real de la organización.",
    specializedHeading: "Cumplimiento normativo como ventaja competitiva",
    casesHeading: "Servicios de compliance",
    cases: [
      "Diagnóstico de riesgos legales y normativos",
      "Diseño e implementación de Modelo de Prevención de Delitos (Ley 20.393)",
      "Políticas internas de cumplimiento: anticorrupción, RRHH, datos personales",
      "Capacitación a directivos y equipos en cumplimiento normativo",
      "Revisión periódica y actualización del programa de compliance",
      "Asesoría en Ley de Protección de Datos Personales",
      "Compliance laboral y en prevención de riesgos"
    ],
    approachHeading: "Cómo se implementa un programa de cumplimiento",
    approach: [
      "Diagnóstico de riesgos legales y normativos de la empresa.",
      "Diseño de políticas, protocolos y controles proporcionales al tamaño del negocio.",
      "Capacitación a equipos y directivos para instalar criterios prácticos de cumplimiento.",
      "Revisión periódica y actualización del programa."
    ],
    benefits: [
      "Mejora el orden interno y la trazabilidad de decisiones.",
      "Reduce exposición a contingencias legales y reputacionales.",
      "Fortalece la gestión corporativa de la empresa."
    ],
    sections: [
      {
        heading: "Cumplimiento normativo como ventaja competitiva",
        body: [
          "Cancino Abogados diseña e implementa programas de cumplimiento normativo adaptados a la realidad de cada empresa, con foco práctico y sin burocracia innecesaria.",
          "Asesoramos a empresas en Viña del Mar, Santiago, Quillota, San Felipe y otras ciudades del país, adaptando cada programa de cumplimiento al tamaño y riesgo real de la organización."
        ]
      },
      {
        heading: "Servicios de compliance",
        items: [
          "Diagnóstico de riesgos legales y normativos",
          "Diseño e implementación de Modelo de Prevención de Delitos (Ley 20.393)",
          "Políticas internas de cumplimiento: anticorrupción, RRHH, datos personales",
          "Capacitación a directivos y equipos en cumplimiento normativo",
          "Revisión periódica y actualización del programa de compliance",
          "Asesoría en Ley de Protección de Datos Personales",
          "Compliance laboral y en prevención de riesgos"
        ]
      }
    ],
    faqs: [
      {
        question: "¿Qué empresas deben tener un Modelo de Prevención de Delitos en Chile?",
        answer:
          "La Ley 20.393 establece responsabilidad penal para personas jurídicas en ciertos delitos. Aunque contar con un modelo no opera igual para todas las empresas, implementar uno ayuda a prevenir riesgos y puede ser relevante para acreditar medidas de control."
      },
      {
        question: "¿El compliance es solo para grandes empresas?",
        answer:
          "No. Las PYMES también enfrentan riesgos regulatorios, especialmente en materia laboral, tributaria y de protección de datos. Un programa proporcional al tamaño de la empresa es una inversión en sostenibilidad y buena reputación."
      },
      {
        question: "¿Cuánto tiempo toma implementar un programa de compliance?",
        answer:
          "Depende del tamaño y complejidad de la empresa. Para una PYME, un programa básico puede implementarse en 4 a 8 semanas. Para empresas más grandes, el proceso puede tomar varios meses y debe actualizarse periódicamente."
      }
    ],
    metaDescription:
      "Diseño e implementación de programas de compliance para empresas en Chile. Ley 20.393, modelo de prevención de delitos y cumplimiento normativo. Viña del Mar y Santiago."
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
  services.find((service) => service.slug === slug || service.aliases?.includes(slug));
