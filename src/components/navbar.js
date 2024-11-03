import { getCarrito } from "../api/api.js";
import { BASE_URL } from "../utils/globalVariables.js";
import ROUTES from "../utils/routes.js";

function getListItem(linkArray, isExpandedItem = false) {
  let links = "";

  for (const link of linkArray) {
    if (link.isExpandContainer) {
      links += `<li class="nav-item navbar-expand-container">
                    <label class="navbar-list-item navbar-expand-label">
                      ${link.title}
                      <span class="material-symbols-outlined">
                        ${link.iconExpanded ?? "keyboard_arrow_down"}
                      </span>
                    </label>
                    <ul class="navbar-expanded-list">
                      ${getListItem(link.children, true)}
                    </ul>
                </li>`
    } else{
      if (!isExpandedItem) {
        links += `<li class="nav-item">
                      <a class="navbar-list-item" href="${link.URL}">${link.title}</a>
                  </li>`
      } else {
        links += `<li class="navbar-expanded-item">
                    <a class="navbar-list-item" href="${link.URL}">${link.title}</a>
                  </li>`
      }
    }
  }

  return links;
}

function generateHeader(links){
  const carrito = getCarrito();
  let header = `
    <header class="header-principal nav-container">
      <div class="nav-logo">
        <a href="${BASE_URL}" class="nav-logo-img">
          <img src="../assets/icons/logo-navbar.webp" alt="Icono de la tienda">
        </a>
      </div>
      <div class="nav-section-2">
        <nav class="navbar">
          <div class="nav__menu__container">
            <p>Menú</p>
            <div class="nav__burger__menu navbar__burger__menu--open" title="Cerrar Menú">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <u class="navbar-list">
            ${links}
          </u>
        </nav>
        <div class="overlay"></div>
        <div class="shopping">
          <a href="/carrito" title="Ir al carrito" id="shopping-button" data-count-item-shopping="${carrito ? carrito.cart.length : 0}">
            <span class="material-symbols-outlined">
              shopping_cart
            </span>
          </a>
        </div>
        <div class="nav__menu__container" title="Abrir Menú">
          <div class="nav__burger__menu">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </header>
  `

  return header
}

export async function recalculateCart(){
  const carrito = getCarrito();
  document.getElementById("shopping-button").dataset.countItemShopping = carrito.cart.length;
}

(() => {
  const links = getListItem(ROUTES);
  const header = generateHeader(links);

  document.body.insertAdjacentHTML("afterbegin", header);
})();