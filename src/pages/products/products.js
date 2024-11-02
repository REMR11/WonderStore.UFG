import { getProductById, getProducts } from "../../api/api.js";
import { sweetAlert } from "../../utils/alerts.js";
import { debounce } from "../../utils/debounce.js";
import { BASE_URL, CATEGORIES, TOPICS } from "../../utils/globalVariables.js";
import { noPaste } from "../../utils/validacionens.js";

const CURRENT_URL = new URL(window.location.href);
const URL_PARAMS = new URLSearchParams(CURRENT_URL.search);

let firstRender = false;
let allProducts = [];

document.addEventListener("DOMContentLoaded", function () {
  onLoadIMG();
  preparePage();
  //Cargamos los productos con un tiempo de espera para simular carga
  setTimeout(() => {
    let filtersURL = URL_PARAMS.getAll('filter')?.[0]?.split(',') ?? []

    const order = URL_PARAMS.get('order');
    loadProducts(filtersURL, order);
  }, 1000);

  noPaste([PRODUCT_QUANTITY_MODAL_INPUT]);
});

// Para el efecto PARALAX
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const bannerBg = document.querySelector('.banner-bg');
  const speed = 0.3; // Adjust the speed of the parallax effect

  bannerBg.style.transform = `translateY(${scrollPosition * speed}px)`;
});

//Elementos del DOM
const BANNER = document.getElementById('banner-category');
const BANNER_TEXT = document.getElementById('banner-text-category');
const FILTER_CONTAINER = document.getElementById('filter-options-list');
const FILTERS_ACTIVE_CONTAINER = document.getElementById('filters-active');
const PRODUCT_MODAL = document.getElementById('addCartModal');
const CLOSE_MODAL_BUTTON = document.getElementById('close-modal');
const NOT_FOUND_MESSAGE = document.getElementById('product-notFound');
const PRODUCTS_CONTAINER = document.getElementById('products-container');
const MODAL_PRODUCT_IMG = document.getElementById('modal-product-img');
const SUBSTRACT_MODAL_BUTTON = document.getElementById('substract-quantity');
const SUM_MODAL_BUTTON = document.getElementById('sum-quantity');
const PRODUCT_QUANTITY_MODAL_INPUT = document.getElementById('product-quantity');
const PRODUCT_PRICE_MODAL = document.getElementById('modal-product-price');
const MODAL_ID_PRODUCT = document.getElementById('id-modal-input');
const ADD_TO_CART_BUTTON = document.getElementById('add-to-cart-button');
const SEARCH_INPUT = document.getElementById('search-product-input');
const ORDER_OPTION_TEXT = document.getElementById('order-option');

/**
 * Método para setear el banner
 * @param {string} bannerName Representa el nombre de la imagen del banner
 * @param {string} bannerTextName representa el nombre del texto del banner
 * @param {string} className Nombre de la clase personalizada para el banner 
 */
function setBanner(bannerName, bannerTextName, className) {
  BANNER.src = `${BASE_URL}/assets/banners/${bannerName}`;
  BANNER_TEXT.src = `${BASE_URL}/assets/banners/${bannerTextName}`;

  const bannerContainer = document.querySelectorAll('.banner-container')[0];

  bannerContainer.classList.add(`on-load-img-fn-loaded`);

  bannerContainer.classList.add(className);
}

/**
 * Función para actualizar la URL de la página
 * @param {number} option Número de la opción a actualizar {1: Filtros, 2: Orden, 3: Búsqueda} 
 * @param {string} value Valor a actualizar 
 * @param {boolean} add representa si el valor se añade o se quita 
 */
function updateURL(option, value, add = true) {
  //Obtenemos los filtros y orden de la URL
  const currentFilters = URL_PARAMS.getAll('filter')?.[0]?.split(',') ?? [];
  let newURL = '';
  let currentOrder = URL_PARAMS.get('order');
  switch (option) {
    case 1:
      // Actualizamos el filtro
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
      newURL = `${CURRENT_URL.origin}${CURRENT_URL.pathname}${URL_PARAMS.toString() === '' ? '' : `?${URL_PARAMS}`}`;

      window.history.replaceState({}, '', newURL);
      break;
    case 2:
      //Actualizamos el orden
      URL_PARAMS.set('order', value);
      currentOrder = value;
      newURL = `${CURRENT_URL.origin}${CURRENT_URL.pathname}${URL_PARAMS.toString() === '' ? '' : `?${URL_PARAMS}`}`;
      window.history.replaceState({}, '', newURL);
      break;
    case 3:
      //Actualizamos la busqueda
      if (value.length <= 0) {
        URL_PARAMS.delete('search');
      } else {
        URL_PARAMS.set('search', value);
      }

      newURL = `${CURRENT_URL.origin}${CURRENT_URL.pathname}${URL_PARAMS.toString() === '' ? '' : `?${URL_PARAMS}`}`;
      window.history.replaceState({}, '', newURL);
      break;
    default:
      break;
  }

  if (firstRender) {
    renderProducts(allProducts, currentFilters, currentOrder);
  }
}

