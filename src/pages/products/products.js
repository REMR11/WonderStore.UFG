import { BASE_URL, CATEGORIES } from "../../utils/globalVariables.js";

const CURRENT_URL = new URL(window.location.href);

document.addEventListener("DOMContentLoaded", function () {
  onLoadIMG();
  preparePage();
});

const BANNER = document.getElementById('banner-category');

function setBanner(bannerName) {
  BANNER.src = `${BASE_URL}/assets/banners/${bannerName}`;
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
}

//Método que obtienen la información de la categoria
function getCategoryInfo(category){
  return CATEGORIES.find(cat => cat.name === category);
}

//Método que prepara el banner, filtros y ordenes según la URL
function preparePage(){
  //Obtenemos la categoria actual e info en caso de existir
  const category = CURRENT_URL.searchParams.get('topic');
  const categoryInfo = getCategoryInfo(category.toLowerCase());

  //Validamos que no exista
  if(!categoryInfo) window.location.replace("/404");

  //Ya que existe seteamos el banner
  setBanner(categoryInfo.bannerName);
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