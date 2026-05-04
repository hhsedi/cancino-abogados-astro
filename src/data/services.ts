export type Service = {
  title: string;
  slug: string;
  summary: string;
  value: string;
  description: string;
  needs: string[];
  help: string[];
  documents: string[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    title: "Derecho Civil",
    slug: "derecho-civil",
    summary:
      "Orientación y representación en contratos, obligaciones, responsabilidad civil, herencias y conflictos entre particulares.",
    value:
      "Asesoría civil clara y estratégica para prevenir conflictos, ordenar antecedentes y tomar decisiones informadas.",
    description:
      "El derecho civil regula relaciones patrimoniales, contractuales y familiares entre personas naturales y jurídicas. Una revisión temprana permite identificar riesgos, definir cursos de acción y evitar que un desacuerdo cotidiano escale innecesariamente.",
    needs: [
      "Debes revisar, redactar o terminar un contrato.",
      "Existe un incumplimiento de obligaciones o un cobro pendiente.",
      "Necesitas orientación sobre herencias, bienes o responsabilidad civil.",
      "Recibiste una demanda o deseas evaluar acciones legales."
    ],
    help: [
      "Análisis jurídico del caso y de la documentación disponible.",
      "Diseño de una estrategia preventiva, negociadora o judicial.",
      "Redacción y revisión de contratos, comunicaciones y acuerdos.",
      "Acompañamiento en negociaciones y procedimientos cuando corresponda."
    ],
    documents: [
      "Contratos, anexos, escrituras o comunicaciones relevantes.",
      "Comprobantes de pago, transferencias, facturas o respaldos.",
      "Cédula de identidad y datos de las partes involucradas.",
      "Demandas, cartas, correos o notificaciones recibidas."
    ],
    faqs: [
      {
        question: "¿Conviene consultar antes de firmar un contrato?",
        answer:
          "Sí. Una revisión previa puede detectar cláusulas ambiguas, obligaciones desproporcionadas o riesgos que luego son más costosos de corregir."
      },
      {
        question: "¿La primera revisión define si es necesario demandar?",
        answer:
          "La revisión inicial permite evaluar alternativas. En muchos casos se pueden explorar vías preventivas o negociadas antes de judicializar."
      }
    ]
  },
  {
    title: "Derecho Comercial",
    slug: "derecho-comercial",
    summary:
      "Apoyo legal para empresas, contratos comerciales, relaciones con proveedores, socios y prevención de riesgos.",
    value:
      "Acompañamiento legal para que empresas y emprendedores operen con mayor orden, claridad y respaldo documental.",
    description:
      "Las decisiones comerciales suelen tener efectos legales relevantes. Contar con asesoría permite estructurar contratos, anticipar contingencias y proteger relaciones de negocio con criterios prácticos y jurídicamente sólidos.",
    needs: [
      "Vas a firmar acuerdos con clientes, proveedores o socios.",
      "Necesitas ordenar documentos internos de una empresa.",
      "Existe un conflicto comercial o incumplimiento contractual.",
      "Buscas prevenir riesgos legales en la operación diaria."
    ],
    help: [
      "Revisión y redacción de contratos comerciales.",
      "Orientación en conflictos con clientes, proveedores o socios.",
      "Análisis de riesgos legales en operaciones y acuerdos.",
      "Apoyo en negociación y cierre de documentos."
    ],
    documents: [
      "Contratos, órdenes de compra, facturas y correos relevantes.",
      "Antecedentes societarios o documentos de la empresa.",
      "Propuestas comerciales, cotizaciones o términos de servicio.",
      "Registro de comunicaciones con la contraparte."
    ],
    faqs: [
      {
        question: "¿Pueden revisar contratos comerciales antes de firmarlos?",
        answer:
          "Sí. La revisión busca aclarar obligaciones, plazos, responsabilidades, garantías y mecanismos de solución de controversias."
      },
      {
        question: "¿Trabajan con pequeñas empresas y emprendedores?",
        answer:
          "Sí. La asesoría se adapta al tamaño, etapa y necesidades concretas de cada negocio."
      }
    ]
  },
  {
    title: "Derecho Inmobiliario",
    slug: "derecho-inmobiliario",
    summary:
      "Asesoría en compraventas, arriendos, promesas, títulos, escrituras y operaciones inmobiliarias.",
    value:
      "Revisión rigurosa de antecedentes para operaciones inmobiliarias más seguras y decisiones mejor informadas.",
    description:
      "Comprar, vender o arrendar un inmueble exige revisar documentos, plazos, títulos y obligaciones. Una asesoría oportuna ayuda a reducir riesgos y a ordenar cada etapa de la operación.",
    needs: [
      "Estás por firmar una promesa de compraventa.",
      "Necesitas revisar títulos, escrituras o antecedentes del inmueble.",
      "Tienes un conflicto de arriendo, entrega o pago.",
      "Deseas evaluar riesgos antes de cerrar una operación."
    ],
    help: [
      "Revisión de promesas, escrituras y contratos de arriendo.",
      "Análisis de antecedentes y documentos del inmueble.",
      "Orientación en negociación, cierre y cumplimiento.",
      "Acompañamiento ante conflictos derivados de la operación."
    ],
    documents: [
      "Promesa, escritura, contrato de arriendo o borradores.",
      "Certificados, inscripción de dominio y antecedentes del inmueble.",
      "Comprobantes de pagos, garantías o reservas.",
      "Correos y comunicaciones con corredores, vendedores o arrendatarios."
    ],
    faqs: [
      {
        question: "¿Por qué revisar una promesa antes de firmar?",
        answer:
          "Porque allí se fijan precio, plazos, multas, condiciones y obligaciones que luego pueden ser difíciles de modificar."
      },
      {
        question: "¿Pueden orientar una compraventa en otra ciudad?",
        answer:
          "Sí. La asesoría puede coordinarse para operaciones en distintas ubicaciones, revisando antecedentes y documentos relevantes."
      }
    ]
  },
  {
    title: "Derecho Laboral",
    slug: "derecho-laboral",
    summary:
      "Asesoría en contratos de trabajo, despidos, finiquitos, cumplimiento laboral y conflictos entre empleadores y trabajadores.",
    value:
      "Orientación laboral seria y equilibrada para evaluar derechos, deberes y alternativas con respaldo jurídico.",
    description:
      "Las relaciones laborales requieren claridad documental, cumplimiento normativo y una gestión cuidadosa de conflictos. La asesoría permite revisar antecedentes, estimar riesgos y definir pasos razonables.",
    needs: [
      "Recibiste una carta de despido o debes preparar un término de contrato.",
      "Quieres revisar un contrato, anexo o finiquito.",
      "Existe un conflicto por remuneraciones, jornada o funciones.",
      "Necesitas orientar el cumplimiento laboral de una empresa."
    ],
    help: [
      "Revisión de contratos, anexos, cartas y finiquitos.",
      "Evaluación de antecedentes laborales y cursos de acción.",
      "Asesoría preventiva para empleadores y trabajadores.",
      "Acompañamiento en negociaciones o procedimientos aplicables."
    ],
    documents: [
      "Contrato de trabajo, anexos y liquidaciones de sueldo.",
      "Carta de despido, finiquito o comunicaciones relevantes.",
      "Registros de jornada, asistencia o instrucciones laborales.",
      "Correos, mensajes y documentos de respaldo."
    ],
    faqs: [
      {
        question: "¿Qué debo hacer si recibí una carta de despido?",
        answer:
          "Conviene guardar la carta, finiquito si existe, liquidaciones y contrato, y consultar antes de firmar documentos si tienes dudas."
      },
      {
        question: "¿Asesoran también a empleadores?",
        answer:
          "Sí. La asesoría incluye prevención, revisión documental y orientación para una gestión laboral ordenada."
      }
    ]
  }
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
