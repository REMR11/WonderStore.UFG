import { getProductById } from "../../api/api.js";

// Constantes de URL y elementos del DOM
const CURRENT_URL = new URL(window.location.href);
const URL_PARAMS = new URLSearchParams(CURRENT_URL.search);
const productId = URL_PARAMS.get("idProduct");

const principalImage = document.getElementById("principal-image");
const containerImages = document.getElementById("image-section-container");
const quantitySell = document.getElementById("quantitySell");
const productName = document.getElementById("product_Name");
const productRate = document.getElementById("rate_Product");
const productPrice = document.getElementById("producto_Price");
const descriptionContent = document.getElementById("description_Content");
const counterInput = document.getElementById("counterInput");
const increaseButton = document.getElementById("increaseButton");
const decreaseButton = document.getElementById("decreaseButton");

// Carga inicial del producto
(async function loadProduct() {
    try {
        const product = await getProductById(productId);
        if (!product) throw new Error("Producto no encontrado");

        displayImages(product.imgs);
        displayQuantitySell(product.quantitySell);
        displayProductName(product.name);
        displayPrice(product.price);
        displayRating(calculateAverageRating(product.comments));
        displayDescription(product.description);

    } catch (error) {
        console.error("Error al cargar el producto:", error);
    }
})();

// Función para cargar y mostrar las imágenes del producto
function displayImages(images = []) {
    if (!Array.isArray(images) || images.length === 0) return;

    principalImage.src = images[0];
    containerImages.innerHTML = images
        .map((url, index) => `<img class="section-image" src="${url}" alt="Imagen del producto ${index + 1}" />`)
        .join("");

    containerImages.querySelectorAll(".section-image").forEach(image => {
        image.addEventListener("click", () => updatePrincipalImage(image.src));
    });
}

// Cambia la imagen principal al hacer clic en una miniatura
function updatePrincipalImage(imageUrl) {
    principalImage.src = imageUrl;
}

// Función para mostrar la cantidad de ventas
function displayQuantitySell(quantity) {
    quantitySell.textContent = quantity;
}

// Función para mostrar el nombre del producto
function displayProductName(name) {
    productName.textContent = name;
}

// Función para calcular la calificación promedio del producto
function calculateAverageRating(comments = []) {
    if (comments.length === 0) return 0;

    const totalRating = comments.reduce((sum, comment) => sum + (comment.rate || 0), 0);
    return totalRating / comments.length;
}

// Función para mostrar la calificación en forma de estrellas
function displayRating(rate) {
    const filledStars = "★".repeat(Math.round(rate));
    const emptyStars = "☆".repeat(5 - filledStars.length);
    productRate.innerHTML = `Calificación: ${filledStars}${emptyStars}`;
}

// Función para mostrar el precio del producto
function displayPrice(price) {
    productPrice.textContent = `$ ${price}`;
}

// Función para mostrar la descripción del producto
function displayDescription(description) {
    descriptionContent.textContent = description;
}

// Configuración del contador de cantidad
document.addEventListener("DOMContentLoaded", () => {
    increaseButton.addEventListener("click", () => updateCounter(1));
    decreaseButton.addEventListener("click", () => updateCounter(-1));
});

// Función para actualizar el contador de cantidad
function updateCounter(change) {
    let currentValue = parseInt(counterInput.value) || 1;
    const newValue = currentValue + change;
    if (newValue >= 1) counterInput.value = newValue;
}
