"use strict";

/* 
   BURGER MENU
*/

const navMenu = document.querySelector(".nav-menu"),
      navbarBtn = document.querySelector(".navbar__btn"),
      pageBody = document.querySelector("body");

console.log(navMenu);
console.log(navbarBtn);

// click
if (navMenu) {
   navbarBtn.addEventListener("click", () => {
      navMenu.classList.toggle("_active");
      pageBody.classList.toggle("_lock");
   })
}