//Método para añadir animación al cargar la imagen
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

  //Ponemos el dato por el cual se busca
  const search = CURRENT_URL.searchParams.get('search');
  if (search) {
    SEARCH_INPUT.value = search;
  }
}

//Función trol para añadir el efecto LOLI
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

//Función que muestra todos los filtros activos y les añade el evento a los filtros del panel
function loadActiveFilters() {
  //Ponemos los filtros en base a la URL
  const filtersURL = CURRENT_URL.searchParams.getAll('filter');

  //Añadimos evento de escucha a las opciones de filtro en el panel del filtro
  document.querySelectorAll('.filter-option').forEach(filter => {

    //Si el filtro esta en la URL lo añadimos directo al template y marcamos el filtro
    if (filter.value.length > 0 && filtersURL.some(el => el.includes(filter.value))) {
      filter.checked = true;

      document.getElementById(`filter-active-${filter.value}`).classList.add('show-filter');
      // //Lo añadimos a la clase de escucha
      // activeFilterTemplate += `
      // <article class="filter-active show-filter" id="filter-active-${filter.value}">
      //   <p class="filter-text">${filter.value}</p>
      //   <button data-filter="${filter.value}" title="Eliminar filtro" class="discart-filter-button material-symbols-outlined">
      //     close
      //   </button>
      // </article>`;
    }

    //Añadimos el evento aquí para los filtros dentro del panel de filtros
    filter.addEventListener('change', (e) => {
      //Actualizamos la URL
      updateURL(1, filter.value, filter.checked);

      const filterElement = document.getElementById(`filter-active-${filter.value}`);
      //Añadimos o eliminamos el filtro al panel de filtros

      //En caso que se desmarque lo removemos
      //Ejecutamos los eventos para añadir eventos de escucha y añadir elemento de remover a los filtros recién renderizados
      document.getElementById(`filter-active-${filter.value}`).classList.toggle('show-filter', filter.checked);
      addRemoveFilterOption();//Añadir el botón  de remover todos los filtros
    });
  });
  addRemoveFilterOption();//Añadir el botón  de remover todos los filtros
}

//Cargar todos los filtros tanto en el panel como los active filter pero ocultarlos
function loadFilters(filters) {
  let activeFilterTemplate = '';
  let template = ``;
  //Creamos el template con los filtros en el contenedor
  for (const filter of filters) {
    const filterName = filter.toLocaleLowerCase().split(' ').join('-');

    template += `
      <li>
        <input id="${filterName}" class="filter-option" type="checkbox" value="${filterName}">
                <label for="${filterName}">${filter}</label>
      </li>  
    `;

    activeFilterTemplate += `
        <article class="filter-active" id="filter-active-${filterName}">
          <p class="filter-text">${filter}</p>
          <button data-filter="${filterName}" title="Eliminar filtro" class="discart-filter-button material-symbols-outlined">
            close
          </button>
        </article>`;
  }

  //Añadir opciones de filtro
  FILTER_CONTAINER.innerHTML = template;

  //Añadimos los filtros al panel de filtros y asignamos eventos y boton de remover filtros
  FILTERS_ACTIVE_CONTAINER.innerHTML = activeFilterTemplate;
  loadActiveFilters();
  hideActiveFilter();//Asignar el evento de escucha para ocultarlos filtros mediante su boton propio
}

