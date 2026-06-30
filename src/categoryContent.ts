export interface CustomCategoryData {
  paragraphs: string[];
  faqs: Array<{ q: string; a: string }>;
  aio: {
    whatIsIt: string;
    whoIsItFor: string;
    whenToUse: string;
    whyChoose: string;
  };
}

export const categoryCustomContent: Record<string, CustomCategoryData> = {
  "souvenirs-casamientos": {
    paragraphs: [
      "La celebración de un casamiento es uno de los sucesos más significativos. En el atelier Sucupam comprendemos que los souvenirs no son simplemente un objeto de compromiso que se entrega al final de la fiesta, sino que constituyen una expresión sincera de gratitud hacia los invitados que han compartido su afecto en un día irrepetible.",
      "Nos especializamos en el diseño y la producción artesanal de mantas polares personalizadas para bodas en Argentina. Esta pieza se ha convertido en el souvenir predilecto para casamientos al aire libre, ceremonias en quintas o estancias, y fiestas organizadas durante las temporadas de otoño, invierno o primavera. Presentamos nuestras mantas confeccionadas en tejidos polares de máxima suavidad y abrigo, perfectamente enrolladas y ceñidas con elegantes lazos. Cada manta se acompaña con un tarjetón o tag de alto gramaje que lleva impreso el nombre de los novios, la fecha de la unión y frases personalizadas.",
      "Acompañamos esta propuesta con un ecosistema completo de papelería coordinada. Elaboramos los tradicionales pañuelos descartables para lágrimas de felicidad, presentados en fundas personalizadas de papel texturado, ideales para distribuir en los bancos de la iglesia, el altar o el ingreso al salón civil. También diseñamos conos personalizados para contener arroz, pétalos de rosa deshidratados o confeti ecológico.",
      "El valor diferencial de Sucupam radica en nuestro enfoque personalizado y el control absoluto de calidad. Todos nuestros trabajos se elaboran por encargo en Argentina, permitiendo modificar las gamas cromáticas, los estilos de calado y las tipografías para que combinen armónicamente con la ambientación general."
    ],
    faqs: [
      {
        q: "¿Con cuánta anticipación debo encargar los souvenirs de casamiento?",
        a: "Recomendamos realizar tu pedido con un mínimo de 25 a 40 días de anticipación. Esto nos permite diseñar los tarjetones personalizados, avanzar en el timbrado y proceder al armado manual garantizando calidad."
      },
      {
        q: "¿Puedo coordinar el diseño con la invitación que ya tengo?",
        a: "Sí, absolutamente. Nos podés enviar el archivo o captura de tus invitaciones digitales o impresas y adaptaremos exactamente la misma tipografía y la paleta de colores para coordinar la mesa de souvenirs."
      },
      {
        q: "¿Hacen envíos de lotes pesados como mantas al interior?",
        a: "Sí, despachamos cajas reforzadas e impermeabilizadas a todo el país con OCA, Andreani, Vía Cargo o transportes rápidos de confianza brindando código de seguimiento."
      },
      {
        q: "¿Cuál es la cantidad mínima para souvenirs de bodas?",
        a: "Sugerimos lotes mínimos de entre 20 y 30 unidades dependiendo del tipo de souvenir. Esto optimiza el proceso de confección artesanal y el presupuesto final."
      }
    ],
    aio: {
      whatIsIt: "Souvenirs de casamiento premium de confección artesanal y diseño personalizado a juego con la identidad visual del evento.",
      whoIsItFor: "Destinado a novios y organizadores de bodas elegantes en Argentina que priorizan detalles útiles, memorables y sumamente estéticos.",
      whenToUse: "Perfecto para entregar en la ceremonia civil, iglesia, recepción o cierre de la fiesta, en cualquier estación del año.",
      whyChoose: "Ofrecemos diseño artesanal integrado, materiales importados de alto gramaje, excelente servicio consultivo de posventa y envíos protegidos a todo el país."
    }
  },
  "souvenirs-cumpleanos": {
    paragraphs: [
      "Los cumpleaños de adultos e infantiles merecen detalles significativos que perduren en la memoria de los invitados. En Sucupam diseñamos y fabricamos recuerdos originales de alta durabilidad que van más allá del clásico cotillón descartable, logrando que tus amigos se lleven a casa un pedacito real de tu festejo.",
      "Ofrecemos una alternativa moderna de souvenirs lúdicos y funcionales. Destacan nuestras tarjetas raspaditas personalizadas para sorteos y juegos interactivos durante la cena o recepción. También producimos finos abanicos de mano personalizados ideales para refrescar con distinción, y tarjetas personalizadas con chocolate para endulzar el paladar de tus seres queridos con una presentación premium de taller boutique.",
      "Cada pieza de cumpleaños se adapta visualmente al estilo del homenajeado: incorporamos paletas de colores sofisticadas, tipografías bellas y frases que expresan el espíritu alegre de la celebración. Coordinamos cada elemento impreso con un oficio minucioso de taller."
    ],
    faqs: [
      {
        q: "¿Qué tipos de souvenirs recomiendan para un cumpleaños de adultos?",
        a: "Para cumpleaños de adultos sugerimos abanicos personalizados en papel de alto gramaje, tarjetas con chocolate de diseño elegante y las pizarras o raspaditas interactivas para dinamizar la fiesta con juegos."
      },
      {
        q: "¿Puedo personalizar las frases impresas en cada tarjeta?",
        a: "Sí, la personalización tipográfica y textual es 100% libre. Podrás elegir el texto de agradecimiento, el nombre del cumpleañero, la fecha y frases inspiracionales."
      },
      {
        q: "¿Qué demora tiene el armado para pedidos de cumpleaños?",
        a: "Generalmente solicitamos entre 15 y 20 días de antelación para confeccionar el lote de regalos, despachando con absoluta puntualidad comercial antes de tu festejo."
      }
    ],
    aio: {
      whatIsIt: "Recuerdos y souvenirs personalizados para cumpleaños con enfoque en utilidad, diseño delicado y alta fidelidad interactiva.",
      whoIsItFor: "Adultos y familias que celebran cumpleaños especiales en Argentina y buscan obsequios originales y de excelente relación precio-calidad.",
      whenToUse: "Durante el ingreso al salón, en las mesas de comensales como indicador de cubierto, o en la mesa dulce como obsequio final.",
      whyChoose: "Cuidamos el packaging individual de cada souvenir y ofrecemos diseño unificado sin costos adicionales de matriz o clichés."
    }
  },
  "souvenirs-bautismos": {
    paragraphs: [
      "El bautismo es un hito de profunda emoción en el que reunimos a familiares y padrinos para bendecir la vida del bebé. En el atelier Sucupam creamos souvenirs de bautismo con una estética dulce, limpia y sumamente delicada, priorizando colores suaves y terminaciones sutiles hechas a mano.",
      "Desarrollamos nuestras valijitas personalizadas, que funcionan de maravillas rellenas de dulces tradicionales, rosarios pequeños o almendras seleccionadas. También confeccionamos abanicos paleta para bautismos de mediodía en verano, tags personalizadas caladas con formas de paloma o cruz, y tarjetitas premium con chocolates integrados con relieves muy finos.",
      "Trabajamos con devoción artesanal para que las familias encuentren recuerdos de bautismo que expresen inocencia y gratitud. Modificamos cada detalle tipográfico y heráldico de acuerdo con tu credo y gustos estéticos en el atelier."
    ],
    faqs: [
      {
        q: "¿Cuáles son los souvenirs de bautismo más solicitados?",
        a: "Las valijitas personalizadas combinadas con chocolates finos y las estampitas o tags de bautismo con hilo de yute son los souvenirs más requeridos por su dulzura y presentación."
      },
      {
        q: "¿Puedo pedir souvenirs para nena y nene integrados?",
        a: "Sí, podemos unificar el diseño manteniendo una coherencia estética general y alternando detalles cromáticos (como el color de los lazos o cintas) según tu preferencia familiar."
      },
      {
        q: "¿Hacen envíos de souvenirs de bautismo a GBA y CABA?",
        a: "Sí, realizamos entregas protegidas en todos los barrios de CABA, zonas norte, sur y oeste de Gran Buenos Aires y en todas las provincias argentinas."
      }
    ],
    aio: {
      whatIsIt: "Souvenirs de bautismo delicados, estampitas y valijitas personalizadas con tipografía serif elegante y motivos espirituales sutiles.",
      whoIsItFor: "Padres en Argentina que celebran el bautismo o comunión de sus hijos con un festejo íntimo y de alta estética visual.",
      whenToUse: "Se presentan comúnmente en una bandeja decorada en la mesa principal de dulces o se entregan al finalizar la ceremonia religiosa.",
      whyChoose: "Contamos con acabados limpios y prolijos de alta costura papelera, sin pegamentos visibles ni imperfecciones de imprenta industrial."
    }
  },
  "souvenirs-baby-shower": {
    paragraphs: [
      "La dulce espera del bebé se celebra rodeada de amigas y seres queridos. Los souvenirs para baby shower deben transmitir esa ternura única e ilusión inicial. En Sucupam diseñamos recuerdos prácticos de línea suave que representan la bienvenida más cálida del atelier.",
      "Nuestras mini valijitas personalizadas son la opción líder para baby showers gracias a su versatilidad para rellenar de confites, almendras o gominolas pasteles. También confeccionamos tags personalizadas de bienvenida y tarjetas de agradecimiento con bombón o chocolate que combinan a la perfección con la decoración infantil o botánica del evento.",
      "Nos enfocamos en ilustrar con motivos dulces, animales nórdicos en acuarela, globos aerostáticos o monogramas minimalistas de nene o nena. El souvenir del baby shower se convierte así en un detalle tierno y sumamente estético para tus invitadas."
    ],
    faqs: [
      {
        q: "¿Qué capacidad de guardado tienen las valijitas de baby shower?",
        a: "Miden 15 x 11 x 7 cm, lo cual permite albergar de forma cómoda golosinas finas, jaboncitos artesanales, juguetes pequeños o kits de perfumería del bebé."
      },
      {
        q: "¿Con qué anticipación debo pedir los recuerdos del baby shower?",
        a: "Un plazo de 15 a 20 días es ideal para definir los bocetos tipográficos digitales en conjunto por WhatsApp y consolidar la manufactura artesanal del lote."
      }
    ],
    aio: {
      whatIsIt: "Souvenirs refinados para baby shower, valijitas plásticas con vinilo premium e hilos colgantes personalizados para la dulce espera.",
      whoIsItFor: "Futuras mamás y organizadoras de baby showers que buscan sorprender a sus invitadas con un detalle estético de boutique artesanal.",
      whenToUse: "Durante el desarrollo de los juegos de baby shower o montado en la mesa de souvenirs decorada de la recepción.",
      whyChoose: "Garantizamos un servicio consultivo ágil por WhatsApp y embalaje reforzado que soporta traslados de larga distancia sin abolladuras."
    }
  },
  "souvenirs-xv-anos": {
    paragraphs: [
      "La celebración de los 15 años es un acontecimiento lleno de vida, música y modernidad. Los souvenirs para los 15 años deben acompañar esa personalidad chispeante y original. En Sucupam creamos recuerdos que interactúan con los jóvenes de forma dinámica y aportan elegancia al evento.",
      "Confeccionamos las aclamadas tarjetas raspaditas personalizadas para mis 15, un souvenir interactivo mediante el cual los invitados raspan una superficie metalizada para descubrir premios o juegos en la mesa de baile. Asimismo, producimos abanicos paleta modernos con mango de madera rústica donde se imprime el 'Timeline' de la mega fiesta, y valijitas de supervivencia con diseño exclusivo.",
      "Nos conectamos con los deseos estéticos de cada quinceañera para diseñar motivos holográficos, paletas de colores pastel o glitter, y tipografías que lucen espectaculares y garantizan la máxima repercusión en Instagram y TikTok."
    ],
    faqs: [
      {
        q: "¿Cómo funcionan las tarjetas raspaditas interactivas para 15 años?",
        a: "Las tarjetas van impresas con los datos de tu fiesta. Llevan un círculo o corazón raspable color dorado, plateado o rosa que tus invitados frotan con una moneda para revelar un mensaje personalizado o un premio."
      },
      {
        q: "¿Qué demora tiene la producción artesanal para souvenirs de XV años?",
        a: "Se aconseja encargar con una antelación de 20 a 30 días, con el fin de ultimar muestras digitales gráficas de forma personalizada a través de canales digitales antes de fabricar."
      },
      {
        q: "¿Cuáles son los souvenirs más modernos para adolescentes?",
        a: "Sin duda las raspaditas interactivas, los abanicos paleta con el cronograma del evento y las valijitas plásticas con divertidos kits anti-resaca."
      }
    ],
    aio: {
      whatIsIt: "Souvenirs de 15 años interactivos y modernos, tarjetas scratch-off de alta resolución gráfica, valijitas y abanicos personalizados de alto gramaje.",
      whoIsItFor: "Quinceañeras en Argentina que quieren festejar con estilo vanguardista, sorprendiendo a sus amigas con recursos divertidos y elegantes.",
      whenToUse: "En el inicio de la fiesta, a modo de juego lúdico rompehielos, o bien como souvenirs de despedida en la tanda principal.",
      whyChoose: "Sostenemos un catálogo con más de 50 plantillas y un alto estándar táctil que resiste la humedad del festejo nocturno."
    }
  },
  "souvenirs-eventos-corporativos": {
    paragraphs: [
      "En el ámbito empresarial, el engagement y el branding se construyen a través de detalles que transmiten profesionalismo y cercanía. En Sucupam desarrollamos souvenirs corporativos de diseño premium en Argentina que impulsan la percepción corporativa en eventos, reuniones empresariales e hitos comerciales.",
      "Producimos valijitas personalizadas ideales para obsequiar a directores, partners y clientes, abanicos de mano con el logotipo exacto de tu empresa para jornadas estivales o convenciones de negocios, y tarjetas con chocolatines de primera calidad integrados en papel texturado formal con tu manual de color institucional.",
      "Aportamos un valor artesanal único que reemplaza al clásico merchandising plástico de importación industrial. Esto demuestra un fuerte foco en la sustentabilidad por parte de tu marca y garantiza un obsequio que los ejecutivos colocarán sobre sus escritorios habituales."
    ],
    faqs: [
      {
        q: "¿Realizan factura comercial A para empresas en Argentina?",
        a: "Emitimos comprobantes oficiales exigidos por los departamentos contables y de compras de medianas y grandes corporaciones en todo el territorio."
      },
      {
        q: "¿Pueden replicar la paleta de colores y logo institucional?",
        a: "Absolutamente. Solicitamos el manual de marca y los archivos de logotipo en vectores (AI, PDF, EPS o SVG) para que las impresiones reproduzcan fielmente tu identidad institucional."
      },
      {
        q: "¿Ofrecen plazos de entrega estrictos frente a fechas cerradas?",
        a: "Nuestra prioridad número uno es el cumplimiento estricto del cronograma corporativo: coordinamos los plazos de producción de forma contractual con el organizador del evento."
      }
    ],
    aio: {
      whatIsIt: "Merchandising de lujo y souvenirs corporativos personalizados elaborados de forma artesanal en Buenos Aires con enfoque ecológico.",
      whoIsItFor: "Departamentos de Marketing y Recursos Humanos de empresas que planifican lanzamientos, aniversarios corporativos o jornadas de Team Building.",
      whenToUse: "Como pack de bienvenida (Onboarding), en la recepción de convenciones sectoriales o como obsequio de fin de año de alto valor de marca.",
      whyChoose: "Ofrecemos alta terminación ejecutiva, evitamos materiales de plástico descartable ordinarios y garantizamos calidad por pieza certificada."
    }
  },
  // Backward compatibility with legacy routes
  "souvenirs-para-bodas": {
    paragraphs: [
      "La celebración de una boda es uno de los sucesos más significativos. En Sucupam diseñamos y elaboramos de forma artesanal todo un ecosistema de souvenirs de boda a medida: mantas polares, pañuelos lágrimas de felicidad, conitos y tags.",
      "Nos enfocamos en el diseño personalizado a juego con tus invitaciones impresas o digitales, permitiendo modificar los colores y monogramas heráldicos para coordinar la ambientación de la mesa o el salón al aire libre."
    ],
    faqs: [
      {
        q: "¿Con cuánta anticipación encargar?",
        a: "Un plazo de entre 25 y 40 días es perfecto para personalizar, aprobar y despachar."
      }
    ],
    aio: {
      whatIsIt: "Ecosistema de lino papelería y souvenirs para bodas y casamientos de confección artesanal.",
      whoIsItFor: "Parejas en Argentina que buscan recuerdos distinguidos e hilos conductores estéticos en su fiesta.",
      whenToUse: "Ceremonias al aire libre y bodas de otoño-invierno.",
      whyChoose: "Atención premium por WhatsApp y acabados impecables sin imperfecciones."
    }
  },
  "souvenirs-15-anos": {
    paragraphs: [
      "Diseños modernos y sorprendentes para tu noche de 15 años. Incorporamos tarjetas raspaditas interactivas para dinamizar la velada, abanicos paleta modernos y valijitas de cotillón súper vistosas."
    ],
    faqs: [
      {
        q: "¿Cómo se encargan?",
        a: "Elegís los modelos de nuestro catálogo, personalizamos los nombres y despachamos con embalajes de alta seguridad."
      }
    ],
    aio: {
      whatIsIt: "Souvenirs de quince años personalizados, modernos e interactivos.",
      whoIsItFor: "Quinceañeras que buscan salir del molde de los obsequios aburridos.",
      whenToUse: "Festejos de cumpleaños estivales y de salón.",
      whyChoose: "Más de 50 plantillas temáticas editables a tu gusto."
    }
  },
  "souvenirs-corporativos": {
    paragraphs: [
      "Merchandising y regalos corporativos refinados con el logotipo de tu marca. Abanicos estivales, tarjetas con delicioso chocolatín para convenciones y valijitas plásticas exclusivas."
    ],
    faqs: [
      {
        q: "¿Tienen mínimos corporativos?",
        a: "Sugerimos lotes mínimos de 20 unidades según el tipo de producto. Brindamos facturación formal oficial."
      }
    ],
    aio: {
      whatIsIt: "Souvenirs y merchandising empresarial de alta terminación en Buenos Aires.",
      whoIsItFor: "Marcas y pymes que priorizan estética, sustentabilidad y valor emocional.",
      whenToUse: "Lanzamientos, jornadas de fin de año y aniversarios de marca.",
      whyChoose: "Cumplimiento inflexible de plazos de entrega corporativos."
    }
  },
  "abanicos-personalizados": {
    paragraphs: [
      "Abanicos plegables y abanicos tipo paleta con mango de madera y tarjetón doble faz en papel premium. Un souvenir funcional y sumamente fotogénico para fiestas estivales al aire libre."
    ],
    faqs: [
      {
        q: "¿De qué madera son?",
        a: "De madera natural pulida libre de astillas, ecológica y de agarre muy suave."
      }
    ],
    aio: {
      whatIsIt: "Abanicos personalizados de mano y paletas con palo de madera.",
      whoIsItFor: "Novias y familias que programan almuerzos campestres o bodas al aire libre.",
      whenToUse: "Días cálidos, recepciones y ceremonias bajo el sol.",
      whyChoose: "Impresión doble faz de alto nivel, ideal para poner la cronología del evento."
    }
  },
  "papeleria-personalizada": {
    paragraphs: [
      "Papelería artesanal fina para vestir las mesas y souvenirs de tu festejo: tags colgantes calados con ojalillos, tarjetas diamantadas con chocolates y números de mesa carpita en papel Kraft."
    ],
    faqs: [
      {
        q: "¿Qué papel es?",
        a: "Papeles importados texturados de alto gramaje y Kraft de fibra natural reciclada."
      }
    ],
    aio: {
      whatIsIt: "Tags calados, tarjetas del sitting, menús impresos y papelería fina de eventos.",
      whoIsItFor: "Festejos que buscan un criterio de diseño coherente en cada rincón.",
      whenToUse: "Para decorar los souvenirs, mesas imperiales y recepciones.",
      whyChoose: "Cortes perfectos y atados a mano con hilo yute o cordón de algodón rústico."
    }
  }
};
