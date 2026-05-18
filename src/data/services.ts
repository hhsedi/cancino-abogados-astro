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

export const services: Service[] = [
  {
    title: "Derecho inmobiliario",
    slug: "derecho-inmobiliario",
    keyword: "abogado inmobiliario",
    summary:
      "Asesoría en compraventas, arriendos, promesas, conflictos inmobiliarios y revisión legal de propiedades.",
    intro:
      "Comprar, vender, arrendar o invertir en una propiedad exige revisar antecedentes legales, contratos, títulos y riesgos que pueden afectar el patrimonio. Cancino Abogados entrega asesoría inmobiliaria clara y estratégica para tomar decisiones con respaldo.",
    specializedHeading:
      "Abogado inmobiliario para compraventas, arriendos y conflictos sobre propiedades",
    cases: [
      "Compraventa de casas, departamentos, terrenos o parcelas.",
      "Redacción o revisión de promesas de compraventa.",
      "Contratos de arriendo y conflictos por incumplimiento.",
      "Estudio de títulos antes de comprar una propiedad.",
      "Conflictos con vendedores, compradores, arrendadores o arrendatarios."
    ],
    approach: [
      "Revisión de contratos, certificados, inscripciones y antecedentes del inmueble.",
      "Identificación de riesgos legales antes de firmar o pagar.",
      "Preparación de observaciones, recomendaciones y estrategia de negociación.",
      "Acompañamiento en conflictos inmobiliarios cuando corresponde."
    ],
    benefits: [
      "Reduce el riesgo de comprar una propiedad con problemas legales.",
      "Permite negociar condiciones contractuales con mayor claridad.",
      "Ayuda a prevenir conflictos costosos antes de que escalen."
    ],
    faqs: [
      {
        question: "¿Cuándo conviene solicitar asesoría en derecho inmobiliario?",
        answer:
          "Antes de firmar una promesa, contrato de arriendo, escritura o pagar una reserva relevante. La revisión temprana permite detectar riesgos a tiempo."
      },
      {
        question: "¿Pueden revisar una propiedad ubicada fuera de Viña del Mar?",
        answer:
          "Sí. La asesoría puede coordinarse para operaciones en San Felipe, Los Andes, Viña del Mar y otras ciudades, según los antecedentes disponibles."
      }
    ],
    metaDescription:
      "Abogado inmobiliario para compraventas, arriendos, estudio de títulos y conflictos sobre propiedades en San Felipe, Los Andes y Viña del Mar."
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
    title: "Redacción y revisión de contratos",
    slug: "redaccion-revision-contratos",
    keyword: "abogado contratos",
    summary:
      "Redacción y revisión de contratos civiles, comerciales, inmobiliarios y laborales antes de firmar.",
    intro:
      "Un contrato claro permite prevenir conflictos, distribuir riesgos y dejar constancia de obligaciones relevantes. La revisión legal antes de firmar ayuda a evitar cláusulas ambiguas, multas desproporcionadas o compromisos difíciles de cumplir.",
    specializedHeading:
      "Abogado para redacción y revisión de contratos",
    cases: [
      "Contratos comerciales con clientes, socios o proveedores.",
      "Promesas de compraventa, arriendos y documentos inmobiliarios.",
      "Contratos civiles, mandatos, acuerdos y reconocimientos de deuda.",
      "Contratos laborales, anexos y documentos internos.",
      "Revisión de cláusulas de responsabilidad, plazos, pagos y terminación."
    ],
    approach: [
      "Identificación de objetivos comerciales y riesgos jurídicos.",
      "Revisión de cláusulas críticas y obligaciones principales.",
      "Redacción de observaciones, ajustes o nueva versión del contrato.",
      "Explicación clara de los puntos relevantes antes de firmar."
    ],
    benefits: [
      "Previene conflictos por cláusulas poco claras.",
      "Permite negociar condiciones antes de asumir obligaciones.",
      "Protege relaciones comerciales, inmobiliarias o laborales relevantes."
    ],
    faqs: [
      {
        question: "¿Pueden revisar un contrato antes de firmarlo?",
        answer:
          "Sí. Es uno de los momentos más importantes para consultar, porque aún es posible corregir condiciones riesgosas."
      },
      {
        question: "¿Trabajan contratos para empresas?",
        answer:
          "Sí. La asesoría incluye contratos civiles, comerciales, inmobiliarios y documentos usados por empresas."
      }
    ],
    metaDescription:
      "Abogado para contratos. Redacción y revisión de contratos civiles, comerciales, inmobiliarios y laborales antes de firmar."
  },
  {
    title: "Asesoría legal para empresas",
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
    title: "Constitución y modificación de sociedades",
    slug: "constitucion-modificacion-sociedades",
    keyword: "abogado sociedades",
    summary:
      "Apoyo en constitución, modificación, estatutos, poderes, administración y regularización societaria.",
    intro:
      "La estructura societaria define cómo se administra una empresa, cómo ingresan o salen socios y cómo se toman decisiones relevantes. Una asesoría adecuada permite formalizar negocios con claridad y prevenir conflictos futuros.",
    specializedHeading:
      "Abogado para constitución y modificación de sociedades",
    cases: [
      "Constitución de sociedades para nuevos negocios.",
      "Modificación de estatutos, administración o poderes.",
      "Entrada o salida de socios.",
      "Regularización de documentos societarios.",
      "Revisión de estructura legal de una empresa existente."
    ],
    approach: [
      "Identificación del objetivo del negocio y necesidades de administración.",
      "Revisión o preparación de estatutos, poderes y documentos.",
      "Orientación sobre riesgos de gobierno societario.",
      "Acompañamiento en modificaciones y regularizaciones."
    ],
    benefits: [
      "Permite ordenar responsabilidades y facultades de administración.",
      "Reduce riesgos de conflictos entre socios.",
      "Facilita decisiones empresariales con estructura jurídica clara."
    ],
    faqs: [
      {
        question: "¿Qué sociedad conviene constituir?",
        answer:
          "Depende del negocio, socios, forma de administración y objetivos. La recomendación se realiza caso a caso."
      },
      {
        question: "¿Pueden modificar una sociedad ya creada?",
        answer:
          "Sí. Se pueden revisar estatutos, poderes y necesidades de modificación según la situación actual."
      }
    ],
    metaDescription:
      "Abogado para sociedades. Constitución, modificación, estatutos, poderes, administración y regularización societaria."
  },
  {
    title: "Estudio de títulos",
    slug: "estudio-de-titulos",
    keyword: "estudio de títulos abogado",
    summary:
      "Revisión legal de propiedades, inscripciones, certificados y antecedentes antes de comprar inmuebles.",
    intro:
      "El estudio de títulos permite revisar la historia jurídica de una propiedad antes de comprar. Su objetivo es detectar riesgos, limitaciones, gravámenes o problemas documentales que podrían afectar la operación.",
    specializedHeading:
      "Estudio de títulos para comprar propiedades con mayor seguridad",
    cases: [
      "Compra de terrenos, parcelas, casas o departamentos.",
      "Revisión de dominio, hipotecas, prohibiciones o gravámenes.",
      "Operaciones inmobiliarias con antecedentes incompletos.",
      "Compra mediante promesa de compraventa.",
      "Necesidad de informe legal antes de cerrar una operación."
    ],
    approach: [
      "Revisión de inscripciones, certificados y antecedentes disponibles.",
      "Identificación de observaciones legales relevantes.",
      "Preparación de recomendaciones antes de firmar o pagar.",
      "Coordinación con otros documentos de la operación inmobiliaria."
    ],
    benefits: [
      "Reduce el riesgo de adquirir un inmueble con problemas legales.",
      "Entrega claridad antes de comprometer recursos importantes.",
      "Permite solicitar correcciones o antecedentes adicionales a tiempo."
    ],
    faqs: [
      {
        question: "¿Es lo mismo revisar una promesa que hacer estudio de títulos?",
        answer:
          "No. La promesa regula obligaciones entre partes; el estudio de títulos revisa la situación jurídica del inmueble."
      },
      {
        question: "¿Qué documentos se revisan?",
        answer:
          "Inscripciones, certificados, escrituras y otros antecedentes que permitan evaluar la historia legal del inmueble."
      }
    ],
    metaDescription:
      "Estudio de títulos por abogado para compra de terrenos, parcelas, casas y departamentos. Revisión legal de propiedades."
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
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
