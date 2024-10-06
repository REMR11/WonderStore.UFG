import { BASE_URL, TOPICS,  } from "./globalVariables";

const ROUTES = [
  {
    "title": "Inicio",
    "URL": BASE_URL + "/inicio",
    "isExpandableContainer": false
  },
  {
    "title": "Carrito",
    "URL": BASE_URL + "/carrito",
    "isExpandableContainer": false
  },
  {
    "title": "Categorías",
    "isExpandContainer": true,
    "children": [
      {
        "title": "Marvel",
        "URL": BASE_URL + "/productos?topic=" + TOPICS.MARVEL,
        "isExpandableContainer": false
      },
      {
        "title": "Star Wars",
        "URL": `${BASE_URL}/productos?topic=${TOPICS.STAR_WARS}`,
        "isExpandableContainer": false
      },
      {
        "title": "Anime",
        "URL": `${BASE_URL}/productos?topic=${TOPICS.ANIME}`,
        "isExpandableContainer": false
      },
      {
        "title": "Videojuegos",
        "URL": `${BASE_URL}/productos?topic=${TOPICS.VIDEOJUEGOS}`,
        "isExpandableContainer": false
      },
      {
        "title": "Got",
        "URL": `${BASE_URL}/productos?topic=${TOPICS.GOT}`,
        "isExpandableContainer": false
      },
      {
        "title": "HotD",
        "URL": `${BASE_URL}/productos?topic=${TOPICS.HOTD}`,
        "isExpandableContainer": false
      }
    ]
  }
]

export default ROUTES;