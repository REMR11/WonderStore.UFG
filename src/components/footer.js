import { BASE_URL } from "../utils/globalVariables.js";
import ROUTES from "../utils/routes.js";
import { getListItem } from "./navbar.js";

function generateFooter(links) {
  return `<footer class="footer container">
            <article class="footer-content">

              <div class="footer-section logo">
                <img src="../assets/home/home-star-logo.svg" class="footer-logo" alt="footer-logo">
                <h4>
                  ¡Deseamos que seas nuestro fan!
                </h4>
                <h2>
                  Wonder Store
                </h2>
                <p>
                 © 2024. Todos los derechos reservados
                </p>
                <div class="social-icons">
                  <a href="https://www.facebook.com/" target="_blank" class="social-icon">
                    <img src="../assets/icons/social/facebook.svg" alt="facebook">
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" class="social-icon">
                    <img src="../assets/icons/social/instagram.svg" alt="instagram">
                  </a>
                  <a href="https://www.tiktok.com/" target="_blank" class="social-icon">
                    <img src="../assets/icons/social/tiktok.svg" alt="tiktok">
                  </a>
                </div>
              </div>

              <div class="footer-section explore">
                <h3>
                  Explorar
                </h3>
                <ul class="navbar-list">
                  ${links}
                </ul>
              </div>

              <div class="footer-section visit-us">
                <h3>
                  Visítanos
                </h3>
                <p>
                  Calle Falsa 123, Springfield
                </p>
              </div>

              <div class="footer-section contact">
                <h3>
                  Contáctanos
                </h3>
                <p>equipomaravilla@wonder.com.sv</p>
                <p>7890 1234</p>
              </div>

            </article>
          </footer>`;
}

(() => {
  const links = getListItem(ROUTES);
  const footer = generateFooter(links);
  document.body.insertAdjacentHTML("beforeend", footer);
})();
