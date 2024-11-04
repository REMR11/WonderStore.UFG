import { getMostRatedProducts, getProducts } from "../api/api.js";
import {
  ProductCard,
  redirectToDetailsEvent
} from "../components/product-card.js";
import { sweetAlert } from "../utils/alerts.js";

window.addEventListener("DOMContentLoaded", function () {
  renderCards();
  renderSwiper();
});

function WhyToBuyCard(title, description, icon) {
  return `
    <div class="why-to-buy-card">
      <h3 class="why-to-buy-card-title">${title}</h3>
      <p class="why-to-buy-card-description">${description}</p>
      <span class="material-symbols-outlined">${icon}</span>
    </div>
  `;
}

async function getReasonsToBuy() {
  const { REASONS_TO_BUY } = await import("../lib/home/home-data.js");
  return REASONS_TO_BUY;
}

async function renderCards() {
  const whyToBuyCardsContainer = document.getElementById(
    "why-to-buy-cards-container"
  );

  const reasonsToBuy = await getReasonsToBuy();

  reasonsToBuy.forEach((reason) => {
    whyToBuyCardsContainer.innerHTML += WhyToBuyCard(
      reason.title,
      reason.description,
      reason.icon
    );
  });
}

function renderSwiper() {
  const SWIPER_CONTAINER = document.getElementById("fav-products-swiper");
  let template = "";
  const allProducts = getProducts();
  const mostRatedProducts = getMostRatedProducts(allProducts);

  for (const product of mostRatedProducts) {
    template += ProductCard(product, true);
  }

  SWIPER_CONTAINER.innerHTML += template;
  redirectToDetailsEvent();
}

export function submitNewsletterForm(event) {
  event.preventDefault();
  sweetAlert(1, "¡Gracias por suscribirte!");
}
