export const BASE_URL = window.location.origin;

export const TOPICS = {
  MARVEL: 'marvel',
  STAR_WARS: 'star-wars',
  ANIME: 'anime',
  VIDEOJUEGOS: 'videojuegos',
  GOT: 'got',
  HOTD: 'hotd'
};

export const PRODUCT_CATEGORIES = {
  FIGURAS: 'Figuras de acción',
  COMIC: 'Comics',
  ACCESORIOS: 'Accesorios',
  MANGA: 'Mangas',
  LIBROS: 'Libros'
};

export const CATEGORIES = [
  {
    name: TOPICS.MARVEL,
    productTypes: [PRODUCT_CATEGORIES.ACCESORIOS, PRODUCT_CATEGORIES.COMIC, PRODUCT_CATEGORIES.MANGA, PRODUCT_CATEGORIES.FIGURAS],
    bannerName: 'marvel-banner.webp'
  },
  {
    name: TOPICS.STAR_WARS,
    productTypes: [PRODUCT_CATEGORIES.ACCESORIOS, PRODUCT_CATEGORIES.COMIC, PRODUCT_CATEGORIES.FIGURAS, PRODUCT_CATEGORIES.LIBROS],
    bannerName: 'star-wars.webp'
  },
  {
    name: TOPICS.ANIME,
    productTypes: [PRODUCT_CATEGORIES.ACCESORIOS, PRODUCT_CATEGORIES.MANGA, PRODUCT_CATEGORIES.FIGURAS],
    bannerName: 'anime.webp'
  },
  {
    name: TOPICS.VIDEOJUEGOS,
    productTypes: [PRODUCT_CATEGORIES.ACCESORIOS, PRODUCT_CATEGORIES.COMIC, PRODUCT_CATEGORIES.FIGURAS, PRODUCT_CATEGORIES.MANGA, PRODUCT_CATEGORIES.LIBROS],
    bannerName: 'videojuegos.webp'
  },
  {
    name: TOPICS.GOT,
    productTypes: [PRODUCT_CATEGORIES.ACCESORIOS, PRODUCT_CATEGORIES.FIGURAS, PRODUCT_CATEGORIES.LIBROS],
    bannerName: 'got.webp'
  },
  {
    name: TOPICS.HOTD,
    productTypes: [PRODUCT_CATEGORIES.ACCESORIOS, PRODUCT_CATEGORIES.FIGURAS, PRODUCT_CATEGORIES.LIBROS],
    bannerName: 'hotd.webp'
  },
];

export const SCRIPTS = [
  {
    "src": BASE_URL + "/resources/components/navbar.js",
    "isModule": true,
    "isPrincipal": true
  },
  {
    "src": BASE_URL + "/resources/components/footer.js",
    "isModule": true,
    "isPrincipal": true
  }  
];

export const LINKS_EXTERNAL = [
  {
    "rel": "stylesheet",//Iconos
    "URL": "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
  },
  {
    "rel": "stylesheet",
    "URL": BASE_URL + "/style.css"
  }
];