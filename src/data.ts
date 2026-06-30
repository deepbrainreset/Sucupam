/**
 * Core Data backup of Sucupam.
 * Recovered from original production build assets.
 */

export interface EventCategory {
  name: string;
  slug: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  eventCategories: string[];
  shortDescription: string;
  longDescription: string;
  coverImageUrl: string;
  galleryImageUrls: string[];
  metaTitle: string;
  metaDescription: string;
  isPrensa?: boolean;
  price: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: {
    name: string;
    role: string;
  };
  category: string;
  coverImage: string;
  metaTitle: string;
  metaDescription: string;
  keywords?: string[];
  faqs?: Array<{ question: string; answer: string }>;
}

export const eventCategories: EventCategory[] = [
  {
    name: "Casamientos",
    slug: "casamientos",
    description: "Souvenirs para casamientos originales y personalizados. Detalles únicos para que tus invitados recuerden tu gran día con cariño.",
    metaTitle: "Souvenirs para Casamientos Originales | Sucupam Argentina",
    metaDescription: "Descubrí los mejores souvenirs para casamientos en Argentina. Mantas, abanicos y detalles personalizados para bodas inolvidables.",
    heroImage: "https://res.cloudinary.com/dyaun9c0q/image/upload/v1774488189/portada_mantas_mno1nu.webp"
  },
  {
    name: "Bautismos",
    slug: "bautismos",
    description: "Recuerdos delicados y personalizados para el bautismo de tu bebé. Estilo tierno y cuidado para un momento sagrado.",
    metaTitle: "Souvenirs para Bautismo Nena y Nene | Sucupam",
    metaDescription: "Encontrá souvenirs para bautismo personalizados. Valijitas, estampitas y detalles únicos para celebrar la llegada de tu bebé.",
    heroImage: "https://i.ibb.co/BKSC2j8W/Whats-App-Image-2025-10-30-at-14-21-03-3.png"
  },
  {
    name: "Baby Shower",
    slug: "baby-shower",
    description: "Celebrá la llegada del bebé con souvenirs tiernos y prácticos. Diseños personalizados para sorprender a tus amigas.",
    metaTitle: "Souvenirs Baby Shower Originales y Tiernos | Sucupam",
    metaDescription: "Los mejores souvenirs para baby shower en Argentina. Detalles personalizados y creativos para una bienvenida especial.",
    heroImage: "https://i.ibb.co/4kfq2pV/V.png"
  },
  {
    name: "15 Años",
    slug: "15-anos",
    description: "Souvenirs modernos y con estilo para tu fiesta de 15. Detalles que reflejan tu personalidad y sorprenden a tus invitados.",
    metaTitle: "Souvenirs para 15 Años Modernos | Sucupam Argentina",
    metaDescription: "Buscás souvenirs para 15 años? Abanicos, raspaditas y kits personalizados para que tu fiesta sea única.",
    heroImage: "https://i.ibb.co/RpdSL657/4.jpg"
  }
];

