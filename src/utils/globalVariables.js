export const BASE_URL = window.location.origin;

export const PRODUCT_TYPES = {

}

export const CATEGORIES = [
  {
    "name": "Marvel",
    "URL": BASE_URL + "/productos?category=marvel",
    "productsType": ""
  }
];

export const ROUTES = [
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
    "title": "Categorias",
    "isExpandContainer": true,
    "children": [
      {
        "title": "Marvel",
        "URL": BASE_URL + "/productos?category=marvel",
        "isExpandableContainer": false
      },
      {
        "title": "Marvel",
        "URL": BASE_URL + "/productos",
        "isExpandableContainer": false
      }
    ]
  }
]