//Función para añadir evento click a todos los filter list para ocultarlos
function hideActiveFilter() {
  //Obtenemos todos los botones para descartar filtros y añadimos evento de escucha
  document.querySelectorAll('.discart-filter-button').forEach(filterOption => {
    //Asignamos el evento de escucha
    filterOption.addEventListener('click', () => {

      const filter = filterOption.dataset.filter;
      const filterElement = document.getElementById(`filter-active-${filter}`);
      const filterCheckbox = FILTER_CONTAINER.querySelector(`#${filter}`);
      filterCheckbox.checked = false;//Quitamos el check del panel de filtros
      filterElement.classList.remove('show-filter');
      updateURL(1, filter, false);//Actualizamos la URL
      // filterElement.remove();//Removemos el filtro
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

  //Validamos que hallan filtros activos
  const filtersActive = FILTERS_ACTIVE_CONTAINER.querySelectorAll('.show-filter');
  if (filtersActive.length <= 0) return;

  //La creamos ya que si hay filtros
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
}

//Función para setear el Orden
function setOrder(order) {
  if (order == null) order = 'all';

  //Colocamos el texto
  switch (order) {
    case 'high-price':
      ORDER_OPTION_TEXT.innerText = "Mayor precio"
      break;
    case 'low-price':
      ORDER_OPTION_TEXT.innerText = "Menor precio"
      break;
    default:
      ORDER_OPTION_TEXT.innerText = "Todos";
      break;
  }
  
  updateURL(2, order);//Actualizamos en la URL
  //Lo seleccionamos en el panel
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
      //Removemos los filtros
      FILTERS_ACTIVE_CONTAINER.querySelectorAll('.show-filter').forEach(filter => {
        filter.classList.remove('show-filter');
      });
    });
  }
}

//Para ahorrarme crear un evento de escucha en cada renderización
//Creare una función y la insertare en el objeto window para ponerla en el onclick en el html de inserto
//dinamicamente.
function showAddToCartModalJ(id) {
  //Obtenemos el producto
  const product = getProductById(id);

  if (!product) {
    sweetAlert(3, 'No se pudo obtener información del producto en este momento');
    return
  }

  if (product.quantity <= 0) {
    sweetAlert(4, 'El producto se encuentra agotado');
    location.reload();
    return
  }

  MODAL_PRODUCT_IMG.src = product.imgs[0];
  PRODUCT_MODAL.querySelector('.product-title').textContent = product.name;
  PRODUCT_MODAL.showModal();
  PRODUCT_PRICE_MODAL.textContent = product.price;
  PRODUCT_QUANTITY_MODAL_INPUT.value = 1;
  MODAL_ID_PRODUCT.value = id;
  document.body.classList.add('body-no-scroll-modal-opened');
}

window.showAddToCartModalJ = showAddToCartModalJ;


CLOSE_MODAL_BUTTON.addEventListener('click', () => {
  PRODUCT_MODAL.close();
  document.body.classList.remove('body-no-scroll-modal-opened');
});

//Función para ordenar productos
function orderProducts(products, order = "all") {
  //Ordenamos los productos si lo desea 
  return products.sort((a, b) => {
    if (order === 'low-price') {
      return a.price - b.price; // Orden ascendente por precio
    } else if (order === 'high-price') {
      return b.price - a.price; // Orden descendente por precio
    }
    return 0; // Sin orden
  });
}

function filterProducts(products, filters = null) {
  const topic = URL_PARAMS.get('topic');
  const searchParam = URL_PARAMS.get('search');
  return products
    .filter(product => product.quantity > 0)
    .filter(product => product.topic === topic)
    .filter(product => {
      if (filters && filters.length > 0) {
        return filters.includes(product.category.toLowerCase().replaceAll(' ', '-'));
      }
      return true;
    })
    .filter(product => {
      if (searchParam && searchParam.length > 0) {
        return product.name.toLowerCase().includes(searchParam);
      }
      return true;
    });
}

//Función para renderizar productos
function renderProducts(products, filter = null, order = "all") {
  NOT_FOUND_MESSAGE.style.display = 'none';
  //Insertamos los productos en el contenedor
  let template = '';

  products = filterProducts(products, filter);
  products = orderProducts(products, order);

  for (const product of products) {
    template += `
      <article class="product-card" data-id-product="${product.id}">
        <div class="product-img-container on-load-img-fn">
          <img class="product-img" src=${product.imgs[0]}
            alt="${product.name}">
        </div>
        <div class="product-info">
          <h3 class="product-info-title">${product.name}</h3>
          <p class="product-info-category">${product.category}</p>
          <span class="product-info-price">$${product.price}</span>
          <button title="Agregar al carrito" onclick="showAddToCartModalJ('${product.id}')" class="general-btn product-add-cart-btn"
            data-product-id="${product.id}">Agregar al carrito</button>
        </div>
      </article>
    `;
  }

  PRODUCTS_CONTAINER.innerHTML = template;

  if (products.length === 0) {
    NOT_FOUND_MESSAGE.style.display = 'block';
  }
  onLoadIMG();
  redirectToDetailsEvent();
}

//Función que carga todos los productos SIMULA EL FETCH
async function loadProducts(filters = null, order = "all") {
  firstRender = true;
  try {
    NOT_FOUND_MESSAGE.style.display = 'none';
    //Obtenemos los filtros, orden y tema en la URL
    const productsInDB = getProducts();
    allProducts = productsInDB;
    //En caso de que no existan debemos cargar los productos
    if (!productsInDB) {
      const { initializeApp } = await import("../general.js");

      await initializeApp();
      allProducts = getProducts();
    }

    renderProducts(allProducts, filters, order);
  } catch (error) {
    PRODUCTS_CONTAINER.innerHTML = '';
    NOT_FOUND_MESSAGE.style.display = 'block';
  }
}

//Añadir evento escucha a los botones del modal
SUM_MODAL_BUTTON.addEventListener('click', () => {
  PRODUCT_QUANTITY_MODAL_INPUT.value = parseInt(PRODUCT_QUANTITY_MODAL_INPUT.value) + 1;
  PRODUCT_QUANTITY_MODAL_INPUT.dispatchEvent(new Event('input'));
})

SUBSTRACT_MODAL_BUTTON.addEventListener('click', () => {
  if (parseInt(PRODUCT_QUANTITY_MODAL_INPUT.value) > 1) {
    PRODUCT_QUANTITY_MODAL_INPUT.value = parseInt(PRODUCT_QUANTITY_MODAL_INPUT.value) - 1;
    PRODUCT_QUANTITY_MODAL_INPUT.dispatchEvent(new Event('input'));
  }
})

//Evento para cuando cambie el input del modal
PRODUCT_QUANTITY_MODAL_INPUT.addEventListener('input', (e) => {
  let value = parseInt(e.target.value);

  //En caso sea un número negativo o no sea un número se igualará a 1 su valor.
  if (value <= 0 || isNaN(value)) {
    PRODUCT_QUANTITY_MODAL_INPUT.value = 1;
    value = 1;
    return;
  }

  const product = getProductById(MODAL_ID_PRODUCT.value);

  PRODUCT_PRICE_MODAL.innerText = (product.price * value).toFixed(2);
});

//Evento para añadir producto al carrito
ADD_TO_CART_BUTTON.addEventListener('click', async () => {
  const quantity = parseInt(PRODUCT_QUANTITY_MODAL_INPUT.value);
  const idProduct = MODAL_ID_PRODUCT.value;

  const { modifyCarrito } = await import("../../api/api.js");

  modifyCarrito(idProduct, quantity);

  PRODUCT_MODAL.close();
  document.body.classList.remove('body-no-scroll-modal-opened');
})

//Evento que redirecciona a la página de detalles del producto
function redirectToDetailsEvent() {
  document.querySelectorAll('.product-card').forEach(productCard => {
    productCard.addEventListener('click', () => {
      const idProduct = productCard.dataset.idProduct;
      window.location.href = `../details/?idProduct=${idProduct}`;
    });
  })
}
//Función debounceSearch
const debounceSearch = debounce((event) => {
  const value = event.target.value.trim().toLocaleLowerCase();

  updateURL(3, value);
}, 500);

SEARCH_INPUT.addEventListener('input', debounceSearch);

document.getElementById('search-form').addEventListener('submit', (e) => {
  e.preventDefault();

  updateURL(3, SEARCH_INPUT.value.trim().toLocaleLowerCase());
})


//Método para simular lo que serían los filtros con popover y anchor (AUN NO TIENE SOPORTE)
document.addEventListener('click', function (event) {
  const filterToggle = document.getElementById('filter-checked');
  const filterPanel = document.querySelector('.filter-options-panel');
  const filterButton = document.querySelector('.filter-option-btn');

  const orderToggle = document.getElementById('order-checked');
  const orderPanel = document.getElementById('order-options-panel');
  const orderButton = document.querySelector('.order-option');

  // Verifica si el clic fue fuera del botón y del panel
  if (!filterButton.contains(event.target) && !filterPanel.contains(event.target) && !filterToggle.contains(event.target)) {
    // Si el panel está visible, oculta el panel y desmarca el checkbox
    if (filterToggle.checked) {
      filterToggle.checked = false; // Desmarca el checkbox
    }
  }

  // Verifica si el clic fue fuera del botón y del panel
  if (!orderButton.contains(event.target) && !orderPanel.contains(event.target) && !orderToggle.contains(event.target)) {
    // Si el panel está visible, oculta el panel y desmarca el checkbox
    if (orderToggle.checked) {
      orderToggle.checked = false; // Desmarca el checkbox
    }
  }
});