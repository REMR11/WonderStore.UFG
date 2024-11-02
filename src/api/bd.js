import { TOPICS, PRODUCT_CATEGORIES } from "../utils/globalVariables.js"
import { ANIME_PRODUCTS } from "./anime.js";
import { GOT } from "./got.js";
import { HOTD } from "./hotd.js";
import { STAR_WARS } from "./star-wars.js";
import { VIDEOJUEGOS } from "./videojuegos.js";

//EJEMPLO DEL MODELO DE LOS PRODUCTOS

//YA SE QUE NO ES DE MARVEL PERO NO ME DI CUENTA CUANDO LO HACIA
// export const PRODUCTS = [
//   {
//     id: crypto.randomUUID(),
//     name: "Flash Point",
//     quantity: 10,
//     description: "Cómic de Flash donde se narran los sucesos de Flash",
//     category: PRODUCT_CATEGORIES.COMIC,
//     topic: TOPICS.MARVEL,
//     price: 25.00,
//     imgss: ["https://m.media-amazon.com/images/I/91dXNvO2fML._AC_UF894,1000_QL80_.jpg", "https://m.media-amazon.com/images/M/MV5BMzc3Y2Q1ZTAtNjViNi00ZDljLWI3NGUtY2FjZGQ3Y2FiNjI3XkEyXkFqcGc@._V1_.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWYzGc1NwnblFlKXnlRhjGkksJ4_Cpw0475A&s", "https://static.wikia.nocookie.net/comicdc/images/6/66/Flashpoint_Vol_2_5.jpg/revision/latest?cb=20200427184244&path-prefix=es", "https://i0.wp.com/www.comicbookwire.com/wp-content/uploads/2020/05/The-World-of-Flashpoint-Featuring-the-Flash.jpg?fit=750%2C1154&ssl=1"],//5 Imágenes obligatorias
//     quantitySell: 12,
//     comments: [
//       {
//         id: crypto.randomUUID(),
//         comment: "Buenísimo cómic, la serie no le fue del todo fiel mucho menos esa película KK",
//         userName: "patitoManosLargas",
//         rate: 5,
//         date: "01/02/2024"//Dia-Mes-Año
//       }
//     ]
//   },
// ]

