import { getCarrito, deleteProductInCart, modifyCarrito, emptyCart } from "../../api/api.js";
import { sweetAlert } from "../utils/alerts.js";

// Función para actualizar el carrito en la vista
function updateCartView() {
    const cartItemsContainer = document.getElementById("cart-items-container");
    const carrito = getCarrito();


    cartItemsContainer.innerHTML = '';

    if (carrito.cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
        return;
    }

    carrito.cart.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("producto-cart");

        const productInfo = document.createElement("div");
        productInfo.classList.add("producto-info");

        const productImage = document.createElement("img");
        productImage.src = product.productImage;
        productImage.alt = product.productName;
        productImage.classList.add("cart-item-image");

        const productName = document.createElement("span");
        productName.textContent = product.productName;
        productName.classList.add("producto-name");

        const productPrice = document.createElement("span");
        productPrice.textContent = `Precio: $${product.productPrice.toFixed(2)}`;
        productPrice.classList.add("product-price");

        productInfo.append(productImage, productName, productPrice);

        const productQuantity = document.createElement("div");
        productQuantity.classList.add("cantidad-container");

        const minusButton = document.createElement("button");
        minusButton.classList.add("quantity-button", "minus");
        minusButton.textContent = "-";
        minusButton.addEventListener('click', () => modifyProductQuantity(product.id, -1));

        const quantitySpan = document.createElement("span");
        quantitySpan.classList.add("cart-item-quantity");
        quantitySpan.textContent = product.quantity;

        const plusButton = document.createElement("button");
        plusButton.classList.add("quantity-button", "plus");
        plusButton.textContent = "+";
        plusButton.addEventListener('click', () => modifyProductQuantity(product.id, 1));

        productQuantity.append(minusButton, quantitySpan, plusButton);

        const productActions = document.createElement("div");
        productActions.classList.add("total-container");

        const productSubTotal = document.createElement("span");
        productSubTotal.textContent = ` $${product.subTotal.toFixed(2)}`;
        productSubTotal.classList.add("cart-item-total");

        const btnDelete = document.createElement("button");
        btnDelete.classList.add("delete-button");
        btnDelete.textContent = "X";
        btnDelete.onclick = () => removeProductFromCart(product.id);

        productActions.append(productSubTotal, btnDelete);
        productCard.append(productInfo, productQuantity, productActions);
        cartItemsContainer.appendChild(productCard);
    });
    const subtotalAmount = document.getElementById("subtotal-amount");
    subtotalAmount.textContent = `$${carrito.total.toFixed(2)}`;
}

// Función para modificar la cantidad de un producto
function modifyProductQuantity(id, change) {
    const carrito = getCarrito();
    const product = carrito.cart.find(item => item.id === id);

    if (product) {
        let newQuantity = product.quantity + change;

        if (newQuantity <= 0) {
            newQuantity = 1;
        }
        modifyCarrito(id, newQuantity - product.quantity, false);
        updateCartView();
    }
}
// Función para actualizar el subtotal del carrito en la vista
function updateCartSubtotal() {
    const carrito = getCarrito();
    const subtotalAmount = document.getElementById("subtotal-amount");
    subtotalAmount.textContent = `$${carrito.total.toFixed(2)}`;
}
// Función para eliminar un producto del carrito
function removeProductFromCart(id) {

    sweetAlert(1, "Producto eliminado del carrito correctamente.");
    deleteProductInCart(id);
    updateCartView();
    updateCartSubtotal();
}

// Función para vaciar el carrito
function clearCart() {
    emptyCart();
    updateCartView();
    updateCartSubtotal();
}


function checkout() {
    const carrito = getCarrito();
    if (carrito.cart.length === 0) {
        sweetAlert(4, "El carrito está vacío.");
        return;
    }else{
        window.location.href = '/confirmacion';
    }
}
//  actualizar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    updateCartView();
    const clearCartButton = document.querySelector('.vaciar-carrito-button');
    const checkoutButton = document.querySelector('.pago-button');

    clearCartButton.addEventListener('click', clearCart);
    checkoutButton.addEventListener('click', checkout);
});