export const products: Product[] = [
  {
    id: 1,
    slug: "mantas-para-eventos-personalizadas",
    name: "MANTAS PARA EVENTOS PERSONALIZADAS",
    category: "Mantas para Eventos",
    categorySlug: "mantas",
    eventCategories: ["casamientos", "15-anos"],
    shortDescription: "Mantas polares de 1,20 x 0,80 m. Se entregan enrolladas con cinta y tarjeta personalizada. El souvenir ideal para eventos.",
    longDescription: `Manta de aproximadamente 1,20 x 0,80 m.
Se presentan enrolladas, sujetas con una cinta y una tarjeta o papel con nombre y fecha personalizados.
La presentación es divina: tus invitados se llevarán un hermoso recuerdo, ideal para cualquier tipo de evento. Perfectas para noches de verano al aire libre o para quienes eligen dar el “sí” en estaciones de bajas temperaturas.

Usos: Ideales para bodas al aire libre, ceremonias en iglesias, eventos nocturnos o simplemente como un recuerdo acogedor.`,
    coverImageUrl: "https://res.cloudinary.com/dyaun9c0q/image/upload/v1774488189/portada_mantas_mno1nu.webp",
    galleryImageUrls: [],
    metaTitle: "Mantas Polares Personalizadas para Souvenirs | Sucupam",
    metaDescription: "Mantas personalizadas de 1.20x0.80m para bodas y eventos. El souvenir más cálido y original de Argentina.",
    price: "Presupuesto a medida según cantidad"
  },
  {
    id: 2,
    slug: "valijitas-personalizadas",
    name: "VALIJITAS PERSONALIZADAS",
    category: "Valijitas",
    categorySlug: "valijitas",
    eventCategories: ["bautismos", "baby-shower", "15-anos"],
    shortDescription: "El souvenir perfecto para any ocasión. Un recuerdo original y práctico, ideal para kits anti-resaca o regalos temáticos.",
    longDescription: `El Souvenir Perfecto para Cualquier Ocasión!
Un recuerdo original, divertido y práctico que se adapta a cualquier evento. Esta valijita es la solución ideal para crear kits temáticos y regalos memorables, añadiendo un toque completamente personalizable a tu celebración.

Usos Son perfectas para:
- Bodas and Fiestas de Adultos: Como Kit Anti-Resaca o Kit de Supervivencia para la pista de baile.
- Cumpleaños y Regalos: Llénalas de golosinas, maquillaje, o pequeños detalles.
- Bautismos y Eventos Infantiles: Funcionan como dulceros originals o Kit de Primeros Dientes.
- Eventos Empresariales: Ideales para muestras de producto o bienvenida.

Características y Calidad:
Personalización Exclusiva: Incluyen vinilo adhesivo de alta calidad, diseñado a tu gusto.
Medidas Prácticas: 15 cm (largo) x 11 cm (alto) x 7 cm (profundidad).`,
    coverImageUrl: "https://i.ibb.co/4kfq2pV/V.png",
    galleryImageUrls: [],
    metaTitle: "Valijitas Personalizadas Souvenirs | Sucupam",
    metaDescription: "Valijitas de 15x11x7cm personalizadas. Ideales para kits anti-resaca, bautismos y cumpleaños infantiles.",
    price: "Presupuesto a medida según cantidad"
  },
  {
    id: 3,
    slug: "conos-para-arroz-confeti-petalos",
    name: "CONOS PARA ARROZ/CONFETI/PÉTALOS",
    category: "Conos para Arrojar",
    categorySlug: "conos",
    eventCategories: ["casamientos", "15-anos"],
    shortDescription: "Conos personalizados para arroz, pétalos o golosinas. Dale un toque distintivo a tu ceremonia o úsalos como souvenir.",
    longDescription: `Ideal para todo tipo de eventos sociales, para darle un toque distintivo a tu evento, o entregar como souvenir.
Podes rellenar los conos con Arroz, Pétalos, Papel Picado, Bombones, Golosinas.
¡Pedilos con la frase o diseño que quieras ❤!
Se entregan listos para rellenar.
El diseño es PERSONALIZADO con la temática que elijas.
Puede ser como las invitaciones que ya tengas o elegir un diseño nuestro.

Material: Papel de gramaje medio
Diseño: A elección.
Medidas: 8 x 20 cm aproximadamente
Impresión: Full color exterior o interior`,
    coverImageUrl: "https://i.ibb.co/FbWRP1m1/1762967228814.jpg",
    galleryImageUrls: [],
    metaTitle: "Conos para Arroz y Pétalos Personalizados | Sucupam",
    metaDescription: "Conos personalizados para bodas y ceremonias. Ideales para arroz, pétalos o confeti. Diseño 100% a medida.",
    price: "Presupuesto a medida según cantidad"
  },
  {
    id: 4,
    slug: "abanicos-personalizados",
    name: "ABANICOS PERSONALIZADOS",
    category: "Abanicos",
    categorySlug: "abanicos",
    eventCategories: ["casamientos", "15-anos"],
    shortDescription: "Abanicos personalizados en papel de alto gramaje. Diseño con el texto que elijas. Un detalle funcional y elegante.",
    longDescription: `Abanicos de papel personalizados para souvenirs de todo tipo de eventos: bodas, 15 años, cumpleaños, comuniones, empresariales y más.

Diseñados especialmente para vos, con colores, nombres y detalles a elección.

Son prácticos, elegantes y una opción económica para sorprender a tus invitados con un recuerdo original y funcional.`,
    coverImageUrl: "https://i.ibb.co/RpdSL657/4.jpg",
    galleryImageUrls: [],
    metaTitle: "Abanicos Personalizados para Eventos | Sucupam",
    metaDescription: "Abanicos de papel personalizados para bodas y 15 años. El souvenir ideal para eventos al aire libre en Argentina.",
    price: "Presupuesto a medida según cantidad"
  },
  {
    id: 5,
    slug: "abanicos-paleta-personalizado",
    name: "ABANICOS PALETA PERSONALIZADO",
    category: "Paletas",
    categorySlug: "paletas",
    eventCategories: ["casamientos", "15-anos", "bautismos"],
    shortDescription: "Abanicos tipo paleta con palitos de madera. Perfectos para un estilo campestre o vintage, con un agarre firme y diseño rústico.",
    longDescription: `Abanicos paleta en papel de alto gramaje doble faz, personalizados con el diseño y texto que elijas. Cada detalle se adapta al estilo de tu evento, creando un souvenir único y funcional que tus invitados van a amar.

Son ideales para ceremonias, eventos al aire libre, bodas, 15 años, comuniones, cumpleaños o celebraciones empresariales, especialmente en días cálidos. Además de ser un recuerdo hermoso, aportan un toque elegante a la decoración del evento.

Medidas: 10 cm de ancho x 20,5 cm de alto
Presentación cuidada y lista para entregar a tus invitados.`,
    coverImageUrl: "https://i.ibb.co/NnJdmmKq/1762114158184.jpg",
    galleryImageUrls: [],
    metaTitle: "Abanicos Paleta Personalizados | Sucupam Argentina",
    metaDescription: "Abanicos tipo paleta con palitos de madera y diseño rústico. El souvenir ideal para bautismos y bodas campestres.",
    price: "Presupuesto a medida según cantidad"
  },
  {
    id: 6,
    slug: "numeros-de-mesa-personalizados",
    name: "NÚMEROS DE MESA PERSONALIZADOS",
    category: "Números de Mesa",
    categorySlug: "numeros-mesa",
    eventCategories: ["casamientos", "15-anos"],
    shortDescription: "Números de mesa personalizados para tu celebración. Elegí el formato: carpita simple o montado sobre papel kraft. Impresión doble cara.",
    longDescription: `Elegancia y Estilo para tu Celebración
Define la organización y el estilo de tu evento con nuestros números de mesa. Son un detalle esencial y completamente personalizable, diseñados para integrarse perfectamente con la decoración y temática que elijas.

Totalmente Personalizables: Pídelos con la frase, tipografía o diseño que desees.
Listos para Decorar: Se entregan armados y listos para colocar en tu centro de mesa (no requieren soporte adicional).
Impresión Doble Cara: Impresos en ambas caras para asegurar una visibilidad perfecta desde cualquier ángulo de la mesa.

Formatos a Elegir:
Carpita Simple: Diseño clásico y elegante.
Montado sobre Papel Kraft/Blanco: Para un estilo rústico (Kraft) o sobrio y moderno (Blanco).`,
    coverImageUrl: "https://i.ibb.co/cS5b3QxZ/1762571037492.png",
    galleryImageUrls: [],
    metaTitle: "Números de Mesa Personalizados para Eventos | Sucupam",
    metaDescription: "Números de mesa para casamientos y 15 años. Formato carpita o kraft, 100% personalizados para tu fiesta en Argentina.",
    price: "Presupuesto a medida según cantidad"
  },
  {
    id: 7,
    slug: "panuelos-para-lagrimas-de-felicidad",
    name: "PAÑUELOS PARA LÁGRIMAS DE FELICIDAD",
    category: "Pañuelos Lágrimas de Felicidad",
    categorySlug: "panuelos",
    eventCategories: ["casamientos"],
    shortDescription: "Pañuelos 'Lágrimas de Felicidad'. Un gesto de cuidado y emoción para tu ceremonia. Vienen presentados en una tarjeta personalizada.",
    longDescription: `Añade un gesto de cuidado y emoción a tu próxima ceremonia. Nuestras "Lágrimas de Felicidad" son el detalle perfecto para esos momentos únicos donde las emociones fluyen y la alegría inunda el ambiente.

El Detalle Perfecto: Ideales para distribuir entre tus invitados justo antes del comienzo de la ceremonia, estos kits no solo son funcionales, sino que también actúan como un hermoso recordatorio de los momentos especiales y emotivos que están a punto de compartir.

Cada kit incluye un pañuelo de papel descartable de calidad, presentado elegantemente en una tarjeta personalizada (diseño a elegir).

¡Prepara tu evento para las lágrimas más hermosas!`,
    coverImageUrl: "https://res.cloudinary.com/dyaun9c0q/image/upload/v1774487881/1762970216496_ykkcrr.jpg",
    galleryImageUrls: [],
    metaTitle: "Pañuelos Lágrimas de Felicidad para Bodas | Sucupam",
    metaDescription: "Kits de pañuelos personalizados para ceremonias emotivas. El detalle ideal para las lágrimas de felicidad en tu casamiento.",
    price: "Presupuesto a medida según cantidad"
  },
  {
    id: 8,
    slug: "tags-tarjetitas",
    name: "TAGS TARJETITAS",
    category: "Tags y Tarjetitas",
    categorySlug: "tags",
    eventCategories: ["casamientos", "bautismos", "baby-shower", "15-anos"],
    shortDescription: "El broche de oro para tus regalos. Tags personalizadas para souvenirs, regalos o mesas dulces. Disponibles en varias formas.",
    longDescription: `El broche de oro para la presentación de tus regalos.

Nuestras tags son pequeñas tarjetas de agradecimiento o identificación que personalizan cualquier objeto.

Usos: Ideales para atar a souvenirs, identificar regalos, cerrar bolsas de papel o usarlas como etiquetas de mesas de dulces. Disponibles en formas redondas, caladas, o rectangulars. Impresas en papel de alta calidad.`,
    coverImageUrl: "https://res.cloudinary.com/dyaun9c0q/image/upload/v1774488385/1774028143018_ffrp3f.jpg",
    galleryImageUrls: [],
    metaTitle: "Tags y Tarjetitas Personalizadas para Souvenirs | Sucupam",
    metaDescription: "Tarjetitas personalizadas para souvenirs and regalos. Tags de agradecimiento con diseño exclusivo en Argentina.",
    price: "Presupuesto a medida según cantidad"
  },
  {
    id: 9,
    slug: "tarjetas-personalizadas-con-chocolatin",
    name: "TARJETAS PERSONALIZADAS CON CHOCOLATIN",
    category: "Tarjetas con Chocolatín",
    categorySlug: "chocolatines",
    eventCategories: ["casamientos", "bautismos", "baby-shower", "15-anos"],
    shortDescription: "El souvenir más dulce y elegante. Tarjetas personalizadas con un delicioso chocolatín, diseñadas para dejar una huella especial en tu celebración.",
    longDescription: `Sorprende a tus invitados con un detalle que combina perfectamente elegancia y sabor. Nuestras tarjetas personalizadas con chocolatin son un souvenir único, diseñado para dejar una huella especial en cualquier celebración.

El Detalle Perfecto para tu Evento: Cada tarjeta se realiza con el diseño, colores y temática que elijas, asegurando una coherencia total con tu evento. Es el recuerdo ideal y personalizado que tus invitados atesorarán.

Características:
Chocolate Delicado: Un delicioso toque dulce que acompaña a la tarjeta.
Tarjeta Personalizada: Con medidas óptimas para lucirse, se convierte en un recuerdo único.
Diseño 100% a Medida: Creamos el diseño perfecto para cumpleaños, casamientos, bautismos y cualquier tipo de evento.

¡Personalizá cada detalle y convertí tu evento en un momento inolvidable! Consultanos hoy para comenzar a diseñar.`,
    coverImageUrl: "https://i.ibb.co/Z1xLdf4Y/5.jpg",
    galleryImageUrls: [],
    metaTitle: "Tarjetas con Chocolatín Personalizadas Souvenirs | Sucupam",
    metaDescription: "Souvenirs dulces y elegantes: tarjetas personalizadas con chocolate para todo tipo de eventos en Argentina.",
    price: "Presupuesto a medida según cantidad"
  },
  {
    id: 10,
    slug: "tarjetas-raspaditas-personalizadas",
    name: "TARJETAS RASPADITAS PERSONALIZADAS",
    category: "Tarjetas Raspaditas",
    categorySlug: "raspaditas",
    eventCategories: ["casamientos", "15-anos"],
    shortDescription: "Sorprende y entretiene con nuestras tarjetas scratch off. Ideales para juegos, sorteos y marketing interactivo. Diseño 100% a medida.",
    longDescription: `Nuestras tarjetas scratch off son un elemento interactivo ideal para sorprender y entretener a tus invitados o clientes.

Usos Creativos y Versátiles, Úsalas para:
- Juegos y Premios: Sorteos, trivias o como alternativa moderna a la ceremonia de la cintitas.
- Eventos: Determinar quién se lleva el centro de mesa o realizar cualquier juego en la fiesta.
- Marketing y Emprendimientos: Dar a conocer descuentos, códigos promocionales o anunciar un lanzamiento especial.

Creamos el diseño completamente a medida, adaptándolo a la temática, colores y estilo que elijas.

Información Adicional:
- Amplio Catálogo: Contamos con más de 50 modelos para inspirarte.
- Tu Idea, Nuestra Realidad: Puedes enviarnos tu propio diseño o idea y lo desarrollamos para ti.

¡Síguenos y mira nuestros trabajos en tiktok!: SUCUPAM

El producto es de elaboración artesanal y por encargo. El tiempo de confección comienza a correr una vez definido y aprobado el diseño final.

Política de Devolución: Al ser un artículo personalizado y hecho a medida, no se admiten devoluciones una vez que se ha iniciado el proceso de elaboración.`,
    coverImageUrl: "https://i.ibb.co/9kPKh3pR/1761506119875.jpg",
    galleryImageUrls: [],
    metaTitle: "Tarjetas Raspaditas Personalizadas para Fiestas | Sucupam",
    metaDescription: "Juegos interactivos para tu evento: tarjetas raspaditas personalizadas. Diversión asegurada para tus invitados.",
    price: "Presupuesto a medida según cantidad"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "guia-souvenirs-boda",
    slug: "guia-souvenirs-boda",
    title: "Cómo elegir souvenirs para una boda inolvidable",
    excerpt: "Ideas prácticas para elegir recuerdos personalizados, útiles y alineados con el estilo de tu celebración.",
    content: `Elegir souvenirs para una boda es una oportunidad para contar una historia. Lo ideal es priorizar detalles que sean útiles, personalizados y coherentes con la estética del evento.

En Sucupam recomendamos definir primero la paleta de colores, la estación del año y el tipo de experiencia que querés regalar. Para bodas al aire libre, los abanicos y las mantas son opciones funcionales; para ceremonias emotivas, los pañuelos lágrimas de felicidad suman un detalle muy cuidado.`,
    date: "2026-01-10",
    author: { name: "Equipo Sucupam", role: "Diseño y eventos" },
    category: "Bodas",
    coverImage: "https://res.cloudinary.com/dyaun9c0q/image/upload/v1774488189/portada_mantas_mno1nu.webp",
    metaTitle: "Guía de souvenirs para bodas | Sucupam",
    metaDescription: "Consejos para elegir souvenirs personalizados para bodas, desde abanicos hasta mantas y detalles de papelería.",
    keywords: ["souvenirs para bodas", "recuerdos personalizados", "casamientos"]
  },
  {
    id: "ideas-15-anos",
    slug: "ideas-souvenirs-15-anos",
    title: "Ideas de souvenirs para fiestas de 15 años",
    excerpt: "Opciones modernas, divertidas y personalizadas para lanzar tu fiesta al siguiente nivel.",
    content: `Las fiestas de 15 años permiten jugar con diseños más modernos y propuestas interactivas. Las tarjetas raspaditas, abanicos personalizados y valijitas temáticas son alternativas versátiles para crear recuerdos únicos.

La clave está en adaptar cada pieza al estilo de la cumpleañera: colores, tipografías, frases y detalles gráficos hacen que el souvenir se siente parte integral de la fiesta.`,
    date: "2026-02-05",
    author: { name: "Equipo Sucupam", role: "Diseño y eventos" },
    category: "15 años",
    coverImage: "https://i.ibb.co/RpdSL657/4.jpg",
    metaTitle: "Souvenirs para 15 años | Sucupam",
    metaDescription: "Ideas de souvenirs personalizados para fiestas de 15 años: abanicos, raspaditas, valijitas y más.",
    keywords: ["souvenirs 15 años", "fiestas de 15", "souvenirs personalizados"]
  }
];

