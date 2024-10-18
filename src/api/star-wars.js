import { PRODUCT_CATEGORIES, TOPICS } from "../utils/globalVariables.js";

export const STAR_WARS = [
  {
    id: crypto.randomUUID(),
    name: "The Mandalorian & Grogu - Figura de 12 pulgadas",
    quantity: 25,
    description:
      "The Mandalorian & Grogu - Figura de 12 pulgadas es un producto de Star Wars que captura la emocionante relación entre el cazarrecompensas Mandaloriano y el adorable Grogu. Esta figura de acción de alta calidad está hecha con atención a los detalles y es perfecta para los fanáticos de Star Wars. ¡Agrega esta figura a tu colección y revive las emocionantes aventuras de The Mandalorian!",
    category: PRODUCT_CATEGORIES.FIGURAS,
    topic: TOPICS.STAR_WARS,
    price: 29.99,
    imgs: [
      "https://m.media-amazon.com/images/I/51R7i854mBL._AC_SL1278_.jpg",
      "https://m.media-amazon.com/images/I/61juwi5CjiL._AC_SL1278_.jpg",
      "https://m.media-amazon.com/images/I/71qU6VoQ8uL._AC_SL1278_.jpg",
      "https://m.media-amazon.com/images/I/71wWQNNRkuL._AC_SL1278_.jpg",
      "https://m.media-amazon.com/images/I/71bRGPYsw4L._AC_SL1278_.jpg"
    ],
    quantitySell: 42,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Excelente figura, la calidad es impecable.",
        userName: "starWarsFan1",
        rate: 5,
        date: "10/10/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "La figura es muy buena, ojalá el título de la próxima película lo fuese también.",
        userName: "starWarsFan2",
        rate: 2,
        date: "12/10/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Me encanta esta figura, es una pieza de colección.",
        userName: "starWarsFan3",
        rate: 4,
        date: "15/10/2024"
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    name: "Hot Toys 1:6 Anakin Skywalker",
    quantity: 10,
    description:
      "Figura coleccionable a escala 1/6 de Anakin Skywalker, basada en la serie de animación de The Clone Wars. Incluye una escultura de cabeza detallada, traje confeccionado, protectores de armadura, sable de luz LED, manos intercambiables, detonador térmico, proyector de hologramas y figuras holográficas de Ahsoka Tano, Yoda y Obi-Wan Kenobi",
    category: PRODUCT_CATEGORIES.FIGURAS,
    topic: TOPICS.STAR_WARS,
    price: 265.0,
    quantitySell: 4,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "La figura de Anakin es increíblemente detallada y realista.",
        userName: "jedimaster99",
        rate: 5,
        date: "12/10/2024"
      },
      {
        id: crypto.randomUUID(),
        comment:
          "La figura es tan realista que ni siquiera tiene el rango de Maestro Jedi.",
        userName: "im_not_windu",
        rate: 4,
        date: "15/10/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Recibí la caja llena de arena y sin la figura. Pésimo servicio.",
        userName: "tatooine_resident",
        rate: 1,
        date: "17/10/2024"
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    name: "Star Wars: Thrawn Ascendancy (Libros 1-3)",
    quantity: 8,
    description:
      "Colección de libros de la serie Thrawn Ascendancy de Timothy Zahn, que sigue las aventuras del Gran Almirante Thrawn en el universo de Star Wars. Esta colección incluye los tres primeros libros de la serie, en edición pasta blanda, ofreciendo una visión profunda en la historia y el desarrollo del personaje más fascinante de la saga.",
    category: PRODUCT_CATEGORIES.LIBROS,
    topic: TOPICS.STAR_WARS,
    price: 33.99,
    imgs: [
      "https://m.media-amazon.com/images/I/51UD9BxE8aL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/51r-x8RsWSL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61UtozUwzXL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61UtozUwzXL._SL1500_.jpg"
    ],
    quantitySell: 15,
    comments: [
      {
        id: crypto.randomUUID(),
        comment:
          "Una lectura emocionante que te sumerge en el universo de Star Wars.",
        userName: "starwars_reader",
        rate: 5,
        date: "20/10/2024"
      },
      {
        id: crypto.randomUUID(),
        comment:
          "Thrawn es un personaje fascinante. Un verdadero genio y estratega.",
        userName: "thrawn_fan",
        rate: 4,
        date: "22/10/2024"
      },
      {
        id: crypto.randomUUID(),
        comment:
          "Ojalá en Ahsoka hubiésemos visto el mismo Thrawn que en estos libros... no a Elon Musk.",
        userName: "ahsoka_hater",
        rate: 2,
        date: "25/10/2024"
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    name: "Star Wars Black Series Darth Vader Lightsaber Replica",
    quantity: 5,
    description:
      "Réplica de sable de luz de Darth Vader de alta calidad, con efectos de sonido y luz realistas. Incluye un mango detallado y una empuñadura ergonómica para una experiencia de cosplay auténtica. Ideal para exhibir o para cosplay, esta réplica es un must-have para cualquier fan de Star Wars.",
    category: PRODUCT_CATEGORIES.ACCESORIOS,
    topic: TOPICS.STAR_WARS,
    price: 279.99,
    imgs: [
      "https://m.media-amazon.com/images/I/61S07-XucbL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61UT3WXo9DL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/51LSXbsIo+L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61cHgzyjt6L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61IM7Fe6eRL._AC_SL1500_.jpg"
    ],
    quantitySell: 5,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Creo que no debería dejar a mi hijo acercarse a esta réplica en mi museo.",
        userName: "slayer3000",
        rate: 5,
        date: "24/10/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Me siento como un verdadero Sith.",
        userName: "lord_caraxes",
        rate: 4,
        date: "26/10/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "La réplica es muy pesada, ideal para defenderme.",
        userName: "defender_of_the_empire",
        rate: 4,
        date: "28/10/2024"
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    name: "Star Wars: Darth Maul - Son of Dathomir",
    quantity: 25,
    description:
      "Star Wars: Darth Maul - Son of Dathomir es un emocionante cómic que sigue la historia del infame Lord Sith, Darth Maul. Después de ser traicionado por su antiguo maestro, Darth Sidious, Maul debe luchar por su supervivencia y vengarse. Este cómic revela los oscuros secretos de su pasado y su lucha por el poder en el inframundo criminal de la galaxia. Con impresionantes ilustraciones y una narrativa cautivadora, este cómic es imprescindible para los fans de Star Wars y de Darth Maul.",
    category: PRODUCT_CATEGORIES.COMIC,
    topic: TOPICS.STAR_WARS,
    price: 15.99,
    imgs: ["https://m.media-amazon.com/images/I/81YKvOca5bL._SL1500_.jpg"],
    quantitySell: 12,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "KENOOOOOOBIIIIII",
        userName: "tusken_raider22",
        rate: 5,
        date: "01/11/2024"
      },
      {
        id: crypto.randomUUID(),
        comment:
          "Las ilustraciones son impresionantes, pero la historia es un poco corta.",
        userName: "comicfan",
        rate: 4,
        date: "03/11/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Me encanta Maul, no es el más afortunado, ni el más fuerte, ni el más listo, ni el más...pero tiene la entrada más épica de la saga.",
        userName: "duel_of_the_fates",
        rate: 3,
        date: "05/11/2024"
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    name: "Funko Pop! Star Wars: Luke Skywalker with Yoda (Entrenamiento)",
    quantity: 20,
    description:
      "Figura coleccionable de Luke Skywalker con Yoda de la serie Funko Pop!, perfecta para decorar o añadir a tu colección.",
    category: PRODUCT_CATEGORIES.FIGURAS,
    topic: TOPICS.STAR_WARS,
    price: 11.99,
    imgs: [
      "https://m.media-amazon.com/images/I/710QFOna3nL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71FfUKlqMrS._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71FfUKlqMrS._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/51RiV03zgxL._AC_SL1100_.jpg"
    ],
    quantitySell: 30,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "¡Me encanta! Una figura icónica de Star Wars.",
        userName: "funkofan",
        rate: 4,
        date: "22/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment:
          "Esta escena me encantó cuando la vi por primera vez en el cine.",
        userName: "collector_77",
        rate: 5,
        date: "25/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Me da mucha risa recordar que en la película casi utilizaron un mono para representar a Yoda.",
        userName: "starwarsfanatic",
        rate: 3,
        date: "27/03/2024"
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    name: "Casco de Boba Fett The Black Series Premium",
    quantity: 3,
    description:
      "Este casco electrónico premium de Boba Fett de la serie Black es una réplica detallada y realista del icónico casco del famoso cazarrecompensas de Star Wars. Con acabados premium, efectos de desgaste y un visor ajustable, este casco es perfecto para los coleccionistas y fanáticos del rol. Además, cuenta con efectos de sonido electrónicos que recrean los sonidos auténticos del personaje en las películas.",
    category: PRODUCT_CATEGORIES.ACCESORIOS,
    topic: TOPICS.STAR_WARS,
    price: 99.99,
    imgs: [
      "https://cdn.media.amplience.net/i/hasbropulse/E75435L00_SW_B_Helmet_6b_e05103a6-50d4-4919-8eb6-e6bd4c8008bc_pos01?w=1004&fmt=auto",
      "https://cdn.media.amplience.net/i/hasbropulse/E75435L00_SW_B_Helmet_4_4654775d-bac4-46cc-a349-6def262323d4_pos02?w=1004&fmt=auto",
      "https://cdn.media.amplience.net/i/hasbropulse/E75435L00_SW_B_Helmet_2_2b9be77a-b60a-4e01-8a33-53b142e41d7b_pos05?w=1004&fmt=auto",
      "https://cdn.media.amplience.net/i/hasbropulse/E75435L00_SW_E5_B_Helmet1_19_2000px_300DPI_pos06?w=1004&fmt=auto",
      "https://cdn.media.amplience.net/i/hasbropulse/E75435L00_5010993638895_pkg_20_8430746aeb59e1c38af06cf4c19e49732537c084_pos10_18078_withclip?w=1004&fmt=auto"
    ],
    quantitySell: 4,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Casco de calidad superior, perfecto para coleccionistas.",
        userName: "bountyhunter",
        rate: 4,
        date: "28/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment:
          "Espero que este casco me ayude a sobrevivir por si algún día caigo dentro de un Sarlacc.",
        userName: "helmet_lover",
        rate: 4,
        date: "29/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment:
          "Se parece mucho al que sale rodando en la pelea de Geonosis...",
        userName: "mace_windu_fan",
        rate: 4,
        date: "30/03/2024"
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    name: "Ahsoka Tano - Figura de acción The Vintage Collection",
    quantity: 10,
    description:
      "Esta figura de acción de Ahsoka Tano de 3.75 pulgadas (9.5 cm) está inspirada en la esperada serie de acción en vivo Star Wars: Ahsoka en Disney+. La figura cuenta con 2 accesorios de sables de luz, diseño premium y articulación completa, ideal para jugar o exhibir. El empaque está inspirado en los coleccionables originales de Star Wars de los años 70 y 80 con la marca y diseño de Kenner.",
    category: PRODUCT_CATEGORIES.FIGURAS,
    topic: TOPICS.STAR_WARS,
    price: 16.99,
    imgs: [
      "https://cdn.media.amplience.net/i/hasbropulse/F7347_PROD_SW_VIN_DUBOIS_0005_pos02?w=1004&fmt=auto",
      "https://cdn.media.amplience.net/i/hasbropulse/F7347_PROD_SW_VIN_DUBOIS_0002_pos03?w=1004&fmt=auto",
      "https://cdn.media.amplience.net/i/hasbropulse/F7347_PROD_SW_VIN_DUBOIS_0006_pos04?w=1004&fmt=auto",
      "https://cdn.media.amplience.net/i/hasbropulse/F7347_PROD_SW_VIN_DUBOIS_0007_pos05?w=1004&fmt=auto"
    ],
    quantitySell: 8,
    comments: [
      {
        id: crypto.randomUUID(),
        comment:
          "Tiene la misma cara de amargada que en la serie. No sé si eso es bueno o malo...",
        userName: "ahsoka_fan",
        rate: 3,
        date: "30/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "¡Me encanta, una figura más de Sabionda para mi colección!",
        userName: "sky_guy",
        rate: 5,
        date: "02/04/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Me encantó la serie y me encanta la figura.",
        userName: "fulcrum",
        rate: 4,
        date: "02/04/2024"
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    name: "The Star Wars Archives. 1977-1983: Edición 40 aniversario",
    quantity: 12,
    description:
      "Libro de arte que explora el proceso de creación visual de las películas de Star Wars. Este volumen abarca los años 1977-1983 y ofrece una mirada detallada a la creación de la trilogía original. Incluye entrevistas exclusivas, fotos detrás de cámaras, y arte conceptual nunca antes visto. Es una edición especial del 40 aniversario que celebra el legado de Star Wars con una presentación de lujo.",
    category: PRODUCT_CATEGORIES.LIBROS,
    topic: TOPICS.STAR_WARS,
    price: 39.99,
    imgs: [
      "https://m.media-amazon.com/images/I/817vatsz0RL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81ww6Er0BEL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/815fgG8c3IL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81DFKZbzqXL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81pG5QYigxL._SL1500_.jpg"
    ],
    quantitySell: 21,
    comments: [
      {
        id: crypto.randomUUID(),
        comment:
          "Este libro es una verdadera reliquia para los fans de Star Wars.",
        userName: "original_trilogy_fan",
        rate: 5,
        date: "01/04/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Star Wars es lo mejor que pasó en mi vida.",
        userName: "jedi_master",
        rate: 5,
        date: "03/04/2024"
      },
      {
        id: crypto.randomUUID(),
        comment:
          "Es impresionante ver cómo George Lucas revolucionó la industria cinematográfica con su visión única.",
        userName: "cinematic_genius",
        rate: 5,
        date: "04/04/2024"
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    name: "Molinos eléctricos de sal y pimienta de Star Wars (paquete de 2)",
    quantity: 10,
    description:
      "Perfectos para los fans de Star Wars que quieren añadir un toque galáctico a su cocina. Estos molinos son fáciles de usar y vienen con luces LED que se encienden cuando se muelen las especias.",
    category: PRODUCT_CATEGORIES.ACCESORIOS,
    topic: TOPICS.STAR_WARS,
    price: 39.99,
    imgs: [
      "https://m.media-amazon.com/images/I/61feH7vgfqL._AC_SL1001_.jpg",
      "https://m.media-amazon.com/images/I/71YDKeFiyWL._AC_SL1001_.jpg",
      "https://m.media-amazon.com/images/I/61KlDUejBSL._AC_SL1001_.jpg",
      "https://m.media-amazon.com/images/I/61HjXqS3yML._AC_SL1001_.jpg",
      "https://m.media-amazon.com/images/I/713O1jqqRFL._AC_SL1001_.jpg"
    ],
    quantitySell: 40,
    comments: [
      {
        id: crypto.randomUUID(),
        comment:
          "Estoy seguro que utilizando estos molinos para cocinar me convertiré en Maestro Jedi",
        userName: "starwars_chef",
        rate: 5,
        date: "01/04/2024"
      },
      {
        id: crypto.randomUUID(),
        comment:
          "Mi esposa no quería que comprara estas genialidades para nuestra cocina. Ahora los usa siempre.",
        userName: "owen_lars",
        rate: 5,
        date: "02/04/2024"
      },
      {
        id: crypto.randomUUID(),
        comment:
          "¡Soy un adulto independiente, con gustos... bien dementes!",
        userName: "dexter_jettster",
        rate: 4,
        date: "03/04/2024"
      }
    ]
  }
];
