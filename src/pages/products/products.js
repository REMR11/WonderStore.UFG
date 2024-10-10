import { BASE_URL, CATEGORIES, TOPICS } from "../../utils/globalVariables.js";

const CURRENT_URL = new URL(window.location.href);

document.addEventListener("DOMContentLoaded", function () {
  onLoadIMG();
  preparePage();
});

// Para el efecto PARALAX
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const bannerBg = document.querySelector('.banner-bg');
  const speed = 0.3; // Adjust the speed of the parallax effect

  bannerBg.style.transform = `translateY(${scrollPosition * speed}px)`;
});

const BANNER = document.getElementById('banner-category');
const BANNER_TEXT = document.getElementById('banner-text-category');

function setBanner(bannerName, bannerTextName, className) {
  BANNER.src = `${BASE_URL}/assets/banners/${bannerName}`;
  BANNER_TEXT.src = `${BASE_URL}/assets/banners/${bannerTextName}`;

  const bannerContainer = document.querySelectorAll('.banner-container')[0];

  bannerContainer.classList.add(`on-load-img-fn-loaded`);

  bannerContainer.classList.add(className);
}

function updateURL(option, value) {
  switch (option) {
    case 1:
      //Actualizamos el filtro
      CURRENT_URL.searchParams.set('filter', value);
      break;
    case 2:
      //Actualizamos el orden
      CURRENT_URL.searchParams.set('order', value);
      break;
    case 3:
      //Actualizamos la busqueda
      CURRENT_URL.searchParams.set('search', value);
      break;
    default:
      break;
  }
  window.location.href = CURRENT_URL;
}

function onLoadIMG() {
  try {
    document.querySelectorAll('.on-load-img-fn').forEach(container => {
      const img = container.querySelector('img');
      function loaded() {
        container.classList.add('on-load-img-fn-loaded')
      }

      if (img.complete) {
        loaded()
      } else {
        img.addEventListener('load', loaded)
      }
    })
  } catch (error) {
  }
}

//Método que obtienen la información de la categoria
function getCategoryInfo(category) {
  return CATEGORIES.find(cat => cat.name === category);
}

//Método que prepara el banner, filtros y ordenes según la URL
function preparePage() {
  //Obtenemos la categoria actual e info en caso de existir
  const category = CURRENT_URL.searchParams.get('topic');
  const categoryInfo = getCategoryInfo(category.toLowerCase());

  //Validamos que no exista
  if (!categoryInfo) window.location.replace("/404");

  if (categoryInfo.name == TOPICS.ANIME) efectoLoli(categoryInfo.bannerBackgroundName, categoryInfo.bannerTextName);

  //Ya que existe seteamos el banner
  setBanner(categoryInfo.bannerBackgroundName, categoryInfo.bannerTextName, categoryInfo.customStyleClassName);
  // const filter = CURRENT_URL.searchParams.get('filter');
  // const order = CURRENT_URL.searchParams.get('order');
  // const search = CURRENT_URL.searchParams.get('search');

  // if(filter){
  //   const filterElement = document.getElementById(filter);
  //   if(filterElement){
  //     filterElement.checked = true;
  //   }
  // }

  // if(order){
  //   const orderElement = document.getElementById(order);
  //   if(orderElement){
  //     orderElement.checked = true;
  //   }
  // }

  // if(search){
  //   const searchElement = document.getElementById('search-input');
  //   if(searchElement){
  //     searchElement.value = search;
  //   }
  // }
}

function efectoLoli(bannerName, bannerText) {
  BANNER.classList.add('anime');
  setInterval(() => {
    if (BANNER.classList.contains('anime')) {
      BANNER.src = `${BASE_URL}/assets/banners/loli.webp`;
      BANNER_TEXT.src = `${BASE_URL}/assets/banners/loli-text.svg`;
    } else {
      BANNER.src = `${BASE_URL}/assets/banners/${bannerName}`;
      BANNER_TEXT.src = `${BASE_URL}/assets/banners/${bannerText}`;
    }
    BANNER.classList.toggle('anime');
  }, 2000);
}