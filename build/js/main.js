"use strict";document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector(".portfolio-filter"),i=document.querySelectorAll(".portfolio-item"),o="featured";t.addEventListener("click",function(t){var e=t.target;if(Array.from(e.classList).includes("portfolio-filter__btn")){var r=e.textContent.toLowerCase().replace(" ","-");document.querySelector(".current").classList.remove("current"),e.classList.add("current"),r!==o&&(i.forEach(function(t){var e=Array.from(t.classList);e.includes(r)?e.includes("hide-item")&&t.classList.remove("hide-item"):t.classList.add("hide-item")}),o=r)}})});