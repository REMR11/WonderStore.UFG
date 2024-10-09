export const BASE_URL = window.location.origin;

export const TOPICS = Object.freeze({
  MARVEL: 'marvel',
  STAR_WARS: 'star-wars',
  ANIME: 'anime',
  VIDEOJUEGOS: 'videojuegos',
  GOT: 'got',
  HOTD: 'hotd'
});

export const PRODUCT_CATEGORIES = Object.freeze({
  FIGURAS: 'Figuras de acción',
  COMIC: 'Comics',
  ACCESORIOS: 'Accesorios',
  MANGA: 'Mangas',
  LIBROS: 'Libros'
});

export const CATEGORIES = Object.freeze([
  Object.freeze({
    name: TOPICS.MARVEL,
    productTypes: [PRODUCT_CATEGORIES.ACCESORIOS, PRODUCT_CATEGORIES.COMIC, PRODUCT_CATEGORIES.MANGA, PRODUCT_CATEGORIES.FIGURAS],
    bannerName: 'marvel-banner.webp'
  }),
  Object.freeze({
    name: TOPICS.STAR_WARS,
    productTypes: [PRODUCT_CATEGORIES.ACCESORIOS, PRODUCT_CATEGORIES.COMIC, PRODUCT_CATEGORIES.FIGURAS, PRODUCT_CATEGORIES.LIBROS],
    bannerName: 'star-wars.webp'
  }),
  Object.freeze({
    name: TOPICS.ANIME,
    productTypes: [PRODUCT_CATEGORIES.ACCESORIOS, PRODUCT_CATEGORIES.MANGA, PRODUCT_CATEGORIES.FIGURAS],
    bannerName: 'anime.webp'
  }),
  Object.freeze({
    name: TOPICS.VIDEOJUEGOS,
    productTypes: [PRODUCT_CATEGORIES.ACCESORIOS, PRODUCT_CATEGORIES.COMIC, PRODUCT_CATEGORIES.FIGURAS, PRODUCT_CATEGORIES.MANGA, PRODUCT_CATEGORIES.LIBROS],
    bannerName: 'videojuegos.webp'
  }),
  Object.freeze({
    name: TOPICS.GOT,
    productTypes: [PRODUCT_CATEGORIES.ACCESORIOS, PRODUCT_CATEGORIES.FIGURAS, PRODUCT_CATEGORIES.LIBROS],
    bannerName: 'got.webp'
  }),
  Object.freeze({
    name: TOPICS.HOTD,
    productTypes: [PRODUCT_CATEGORIES.ACCESORIOS, PRODUCT_CATEGORIES.FIGURAS, PRODUCT_CATEGORIES.LIBROS],
    bannerName: 'hotd.webp'
  }),
]);

export const SCRIPTS = Object.freeze([
  Object.freeze({
    "src": BASE_URL + "/components/navbar.js",
    "isModule": true,
    "isPrincipal": true
  }),
  Object.freeze({
    "src": BASE_URL + "/components/footer.js",
    "isModule": true,
    "isPrincipal": true
  })
]);

export const LINKS_EXTERNAL = Object.freeze([
  Object.freeze({
    "rel": "stylesheet",//Iconos
    "URL": "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
  }),
  Object.freeze({
    "rel": "stylesheet",
    "URL": BASE_URL + "/styles.css"
  })
]);