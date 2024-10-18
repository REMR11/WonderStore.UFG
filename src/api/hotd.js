import { PRODUCT_CATEGORIES, TOPICS } from "../utils/globalVariables";


  
export const HOTD = [
    {
      id: crypto.randomUUID(),
      name: "Daemon Targaryen - Figura de acción 10 pulgadas",
      quantity: 15,
      description: "Una detallada figura de acción de Daemon Targaryen de 10 pulgadas, con múltiples puntos de articulación y accesorios.",
      category: PRODUCT_CATEGORIES.FIGURAS,
      topic: TOPICS.HOTD,
      price: 34.99,
      imgs: [
        "https://m.media-amazon.com/images/I/41g3jCulHeL._AC_US40_.jpg" ,
        "https://sm.ign.com/t/ign_in/photo/default/hotd-daemon-af-06-1702927594478_m6ay.1080.jpg",
        "https://cdn.fanbase.hu/images/products/game-of-thrones-house-of-the-dragon-daemon-targaryen-figura-18cm-23693410.webp",
        "https://th.bing.com/th/id/OIP.seDO3tEcH6R_AoLKLLRuJAHaHa?pid=ImgDet&w=60&h=60&c=7&dpr=1,3&rs=1",
        "https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/804x804/products/3552/7437/HotD_Daemon_AF_07__91789.1702488535.jpg?c=1"



      ],
      quantitySell: 5,
      comments: [
        {
          id: crypto.randomUUID(),
          comment: "Gran calidad en los detalles de la armadura.",
          userName: "collectorKing",
          rate: 5,
          date: "12/01/2024"
        },
        {
          id: crypto.randomUUID(),
          comment: "La articulación de la figura es excelente, fácil de posicionar.",
          userName: "figurefan",
          rate: 4,
          date: "20/01/2024"
        },
        {
          id: crypto.randomUUID(),
          comment: "Me gustaría que fuera más grande, pero los detalles son buenos.",
          userName: "actionfigurecritic",
          rate: 4,
          date: "22/01/2024"
        }
      ]
    },
    {
      id: crypto.randomUUID(),
      name: "Rhaenyra Targaryen - Funko Pop",
      quantity: 20,
      description: "La versión Funko Pop de Rhaenyra Targaryen, perfecta para cualquier fanático de House of the Dragon.",
      category: PRODUCT_CATEGORIES.FIGURAS,
      topic: TOPICS.HOTD,
      price: 12.99,
      imgs: [
        "https://m.media-amazon.com/images/I/61JqzOKMcLL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/81bSRZO9UiL._AC_SY879_.jpg",
        "https://m.media-amazon.com/images/I/41yhw4QTYPL._AC_.jpg",
        "https://m.media-amazon.com/images/I/71FKmIxbfRL._AC_SX679_.jpg",
        

      ],
      quantitySell: 8,
      comments: [
        {
          id: crypto.randomUUID(),
          comment: "Adorable y detallado, se ve genial en mi estante.",
          userName: "poplover",
          rate: 4,
          date: "15/02/2024"
        },
        {
          id: crypto.randomUUID(),
          comment: "Me encanta el diseño, se parece mucho al personaje.",
          userName: "funkofan",
          rate: 5,
          date: "18/02/2024"
        },
        {
          id: crypto.randomUUID(),
          comment: "Es muy bonito, pero la pintura podría ser mejor.",
          userName: "collectorcritic",
          rate: 3,
          date: "20/02/2024"
        }
      ]
    },
    
    {
      id: crypto.randomUUID(),
      name: "Juego de Huevo de Dragón - Réplica",
      quantity: 10,
      description: "Un set de huevo de dragón en réplica, perfectos para los fanáticos de Game of Thrones y House of the Dragon.",
      category: PRODUCT_CATEGORIES.ACCESORIOS,
      topic: TOPICS.HOTD,
      price: 49.99,
      imgs: [
        "https://m.media-amazon.com/images/I/51zVP3JVUqS._AC_US40_.jpg",
        "https://m.media-amazon.com/images/I/71ZG3YZo+yS._AC_SL1000_.jpg",
        "https://m.media-amazon.com/images/I/61bWjJ-T06L._AC_SX679_.jpg",
        "https://m.media-amazon.com/images/I/5159GCHa1US._AC_US40_.jpg",
        "https://m.media-amazon.com/images/I/514TqyUbFBS._AC_US40_.jpg"
      ],
      quantitySell: 6,
      comments: [
        {
          id: crypto.randomUUID(),
          comment: "Los detalles de los huevos son impresionantes, muy realistas.",
          userName: "dragoncollector",
          rate: 5,
          date: "25/02/2024"
        },
        {
          id: crypto.randomUUID(),
          comment: "Gran calidad, pero los huevos son más pequeños de lo que esperaba.",
          userName: "replicafan",
          rate: 4,
          date: "27/02/2024"
        },
        {
          id: crypto.randomUUID(),
          comment: "Están bien hechos, pero algo caros para el tamaño.",
          userName: "detailcritic",
          rate: 3,
          date: "28/02/2024"
        }
      ]
    },
    {
      id: crypto.randomUUID(),
      name: "Pin de la Mano del Rey",
      quantity: 50,
      description: "Un pin réplica de la Mano del Rey, tal como se ve en la serie House of the Dragon.",
      category: PRODUCT_CATEGORIES.ACCESORIOS,
      topic: TOPICS.HOTD,
      price: 9.99,
      imgs: [
        "https://elenanofriki.com/3489-thickbox_default/pin-mano-del-rey-juego-de-tronos.jpg",
        "https://http2.mlstatic.com/D_Q_NP_723839-MLC41040634935_032020-R.webp",
        "https://c1-ebgames.eb-cdn.com.au/merchandising/images/packshots/90e2e6d78d3c44cdaabbc730628eed1a_Large.jpg",
        "https://th.bing.com/th/id/OIP.oeOfZnG7MOjZhQK21n9IcQHaHa?w=800&h=800&rs=1&pid=ImgDetMain"
      ],
      quantitySell: 20,
      comments: [
        {
          id: crypto.randomUUID(),
          comment: "El diseño es excelente, se ve muy auténtico.",
          userName: "kinghand",
          rate: 4,
          date: "02/03/2024"
        },
        {
          id: crypto.randomUUID(),
          comment: "Buen precio por la calidad, parece muy resistente.",
          userName: "pinlover",
          rate: 5,
          date: "05/03/2024"
        },
        {
          id: crypto.randomUUID(),
          comment: "Es bonito, pero esperaba que fuera más pesado.",
          userName: "criticpin",
          rate: 3,
          date: "07/03/2024"
        }
      ]
    },
    {
      id: crypto.randomUUID(),
      name: "Caraxes - Figura de Dragón",
      quantity: 8,
      description: "Caraxes, el dragón de Daemon Targaryen, ahora en una figura detallada de 12 pulgadas.",
      category: PRODUCT_CATEGORIES.FIGURAS,
      topic: TOPICS.HOTD,
      price: 59.99,
      imgs: [
        "https://th.bing.com/th/id/OIP.2EwLXIzer8UMyWRn-ZSkawHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.ER3tbk8Er768aMXLOJCbxQHaHa?pid=ImgDet&w=60&h=60&c=7&dpr=1,3&rs=1",
        "https://sw6.elbenwald.de/media/cb/0c/36/1678319156/E1075253_2.jpg",
        "https://th.bing.com/th/id/OIP.TpjNbiMATLyYRLUp0Nv83wAAAA?pid=ImgDet&w=474&h=214&rs=1"
      ],
      quantitySell: 4,
      comments: [
        {
          id: crypto.randomUUID(),
          comment: "La figura del dragón es asombrosa, se ve feroz y realista.",
          userName: "dragonmaster",
          rate: 5,
          date: "10/03/2024"
        },
        {
          id: crypto.randomUUID(),
          comment: "Los detalles en las alas y escamas son increíbles.",
          userName: "figurelover",
          rate: 4,
          date: "12/03/2024"
        },
        {
          id: crypto.randomUUID(),
          comment: "Es muy buena, pero un poco cara para su tamaño.",
          userName: "pricedragon",
          rate: 3,
          date: "15/03/2024"
        }
      ]
    },
    
    {
      id: crypto.randomUUID(),
      name: "House of the Dragon: Temporada 1 - Libro de arte",
      quantity: 25,
      description: "Este libro de arte contiene imágenes exclusivas de la primera temporada de House of the Dragon.",
      category: PRODUCT_CATEGORIES.LIBROS,
      topic: TOPICS.HOTD,
      price: 39.99,
      imgs: [
        "https://m.media-amazon.com/images/I/81WS74aySpL._SY466_.jpg",
        "https://m.media-amazon.com/images/I/81JguVwbfjL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71neMebDsIL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/81-LSFG1pOL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/81YaX1wueuL._SX679_.jpg"
      ],
      quantitySell: 12,
      comments: [
        {
          id: crypto.randomUUID(),
          comment: "Me encanta el arte, muy bien impreso y con mucho contenido.",
          userName: "artlover",
          rate: 5,
          date: "05/03/2024"
        },
        {
          id: crypto.randomUUID(),
          comment: "Los detalles de las imágenes son fantásticos, vale cada centavo.",
          userName: "dragonfanatic",
          rate: 4,
          date: "10/03/2024"
        },
        {
          id: crypto.randomUUID(),
          comment: "Excelente colección de arte, aunque algunas páginas podrían tener mejor calidad.",
          userName: "criticalreader",
          rate: 3,
          date: "12/03/2024"
        }
      ]
    },
    
    {
      id: crypto.randomUUID(),
      name: "Collar Targaryen - Accesorio",
      quantity: 40,
      description: "Un elegante collar con el emblema de la Casa Targaryen.",
      category: PRODUCT_CATEGORIES.ACCESORIOS,
      topic: TOPICS.HOTD,
      price: 14.99,
      imgs: [
      "https://th.bing.com/th/id/OIP.Um_vLCP5PgLV2bzjSaFz0AHaJt?rs=1&pid=ImgDetMain",
      "https://www.accesoriosmexicali.com/cdn/shop/products/19512000_av1_2048x2048.jpg?v=1661976703",
      "https://media.entertainmentearth.com/assets/images/c8bde2769a6e4d708e0589d21c2a8c2flg.jpg",
      "https://images-eu.ssl-images-amazon.com/images/I/41Wp43zC4OL._AC_UL260_SR200,260_.jpg"
      ],
      quantitySell: 16,
      comments: [
        {
          id: crypto.randomUUID(),
          comment: "Muy bien hecho, lo uso todo el tiempo.",
          userName: "accessoryfan",
          rate: 4,
          date: "12/03/2024"
        },
        {
          id: crypto.randomUUID(),
          comment: "Es elegante y resistente, me encanta.",
          userName: "targaryenlover",
          rate: 5,
          date: "14/03/2024"
        },
        {
          id: crypto.randomUUID(),
          comment: "Bonito diseño pero un poco pesado para usar todo el día.",
          userName: "jewelrycritic",
          rate: 3,
          date: "16/03/2024"
        }
      ]
    },
    {
      id: crypto.randomUUID(),
      name: "Funko Pop! Caraxes",
      quantity: 18,
      description: "Caraxes, el dragón de Daemon, en formato Funko Pop. Adorable y feroz al mismo tiempo.",
      category: PRODUCT_CATEGORIES.FIGURAS,
      topic: TOPICS.HOTD,
      price: 15.99,
      imgs: [
        "https://th.bing.com/th/id/OIP.sv1xC9cTl_Y6UYkPbVwERgHaEK?w=1280&h=720&rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/R.6b31791d597eb5ef5488cc0c7dfc3563?rik=eVO1aTdkSnpkWA&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/OIP.I9wrNoWTgv6_UcVnB8qYDQHaHC?w=500&h=475&rs=1&pid=ImgDetMain",
        "https://149361057.v2.pressablecdn.com/wp-content/uploads/2022/11/dr2.png"
      ],
      quantitySell: 7,
      comments: [
        {
          id: crypto.randomUUID(),
          comment: "El Funko de Caraxes es una excelente adición a mi colección.",
          userName: "funkocollector",
          rate: 5,
          date: "15/03/2024"
        },
        {
          id: crypto.randomUUID(),
          comment: "Adorable y con muy buen detalle, me encanta.",
          userName: "dragonfan",
          rate: 4,
          date: "17/03/2024"
        },
        {
          id: crypto.randomUUID(),
          comment: "Es un poco más pequeño de lo que esperaba, pero aún así genial.",
          userName: "popfanatic",
          rate: 4,
          date: "19/03/2024"
        }
      ]
    },
    {
      id: crypto.randomUUID(),
      name: "Fire & Blood - Crónica de los Targaryen",
      quantity: 40,
      description: "El libro 'Fire & Blood' de George R.R. Martin, que narra la historia completa de la Casa Targaryen desde su ascenso hasta su caída.",
      category: PRODUCT_CATEGORIES.LIBROS,
      topic: TOPICS.HOTD,
      price: 29.99,
      imgs: [
        "https://m.media-amazon.com/images/I/81tHMXw4PxL._SY466_.jpg",
        "https://m.media-amazon.com/images/I/71LyprPOslL._SL1222_.jpg",
        "https://th.bing.com/th/id/OIP.5p9CCPE8QG-Foa-9yeHVzwHaHa?w=640&h=640&rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.FVj3x9q4lPrbIi8q2J9cGwHaHa?w=600&h=600&rs=1&pid=ImgDetMain"
      ],
      quantitySell: 20,
      comments: [
        {
          id: crypto.randomUUID(),
          comment: "Imprescindible para cualquier fanático de la saga.",
          userName: "bookworm",
          rate: 5,
          date: "08/03/2024"
        },
        {
          id: crypto.randomUUID(),
          comment: "La narrativa es fascinante, aunque puede ser densa en algunos momentos.",
          userName: "storylover",
          rate: 4,
          date: "15/03/2024"
        },
        {
          id: crypto.randomUUID(),
          comment: "El libro es genial, pero esperaba más ilustraciones.",
          userName: "illustrationfan",
          rate: 4,
          date: "18/03/2024"
        }
      ]
    },
    {
      id: crypto.randomUUID(),
      name: "The World of Ice & Fire - Enciclopedia Ilustrada",
      quantity: 15,
      description: "Un libro ilustrado que abarca la historia y los misterios de los Siete Reinos y más allá, con detalles sobre la Casa Targaryen.",
      category: PRODUCT_CATEGORIES.LIBROS,
      topic: TOPICS.HOTD,
      price: 49.99,
      imgs: [
        "https://m.media-amazon.com/images/I/91zPl1u1ngL._SY466_.jpg",
        "https://m.media-amazon.com/images/I/A1qK0t8nfcL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/91IyoFJmAkL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/A1SxHJ3+WvL._SL1500_.jpg"
      ],
      quantitySell: 5,
      comments: [
        {
          id: crypto.randomUUID(),
          comment: "El arte y la información son una delicia para cualquier fan de la saga.",
          userName: "encyclopediaFan",
          rate: 5,
          date: "12/03/2024"
        },
        {
          id: crypto.randomUUID(),
          comment: "Es un libro asombroso, pero demasiado grande para llevar a todos lados.",
          userName: "heavylifter",
          rate: 4,
          date: "16/03/2024"
        },
        {
          id: crypto.randomUUID(),
          comment: "Gran información, pero algunas partes parecen repetitivas.",
          userName: "detailcritic",
          rate: 3,
          date: "20/03/2024"
        }
      ]
    },
    
  ];
  