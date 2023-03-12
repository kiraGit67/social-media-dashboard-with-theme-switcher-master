"use strict";

const switchBtn = document.querySelector(".switch-btn");

switchBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
});
