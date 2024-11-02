export function generateReasonToBuyCard(title, description, icon) {
  return `
    <div class="reason-to-buy-card">
      <h3 class="reason-to-buy-card-title">${title}</h3>
      <p class="reason-to-buy-card-description">${description}</p>
      <span class="material-symbols-outlined">${icon}</span>
    </div>
  `;
}
