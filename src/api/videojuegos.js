import { PRODUCT_CATEGORIES, TOPICS } from "../utils/globalVariables.js";

export const VIDEOJUEGOS = [
  {//1
    id: crypto.randomUUID(),
    name: "Super Mario Odyssey - Figura",
    quantity: 15,
    description: "Bowser ha secuestrado a Peach una vez más y Mario es el único que puede salvarla. Cargando profundamente en su castillo, Mario se ve obligado a enfrentar a Bowser y sus secuaces una vez más para salvar a la princesa Peach. Recrea tus escenas favoritas de Mario vs Bowser con estas figuras icónicas y auténticas de la línea de figuras Jakks Pacific Super Mario. Cada figura tiene múltiples puntos de articulación. Mario viene con 11 puntos de articulación, Bowers tiene 9 puntos de articulación y Bob-Omb tiene 3 puntos de articulación. Las figuras seguramente complacerán a niños y coleccionistas por igual. Colecciónalos todos. Para edades de 3 años en adelante.",
    category: PRODUCT_CATEGORIES.FIGURAS,
    topic: TOPICS.VIDEOJUEGOS,
    price: 59.99,
    imgs: [
      "https://m.media-amazon.com/images/I/61vFg+YuXPL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/51cx6WO5eJL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/51GpsJdM1uL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61vtymKDwvL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/619aU2BDPwL._AC_SX679_.jpg"
    ],
    quantitySell: 20,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Es un juego increíble, lo mejor de la serie de Mario.",
        userName: "gamer123",
        rate: 5,
        date: "05/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Un clásico moderno, muy entretenido.",
        userName: "marioFan99",
        rate: 4,
        date: "10/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Me gustó, pero algunos niveles son muy fáciles.",
        userName: "casualGamer",
        rate: 3,
        date: "15/03/2024"
      }
    ]
  },
  {//2
    id: crypto.randomUUID(),
    name: "Espada de Link de The Legend of Zelda",
    quantity: 8,
    description: "Conviértete en Link con su espada",
    category: PRODUCT_CATEGORIES.ACCESORIOS,
    topic: TOPICS.VIDEOJUEGOS,
    price: 69.99,
    imgs: [
      "https://m.media-amazon.com/images/I/61q2BdW9bkL._AC_SY550_.jpg",
      "https://m.media-amazon.com/images/I/51HTXJH9CZL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71Jd6M8-8jL._AC_SY550_.jpg",
      "https://m.media-amazon.com/images/I/61JIRm-3RuL._AC_SY550_.jpg",
      "https://m.media-amazon.com/images/I/71EEBttE+3L._AC_SY550_.jpg"
    ],
    quantitySell: 12,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "El mejor juego de la franquicia de Zelda, con una historia increíble.",
        userName: "zeldaFan95",
        rate: 5,
        date: "14/02/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "He salido a la calle con esta espada, pero me perdí muchas veces.",
        userName: "lostInHyrule",
        rate: 4,
        date: "18/02/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Un buen juego, pero algo sobrevalorado en mi opinión.",
        userName: "criticalGamer",
        rate: 3,
        date: "20/02/2024"
      }
    ]
  },
  {//3
    id: crypto.randomUUID(),
    name: "God of War Fallen God",
    quantity: 20,
    description: "Comic precuela de la secuela de God of War con mitología nórdica y combates épicos.",
    category: PRODUCT_CATEGORIES.COMIC,
    topic: TOPICS.VIDEOJUEGOS,
    price: 79.99,
    imgs: [
      "https://imgs.search.brave.com/MMey9fGwowsm428Ypqx7hPmseuYz-Deo-OuY98DYRQw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0LzNj/NjE4ZjkwLTYyNmEt/NDZlNi1iMDA1LTUw/NjE5MDk3YWJiMS9z/Y2FsZS10by13aWR0/aC83NTU",
      "https://imgs.search.brave.com/5CEkEPgHIi42WbUCHQ4EeMd22k04FQd4zNvWU3t71H4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLnRoZWdhbWVy/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDMv/Z29kLW9mLXdhci1j/b21pYy0yLmpwZw",
      "https://imgs.search.brave.com/pNju-8a5S3hbRYvIkd7nkbrIxCMND7hgv0_psQfLLks/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDMvS3JhdG9zLUJs/YWRlcy1vZi1DaGFv/cy5qcGc",
      "https://imgs.search.brave.com/0vGKxFU9NwAP9yiSQbe_j7deHOoxSoY-5S-46Kg1J-Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmNicmltYWdl/cy5jb20vd29yZHBy/ZXNzL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIxLzAzL0tyYXRv/cy1FeG9kdXMuanBn",
      "https://imgs.search.brave.com/GabQlDN7Sn0URywC3D_Jg4O2vw911zP6-2AoJ86ZvI0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ldy5j/b20vdGhtYi85RFpY/cU9qUGJwOHdwTFRo/SUFQSkhka3dNWVU9/LzE1MDB4MC9maWx0/ZXJzOm5vX3Vwc2Nh/bGUoKTptYXhfYnl0/ZXMoMTUwMDAwKTpz/dHJpcF9pY2MoKS9n/d2FyLTEtcGctMDQt/MjAwMC0yOTIyODdk/M2YzZDI0MTVlYTIy/NWUwZGExMjU2NTg1/ZC5qcGc"
    ],
    quantitySell: 25,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Kratos está de regreso y esta vez mejor que nunca.",
        userName: "viking_warrior",
        rate: 5,
        date: "10/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "El combate es excelente, pero la historia no me enganchó tanto.",
        userName: "combatMaster",
        rate: 4,
        date: "12/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Visualmente impresionante, pero esperaba más.",
        userName: "gameCritic",
        rate: 3,
        date: "14/03/2024"
      }
    ]
  },
  {//4
    id: crypto.randomUUID(),
    name: "Spider-Man: Miles Morales -Figura",
    quantity: 10,
    description: "Con más de 80 años de historia del entretenimiento, Marvel se ha convertido en una piedra angular de las colecciones de fanáticos de todo el mundo. Con Marvel Legends, los personajes favoritos de Marvel Comic Universe y Marvel Cinematic Universe están diseñados con detalles y articulación premium para posar y exhibir. Esta figura coleccionable a escala de 6 pulgadas está detallada para parecerse a Miles Morales de Spider-Man: Into the Spider-Verse. Trae la emoción y la maravilla del universo de la zapa a tu colección con Hasbro Dale Legends Spider-Man y otras figuras de acción de la película y de la película de la película (los productos adicionales se venden por separado. Sujeto a disponibilidad.) © 2024 MARVEL © 2024 SPAI HASBRO y todas las marcas comerciales y logotipos relacionados son marcas comerciales de Hasbro, Inc.",
    category: PRODUCT_CATEGORIES.FIGURAS,
    topic: TOPICS.VIDEOJUEGOS,
    price: 49.99,
    imgs: [
      "https://m.media-amazon.com/images/I/61DhUUvV7NL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81vb9ysYR7L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61-TF1GPJfL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61cz1iZbXJL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61kXCobbFoL._AC_SX679_.jpg"
    ],
    quantitySell: 18,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Me gusto",
        userName: "heroicspidey",
        rate: 4,
        date: "18/01/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Pesima calidad, no me sirvio.",
        userName: "actionFanatic",
        rate: 3,
        date: "20/01/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Se la regale a mi sobrino de color, es fanatico de este Spiderman.",
        userName: "peterParkerFan",
        rate: 4,
        date: "22/01/2024"
      }
    ]
  },
  {//5
    id: crypto.randomUUID(),
    name: "Libro para fans de Harry Potter",
    quantity: 12,
    description: "Sos fan de Harry Potter? Entonces necesitas este libro.",
    category: PRODUCT_CATEGORIES.LIBROS,
    topic: TOPICS.VIDEOJUEGOS,
    price: 69.99,
    imgs: [
      "https://m.media-amazon.com/images/I/71Eqtn+vhzL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61-flK2eYCL.jpg",
      "https://m.media-amazon.com/images/I/91HwvxLNp0L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81+p24tsgtL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81FQxtk78ZL._SL1500_.jpg"
    ],
    quantitySell: 16,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "perfecto para los fanáticos de Harry Potter.",
        userName: "wizardMaster",
        rate: 5,
        date: "22/02/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "El mundo es hermoso, y este libro lo es más.",
        userName: "spellCaster99",
        rate: 3,
        date: "25/02/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "La magia se siente increíble, pero esperaba más datos de los personajes.",
        userName: "hogwartsFan",
        rate: 4,
        date: "28/02/2024"
      }
    ]
  },
  {//6
    id: crypto.randomUUID(),
    name: "Figura de Kratos",
    quantity: 30,
    description: "Figura de acción de Kratos en su versión de GoW 4 y GoW Ragnarok.",
    category: PRODUCT_CATEGORIES.FIGURAS,
    topic: TOPICS.VIDEOJUEGOS,
    price: 35.99,
    imgs: [
      "https://m.media-amazon.com/images/I/61Vb-YMeptL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/51Hy2enR3VL._AC_.jpg",
      "https://m.media-amazon.com/images/I/51Z7xMzIEFL._AC_.jpg",
      "https://m.media-amazon.com/images/I/51Fx26ByKKL._AC_.jpg",
      "https://m.media-amazon.com/images/I/81WJgi64WKL._AC_SX679_.jpg"
    ],
    quantitySell: 40,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Excelente calidad, se parece mucho al videojuego.",
        userName: "otakuCollector",
        rate: 5,
        date: "15/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Me encantó la figura, pero el tamaño es más pequeño de lo esperado.",
        userName: "dbzFan",
        rate: 4,
        date: "18/03/2024"
      }
    ]
  },
  {//7
    id: crypto.randomUUID(),
    name: "The Art of Star Wars Jedi: Survivor",
    quantity: 25,
    description: "El primer volumen del famoso juego Star Wars Jedi: Survivor.",
    category: PRODUCT_CATEGORIES.LIBROS,
    topic: TOPICS.VIDEOJUEGOS,
    price: 9.99,
    imgs: [
      "https://m.media-amazon.com/images/I/81orIeCT0WL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71nZfTxIFpL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71rtRRgZFWL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81tG7BrPp3L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71j1n8s7+bL._SL1500_.jpg"
    ],
    quantitySell: 30,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Un clásico, perfecto para empezar con el juego.",
        userName: "shinobiReader",
        rate: 5,
        date: "10/04/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Me atrapó la historia desde el primer juego.",
        userName: "ninjalover",
        rate: 5,
        date: "12/04/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Soy animeFan prefiero los juegos de ninjas pero me compre este libro para ver si me animo, osea el juego usa espadas por ende pense que podria jugarle. QUIERO SENTIRME UN NINJA KAWAII.",
        userName: "animeFan",
        rate: 4,
        date: "15/04/2024"
      }
    ]
  },
  {//8
    id: crypto.randomUUID(),
    name: "Control Inalámbrico PS5",
    quantity: 50,
    description: "El controlador inalámbrico para PlayStation 5 con vibración háptica.",
    category: PRODUCT_CATEGORIES.ACCESORIOS,
    topic: TOPICS.VIDEOJUEGOS,
    price: 69.99,
    imgs: [
      "https://m.media-amazon.com/images/I/51PmeLGEkML._SX522_.jpg",
      "https://m.media-amazon.com/images/I/51s-PN6gcGL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/41ep9IdP-jL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/719RuhyQX4L._SX522_.jpg",
      "https://m.media-amazon.com/images/I/61-VE22RMCL._SX522_.jpg"
    ],
    quantitySell: 70,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "El mejor control que he usado, la vibración es increíble.",
        userName: "proGamer",
        rate: 5,
        date: "20/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Es muy cómodo, aunque se siente un poco caro.",
        userName: "casualPlayer",
        rate: 4,
        date: "22/03/2024"
      }
    ]
  },
  {//9
    id: crypto.randomUUID(),
    name: "Halo Encyclopedia",
    quantity: 10,
    description: "El universo de Halo es increíblemente vasto en escala y sorprendentemente elaborado en detalles, contando historias ricas llenas de personajes audaces, mundos impresionantes y conflictos emocionantes. Para celebrar el 20.º aniversario de Halo, Dark Horse y 343 Industries se han unido para ofrecer la guía más definitiva del universo hasta el momento. La Enciclopedia de Halo, que abarca más de cien milenios y más de cien mil años luz, captura dos décadas de narración con arte asombroso e inédito y la exploración más detallada de los numerosos personajes, mundos y tecnologías del universo que se haya creado jamás.",
    category: PRODUCT_CATEGORIES.COMIC,
    topic: TOPICS.VIDEOJUEGOS,
    price: 14.99,
    imgs: [
      "https://m.media-amazon.com/images/I/81XTeFyj9KL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61yB6rtHxkL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71TVTmuUkyL._SL1333_.jpg",
      "https://m.media-amazon.com/images/I/71ar0TOGpFL._SL1333_.jpg",
      "https://m.media-amazon.com/images/I/71RSjAA0npL._SL1333_.jpg"
    ],
    quantitySell: 20,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Una de las mejores enciclopedias del universo de Halo.",
        userName: "haloFan",
        rate: 5,
        date: "02/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Es un buen cómic, pero muy oscuro para mi gusto.",
        userName: "comicReader",
        rate: 3,
        date: "05/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Obligatorio para cualquier fan de Halo.",
        userName: "jokerLover",
        rate: 5,
        date: "10/03/2024"
      }
    ]
  },
  {//10
    id: crypto.randomUUID(),
    name: "Exquisite Gaming: Borderlands 3: Claptrap - Soporte original para teléfono móvil y controlador de juegos, soporte para dispositivos, cable Guys, figura con licencia de caja de cambios",
    quantity: 20,
    description: "Figura del juego Borderland.",
    category: PRODUCT_CATEGORIES.FIGURAS,
    topic: TOPICS.VIDEOJUEGOS,
    price: 19.99,
    imgs: [
      "https://m.media-amazon.com/images/I/61tQjwKs8bL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/61jJL2MHjEL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/61o0ONcmXcL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/617FA15nnuL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/61-T-MlKKjL._AC_SY879_.jpg"
    ],
    quantitySell: 35,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Una excelente figura para cualquier amante de los videojuegos y la cultura pop.",
        userName: "retroGamer",
        rate: 5,
        date: "12/04/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Muy interesante, aunque si le cae leche encima cuesta quitar la mancha.",
        userName: "scifiReader",
        rate: 4,
        date: "15/04/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "La trama del juego es entretenida, ahora quier algo que me recuerde al juego cerca.",
        userName: "jeffBuff",
        rate: 3,
        date: "18/04/2024"
      }
    ]
  }
];
