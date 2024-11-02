window.addEventListener("DOMContentLoaded", function () {
  renderCards();
  renderSwiper();
});

function generateWhyToBuyCard(title, description, icon) {
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
    whyToBuyCardsContainer.innerHTML += generateWhyToBuyCard(
      reason.title,
      reason.description,
      reason.icon
    );
  });
}

function renderSwiper() {
  const swiperContainer = document.getElementById("fav-products-swiper");

  const products = [
    { name: "Producto 1", description: "Descripción del producto 1" },
    { name: "Producto 2", description: "Descripción del producto 2" },
    { name: "Producto 3", description: "Descripción del producto 3" }
    // Add more products as needed
  ];

  products.forEach((product) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = `
      <h2>${product.name}</h2>
      <p>${product.description}</p>
    `;
    swiperContainer.appendChild(slide);
  });
}
