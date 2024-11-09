import { getProductById } from "../../api/api.js";

// Constantes de URL y elementos del DOM
const CURRENT_URL = new URL(window.location.href);
const URL_PARAMS = new URLSearchParams(CURRENT_URL.search);
const productId = URL_PARAMS.get("idProduct");

const principalImage = document.getElementById("principal-image");
const containerImages = document.getElementById("image-section-container");
const quantitySell = document.getElementById("quantitySell");
const productName = document.getElementById("product_Name");
const productPrice = document.getElementById("producto_Price");
const descriptionContent = document.getElementById("description_Content");
const counterInput = document.getElementById("counterInput");
const increaseButton = document.getElementById("increaseButton");
const decreaseButton = document.getElementById("decreaseButton");
const overallRating = document.getElementById("overall_ratings");
const publicComments = document.getElementById("public_Comments");

// Carga inicial del producto
(async function loadProduct() {
    try {
        const product = await getProductById(productId);
        console.log(product);
        if (!product) throw new Error("Producto no encontrado");

        displayImages(product.imgs);
        displayQuantitySell(product.quantitySell);
        displayProductName(product.name);
        displayPrice(product.price);
        displayRating(calculateAverageRating(product.comments));
        displayDescription(product.description);
        displayGlobalQuantities(product.comments.length);
        updateProgressBars(countRatings(product.comments));
        displayComments(product.comments);

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
    const productRates = document.querySelectorAll(".rate_Product");

    // Itera sobre cada elemento y actualiza su contenido
    productRates.forEach((element) => {
        element.innerHTML = `Calificación: ${filledStars}${emptyStars}`;
    });
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

function displayGlobalQuantities(quantity){
    overallRating.innerHTML = `<span>${quantity}</span> Calificaciones globales`
}


function countRatings(pRatings) {
    const ratings = pRatings.map(comment => comment.rate);
    const counts = [0, 0, 0, 0, 0]; // Contadores para 1, 2, 3, 4, 5 estrellas

    ratings.forEach(rating => {
        if (rating >= 1 && rating <= 5) {
            counts[rating - 1]++; // Incrementar el contador correspondiente
        }
    });

    return counts;
}

// Función para calcular el porcentaje y actualizar las barras de progreso
function updateProgressBars(counts) {

    const sortCounts =counts.sort((a, b) => b - a);
    const totalRatings = sortCounts.reduce((sum, count) => sum + count, 0);

    // Seleccionamos todas las barras de progreso
    const progressBars = document.querySelectorAll('.progress-bar');
    const percentageLabels = document.querySelectorAll('.rating-percentage');

    counts.forEach((count, index) => {
        const percentage = totalRatings > 0 ? (count / totalRatings) * 100 : 0; // Calcular porcentaje
        progressBars[index].style.width = `${percentage}%`; // Actualizar el ancho de la barra
         // Actualizar el texto del porcentaje en la etiqueta
         percentageLabels[index].textContent = `${Math.round(percentage.toFixed(2))}%`;
    });
}


function displayComments(comments = []) {
    // Verifica si comments es un array y si no está vacío
    if (!Array.isArray(comments) || comments.length === 0) return;

    // Generar el HTML para cada comentario
    const commentsHTML = comments.map(comment => {
        return `
            <div class="aComment">
                <div class="comment-info">
                    <span class="userComment">${comment.userName}</span>
                    <p><span>${'★'.repeat(comment.rate)}${'☆'.repeat(5 - comment.rate)}</span></p>
                </div>
                <div class="comment-body">
                    <p>${comment.comment}</p>
                    <p>${comment.date}</p>
                </div>
            </div>
        `;
    }).join(''); // Unir todos los comentarios en una sola cadena

    // Insertar el HTML generado en el contenedor de comentarios
    const publicComments = document.getElementById('public_Comments');
    publicComments.innerHTML = commentsHTML;
}