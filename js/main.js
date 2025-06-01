/* 
    Code that is on every page
    Navigation toggle menu (for mobile), and dark/light mode toggle
    Author: Samuel Herman
    Date: 1 June 2025
*/

// BURGER MENU TOGGLE
let headerArea = document.querySelector(".header-area");
let burgerBtn = document.querySelector(".toggle-container");
let burgerBtnOpen = document.querySelector(".burger-open");
let burgerBtnClose = document.querySelector(".burger-close");
let burgerMenu = document.querySelector("#burger-menu");
let burgerMenuLi = document.querySelector(".menu-ul");
let headerBackground = document.querySelector(".header-background");
let header = document.querySelector("header");

let isBurgerOpen = false;

burgerBtn.onclick = function () {
    if (!isBurgerOpen) {
        // Makes the nav class='buger-menu' transition to be open
        burgerMenu.classList.add("open");

        // Makes the nav ul class='menu-ul' to fade in
        burgerMenuLi.classList.add("open");

        // Makes burger btn change to x picture
        burgerBtnOpen.classList.add("open");
        burgerBtnClose.classList.add("open");

        // Changes the height of the menu area background, and sets the menu as open
        header.classList.add("open");


        isBurgerOpen = true;
    } else if (isBurgerOpen) {
        // Makes the nav class='buger-menu' transition to be closed
        burgerMenu.classList.remove("open");

        // Makes the nav ul class='menu-ul' to fade out
        burgerMenuLi.classList.remove("open");

        // Makes burger btn change to burger picture
        burgerBtnOpen.classList.remove("open");
        burgerBtnClose.classList.remove("open");

        // Changes the height of the menu area background, and sets the menu as closed
        header.classList.remove("open");

        isBurgerOpen = false;
    }
}

// LIGHT/DARK MODE TOGGLE
let lightDarkToggle = document.querySelector(".light-dark-toggle");
let html = document.querySelector("html");

// On load: apply theme from localStorage
document.addEventListener("DOMContentLoaded", function () {
    let theme = localStorage.getItem("theme") || "dark";
    applyTheme(theme);
});

lightDarkToggle.addEventListener("click", function () {
    let currentTheme = localStorage.getItem("theme") || "dark";
    let newTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
});

function applyTheme(theme) {
    if (theme === "light") {
        html.classList.add("light-mode");
    } else {
        html.classList.remove("light-mode");
    }
}