export const homeSections: [string, string][] = [
  [
    "Souvenirs para bodas",
    "Diseñamos recuerdos para bodas con estética elegante, narrativa emocional y terminaciones cuidadas. Cada detalle se alinea con la ambientación para que el souvenir no sea un agregado, sino parte de la experiencia del evento."
  ],
  [
    "Souvenirs para 15 años",
    "Creamos propuestas modernas y personalizadas para fiestas de 15 con estilo propio. Integramos color, tipografía y elementos gráficos que conectan con la personalidad de la anfitriona y sorprenden a cada invitado."
  ],
  [
    "Souvenirs corporativos",
    "Desarrollamos piezas corporativas para activaciones, aniversarios de empresa y acciones de branding. Nuestros souvenirs combinan diseño artesanal y estrategia de marca para mejorar recordación y percepción de valor."
  ],
  [
    "Abanicos personalizados",
    "Los abanicos personalizados son funcionales y fotogénicos, ideales para eventos al aire libre y temporadas cálidas. Producimos diseños a medida para mantener coherencia visual con el concepto general del evento."
  ],
  [
    "Papelería personalizada",
    "La papelería artesanal eleva la experiencia de marca del evento: tags, tarjetas, señalética y piezas de mesa. Cada elemento se diseña como parte de un sistema visual unificado, elegante y memorable."
  ],
  [
    "Diseños hechos a mano",
    "Nuestro diferencial está en el trabajo manual y el control de calidad por etapa. Cuidamos materiales, impresión, armado y presentación para que cada pedido llegue con estándar premium."
  ],
  [
    "Envíos a toda Argentina",
    "Coordinamos despachos a CABA, GBA y provincias con logística planificada, embalaje seguro y seguimiento. Así garantizamos que los souvenirs lleguen en tiempo y forma para la fecha de tu evento."
  ],
  [
    "Souvenirs premium para eventos inolvidables",
    "En Sucupam convertimos ideas en recuerdos tangibles con diseño sofisticado, sensibilidad estética y foco en experiencia. El resultado: souvenirs que emocionan, decoran y se recuerdan por años."
  ]
];

