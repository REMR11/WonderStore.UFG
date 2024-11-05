import { PRODUCT_CATEGORIES, TOPICS } from "../utils/globalVariables.js";

export const GOT = [
  {//1
    id: crypto.randomUUID(),
    name: "Jon Snow - Figura de acción 1/6",
    quantity: 12,
    description:
      "Figura detallada de Jon Snow en escala 1/6, fabricada por ThreeZero. Incluye su icónica espada 'Longclaw' y armadura.",
    category: PRODUCT_CATEGORIES.FIGURAS,
    topic: TOPICS.GOT,
    price: 79.99,
    imgs: [
      "https://m.media-amazon.com/images/I/713kRHjWJlL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      "https://th.bing.com/th/id/OIP.OyVvy7aMzhApYXp-PJ5w7wHaHa?pid=ImgDet&w=203&h=203&c=7&dpr=1,3",
      "https://famaolias.files.wordpress.com/2023/09/jon-snow-dark-horse.jpg",
      "https://m.media-amazon.com/images/I/71zhYRKlYPL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/61YJ4KdESeL._AC_SY879_.jpg"
    ],
    quantitySell: 5,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Impresionante detalle y calidad, vale la pena el precio.",
        userName: "gotcollector",
        rate: 5,
        date: "12/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Es un poco costoso, pero excelente para coleccionistas.",
        userName: "collector87",
        rate: 4,
        date: "15/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Una gran adición a mi colección de Game of Thrones.",
        userName: "snowfan",
        rate: 5,
        date: "18/03/2024"
      }
    ]
  },
  {//2
    id: crypto.randomUUID(),
    name: "Collar Stark - Accesorio",
    quantity: 30,
    description:
      "Un elegante collar con el emblema de la Casa Stark, fabricado en acero inoxidable.",
    category: PRODUCT_CATEGORIES.ACCESORIOS,
    topic: TOPICS.GOT,
    price: 14.99,
    imgs: [
      "https://m.media-amazon.com/images/I/31jfjzDupmL._AC_US40_.jpg",
      "https://m.media-amazon.com/images/I/71LMi4ejZxL._AC_SY535_.jpg",
      "https://th.bing.com/th/id/OIP.Zz2WaYqS4W54WHvn-eA5ZAHaHa?w=480&h=480&rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.PIP7r-fbfQ-9H_JByS737AHaJ4?w=600&h=800&rs=1&pid=ImgDetMain",
      "https://m.media-amazon.com/images/I/51y5ar7W-jL._AC_.jpg"
    ],
    quantitySell: 10,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "El diseño es increíble, muy satisfecho con mi compra.",
        userName: "starkfan",
        rate: 5,
        date: "10/01/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "El material podría ser mejor, pero está bien por el precio.",
        userName: "budgetbuyer",
        rate: 3,
        date: "15/01/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Lo uso todos los días, ¡es mi accesorio favorito!",
        userName: "gotaccessories",
        rate: 4,
        date: "20/01/2024"
      }
    ]
  },
  {//3
    id: crypto.randomUUID(),
    name: "Funko Pop! Rey de la Noche",
    quantity: 50,
    description:
      "Figura Funko Pop! del Rey de la Noche, el villano helado de Game of Thrones. Ideal para los coleccionistas de Funko.",
    category: PRODUCT_CATEGORIES.FIGURAS,
    topic: TOPICS.GOT,
    price: 12.99,
    imgs: [
      "https://th.bing.com/th/id/R.9995d75d06d83975dbb2acb5e5f3f0ab?rik=8vDbgW2%2b%2fMT3ww&pid=ImgRaw&r=0",
      "https://th.bing.com/th/id/OIP.79j9rRwbPYO0PZxOoNvPmgHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.wd4XW301qZiv3Q3Pp10GdgHaJ_?w=1360&h=1836&rs=1&pid=ImgDetMain",
      "https://images.tcdn.com.br/img/img_prod/300946/nighy_king_44_game_of_thrones_funko_pop_2349_3_20190530152858.jpg",
      "https://cdn.gameplanet.com/wp-content/uploads/2022/09/01084527/figura-funko-pop-game-of-throne-night-king-02.jpg"
    ],
    quantitySell: 25,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Un Funko icónico para mi colección, ¡me encanta!",
        userName: "funkofanatic",
        rate: 5,
        date: "01/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Está bien hecho, pero esperaba más detalles.",
        userName: "collector123",
        rate: 3,
        date: "05/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Es el Funko perfecto para cualquier fan de Game of Thrones.",
        userName: "gotlover",
        rate: 4,
        date: "07/03/2024"
      }
    ]
  },
  {//4
    id: crypto.randomUUID(),
    name: "Poster: Mapa de Westeros",
    quantity: 40,
    description:
      "Un gran póster con el mapa detallado de los Siete Reinos de Westeros, ideal para decorar cualquier habitación.",
    category: PRODUCT_CATEGORIES.ACCESORIOS,
    topic: TOPICS.GOT,
    price: 19.99,
    imgs: [
      "https://m.media-amazon.com/images/I/51eqtYI8fEL._AC_US40_.jpg",
      "https://www.picclickimg.com/7~YAAOSwVk5lWZy1/Game-Of-Thrones-Westeros-Karte-Poster-30x20-cm.webp",
      "https://th.bing.com/th/id/OIP.8Z7d_tK8Nl1AJCBZQz65CAHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.rQ7VCj2T8ZkuDxONa7WxZAHaLn?w=497&h=780&rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.zzqdRSKyHa1W2eHcvZ_BXAHaHZ?w=1624&h=1623&rs=1&pid=ImgDetMain"

    ],
    quantitySell: 12,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "El póster es de excelente calidad, con gran detalle.",
        userName: "mapenthusiast",
        rate: 5,
        date: "15/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Es muy grande, perfecto para mi pared.",
        userName: "decofan",
        rate: 4,
        date: "17/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "El mapa tiene un diseño genial, pero el papel podría ser más grueso.",
        userName: "artlover",
        rate: 3,
        date: "18/03/2024"
      }
    ]
  },
  {//5
    id: crypto.randomUUID(),
    name: "A Game of Thrones (A Song of Ice and Fire, Book 1)",
    quantity: 20,
    description:
      "El primer libro de la saga 'A Song of Ice and Fire' de George R.R. Martin. Sigue las intrigas políticas y la lucha por el Trono de Hierro.",
    category: PRODUCT_CATEGORIES.LIBROS,
    topic: TOPICS.GOT,
    price: 19.99,
    imgs: [
      "https://is1-ssl.mzstatic.com/image/thumb/Publication4/v4/db/3e/e7/db3ee734-bfe1-56e3-26b3-727e77a2a86a/9780345535559.jpg/1200x630wz.png",
      "https://th.bing.com/th/id/OIP.fjiCdPpaJ9abA7MLcaWmsgAAAA?w=450&h=450&rs=1&pid=ImgDetMain",
      "https://www.geekalerts.com/u/Game-of-Thrones-The-World-of-Ice-Fire-The-Untold-History-of-Westeros-Hardcover-Book-400x400.jpg",
      "https://th.bing.com/th/id/OIP.97m_e4l_a81ZqPKnAxtnbwHaIw?w=846&h=1000&rs=1&pid=ImgDetMain",
      "https://pictures.abebooks.com/inventory/md/md31282293338.jpg"

    ],
    quantitySell: 12,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Un clásico de la fantasía moderna, lo recomiendo a todos.",
        userName: "fantasylover",
        rate: 5,
        date: "05/02/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "La trama es genial, aunque el estilo de escritura puede ser denso.",
        userName: "bookworm84",
        rate: 4,
        date: "10/02/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Me encantó el desarrollo de los personajes, aunque el ritmo es lento.",
        userName: "gotreader",
        rate: 4,
        date: "15/02/2024"
      }
    ]
  },
  {//6
    id: crypto.randomUUID(),
    name: "A Clash of Kings (A Song of Ice and Fire, Book 2)",
    quantity: 15,
    description:
      "Segundo libro de la saga 'A Song of Ice and Fire', donde la guerra civil en los Siete Reinos se intensifica.",
    category: PRODUCT_CATEGORIES.LIBROS,
    topic: TOPICS.GOT,
    price: 21.99,
    imgs: [
      "https://th.bing.com/th/id/OIP.JUSAqvNuiqirRa4ZL3HVAgHaLG?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.JUSAqvNuiqirRa4ZL3HVAgHaLG?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.X_DVzUyYjclN3DLgQ61OpQHaIX?w=566&h=640&rs=1&pid=ImgDetMain",
      "https://imgs.search.brave.com/XpFWJW3h5T6XqonC16MijfEsD1RAYWe08EDR_ezbKrY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTF4K1QzMGd4Skwu/anBn",
      "https://imgs.search.brave.com/4ZCqKheljF0U0ybv_LP9nP3SJbX5O41XyQH7tFmfxDs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxNEV4b2ZlS0pM/LmpwZw"
    ],
    quantitySell: 10,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "La política y la acción se vuelven aún más emocionantes.",
        userName: "westerosfan",
        rate: 5,
        date: "20/02/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Un buen libro, pero un poco más complicado de seguir que el primero.",
        userName: "bookaddict",
        rate: 4,
        date: "22/02/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Los múltiples puntos de vista enriquecen la narrativa.",
        userName: "multiPOVreader",
        rate: 4,
        date: "25/02/2024"
      }
    ]
  },
  {//7
    id: crypto.randomUUID(),
    name: "Daenerys Targaryen - Figura Funko Pop",
    quantity: 25,
    description:
      "Figura Funko Pop de Daenerys Targaryen, madre de dragones y uno de los personajes clave de Game of Thrones.",
    category: PRODUCT_CATEGORIES.FIGURAS,
    topic: TOPICS.GOT,
    price: 13.99,
    imgs: [
      "https://th.bing.com/th/id/OIP.BEK7z9yuKHELW5p4EYvd2AHaHa?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.-NhiUBFl7ptAGIxJQAtXWgHaHa?rs=1&pid=ImgDetMain",
      "https://s13emagst.akamaized.net/products/36675/36674678/images/res_dd651e418dd5eb3ba60432d17b883ff1.jpg",
      "https://m.media-amazon.com/images/I/21Dyi79KYVL._AC_.jpg",
      "https://moni-pops.com.mx/wp-content/uploads/2024/03/Funko-Pop-TV-Game-Of-Thrones-%E2%80%93-Daenerys-Targaryen-Bata-Blanca.png"
    ],
    quantitySell: 15,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Gran adición a mi colección de Daenerys.",
        userName: "dragonqueenfan",
        rate: 5,
        date: "15/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Muy buena calidad, aunque la pintura podría mejorar.",
        userName: "figurecritic",
        rate: 4,
        date: "16/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Me encanta, pero podría ser un poco más detallada.",
        userName: "collector34",
        rate: 3,
        date: "17/03/2024"
      }
    ]
  },
  {//8
    id: crypto.randomUUID(),
    name: "Llavero de dragon Targaryen",
    quantity: 35,
    description: "Llavero metálico de dragon Targaryen.",
    category: PRODUCT_CATEGORIES.ACCESORIOS,
    topic: TOPICS.GOT,
    price: 7.99,
    imgs: [
      "https://m.media-amazon.com/images/I/51rr5gFNrTL._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/I/51FyQkUIBQL._AC_SR38,50_.jpg",
      "https://m.media-amazon.com/images/I/51zu9XxA1TL._AC_SR38,50_.jpg",
      "https://m.media-amazon.com/images/I/41F87OkO36L._AC_SR38,50_.jpg",
      "https://m.media-amazon.com/images/I/71lpavkal2L._AC_SY879_.jpg"
    ],
    quantitySell: 20,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Me encanta llevar el trono en mi llavero, excelente detalle.",
        userName: "keychainlover",
        rate: 5,
        date: "16/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Es de buen tamaño y se siente sólido.",
        userName: "tinycollector",
        rate: 4,
        date: "17/03/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "El metal es un poco más ligero de lo que esperaba.",
        userName: "metalhead",
        rate: 3,
        date: "18/03/2024"
      }
    ]
  },
  {//9
    id: crypto.randomUUID(),
    name: "Collar de Daenerys - Accesorio",
    quantity: 50,
    description: "Un collar inspirado en el dragon, hecho con materiales de alta calidad y perfecto para los fanáticos de Game of Thrones.",
    category: PRODUCT_CATEGORIES.ACCESORIOS,
    topic: TOPICS.GOT,
    price: 14.99,
    imgs: [
      "https://m.media-amazon.com/images/I/51OAUWoH0nL._AC_SY695_.jpg",
      "https://m.media-amazon.com/images/I/415qisRqlHL._AC_US40_.jpg",
      "https://th.bing.com/th/id/OIP.aldtlR6Nk_zn0-4AIK0NVgHaHa?w=600&h=600&rs=1&pid=ImgDetMain",
      "https://m.media-amazon.com/images/I/51A6V1kURwL._AC_SY535_.jpg",
      "https://m.media-amazon.com/images/I/61OT1lvpktL._AC_SY535_.jpg"
    ],
    quantitySell: 35,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Hermoso diseño y muy bien hecho, lo uso a diario.",
        userName: "starkfan",
        rate: 5,
        date: "02/07/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Excelente calidad, representa perfectamente el espíritu de los Stark.",
        userName: "winteriscoming",
        rate: 5,
        date: "05/07/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Un regalo perfecto para cualquier seguidor de la Casa Stark.",
        userName: "giftbuyer",
        rate: 4,
        date: "08/07/2024"
      }
    ]
  },
  {//10
    id: crypto.randomUUID(),
    name: "Funko Pop Daenerys Targaryen con Drogon",
    quantity: 25,
    description: "Funko Pop de Daenerys Targaryen montada en Drogon, uno de los dragones de la legendaria reina de los dragones en Game of Thrones. Este Funko captura la esencia de Daenerys con su fiel compañero y es un imprescindible para los fanáticos de la serie.",
    category: PRODUCT_CATEGORIES.FIGURAS,
    topic: TOPICS.GOT,
    price: 14.99,
    imgs: [
      "https://th.bing.com/th/id/R.ba93f2b9f6fe555410d2f07a3e8cbeed?rik=O2Igb1vXQ84PQg&pid=ImgRaw&r=0",
      "https://th.bing.com/th/id/OIP.PfLehAHpHojv6khALQWfkQHaHa?w=567&h=567&rs=1&pid=ImgDetMain",
      "https://http2.mlstatic.com/daenerys-e-drogon-game-of-thrones-funko-pop-series-original-D_NQ_NP_797621-MLB25956973330_092017-F.jpg",
      "https://th.bing.com/th/id/OIP.LUZhu_CMHlV90CII-s1LigHaJ_?w=1360&h=1836&rs=1&pid=ImgDetMain",
      "https://m.media-amazon.com/images/I/61KjTaXWDAL._AC_SX679_.jpg"
    ],
    quantitySell: 20,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Es adorable y refleja bien el vínculo entre Daenerys y Drogon.",
        userName: "dragonlover",
        rate: 5,
        date: "10/08/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "Muy bien hecho y llegó en perfectas condiciones.",
        userName: "funkofanatic",
        rate: 5,
        date: "12/08/2024"
      },
      {
        id: crypto.randomUUID(),
        comment: "El precio es excelente para un Funko Pop tan detallado.",
        userName: "collector87",
        rate: 4,
        date: "15/08/2024"
      }
    ]
  }
]