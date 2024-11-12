"use strict";

var menuBtn = document.querySelector('.menu-btn');
var hamburger = document.querySelector('.menu-btn__burger');
var showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    showMenu = false;
  }
}
//# sourceMappingURL=main.dev.js.map