export const landingBody: string[] = [
  "En Sucupam entendemos que un souvenir no es solo un objeto: es una extensión emocional del evento. Por eso cada pieza se piensa desde la historia de la persona o marca que celebra. Diseñamos con criterio estético, imprimimos con materiales seleccionados y terminamos cada trabajo de forma manual para mantener un estándar premium. Esta combinación entre diseño estratégico y oficio artesanal permite resultados memorables que se sienten auténticos cuando llegan a manos de cada invitado.",
  "Nuestro enfoque SEO semántico también nace de esa misma lógica: hablar como hablan las personas cuando buscan ideas reales para su evento. Por eso incluimos lenguaje natural, contexto local argentino y respuestas claras sobre tiempos, cantidades, acabados y entregas. Para buscadores y asistentes de IA, esta claridad es clave: define con precisión qué hacemos, para quién lo hacemos y qué diferencia a Sucupam frente a opciones genéricas o industriales.",
  "Cada pedido inicia con una conversación de briefing. Relevamos tipo de evento, público invitado, estilo visual y momento de uso del souvenir durante la jornada. No es igual un detalle de bienvenida que una pieza para la mesa o un recuerdo de cierre. Esa lectura funcional mejora la experiencia de los invitados y aumenta la percepción de valor de toda la celebración, porque cada elemento cumple un propósito concreto además de verse lindo.",
  "En la producción priorizamos materiales nobles, impresiones nítidas y terminaciones consistentes. Trabajamos para que el resultado final conserve su presencia en foto y en mano: color equilibrado, legibilidad perfecta y armado prolijo. Este punto importa especialmente en bodas, 15 años y eventos corporativos, donde la estética se vuelve parte del relato general. Un souvenir bien ejecutado potencia decoración, ambientación y recuerdos compartidos en redes sociales.",
  "La personalización se aplica de forma integral. No solo cambiamos nombre y fecha; construimos identidad visual alrededor de tu concepto. Podemos integrar monogramas, frases, paletas específicas, iconografía temática y recursos de marca cuando se trata de acciones empresariales. Así, cada lote conserva coherencia, evitando mezclas improvisadas y generando una experiencia de marca sólida tanto para anfitriones como para invitados.",
  "El contexto geográfico también es relevante. Diseñamos y producimos en Argentina con conocimiento de temporadas, climas y dinámicas logísticas locales. Recomendamos productos funcionales según estación del año, tipo de locación y horario del evento. Por ejemplo, abanicos para celebraciones al aire libre, piezas de papelería para mesas de recepción o kits corporativos para activaciones de alto tránsito. Esta asesoría práctica reduce errores y mejora resultados.",
  "Para empresas, nuestros souvenirs corporativos cumplen objetivos de comunicación: recordación de marca, bienvenida a equipos, fidelización de clientes y experiencias para lanzamientos. Podemos adaptar discurso, tono visual y formato al manual de marca, conservando elegancia y cercanía. El resultado es un material físico que transmite profesionalismo, humaniza la relación con la audiencia y multiplica el impacto del evento en canales digitales.",
  "La planificación de tiempos es transparente. Informamos etapas de diseño, aprobación, impresión y despacho para que tengas previsibilidad. También indicamos mínimos recomendados por producto y alternativas cuando se requiere optimizar presupuesto sin resignar estilo. Este acompañamiento evita decisiones de último momento y permite que la producción artesanal se desarrolle con calidad, sin comprometer la fecha de entrega.",
  "En términos de experiencia premium, el diferencial de Sucupam está en la combinación de lujo artesanal y personalización emocional. No vendemos un catálogo rígido: ofrecemos piezas que cuentan historias. Esa promesa se sostiene con escucha activa, criterio de diseño y ejecución minuciosa. Cuando la gente recuerda un evento, suele recordar pequeños detalles: ahí es donde un souvenir bien pensado se vuelve protagonista.",
  "Si estás organizando tu evento y buscás una propuesta confiable, estética y alineada con tu identidad, en Sucupam podemos ayudarte. Nuestro equipo diseña soluciones para distintas escalas y presupuestos, siempre con foco en calidad y coherencia visual. Compartinos tu idea y te vamos a guiar con una recomendación realista, creativa y orientada a generar recuerdos inolvidables en cada invitado."
];

