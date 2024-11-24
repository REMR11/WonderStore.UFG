import { BASE_URL, TOPICS, } from "./globalVariables.js";

//Esta era la propuesta de Oscar la comentare de momento  por falta de rutas

// const ROUTES = [
//   {
//     "title": "Inicio",
//     "URL": BASE_URL + "/inicio",
//     "isExpandableContainer": false
//   },
//   {
//     "title": "Carrito",
//     "URL": BASE_URL + "/carrito",
//     "isExpandableContainer": false
//   },
//   {
//     "title": "Categorías",
//     "isExpandContainer": true,
//     "children": [
//       {
//         "title": "Marvel",
//         "URL": BASE_URL + "/products?topic=" + TOPICS.MARVEL,
//         "isExpandableContainer": false
//       },
//       {
//         "title": "Star Wars",
//         "URL": `${BASE_URL}/products?topic=${TOPICS.STAR_WARS}`,
//         "isExpandableContainer": false
//       },
//       {
//         "title": "Anime",
//         "URL": `${BASE_URL}/products?topic=${TOPICS.ANIME}`,
//         "isExpandableContainer": false
//       },
//       {
//         "title": "Videojuegos",
//         "URL": `${BASE_URL}/products?topic=${TOPICS.VIDEOJUEGOS}`,
//         "isExpandableContainer": false
//       },
//       {
//         "title": "Got",
//         "URL": `${BASE_URL}/products?topic=${TOPICS.GOT}`,
//         "isExpandableContainer": false
//       },
//       {
//         "title": "HotD",
//         "URL": `${BASE_URL}/products?topic=${TOPICS.HOTD}`,
//         "isExpandableContainer": false
//       }
//     ]
//   }
// ]

const ROUTES = [
  {
    "title": "Marvel",
    "URL": BASE_URL + "/products?topic=" + TOPICS.MARVEL,
    "isExpandableContainer": false
  },
  {
    "title": "Star Wars",
    "URL": `${BASE_URL}/products?topic=${TOPICS.STAR_WARS}`,
    "isExpandableContainer": false
  },
  {
    "title": "Anime",
    "URL": `${BASE_URL}/products?topic=${TOPICS.ANIME}`,
    "isExpandableContainer": false
  },
  {
    "title": "Videojuegos",
    "URL": `${BASE_URL}/products?topic=${TOPICS.VIDEOJUEGOS}`,
    "isExpandableContainer": false
  },
  {
    "title": "GoT Universe",
    "isExpandContainer": true,
    "children": [
      {
        "title": "Got",
        "URL": `${BASE_URL}/products?topic=${TOPICS.GOT}`,
        "isExpandableContainer": false
      },
      {
        "title": "HotD",
        "URL": `${BASE_URL}/products?topic=${TOPICS.HOTD}`,
        "isExpandableContainer": false
      }
    ]
  }, 
  {
    title: "Sobre nosotros",
    "URL": `${BASE_URL}/about`,
    "isExpandableContainer": false
  }
]

export default ROUTES;