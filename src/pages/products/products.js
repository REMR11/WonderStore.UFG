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
const FILTER_CONTAINER = document.getElementById('filter-options-list');
const FILTERS_ACTIVE_CONTAINER = document.getElementById('filters-active');

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

      // Conservamos los demás parámetros
      Object.keys(URL_PARAMS).forEach((key) => {
        if (key !== 'filter') {
          URL_PARAMS.set(key, queryParams.get(key));
        }
      });

      // Actualizamos la URL con los nuevos parámetros
      let newURL = `${CURRENT_URL.origin}${CURRENT_URL.pathname}${URL_PARAMS.toString() === '' ? '' : `?${URL_PARAMS}`}`;

      window.history.replaceState({}, '', newURL);
      break;
      break;
    case 2:
      //Actualizamos el orden
      CURRENT_URL.searchParams.set('order', value);
      window.history.replaceState({}, '', CURRENT_URL.href);
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

  //Cargamos el orden
  const order = URL_PARAMS.get('order');
  setOrder(order)

  //Añadimos la funcionalidad a las demás ordenes
  document.querySelectorAll('.order-option').forEach(option => {
    option.addEventListener('change', (e) => {
      setOrder(e.target.value);
    });
  });

  //Cargamos los filtros
  loadFilters(categoryInfo.productTypes);
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

  FILTER_CONTAINER.innerHTML = template;

  // activeFilterContainer.innerHTML = activeFilterTemplate;

  //Ponemos los filtros en base a la URL
  const filtersURL = CURRENT_URL.searchParams.getAll('filter');

  //Añadimos evento de escucha a los filtros
  document.querySelectorAll('.filter-option').forEach(filter => {

    //Si el filtro esta en la URL lo añadimos directo al template y marcamos el filtro
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

    //Añadimos el evento aquí
    filter.addEventListener('change', (e) => {
      //Actualizamos la URL
      updateURL(1, filter.value, filter.checked);

      const filterElement = document.getElementById(`filter-active-${filter.value}`);
      //Añadimos o eliminamos el filtro al panel de filtros
      if (!filterElement) {
        let filterActive = `<article class="filter-active show-filter" id="filter-active-${filter.value}">
        <p class="filter-text">${filter.value.split('-').join(' ')}</p>
        <button data-filter="${filter.value}" title="Eliminar filtro" class="discart-filter-button material-symbols-outlined">
          close
        </button>
      </article>`

        const lastElement = FILTERS_ACTIVE_CONTAINER.lastElementChild;
        //Dependiendo de si es el ultimo elemento lo añadimos despues del ultimo o al inicio
        if (lastElement) {
          lastElement.insertAdjacentHTML('beforebegin', filterActive);
        } else {
          FILTERS_ACTIVE_CONTAINER.insertAdjacentHTML('beforeend', filterActive);
        }
      } else {
        //Como ya existe simplemente mostramos el filtro
        filterElement.classList.toggle('show-filter', filter.checked);
      }
      //En caso que se desmarque lo removemos
      if (!filter.checked) {
        filterElement.remove();
      }
      //Ejecutamos los eventos para añadir eventos de escucha y añadir elemento de remover a los filtros recién renderizados
      addRemoveFilterOption()
      hideActiveFilter();
      // document.getElementById(`filter-active-${filter.value}`).classList.toggle('show-filter', filter.checked);
    });
  });

  //Añadimos los filtros activos al panel de filtros y asignamos eventos y boton de remover filtros
  FILTERS_ACTIVE_CONTAINER.innerHTML = activeFilterTemplate;
  hideActiveFilter();
  addRemoveFilterOption();
}

//Función para añadir evento click a todos los filter list
function hideActiveFilter() {
  //Obtenemos todos los botones para descartar filtros y añadimos evento de escucha
  document.querySelectorAll('.discart-filter-button').forEach(filterOption => {
    const filter = filterOption.dataset.filter;
    const filterElement = document.getElementById(`filter-active-${filter}`);
    filterOption.addEventListener('click', () => {

      const filterCheckbox = FILTER_CONTAINER.querySelector(`#${filter}`);
      filterCheckbox.checked = false;//Quitamos el check del panel de filtros

      updateURL(1, filter, false);//Actualizamos la URL
      filterElement.remove();//Removemos el filtro
      addRemoveFilterOption()//Añadimos opción de remover a los filtros restantes
    });
  });
}

//Añadir opción de remover al final de los filtros
function addRemoveFilterOption() {
  const deleteFilterElement = FILTERS_ACTIVE_CONTAINER.querySelector('#discart-filter-all-button');
  //En caso que ya este la opción la eliminaremos para añadirla al final
  if (deleteFilterElement) {
    deleteFilterElement.remove();
  };

  //La creamos
  let template = `
    <article id="discart-filter-all-button" class="filter-active show-filter">
        <p class="filter-text">Borrar todo</p>
      </article>
  `;

  //La añadimos al final del elemento actual del contenedor
  const lastElement = FILTERS_ACTIVE_CONTAINER.lastElementChild;
  if (lastElement) {
    FILTERS_ACTIVE_CONTAINER.insertAdjacentHTML('beforeend', template);

    //Asignamos evento de escucha para eliminar todos los filtros
    deleteAllFilters()
  }
  // else {
  //   const FILTER_URL_PARAMS = CURRENT_URL.searchParams.getAll('filter');
  //   if (FILTER_URL_PARAMS.length > 0) {
  //     FILTERS_ACTIVE_CONTAINER.insertAdjacentHTML('beforeend', template);
  //   }
  // }
  // deleteAllFilters();
}

function setOrder(order) {
  if (order == null) order = 'all';

  updateURL(2, order);
  const orderElement = document.getElementById(`order-${order}`);
  if (orderElement) {
    orderElement.checked = true;
  }
}

//Función para añadir evento de escucha para eliminar todos los filtros
function deleteAllFilters() {
  //Obtenemos el botón de elimar todos los filtros y los filtro en la URL
  const discartButton = FILTERS_ACTIVE_CONTAINER.querySelector('#discart-filter-all-button');
  const filtersInURL = URL_PARAMS.getAll('filter');
  //Validamos que este el botón renderizado
  if (discartButton) {
    //Añadimos el evento de escucha
    discartButton.addEventListener('click', () => {

      //Iremos iterando cada filtro de la URL para eliminarlo del panel y de la barra de filtros
      filtersInURL[0].split(',').forEach(filter => {
        const filterCheckbox = FILTER_CONTAINER.querySelector(`#${filter}`);
        filterCheckbox.checked = false;
        updateURL(1, filter, false);
      });
      FILTERS_ACTIVE_CONTAINER.innerHTML = '';
    });
  }
}