export const landingFaqs: Array<{ q: string; a: string }> = [
  {
    q: "¿Hacen envíos a toda Argentina?",
    a: "Sí. Coordinamos envíos a CABA, GBA y al interior con embalaje seguro, seguimiento y tiempos claros según fecha del evento."
  },
  {
    q: "¿Los souvenirs son personalizados?",
    a: "Todos los productos se diseñan a medida: paleta, tipografías, nombres, fechas y estilo visual para lograr coherencia con tu evento."
  },
  {
    q: "¿Qué eventos cubren?",
    a: "Trabajamos para bodas, 15 años, celebraciones corporativas, bautismos, baby showers y eventos sociales privados."
  },
  {
    q: "¿Cuánto demora la producción?",
    a: "Depende de volumen y complejidad. En general pedimos entre 15 y 30 días de anticipación, con opciones de urgencia sujetas a agenda."
  },
  {
    q: "¿Pueden hacerse diseños exclusivos?",
    a: "Sí. Nuestro proceso artesanal incluye propuestas originales y ajustes iterativos hasta aprobar una versión final."
  },
  {
    q: "¿Qué tipos de souvenirs ofrecen?",
    a: "Abanicos, papelería personalizada, tarjetas con chocolatín, raspaditas, kits temáticos, mantas, etiquetas y piezas especiales a pedido."
  }
];
