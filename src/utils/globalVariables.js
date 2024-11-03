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
    bannerBackgroundName: 'marvel-banner.webp',
    bannerTextName: 'marvel-text.svg',
    customStyleClassName: 'marvel'
  }),
  Object.freeze({
    name: TOPICS.STAR_WARS,
    productTypes: [PRODUCT_CATEGORIES.ACCESORIOS, PRODUCT_CATEGORIES.COMIC, PRODUCT_CATEGORIES.FIGURAS, PRODUCT_CATEGORIES.LIBROS],
    bannerBackgroundName: 'star-wars.webp',
    bannerTextName: 'star-wars-text.svg',
    customStyleClassName: 'star-wars'
  }),
  Object.freeze({
    name: TOPICS.ANIME,
    productTypes: [PRODUCT_CATEGORIES.ACCESORIOS, PRODUCT_CATEGORIES.MANGA, PRODUCT_CATEGORIES.FIGURAS],
    bannerBackgroundName: 'anime.webp',
    bannerTextName: 'anime-text.svg',

  }),
  Object.freeze({
    name: TOPICS.VIDEOJUEGOS,
    productTypes: [PRODUCT_CATEGORIES.ACCESORIOS, PRODUCT_CATEGORIES.COMIC, PRODUCT_CATEGORIES.FIGURAS, PRODUCT_CATEGORIES.MANGA, PRODUCT_CATEGORIES.LIBROS],
    bannerBackgroundName: 'videojuegos.webp',
    bannerTextName: 'videojuegos-text.svg'
  }),
  Object.freeze({
    name: TOPICS.GOT,
    productTypes: [PRODUCT_CATEGORIES.ACCESORIOS, PRODUCT_CATEGORIES.FIGURAS, PRODUCT_CATEGORIES.LIBROS],
    bannerBackgroundName: 'got.webp',
    bannerTextName: 'got-text.svg',
    customStyleClassName: 'got'
  }),
  Object.freeze({
    name: TOPICS.HOTD,
    productTypes: [PRODUCT_CATEGORIES.ACCESORIOS, PRODUCT_CATEGORIES.FIGURAS, PRODUCT_CATEGORIES.LIBROS],
    bannerBackgroundName: 'hotd.webp',
    bannerTextName: 'hotd-text.svg',
    customStyleClassName: 'star-wars'
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
  }),
  Object.freeze({
    "src": BASE_URL + "/components/totop.js",
    "isModule": false,
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