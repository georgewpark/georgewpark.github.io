"use strict";document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector(".portfolio-filter"),n=document.querySelectorAll(".portfolio-item"),r="featured";t.addEventListener("click",function(t){var o,e,t=t.target;t.classList.contains("portfolio-filter__btn")&&(o=t.id,e=document.querySelector(".current"),o!==r&&(e.classList.remove("current"),t.classList.add("current"),n.forEach(function(t){t.classList.contains(o)?t.classList.add("show-item"):t.classList.remove("show-item")}),r=o))})});