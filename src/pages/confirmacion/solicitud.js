import { sweetAlert } from "../utils/alerts.js";

import { emptyCart, getCarrito } from "../../api/api.js";

// document.getElementById('confirmar-btn').addEventListener('click',()=>{
//   sweetAlert(1,"Confirmar compra");
// }) 

document.addEventListener("DOMContentLoaded", () => {
  const carrito = getCarrito();
  const total = document.getElementById("total-carrito");
  console.log(total, carrito)
  total.value = carrito.total.toFixed(2);
});

document.getElementById("form-confirm").addEventListener("submit", function(e){
  e.preventDefault();
  emptyCart();
  sweetAlert(1, "Compra realizada", "/");
});