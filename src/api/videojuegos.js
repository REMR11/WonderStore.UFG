import { PRODUCT_CATEGORIES, TOPICS } from "../utils/globalVariables";

export const VIDEOJUEGOS = [
  {//1
    id: crypto.randomUUID(),
    name: "Super Mario Odyssey",
    quantity: 15,
    description: "Un juego de aventuras en 3D donde Mario explora diferentes mundos.",
    category: PRODUCT_CATEGORIES.VIDEOJUEGOS,
    topic: TOPICS.VIDEOJUEGOS,
    price: 59.99,
    imgs: [
      "https://juegosdigitaleselsalvador.com/files/images/productos/1644882134-1637878223-super-mario-odyssey.jpg",
      "https://supermario.nintendo.com/assets/img/home/mario.png",
      "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/9541167/mario_odyssey_review_screen_1.jpg?quality=90&strip=all&crop=21.875,0,56.25,100",
      "https://i.blogs.es/juegos/14037/mario_switch/fotos/noticias/mario_switch-3882396.jpg",
      "https://cdn.forbes.com.mx/2017/11/1.jpg"
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
    name: "The Legend of Zelda: Breath of the Wild",
    quantity: 8,
    description: "Un juego de mundo abierto con mecánicas de exploración y combate.",
    category: PRODUCT_CATEGORIES.VIDEOJUEGOS,
    topic: TOPICS.VIDEOJUEGOS,
    price: 69.99,
    imgs: [
      "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
      "https://i.pcmag.com/imagery/reviews/05kV0iHXtm9IkEu1PMkh9pX-4.fit_scale.size_760x427.v1569481406.jpg",
      "https://img.tapimg.net/market/images/edb77013a1412751be594247fd7ce0c9.png?imageView2/2/w/720/h/720/q/80/format/jpg/interlace/1/ignore-error/1",
      "https://m.media-amazon.com/images/I/71dbDXZOZXL.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZEhK22JCL5UrP5zD4qXXU2aKX7ojHC8z6ww&s"
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
        comment: "La exploración es impresionante, pero me perdí muchas veces.",
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
    name: "God of War Ragnarök",
    quantity: 20,
    description: "La secuela de God of War con mitología nórdica y combates épicos.",
    category: PRODUCT_CATEGORIES.VIDEOJUEGOS,
    topic: TOPICS.VIDEOJUEGOS,
    price: 79.99,
    imgs: [
      "https://juegosdigitaleselsalvador.com/files/images/productos/1643413181-god-of-war-ragnarok-ps4-pre-orden.jpg",
      "https://blog.playstation.com/tachyon/2024/09/c31c0e1cae38ef6a23c353e31d87e8b1cd57b700.jpeg",
      "https://www.cnet.com/a/img/resize/89dbaa32a615424f1d2014b711c4b78132c789a7/hub/2022/11/03/fc97686c-2635-4cbc-a65a-a42965e01f98/1-5.png?auto=webp&fit=crop&height=675&width=1200",
      "https://assetsio.gnwcdn.com/god-war-ragnarok-2799417.png?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/11/God-of-War-Ragnarok-Kratos-Rage.jpg"
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
    name: "Spider-Man: Miles Morales",
    quantity: 10,
    description: "Un juego de acción donde controlas a Miles Morales como Spider-Man.",
    category: PRODUCT_CATEGORIES.VIDEOJUEGOS,
    topic: TOPICS.VIDEOJUEGOS,
    price: 49.99,
    imgs: [
      "https://www.juegosdigitaleselsalvador.com/files/images/productos/1700783848-marvel-spider-man-miles-morales-ps5-0.jpg",
      "https://cdn2.unrealengine.com/inspiration-marvels-spider-man-miles-morales-3840x2160-ba596ec24d23.jpg",
      "https://i.blogs.es/29f60b/00000/1366_2000.jpeg",
      "https://i.ebayimg.com/images/g/~hcAAOSw2wJkbvBV/s-l1600.jpg",
      "https://elcomercio.pe/resizer/f0E9DnA5Axlt6jVsceZIYgcRiwQ=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/VOWLYBAJRRA35HKTQHZPHUP3LQ.webp"
    ],
    quantitySell: 18,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Gran historia y jugabilidad, pero un poco corto.",
        userName: "heroicspidey",
        rate: 4,
        date: "18/01/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "El combate se siente fluido, pero la campaña es muy breve.",
        userName: "actionFanatic",
        rate: 3,
        date: "20/01/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Muy entretenido, pero prefiero el juego original.",
        userName: "peterParkerFan",
        rate: 4,
        date: "22/01/2024"
      }
    ]
  },
  {//5
    id: crypto.randomUUID(),
    name: "Hogwarts Legacy",
    quantity: 12,
    description: "Un RPG ambientado en el mundo mágico de Harry Potter.",
    category: PRODUCT_CATEGORIES.VIDEOJUEGOS,
    topic: TOPICS.VIDEOJUEGOS,
    price: 69.99,
    imgs: [
      "https://image.api.playstation.com/vulcan/ap/rnd/202208/0921/dR9KJAKDW2izPbptHQbh3rnj.png",
      "https://variety.com/wp-content/uploads/2023/11/hogwarts-legacy-deluxe-edition-featured.jpg",
      "https://assets.xboxservices.com/assets/f0/56/f056f9e2-ecdb-43fc-a6de-36ee781b1eaf.jpg?n=Hogwarts-Legacy_Gallery_7_1350x759.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGFeuYkNmgNta0nnld5N3AgHJ5of_AUnpDwA&s",
      "https://images.ladbible.com/resize?type=webp&quality=70&width=3840&fit=contain&gravity=auto&url=https://images.ladbiblegroup.com/v3/assets/bltbc1876152fcd9f07/blt98425bf1d3e3dcf1/66a8c2470e336490d2236c51/hoggy.jpg"
    ],
    quantitySell: 16,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Un juego mágico, perfecto para los fanáticos de Harry Potter.",
        userName: "wizardMaster",
        rate: 5,
        date: "22/02/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "El mundo es hermoso, pero las misiones son un poco repetitivas.",
        userName: "spellCaster99",
        rate: 3,
        date: "25/02/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "La magia se siente increíble, pero esperaba más interacción con personajes.",
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