const Marvel = [
  {
    id: crypto.randomUUID(),
    name: "the amazing spider-man (2022)#61",
    quantity: 20,
    description: "¡LAS 8 MUERTES DE SPIDER-MAN COMIENZAN! El mundo ha cambiado, Doctor Doom es el Hechicero Supremo, pero no tiene planes de pasar su tiempo como su predecesor... Cada año, Doctor Strange usaría cada onza de su poder y experiencia para salvar al mundo de un dios malvado y sus vástagos. Este año, Doom está delegando esta tarea a... ¡¿SPIDER-MAN?! ¡El líder de Latveria le ha dado a Spider-Man un nuevo traje con poderes mágicos y OCHO VIDAS EXTRA con las que salvar al mundo! Verdadero creyente, no serán suficientes...",
    category: PRODUCT_CATEGORIES.COMIC,
    topic: TOPICS.MARVEL,
    price: 20.00,
    imgs: [
      "https://cdn.marvel.com/u/prod/marvel/i/mg/f/03/66c72182c4578/clean.jpg",
      "https://cdn.marvel.com/u/prod/marvel/i/mg/5/03/66c72183641d1/clean.jpg",
      "https://cdn.marvel.com/u/prod/marvel/i/mg/9/e0/66e1ced8f3734/clean.jpg",
      "https://cdn.marvel.com/u/prod/marvel/i/mg/c/80/66e1cedc371e6/clean.jpg",
      "https://atomicbooks.com/cdn/shop/products/amspiderman61b_1600x.jpg?v=1615243920"
    ],
    quantitySell: 30,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "parece que otra vez veremos sufrir a nuestra araña favorita es una pena..",
        userName: "peterbparker",
        rate: 4,
        date: "06/05/2024",
      },
      {
        id: crypto.randomUUID(),
        comment: "Las ocho muertes de spiderman suena muy emocionante ",
        userName: "marvellove",
        rate: 5,
        date: "07/05/2024",
      },
      {
        id: crypto.randomUUID(),
        comment: "que les pasa a los creadores no lo quieren pobrecito",
        userName: "ilovepeter",
        rate: 5,
        date: "06/05/2024",
      },
      {
        id: crypto.randomUUID(),
        comment: "doctor Doom es el hechicero",
        userName: "doctordoom",
        rate: 5,
        date: "06/05/2024",
      }
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "wolverine(2024)#1",
    quantity: 20,
    description: "¡LA LEYENDA COMIENZA DE NUEVO EN LA NUEVA SERIE EN CURSO RESISTENTE AL ADAMANTIUM! Hay un asesino en el bosque, y cuando el intento de WOLVERINE de reconciliarse se ve frustrado, un VIEJO ENEMIGO resurgirá y surgirá un NUEVO VILLANO que llevará a LOGAN al borde de su furia berserker. Pero NIGHTCRAWLER sabe que su viejo amigo es capaz de hacer lo correcto y, en poco tiempo, Logan tendrá que desatar sus garras, llevar su factor de curación al límite y demostrar que es el mejor en lo que hace de una vez por todas. ¡Qué bien! ¡La legendaria serie en curso de WOLVERINE comienza de nuevo con el equipo creativo superestrella de Saladin Ahmed (DAREDEVIL, MS. MARVEL) y Martín Cóccolo (DEADPOOL, IMMORTAL THOR) que comienza su viaje épico con Logan! Nota del coleccionista: ¡Una PRIMERA APARICIÓN clave y una importante incorporación a la historia de Wolverine en este número!",
    category: PRODUCT_CATEGORIES.COMIC,
    topic: TOPICS.MARVEL,
    price: 25.00,
    imgs: [
      "https://cdn.marvel.com/u/prod/marvel/i/mg/d/e0/67068368c7304/clean.jpg",
      "https://cdn.marvel.com/u/prod/marvel/i/mg/d/e0/67068368c7304/clean.jpg",
      "https://cdn.marvel.com/u/prod/marvel/i/mg/3/40/66c721613e3f2/clean.jpg",
      "https://cdn.marvel.com/u/prod/marvel/i/mg/f/c0/66e1ceb68f1ee/clean.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKyAlHof6oQRNTKrb5eGoD-RIJKxe9rSJFAg&s"
    ],
    quantitySell: 20,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "mi x men favorito",
        userName: "ilovelogan",
        rate: 4,
        date: "04/03/2024",
      },
      {
        id: crypto.randomUUID(),
        comment: "toco desvelarse para leer",
        userName: "tuxmanfavorito",
        rate: 5,
        date: "07/05/2024",
      },
      {
        id: crypto.randomUUID(),
        comment: "sii amo a logan",
        userName: "ciclope",
        rate: 5,
        date: "06/05/2024",
      }
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "garras de wolverine 25 cm",
    quantity: 10,
    description: "son replicas de las garras de wolverine sientete como un heroe",
    category: PRODUCT_CATEGORIES.ACCESORIOS,
    topic: TOPICS.MARVEL,
    price: 40.00,
    imgs: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ACTwpK8zwleQVuJUfDV4e9prvRLPJlstpA&s",
      "https://marvelofficial.com/wp-content/uploads/2020/04/171BF784-4CF6-4CD9-A468-B174F565445B.jpeg",
      "https://marvelofficial.com/wp-content/uploads/2020/04/3326A85C-DEF3-41BF-816F-EFD776BEBC26-768x768.jpeg",
      "https://cdn.marvel.com/u/prod/marvel/i/mg/c/80/66e1cedc371e6/clean.jpg",
      "https://images.tcdn.com.br/img/img_prod/460977/replica_garras_wolverine_the_wolverine_25cm_marvel_comics_mkp_131699_1_0326ea0b914ec188f219c726780df37a.jpeg"
    ],
    quantitySell: 30,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "mi x men favorito",
        userName: "xman",
        rate: 4,
        date: "04/03/2024",
      },
      {
        id: crypto.randomUUID(),
        comment: "quiero",
        userName: "usuario",
        rate: 5,
        date: "07/05/2024",
      },
      {
        id: crypto.randomUUID(),
        comment: "slas garras de wolverine",
        userName: "ciclope23",
        rate: 5,
        date: "10/06/2024",
      }
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "sueter",
    quantity: 15,
    description: "sueter con el logo de marvel multicoles",
    category: PRODUCT_CATEGORIES.ACCESORIOS,
    topic: TOPICS.MARVEL,
    price: 60.00,
    imgs: [
      "https://moviesshopco.vtexassets.com/arquivos/ids/177550-1600-1600?v=638639091436470000&width=1600&height=1600&aspect=true",
      "https://moviesshopco.vtexassets.com/arquivos/ids/177553-1600-1600?v=638639091877030000&width=1600&height=1600&aspect=true",
      "https://m.media-amazon.com/images/I/81J6K8kQxWL._AC_SY550_.jpg",
      "https://m.media-amazon.com/images/I/81BuXTRuMfL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/81Vg+-Wp2xL._AC_SX466_.jpg"
    ],
    quantitySell: 24,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "me gusta el estilo",
        userName: "luis@beltran",
        rate: 4,
        date: "06/04/2024",
      },
      {
        id: crypto.randomUUID(),
        comment: "para la temporada de frio",
        userName: "usuario",
        rate: 5,
        date: "07/05/2024",
      },
      {
        id: crypto.randomUUID(),
        comment: "se ve calientito",
        userName: "fanmarvel",
        rate: 5,
        date: "06/05/2024",
      }
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Moon Knight: Fist of Khonshu (2024) #1",
    quantity: 20,
    description: "MARC SPECTOR... ¡DE VUELTA DEL MÁS ALLÁ! Como avatar y agente del dios egipcio de la Luna, Khonshu, el ex mercenario MARC SPECTOR ha muerto y vuelto a la vida en más de una ocasión. Para los ignorantes, su destino más allá de las g arras de la muerte puede parecer idílico, ¡pero ser elegido como Puño de Khonshu tiene un alto precio! Y, como huesos en una pelea callejera, Marc Spector y las multitudes que lo componen pueden estar a punto de romperse.",
    category: PRODUCT_CATEGORIES.COMIC,
    topic: TOPICS.MARVEL,
    price: 35.00,
    imgs: [
      "https://cdn.marvel.com/u/prod/marvel/i/mg/7/10/67068368bcae9/clean.jpg",
      "https://cdn.marvel.com/u/prod/marvel/i/mg/3/70/66c721e291b19/clean.jpg",
      "https://cdn.marvel.com/u/prod/marvel/i/mg/6/20/66e1ce210834e/clean.jpg",
      "https://cdn.marvel.com/u/prod/marvel/i/mg/7/03/667c7744d0240/clean.jpg",
      "https://i0.wp.com/aiptcomics.com/wp-content/uploads/2024/06/MKNIGHTFISTK2024_Design-scaled.jpg?ssl=1"
    ],
    quantitySell: 40,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "espero que no se agoten tan rapido",
        userName: "usuario23",
        rate: 4,
        date: "04/03/2024",
      },
      {
        id: crypto.randomUUID(),
        comment: "quiero",
        userName: "usuario14",
        rate: 5,
        date: "07/05/2024",
      },
      {
        id: crypto.randomUUID(),
        comment: "me gusta",
        userName: "usuario122",
        rate: 5,
        date: "10/05/2024",
      }
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Deadpool",
    quantity: 30,
    description: "DEADPOOL MATA... ¡¿UNA PLAGA DE SIMBIOTAS?! El mercenario bocazas mordió más de lo que podía masticar: ¡una horda llena de ZOMBIETAS voraces! ¿A quién no le ha jodido Wade lo suficiente como para que le dé una mano? ¡El guionista favorito de los fans de DEADPOOL, CULLEN BUNN, está de vuelta para más caos mercenario!",
    category: PRODUCT_CATEGORIES.COMIC,
    topic: TOPICS.MARVEL,
    price: 20.00,
    imgs: [
      "https://cdn.marvel.com/u/prod/marvel/i/mg/e/10/66e3481097555/clean.jpg",
      "https://cdn.marvel.com/u/prod/marvel/i/mg/3/80/67068368c12ad/clean.jpg",
      "https://cdn.marvel.com/u/prod/marvel/i/mg/2/03/66c721447e004/clean.jpg",
      "https://m.media-amazon.com/images/I/71F+hUWkXHL._AC_UF894,1000_QL80_.jpg",
      "https://preview.redd.it/oh-god-oh-f-ck-its-back-venom-war-deadpool-v0-c2evhqwp3mpd1.jpeg?auto=webp&s=e58cee0b2e72b115cca7ffe9afedde5dbcba104c"
    ],
    quantitySell: 20,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "lo voy a mirar se ve bueno",
        userName: "usuario213",
        rate: 4,
        date: "04/03/2024",
      },
      {
        id: crypto.randomUUID(),
        comment: "quiero",
        userName: "usuario14",
        rate: 5,
        date: "19/05/2024",
      },
      {
        id: crypto.randomUUID(),
        comment: "sii lo comprare",
        userName: "ciclope23",
        rate: 5,
        date: "10/03/2024",
      }
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Loki",
    quantity: 17,
    description: "accesorio de loki para vestirse en halloween",
    category: PRODUCT_CATEGORIES.ACCESORIOS,
    topic: TOPICS.MARVEL,
    price: 20.00,
    imgs: [
      "https://m.media-amazon.com/images/I/51H83KWgRxL.__AC_SX300_SY300_QL70_ML2_.jpg",
      "https://m.media-amazon.com/images/I/61+OS8uTdgL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81aAjuBAfpL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71dWW9E-zTL._AC_SY741_.jpg",
      "https://m.media-amazon.com/images/I/71OlUh6cnsL._AC_SY550_.jpg"
    ],
    quantitySell: 20,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "si podre disfrazarme de el en halloween",
        userName: "usuario23",
        rate: 4,
        date: "05/05/2024",
      },
      {
        id: crypto.randomUUID(),
        comment: "quiero",
        userName: "dotordoom",
        rate: 5,
        date: "02/05/2024",
      },
      {
        id: crypto.randomUUID(),
        comment: "lo quieroo",
        userName: "loki123",
        rate: 5,
        date: "17/05/2024",
      }
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "avengers",
    quantity: 27,
    description: "acomics de avengers",
    category: PRODUCT_CATEGORIES.COMIC,
    topic: TOPICS.MARVEL,
    price: 30.00,
    imgs: [
      "https://cdn.marvel.com/content/1x/default/comic-no-img.jpg",
      "https://cdn.marvel.com/u/prod/marvel/i/mg/c/a0/4bc468c3f19dd/standard_incredible.jpg",
      "https://cdn.marvel.com/u/prod/marvel/i/mg/f/d0/5c1934200c851/clean.jpg",
      "https://upload.wikimedia.org/wikipedia/en/2/2b/Avengers_%28Marvel_Comics%29_vol_3_num_38.jpg",
      "https://i1.whakoom.com/large/15/1f/5f92a0c4537040d0bcfe0c1f79e3ed13.jpg"
    ],
    quantitySell: 20,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "me guastan esta de una buena calidad",
        userName: "usuario23",
        rate: 4,
        date: "05/05/2024",
      },
      {
        id: crypto.randomUUID(),
        comment: "al fin los comprare",
        userName: "dotordoom234",
        rate: 5,
        date: "02/05/2024",
      },
      {
        id: crypto.randomUUID(),
        comment: "lo quieroo",
        userName: "thor23",
        rate: 5,
        date: "17/05/2024",
      }
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "x-men",
    quantity: 20,
    description: "¡DE LAS CENIZAS! Krakoa ha desaparecido, ORCHIS ha caído... pero los X-Men permanecen, siempre. Cyclops lidera, porque eso es lo que hace. Beast construye, porque eso es lo que hace. Y desde su nuevo hogar en Alaska, los X-Men levantan una bandera de desafío. Los negocios mutantes son su negocio. Únete a CYCLOPS, BEAST, MAGNETO, PSYLOCKE, KID OMEGA, TEMPER, MAGIK y JUGGERNAUT mientras nuevas fuerzas en el mundo se posicionan, luchando por el destino y la filosofía de la especie mutante.",
    category: PRODUCT_CATEGORIES.COMIC,
    topic: TOPICS.MARVEL,
    price: 90.00,
    imgs: [
      "https://i.pinimg.com/564x/8c/2a/af/8c2aaf56e48af0d6142c9188bb2d5245.jpg",
      "https://cdn.marvel.com/u/prod/marvel/i/mg/2/30/66e1cebbdfc43/clean.jpg",
      "https://cdn.marvel.com/u/prod/marvel/i/mg/c/90/66e1cebb8926a/clean.jpg",
      "https://sm.ign.com/ign_es/photo/m/marvel-con/marvel-confirms-the-end-of-the-x-mens-krakoan-era-in-2024-ne_u6ze.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWsC2CTaK0JT_Nv2sc-lyIb6Tw1nGlk_kUg&s"
    ],
    quantitySell: 10,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "lo comprare",
        userName: "usuario43",
        rate: 4,
        date: "05/05/2024",
      },
      {
        id: crypto.randomUUID(),
        comment: "lo voy a comprar",
        userName: "dotordoom234",
        rate: 5,
        date: "02/05/2024",
      },
      {
        id: crypto.randomUUID(),
        comment: "lo quieroo",
        userName: "thor23",
        rate: 5,
        date: "17/05/2024",
      }
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Venom (2021) #38",
    quantity: 20,
    description: "¡LA BÚSQUEDA EN EL TIEMPO DEL VIEJO VENOM CONTINÚA! La aventura del anciano Dylan Brock a través del tiempo para poner fin a la Guerra de Venom lo lleva a uno de los lugares más oscuros: ¡el reino de Chthon! ¿Podrá incluso el Doctor Strange ayudarlo cuando se enfrente a la máxima tentación del mal?",
    category: PRODUCT_CATEGORIES.COMIC,
    topic: TOPICS.MARVEL,
    price: 90.00,
    imgs: [
      "https://cdn.marvel.com/u/prod/marvel/i/mg/6/e0/66fc0891407ef/clean.jpg",
      "https://cdn.marvel.com/u/prod/marvel/i/mg/7/10/66fc476ae9461/clean.jpg",
      "https://cdn.marvel.com/u/prod/marvel/i/mg/3/a0/66fc476c91510/clean.jpg",
      "https://m.media-amazon.com/images/I/61dFx0zu7tL.null_SY250_.jpg",
      "https://cdn.marvel.com/u/prod/marvel/i/mg/b/f0/66d0820ae8bbb/portrait_uncanny.jpg"
    ],
    quantitySell: 10,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "lo comprare",
        userName: "usuario43",
        rate: 4,
        date: "05/05/2024",
      },
      {
        id: crypto.randomUUID(),
        comment: "lo voy a comprar",
        userName: "dotordoom234",
        rate: 5,
        date: "02/05/2024",
      },
      {
        id: crypto.randomUUID(),
        comment: "lo quieroo",
        userName: "thor23",
        rate: 5,
        date: "17/05/2024",
      }
    ],
  },
];

export const PRODUCTS = [...ANIME_PRODUCTS, ...GOT, ...HOTD, ...STAR_WARS, ...VIDEOJUEGOS, ...Marvel];

//Ejemplo de modelo del carrito propuesta
export const CART = {
  cart: [
    {
      idProduct: 1,
      productName: "Flash Point",
      productPrice: 25.00,
      productImage: "https://m.media-amazon.com/images/I/91dXNvO2fML._AC_UF894,1000_QL80_.jpg",
      quantity: 10,
      subTotal: 25.00
    },
  ],
  total: 25
}