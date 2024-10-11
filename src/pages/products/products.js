import { BASE_URL, CATEGORIES, PRODUCT_CATEGORIES, TOPICS } from "../../utils/globalVariables.js";

const CURRENT_URL = new URL(window.location.href);
const URL_PARAMS = new URLSearchParams(CURRENT_URL.search);

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

function updateURL(option, value, add = true) {
  switch (option) {
    case 1:
      // Actualizamos el filtro
      const currentFilters = URL_PARAMS.getAll('filter')?.[0]?.split(',') ?? [];
      if (add) {
        currentFilters.push(value);
      } else {
        const index = currentFilters.indexOf(value);
        if (index !== -1) {
          currentFilters.splice(index, 1);
        }
      }


      // Actualizamos URL_PARAMS con el nuevo arreglo de filtros
      if (currentFilters.length > 0) {
        URL_PARAMS.set('filter', currentFilters.join(','));
      } else {
        URL_PARAMS.delete('filter');
      }

      // Actualizamos la URL con los nuevos parámetros
      let newURL = `${CURRENT_URL.origin}${CURRENT_URL.pathname}${URL_PARAMS.toString() === '' ? '' : `?${URL_PARAMS}`}`;

      window.history.replaceState({}, '', newURL);
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

  //Cargamos los filtros
  loadFilters(categoryInfo.productTypes);
  // const order = CURRENT_URL.searchParams.get('order');
  // const search = CURRENT_URL.searchParams.get('search');

  // if(filter){
  //   const filterElement = document.getElementById(filter.toLowerCase()+"-filter");
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

function loadFilters(filters) {
  const filterContainer = document.getElementById('filter-options-list');
  const activeFilterContainer = document.getElementById('filters-active');
  let template = ``;
  let activeFilterTemplate = '';
  for (const filter of filters) {
    const filterName = filter.toLocaleLowerCase().split(' ').join('-');

    template += `
      <li>
        <input id="${filterName}" class="filter-option" type="checkbox" value="${filterName}">
                <label for="${filterName}">${filter}</label>
      </li>  
    `;

    // activeFilterTemplate += `
    //     <article class="filter-active" id="filter-active-${filterName}">
    //       <p class="filter-text">${filter}</p>
    //       <button data-filter="${filterName}" title="Eliminar filtro" class="discart-filter-button material-symbols-outlined">
    //         close
    //       </button>
    //     </article>`;
  }

  filterContainer.innerHTML = template;

  // activeFilterContainer.innerHTML = activeFilterTemplate;

  //Ponemos los filtros en base a la URL
  const filtersURL = CURRENT_URL.searchParams.getAll('filter');
  console.log(filtersURL);

  //Añadimos evento de escucha a los filtros
  document.querySelectorAll('.filter-option').forEach(filter => {

    if (filter.value.length > 0 && filtersURL.some(el => el.includes(filter.value))) {
      filter.checked = true;

      // document.getElementById(`filter-active-${filter.value}`).classList.add('show-filter');

      activeFilterTemplate += `
        <article class="filter-active show-filter" id="filter-active-${filter.value}">
          <p class="filter-text">${filter.value}</p>
          <button data-filter="${filter.value}" title="Eliminar filtro" class="discart-filter-button material-symbols-outlined">
            close
          </button>
        </article>`;
    }

    filter.addEventListener('change', (e) => {
      updateURL(1, filter.value, filter.checked);

      const filterElement = document.getElementById(`filter-active-${filter.value}`);

      if (!filterElement) {
        let filterActive = `<article class="filter-active show-filter" id="filter-active-${filter.value}">
        <p class="filter-text">${filter.value.split('-').join(' ')}</p>
        <button data-filter="${filter.value}" title="Eliminar filtro" class="discart-filter-button material-symbols-outlined">
          close
        </button>
      </article>`
        activeFilterContainer.insertAdjacentHTML('beforeend', filterActive);
        hideActiveFilter();
      } else {
        filterElement.classList.toggle('show-filter', filter.checked);
      }
      if (!filter.checked) {
        filterElement.remove();
      }

      // document.getElementById(`filter-active-${filter.value}`).classList.toggle('show-filter', filter.checked);
    });
  });

  activeFilterContainer.innerHTML = activeFilterTemplate;
  hideActiveFilter();
}

function hideActiveFilter() {
  document.querySelectorAll('.discart-filter-button').forEach(filterOption => {
    const filter = filterOption.dataset.filter;
    const filterContainer = document.getElementById('filter-options-list');
    const filterElement = document.getElementById(`filter-active-${filter}`);
    filterOption.addEventListener('click', () => {

      const filterCheckbox = filterContainer.querySelector(`#${filter}`);
      filterCheckbox.checked = false;

      updateURL(1, filter, false);
      filterElement.remove();
    });
  });
}