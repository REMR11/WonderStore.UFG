import { getProductById } from "../../api/api.js";
import { sweetAlert } from "../../utils/alerts.js";
import {
  MODAL_ID_PRODUCT,
  MODAL_PRODUCT_IMG,
  PRODUCT_MODAL,
  PRODUCT_PRICE_MODAL,
  PRODUCT_QUANTITY_MODAL_INPUT
} from "../utils/product-modal-utils.js";
  
//Evento que redirecciona a la página de detalles del producto
export function redirectToDetailsEvent() {
  document.querySelectorAll(".product-card").forEach((productCard) => {
    productCard.addEventListener("click", (event) => {
      // Evita que el clic en el botón propague al `article`
      if (event.target.closest('.product-add-cart-btn')) return;

      const idProduct = productCard.dataset.idProduct;
      window.location.href = `../details/?idProduct=${idProduct}`;
    });
  });
}


export function ProductCard(product, isSwiper = false) {
  return `
    <article class="product-card ${
      isSwiper ? "swiper-slide" : ""
    }" data-id-product="${product.id}">
    <div class="product-img-container on-load-img-fn">
        <img class="product-img" src=${product.imgs[0]}
          alt="${product.name}">
      </div>
      <div class="product-info">
        <h3 class="product-info-title">${product.name}</h3>
        <p class="product-info-category">${product.category}</p>
        <span class="product-info-price">$${product.price}</span>
        <button title="Agregar al carrito" onclick="showAddToCartModal('${
          product.id
        }')" class="general-btn product-add-cart-btn"
          data-product-id="${product.id}">Agregar al carrito</button>
      </div>
    </article>
  `;
}
