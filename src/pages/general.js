import { SCRIPTS, LINKS_EXTERNAL } from "../utils/globalVariables.js";

document.addEventListener("DOMContentLoaded", async () => {
  await loadLink();
  await loadScripts();
  toggleMenu();
});

function loadLink() {
  return new Promise((resolve) => {
    //Cargando cualquier Link externo
    for (const link of LINKS_EXTERNAL) {
      const linkTag = document.createElement('link');

      linkTag.rel = link.rel;
      linkTag.href = link.URL;

      document.head.appendChild(linkTag);
    }
    resolve();
  });
}

function loadScripts() {
  return new Promise((resolve) => {
    //Cargando los scripts de JS
    let scriptsLoaded = 0;
    for (const script of SCRIPTS) {
      const scriptTag = document.createElement('script');

      scriptTag.src = script.src;

      if (script.isModule) {
        scriptTag.type = 'module';
      }

      if (script.isPrincipal) {
        document.head.appendChild(scriptTag);
      } else {
        document.body.appendChild(scriptTag);
      }

      scriptTag.onload = function () {
        scriptsLoaded++;
        if (scriptsLoaded === SCRIPTS.length) {
          resolve();
        }
      };
    }
  });
}

function toggleMenu() {
  const nav = document.querySelector('.navbar');
  const buttons = document.getElementsByClassName('nav__burger__menu');

  for (const button of buttons) {
    button.addEventListener('click', function () {
      nav.classList.toggle('navbar--open');
      document.body.classList.toggle('body-no-scroll');
    })
  }
}