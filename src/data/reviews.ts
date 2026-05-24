export const businessName = "Cancino Abogados";

export const siteUrl = "https://www.cancinoabogados.cl";

export const googleProfileUrl =
  "https://www.google.com/maps/place/Cancino+Abogados/@-33.0085545,-71.5510109,17z/data=!4m8!3m7!1s0x26c47ba9a5e697b:0x62e184e3c6026c61!8m2!3d-33.0085545!4d-71.5510109!9m1!1b1!16s%2Fg%2F11yx7vg250?hl=es-419&entry=ttu";

export const googleReviewUrl = "https://g.page/r/CWFsAsbjhOFiEBM/review";

export const googleReviewsLabel = "+ de 80 reseñas de Google";

export type Review = {
  name: string;
  context: string;
  quote: string;
  rating: number;
  date: string;
  datePublished: string;
  source: "Google";
};

// TODO: Reemplazar estas fechas temporales por las fechas reales de publicación en Google.
const temporaryDatePublished = "2026-05-24";
const temporaryDate = "Fecha por confirmar";

export const reviews: Review[] = [
  {
    name: "Miguel Capo",
    context: "Contratos complejos de construcción",
    quote: "Alto nivel técnico jurídico aplicado en contratos complejos de construcción.",
    rating: 5,
    date: temporaryDate,
    datePublished: temporaryDatePublished,
    source: "Google"
  },
  {
    name: "Cristian Omar Fuentes Tuninetti",
    context: "Litigio laboral y asesoría estratégica",
    quote:
      "Quiero dejar en manifiesto que las labores que realizó Saúl como mi abogado ante mi empresa y el mandante Codelco fueron de un gran profesionalismo, dedicación y honradez. Me respaldó con una asesoría completa que llevó un litigio del cual salimos triunfadores. Lo recomiendo en un 100%.",
    rating: 5,
    date: temporaryDate,
    datePublished: temporaryDatePublished,
    source: "Google"
  },
  {
    name: "Carlos León",
    context: "Defensa laboral para comunidad de copropietarios",
    quote:
      "Don Saúl Cancino actuó como abogado de nuestra Comunidad de Copropietarios en un caso laboral realmente complicado e injusto para nosotros. Consultamos muchos abogados antes de llegar a él y daban el caso por perdido. Saúl se atrevió, logró un resultado admirable y evitó que pagáramos una indemnización injusta y altísima. Recomiendo sus servicios profesionales sin lugar a dudas.",
    rating: 5,
    date: temporaryDate,
    datePublished: temporaryDatePublished,
    source: "Google"
  },
  {
    name: "Javier Valdés Plaza",
    context: "Asesoría jurídica permanente",
    quote:
      "Saúl y su equipo me han asesorado durante ya seis años. Destacan por la claridad y transparencia con la que trabajan, además del genuino compromiso con el que se involucran en cada caso. Es definitivamente un servicio que recomiendo 100%.",
    rating: 5,
    date: temporaryDate,
    datePublished: temporaryDatePublished,
    source: "Google"
  },
  {
    name: "Luna",
    context: "Asesoría legal empresarial",
    quote:
      "He tenido la oportunidad de trabajar con Saúl Cancino y sus asesorías han sido clave para el área legal de nuestra empresa. Es un abogado comprometido, resolutivo, siempre da respuestas inmediatas y con claridad. Excelente profesional.",
    rating: 5,
    date: temporaryDate,
    datePublished: temporaryDatePublished,
    source: "Google"
  },
  {
    name: "Daniela Rocha Muñoz",
    context: "Derecho civil sucesorio",
    quote:
      "Saúl es un profesional de primera, responsable y trabajador, pero principalmente con una calidad humana donde te entiende, te acompaña y te informa de todo lo que está sucediendo en tu caso. Eso me permitió estar tranquila y confiada de que estaba en buenas manos. Sin duda el mejor abogado y, por sobre todo, honesto.",
    rating: 5,
    date: temporaryDate,
    datePublished: temporaryDatePublished,
    source: "Google"
  },
  {
    name: "Alejandro Coppelli",
    context: "Defensa laboral para empresa",
    quote:
      "Excelente experiencia con Cancino Abogados. El estudio cuenta con profesionales de altísima calidad y un gran dominio en su área. La comunicación fluida y la dedicación que brindan son una gran ventaja cuando se buscan servicios legales personalizados.",
    rating: 5,
    date: temporaryDate,
    datePublished: temporaryDatePublished,
    source: "Google"
  },
  {
    name: "Rodrigo Álvarez Mack",
    context: "Juicio laboral",
    quote:
      "Saúl es un abogado que se caracteriza por su alto grado de meticulosidad, análisis, gestión y conocimientos. Seriedad y profesionalismo garantizado, audaz y seguro. Conté con su asesoría en juicio laboral, con resultados superiores a mis expectativas. Recomiendo sus servicios sin duda alguna.",
    rating: 5,
    date: temporaryDate,
    datePublished: temporaryDatePublished,
    source: "Google"
  },
  {
    name: "Verena Arendt",
    context: "Derecho inmobiliario y arrendamiento",
    quote:
      "Me ayudó mucho con el problema que tenía con la casa que arrendaba, ya que está especializado en el tema inmobiliario. Lo recomiendo.",
    rating: 5,
    date: temporaryDate,
    datePublished: temporaryDatePublished,
    source: "Google"
  },
  {
    name: "Emilio Jarufe Jarufe",
    context: "Asesoría de derecho inmobiliario",
    quote:
      "Profesional de primer nivel, claro en los temas y muy transparente con todo el proceso. Se siente su apoyo en lograr los objetivos. Muy buen profesional.",
    rating: 5,
    date: temporaryDate,
    datePublished: temporaryDatePublished,
    source: "Google"
  }
];

export const averageRating =
  reviews.length > 0
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : 0;

export const featuredReviewsCount = reviews.length;

export const totalReviews = 80;

export const testimonials = reviews;
