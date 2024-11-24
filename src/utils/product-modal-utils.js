import { getProductById } from "../api/api.js";
import { sweetAlert } from "./alerts.js";

// Variables de elementos del modal
export const MODAL_PRODUCT_IMG = document.getElementById("modal-product-img");
export const PRODUCT_MODAL = document.getElementById("addCartModal");
export const PRODUCT_PRICE_MODAL = document.getElementById(
  "modal-product-price"
);
export const MODAL_ID_PRODUCT = document.getElementById("id-modal-input");
export const CLOSE_MODAL_BUTTON = document.getElementById("close-modal");
export const PRODUCT_QUANTITY_MODAL_INPUT =
  document.getElementById("product-quantity");
export const SUM_MODAL_BUTTON = document.getElementById("sum-quantity");
export const SUBSTRACT_MODAL_BUTTON =
  document.getElementById("substract-quantity");
const ADD_TO_CART_BUTTON = document.getElementById("add-to-cart-button");

//Para ahorrarme crear un evento de escucha en cada renderización
//Creare una función y la insertare en el objeto window para ponerla en el onclick en el html de inserto
//dinamicamente.
export function showAddToCartModal(id) {
  //Obtenemos el producto
  const product = getProductById(id);
  if (!product) {
    sweetAlert(
      3,
      "No se pudo obtener información del producto en este momento"
    );
    return;
  }

  if (product.quantity <= 0) {
    sweetAlert(4, "El producto se encuentra agotado");
    location.reload();
    return;
  }
  console.log(product.quantity)

  MODAL_PRODUCT_IMG.src = product.imgs[0];
  PRODUCT_MODAL.querySelector(".product-title").textContent = product.name;
  PRODUCT_MODAL.showModal();
  PRODUCT_PRICE_MODAL.textContent = product.price;
  PRODUCT_QUANTITY_MODAL_INPUT.max = product.quantity;
  PRODUCT_QUANTITY_MODAL_INPUT.value = 1;
  MODAL_ID_PRODUCT.value = id;
  document.body.classList.add("body-no-scroll-modal-opened");
}

//Función para sumar cantidad de producto
function onClickSumBtn() {
  PRODUCT_QUANTITY_MODAL_INPUT.value =
    parseInt(PRODUCT_QUANTITY_MODAL_INPUT.value) + 1;
  PRODUCT_QUANTITY_MODAL_INPUT.dispatchEvent(new Event("input"));
}

// Función para restar cantidad de producto
function onClickSubstractBtn() {
  if (parseInt(PRODUCT_QUANTITY_MODAL_INPUT.value) > 1) {
    PRODUCT_QUANTITY_MODAL_INPUT.value =
      parseInt(PRODUCT_QUANTITY_MODAL_INPUT.value) - 1;
    PRODUCT_QUANTITY_MODAL_INPUT.dispatchEvent(new Event("input"));
  }
}

//Evento para cuando cambie el input del modal
PRODUCT_QUANTITY_MODAL_INPUT.addEventListener("input", (e) => {
  let value = parseInt(e.target.value);
  const maxValue = parseInt(e.target.max);
  //En caso sea un número negativo o no sea un número se igualará a 1 su valor.
  if (value <= 0 || isNaN(value)) {
    PRODUCT_QUANTITY_MODAL_INPUT.value = 1;
    value = 1;
    return;
  }// Si el valor excede el máximo permitido, se igualará a su valor actual
  else if (value > maxValue) {
    PRODUCT_QUANTITY_MODAL_INPUT.value = maxValue;
    return;
  }

  const product = getProductById(MODAL_ID_PRODUCT.value);

  PRODUCT_PRICE_MODAL.innerText = (product.price * value).toFixed(2);
});

//Evento para añadir producto al carrito
async function addToCart() {
  const quantity = parseInt(PRODUCT_QUANTITY_MODAL_INPUT.value);
  const idProduct = MODAL_ID_PRODUCT.value;

  const { modifyCarrito } = await import("../../api/api.js");

  modifyCarrito(idProduct, quantity);

  PRODUCT_MODAL.close();
  document.body.classList.remove("body-no-scroll-modal-opened");
}

// Cerrar modal
function closeModal() {
  PRODUCT_MODAL.close();
  document.body.classList.remove("body-no-scroll-modal-opened");
}

// Guardado de función para abrir modal en el objeto window
window.showAddToCartModal = showAddToCartModal;

// Asignación de eventos a los botones del modal
SUM_MODAL_BUTTON.onclick = onClickSumBtn;
SUBSTRACT_MODAL_BUTTON.onclick = onClickSubstractBtn;
CLOSE_MODAL_BUTTON.onclick = closeModal;
ADD_TO_CART_BUTTON.onclick = addToCart;
