// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

// Title animation
let element = document.getElementById("title");
let opacity = 0;
let fadeIn = setInterval(() => {
    element.style.opacity = opacity;
    opacity += 0.01;
}, 20);

if (opacity >= 1) {
    clearInterval(fadeIn);
}