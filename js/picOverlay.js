/* 
    Toggles expanded picture on main page by adding/removing a class
    Author: Samuel Herman
    Date: 1 June 2025
*/
let picContainer = document.querySelector(".pic-container");
let picOverlayContainer = document.querySelector(".pic-overlay-container");

picContainer.onclick = function () {
    picOverlayContainer.classList.add("show");
}
picOverlayContainer.onclick = function () {
    picOverlayContainer.classList.remove("show");
}