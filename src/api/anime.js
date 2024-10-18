import { PRODUCT_CATEGORIES, TOPICS } from "../utils/globalVariables";

export const VIDEOJUEGOS = [{
    id: crypto.randomUUID(),
    name: "Attack on Titan",
    quantity: 25,
    description: "En un mundo donde la humanidad vive dentro de ciudades amuralladas para protegerse de los gigantes devoradores de hombres, Eren Yeager y sus amigos Mikasa y Armin se unen a la milicia para luchar contra estos monstruos.",
    category: PRODUCT_CATEGORIES.MANGA,
    topic: TOPICS.ANIME,
    price: 85.99,
    imgs: [
      "https://m.media-amazon.com/images/I/91VlIW1pn8L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81jfHZNF43L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71++xYy6KvL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71-b7FETzIL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71-b7FETzIL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81s7Dq6cjgL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81SWGoZxqJL._SL1500_.jpg"
    ],
    quantitySell:300,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Increíble trama y personajes, no puedo esperar a la próxima temporada.",
        userName: "Wonder123",
        rate: 5,
        date: "05/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "La animación es espectacular, pero a veces es muy oscura.",
        userName: "animeFan456",
        rate: 4,
        date: "06/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Demasiados giros, pero eso es lo que lo hace emocionante.",
        userName: "ErenLover",
        rate: 5,
        date: "07/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Me encanta, pero algunos personajes son difíciles de seguir.",
        userName: "MikasaForever",
        rate: 4,
        date: "08/03/2024"
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    name: "Fullmetal Alchemist: Brotherhood",
    quantity: 64,
    description: "La historia sigue a dos hermanos, Edward y Alphonse Elric, que son alquimistas estatales en busca de la Piedra Filosofal para restaurar sus cuerpos después de un intento fallido de traer de vuelta a la vida a su madre mediante la alquimia.",
    category: PRODUCT_CATEGORIES.MANGA,
    topic: TOPICS.ANIME,
    price: 120.50,
    imgs: [
      "https://m.media-amazon.com/images/I/41RTcYyXFXL._SY445_SX342_.jpg",
      "https://m.media-amazon.com/images/I/51WhAAf0EXL._SY445_SX342_.jpg",
      "https://m.media-amazon.com/images/I/717iw0tucML._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71rSsOJkvAL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61f4LC0S5NL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71vK7LxK7yL._SL1500_.jpg"
    ],
    quantitySell:250,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Una obra maestra, cada episodio es un deleite.",
        userName: "Alchemist77",
        rate: 5,
        date: "05/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "El desarrollo de los personajes es excepcional.",
        userName: "BrotherhoodFan",
        rate: 5,
        date: "06/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Me gustó mucho, aunque el final me dejó con ganas de más.",
        userName: "EdwardElric99",
        rate: 4,
        date: "07/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Recomiendo verlo a todos los fans del anime.",
        userName: "AnimeLover88",
        rate: 5,
        date: "08/03/2024"
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    name: "Death Note",
    quantity: 37,
    description: "La historia sigue a Light Yagami, un estudiante de secundaria que descubre un cuaderno sobrenatural llamado Death Note que le permite matar a cualquier persona cuyo nombre escriba en él.",
    category: PRODUCT_CATEGORIES.MANGA,
    topic: TOPICS.ANIME,
    price: 45.75,
    imgs: [
      "https://m.media-amazon.com/images/I/71-DDPOB76L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/51S7T9tAe6L._SY445_SX342_.jpg",
      "https://m.media-amazon.com/images/I/71teEs2FRpL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81iDNjn-r3L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61Kx4vs5yCL._SY445_SX342_.jpg",
      "https://m.media-amazon.com/images/I/81+P+MsigBL._SL1500_.jpg"
    ],
    quantitySell:150,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Un thriller psicológico impresionante, la tensión es constante.",
        userName: "LightFan2024",
        rate: 5,
        date: "05/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Me encanta cómo se desarrolla la historia, realmente adictivo.",
        userName: "ShinigamiKing",
        rate: 5,
        date: "06/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "El final me sorprendió, pero creo que podría haber sido mejor.",
        userName: "KiraSupporter",
        rate: 4,
        date: "07/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Los personajes son complejos y bien desarrollados.",
        userName: "MisaMisaFan",
        rate: 5,
        date: "08/03/2024"
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    name: "My Hero Academia",
    quantity: 50,
    description: "En un mundo donde la mayoría de la población tiene superpoderes, Izuku Midoriya, un chico sin poderes, sueña con convertirse en un héroe. A pesar de su falta de habilidades, recibe la oportunidad de asistir a la prestigiosa U.A. High School.",
    category: PRODUCT_CATEGORIES.MANGA,
    topic: TOPICS.ANIME,
    price: 79.99,
    imgs: [
      "https://m.media-amazon.com/images/I/81fCzl5vTtL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81HJRXI4cDL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81G4Gy7S4xL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/811WD+Wwf9L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81d6Cqu7GoL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81RTlZu0GJL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81eenB2p1pL._SL1500_.jpg"
    ],
    quantitySell:600,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Inspirador y lleno de acción, me encanta cada episodio.",
        userName: "HeroicFan",
        rate: 5,
        date: "05/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Los personajes son entrañables y la historia es emocionante.",
        userName: "DekuLover",
        rate: 4,
        date: "06/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Algunos arcos son más lentos, pero en general es genial.",
        userName: "VillainWatcher",
        rate: 3,
        date: "07/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Me encanta el desarrollo de Midoriya, un verdadero héroe.",
        userName: "AllmightFan",
        rate: 5,
        date: "08/03/2024"
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    name: "Demon Slayer",
    quantity: 45,
    description: "Tanjiro Kamado, un joven vendedor de carbón, se convierte en cazador de demonios después de que su familia es asesinada por demonios y su hermana Nezuko es transformada en uno de ellos. Juntos, luchan contra las fuerzas del mal.",
    category: PRODUCT_CATEGORIES.MANGA,
    topic: TOPICS.ANIME,
    price: 89.99,
    imgs: [
      "https://m.media-amazon.com/images/I/810Isi4YasS._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91HqtrlVF3L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91xdWQkp9UL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81zhRsRZCaL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81Qj2qAfAzL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81OZ2Y2COjL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81Qj2qAfAzL._SL1500_.jpg"
    ],
    quantitySell:459,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "La animación es impresionante, una de las mejores que he visto.",
        userName: "TanjiroFan",
        rate: 5,
        date: "05/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Los personajes son entrañables y la historia es muy emotiva.",
        userName: "NezukoLover",
        rate: 5,
        date: "06/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Algunos episodios son un poco lentos, pero la acción es increíble.",
        userName: "DemonHunter",
        rate: 4,
        date: "07/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Me encanta la relación entre Tanjiro y Nezuko, muy conmovedora.",
        userName: "SisterBond",
        rate: 5,
        date: "08/03/2024"
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    name: "One Piece",
    quantity: 100,
    description: "La historia sigue a Monkey D. Luffy y su tripulación en su búsqueda del One Piece, el tesoro más grande del mundo, mientras enfrentan enemigos poderosos y descubren islas misteriosas.",
    category: PRODUCT_CATEGORIES.MANGA,
    topic: TOPICS.ANIME,
    price: 39.99,
    imgs: [
      "https://m.media-amazon.com/images/I/81u8P2490RL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/816mA4AA0PL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81zoRUxk26S._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81nZRYqsKPL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81AJ50vbaIL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91c5+SaxrhL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91NxYvUNf6L._SL1500_.jpg"
    ],
    quantitySell:590,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Una aventura épica que nunca decepciona, siempre me hace reír.",
        userName: "StrawHatFan",
        rate: 5,
        date: "05/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "El desarrollo de la historia es impresionante, cada arco es único.",
        userName: "Nakama2024",
        rate: 5,
        date: "06/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Algunos episodios son un poco largos, pero vale la pena.",
        userName: "PirateLover",
        rate: 4,
        date: "07/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Los personajes son memorables y la música es genial.",
        userName: "MusicFan",
        rate: 5,
        date: "08/03/2024"
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    name: "Sword Art Online",
    quantity: 30,
    description: "En el año 2022, miles de jugadores quedan atrapados en un videojuego de realidad virtual. Si mueren en el juego, también mueren en la vida real. Kirito, un jugador solitario, debe encontrar la manera de escapar.",
    category: PRODUCT_CATEGORIES.MANGA,
    topic: TOPICS.ANIME,
    price: 75.00,
    imgs: [
      "https://m.media-amazon.com/images/I/81mVoZWR6wL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/812OptdrRAL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81ijaH0yoEL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81smunDUWqL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/811b5NNRnnL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81snt4rC9aL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/8192k0UH1lL._SL1500_.jpg"
    ],
    quantitySell:910,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Una premisa fascinante y emocionante, me mantuvo al borde del asiento.",
        userName: "KiritoFan",
        rate: 5,
        date: "05/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Los personajes son interesantes, pero algunos arcos son un poco lentos.",
        userName: "AsunaSupporter",
        rate: 4,
        date: "06/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "La animación es hermosa, especialmente en las escenas de batalla.",
        userName: "GameLover",
        rate: 5,
        date: "07/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Me gusta la mezcla de acción y romance, aunque a veces es predecible.",
        userName: "RomanceFan",
        rate: 3,
        date: "08/03/2024"
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    name: "Hunter x Hunter",
    quantity: 55,
    description: "Gon Freecss, un joven que busca convertirse en un Hunter para encontrar a su padre, se embarca en una aventura llena de desafíos y encuentros extraordinarios.",
    category: PRODUCT_CATEGORIES.MANGA,
    topic: TOPICS.ANIME,
    price: 62.50,
    imgs: [
      "https://m.media-amazon.com/images/I/815uHbvvu1L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81Pf2GSz0-L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81049wToL4L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81HlaWFVKdL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/815cvOmanIL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/814iJ38ANPL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81QotZtmbcL._SL1500_.jpg"
    ],
    quantitySell:104,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Una de las mejores historias de aventura que he visto, llena de giros.",
        userName: "GonFan",
        rate: 5,
        date: "05/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "El desarrollo de los personajes es increíble, cada uno tiene su propia historia.",
        userName: "KilluaLover",
        rate: 5,
        date: "06/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Algunos arcos son más lentos, pero la historia es satisfactoria en general.",
        userName: "ZoldyckFan",
        rate: 4,
        date: "07/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Los combates son estratégicos y emocionantes, me encanta.",
        userName: "BattleFan",
        rate: 5,
        date: "08/03/2024"
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    name: "Attack on Titan",
    quantity: 40,
    description: "En un mundo donde la humanidad está al borde de la extinción debido a gigantes devoradores de hombres, Eren Yeager y sus amigos se unen a la lucha para liberar a la humanidad de esta amenaza.",
    category: PRODUCT_CATEGORIES.FIGURAS,
    topic: TOPICS.ANIME,
    price: 99.99,
    imgs: [
      "https://m.media-amazon.com/images/I/619QqcluEML._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71CXK0zvNRL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71CXK0zvNRL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61m6viu3i5L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81vGteMDQBL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71TkKatJhIL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/819ysDlDmdL._AC_SL1500_.jpg"
    ],
    quantitySell:414,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Una historia intensa y llena de giros, no puedo dejar de ver.",
        userName: "ErenFan",
        rate: 5,
        date: "05/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Los personajes son profundos y la trama es muy intrigante.",
        userName: "MikasaLover",
        rate: 5,
        date: "06/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "La animación es espectacular, especialmente en las escenas de acción.",
        userName: "TitanHunter",
        rate: 4,
        date: "07/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Algunos episodios son muy oscuros, pero eso lo hace único.",
        userName: "DarkFan",
        rate: 4,
        date: "08/03/2024"
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    name: "Fullmetal Alchemist: Brotherhood",
    quantity: 60,
    description: "Los hermanos Edward y Alphonse Elric utilizan la alquimia en su búsqueda para recuperar lo que han perdido tras un experimento fallido. La historia explora temas de sacrificio, amistad y redención.",
    category: PRODUCT_CATEGORIES.FIGURAS,
    topic: TOPICS.ANIME,
    price: 89.99,
    imgs: [
      "https://m.media-amazon.com/images/I/71XxKM+GmFL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71XxKM+GmFL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/41BbkPBaU2L._AC_.jpg",
      "https://m.media-amazon.com/images/I/41Xw5ZbYaSL._AC_.jpg",
      "https://m.media-amazon.com/images/I/515M8Epf34L._AC_.jpg",
      "https://m.media-amazon.com/images/I/51KZxPOaPjL._AC_.jpg"
    ],
    quantitySell:146,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Una obra maestra, la historia es profunda y conmovedora.",
        userName: "AlchemistFan",
        rate: 5,
        date: "05/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Los personajes son memorables y la animación es de alta calidad.",
        userName: "BrotherhoodLover",
        rate: 5,
        date: "06/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "La mezcla de acción y drama es perfecta, altamente recomendable.",
        userName: "EpicFan",
        rate: 5,
        date: "07/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Algunos episodios son más lentos, pero la historia compensa.",
        userName: "StorySeeker",
        rate: 4,
        date: "08/03/2024"
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    name: "My Hero Academia",
    quantity: 70,
    description: "En un mundo donde la mayoría de las personas tienen superpoderes, Izuku Midoriya, un chico sin poderes, sueña con convertirse en un héroe. Su vida cambia cuando conoce al héroe número uno, All Might.",
    category: PRODUCT_CATEGORIES.FIGURAS,
    topic: TOPICS.ANIME,
    price: 79.99,
    imgs: [
      "https://m.media-amazon.com/images/I/61lQOPZHVUL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71EMBw-zcuL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71QxPJ1XHgL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71UP7aH4W9L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61iXYfVxf3L._AC_SL1500_.jpg",
      ""
    ],
    quantitySell:467,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Un anime inspirador con personajes entrañables y emocionantes.",
        userName: "HeroFan",
        rate: 5,
        date: "05/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "La evolución de los personajes es impresionante, siempre hay algo nuevo.",
        userName: "MidoriyaSupporter",
        rate: 5,
        date: "06/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Algunos episodios son un poco repetitivos, pero la acción es genial.",
        userName: "ActionLover",
        rate: 4,
        date: "07/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Me encanta la mezcla de humor y acción, muy entretenido.",
        userName: "ComedyFan",
        rate: 5,
        date: "08/03/2024"
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    name: "My Hero Academia",
    quantity: 70,
    description: "En un mundo donde la mayoría de las personas tienen superpoderes, Izuku Midoriya, un chico sin poderes, sueña con convertirse en un héroe. Su vida cambia cuando conoce al héroe número uno, All Might.",
    category: PRODUCT_CATEGORIES.FIGURAS,
    topic: TOPICS.ANIME,
    price: 79.99,
    imgs: [
      "https://m.media-amazon.com/images/I/61ixcOIgAJL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/6100fl3rKTL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61qUnqkp4TL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61QDmEoXMUL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61ixcOIgAJL._AC_SL1500_.jpg"
    ],
    quantitySell:467,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Un anime inspirador con personajes entrañables y emocionantes.",
        userName: "HeroFan",
        rate: 5,
        date: "05/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "La evolución de los personajes es impresionante, siempre hay algo nuevo.",
        userName: "MidoriyaSupporter",
        rate: 5,
        date: "06/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Algunos episodios son un poco repetitivos, pero la acción es genial.",
        userName: "ActionLover",
        rate: 4,
        date: "07/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Me encanta la mezcla de humor y acción, muy entretenido.",
        userName: "ComedyFan",
        rate: 5,
        date: "08/03/2024"
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    name: "Death Note",
    quantity: 50,
    description: "Un estudiante de secundaria, Light Yagami, encuentra un cuaderno que le permite matar a cualquier persona cuyo nombre escriba en él. Su lucha contra el detective L se convierte en un juego mortal de ingenio.",
    category: PRODUCT_CATEGORIES.FIGURAS,
    topic: TOPICS.ANIME,
    price: 69.99,
    imgs: [
      "https://m.media-amazon.com/images/I/61r-WUXGLQL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/6168cQ8eNeL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61yg8nentbL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71hh3IRkD6L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71hHnNlXYtL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81YXBNycYwL._AC_SL1500_.jpg"
    ],
    quantitySell:679,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Una trama intrigante y llena de giros inesperados, no puedes dejar de mirar.",
        userName: "LightFan",
        rate: 5,
        date: "05/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Los personajes son complejos y la historia es muy profunda.",
        userName: "LoverOfThrills",
        rate: 5,
        date: "06/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Es un poco oscuro, pero eso lo hace único y fascinante.",
        userName: "DarkStoryFan",
        rate: 4,
        date: "07/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "El duelo intelectual entre Light y L es brillante.",
        userName: "MindGames",
        rate: 5,
        date: "08/03/2024"
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    name: "Death Note 2",
    quantity: 50,
    description: "Un estudiante de secundaria, Light Yagami, encuentra un cuaderno que le permite matar a cualquier persona cuyo nombre escriba en él. Su lucha contra el detective L se convierte en un juego mortal de ingenio.",
    category: PRODUCT_CATEGORIES.FIGURAS,
    topic: TOPICS.ANIME,
    price: 69.99,
    imgs: [
      "https://m.media-amazon.com/images/I/61kqyt3gB2L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61yMhg2L0zL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61KTmcmjQfL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/614ikEWUL0L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61hGeDcNftL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81GmzQ8VeVL._AC_SL1500_.jpg"
    ],
    quantitySell:679,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Una trama intrigante y llena de giros inesperados, no puedes dejar de mirar.",
        userName: "LightFan",
        rate: 5,
        date: "05/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Los personajes son complejos y la historia es muy profunda.",
        userName: "LoverOfThrills",
        rate: 5,
        date: "06/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Es un poco oscuro, pero eso lo hace único y fascinante.",
        userName: "DarkStoryFan",
        rate: 4,
        date: "07/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "El duelo intelectual entre Light y L es brillante.",
        userName: "MindGames",
        rate: 5,
        date: "08/03/2024"
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    name: "Demon Slayer: Kimetsu no Yaiba",
    quantity: 80,
    description: "Tanjiro Kamado, un joven cazador de demonios, busca venganza y la cura para su hermana Nezuko, quien ha sido transformada en un demonio. Juntos, enfrentan poderosos enemigos en su viaje.",
    category: PRODUCT_CATEGORIES.FIGURAS,
    topic: TOPICS.ANIME,
    price: 85.00,
    imgs: [
      "https://m.media-amazon.com/images/I/715e-WFSAqL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/51xlIM2i8rL._AC_SL1333_.jpg",
      "https://m.media-amazon.com/images/I/51zOaoV7zRL._AC_SL1000_.jpg",
      "https://m.media-amazon.com/images/I/51aYKitoxpL._AC_SL1000_.jpg",
      "https://m.media-amazon.com/images/I/51QcfArqU7L._AC_SL1000_.jpg"
    ],
    quantitySell:793,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "La animación es impresionante, especialmente en las escenas de batalla.",
        userName: "TanjiroFan",
        rate: 5,
        date: "05/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Una historia conmovedora sobre la familia y la lucha contra el mal.",
        userName: "NezukoSupporter",
        rate: 5,
        date: "06/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Los personajes son entrañables y la trama es emocionante.",
        userName: "DemonHunter",
        rate: 4,
        date: "07/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Me encanta la mezcla de acción y emociones, muy bien logrado.",
        userName: "ActionFan",
        rate: 5,
        date: "08/03/2024"
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    name: "Demon Slayer: Kimetsu no Yaiba 2",
    quantity: 80,
    description: "Tanjiro Kamado, un joven cazador de demonios, busca venganza y la cura para su hermana Nezuko, quien ha sido transformada en un demonio. Juntos, enfrentan poderosos enemigos en su viaje.",
    category: PRODUCT_CATEGORIES.FIGURAS,
    topic: TOPICS.ANIME,
    price: 85.00,
    imgs: [
      "https://m.media-amazon.com/images/I/71jZWeVWFlL._AC_SL1428_.jpg",
      "https://m.media-amazon.com/images/I/516Ih4w5NOL._AC_SL1333_.jpg",
      "https://m.media-amazon.com/images/I/41TR2omhnuL._AC_SL1050_.jpg",
      "https://m.media-amazon.com/images/I/41AQ5t-gmDL._AC_SL1050_.jpg",
      "https://m.media-amazon.com/images/I/41kI5DQo1wL._AC_SL1050_.jpg",
      "https://m.media-amazon.com/images/I/41stMzwWuQL._AC_SL1050_.jpg"
    ],
    quantitySell:793,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "La animación es impresionante, especialmente en las escenas de batalla.",
        userName: "TanjiroFan",
        rate: 5,
        date: "05/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Una historia conmovedora sobre la familia y la lucha contra el mal.",
        userName: "NezukoSupporter",
        rate: 5,
        date: "06/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Los personajes son entrañables y la trama es emocionante.",
        userName: "DemonHunter",
        rate: 4,
        date: "07/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Me encanta la mezcla de acción y emociones, muy bien logrado.",
        userName: "ActionFan",
        rate: 5,
        date: "08/03/2024"
      }
    ]
  }
]