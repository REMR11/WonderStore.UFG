import { getProductById } from "../../api/api.js";

const CURRENT_URL = new URL(window.location.href);
const URL_PARAMS = new URLSearchParams(CURRENT_URL.search);
const productId = URL_PARAMS.get("idProduct");

// Elementos del DOM
const principalImage = document.getElementById('principal-image');
const containerImages = document.getElementById('image-section-container');
const quantitySell = document.getElementById('quantitySell');

// Carga inicial del producto
(async function loadProduct() {
    try {
        const product = await getProductById(productId);
        if (product) {
            loadImages(product.imgs);
            loadQuantitySell(product.quantitySell);
        } else { console.error("Producto no encontrado"); }
    } catch (error) { console.error("Error al cargar el producto:", error); }
})();

// Carga las imágenes del producto
function loadImages(images) {
    if (Array.isArray(images) && images.length > 0) {
        principalImage.src = images[0];
        containerImages.innerHTML = images.map((url, index) => `
            <img class="section-image" src="${url}" alt="Imagen del producto ${index + 1}" />
        `).join('');
        
        containerImages.querySelectorAll('.section-image').forEach(image => {
            image.addEventListener('click', () => changePrincipalImage(image.src));
        });
    }
}

// Cambia la imagen principal al hacer clic en una miniatura
function changePrincipalImage(imageUrl) { principalImage.src = imageUrl; }

// Carga la cantidad de ventas del producto
function loadQuantitySell(quantity) { quantitySell.textContent = quantity; }
