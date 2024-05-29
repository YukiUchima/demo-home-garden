"use strict";

import { toggleModal } from "./show-forms.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("SBA 308");

  const exitFormBtns = document.querySelectorAll(".cancel-login");

  const allForms = document.querySelectorAll(".form-submit");

  // Prevent submission/refreshing page when clicking button
  allForms.forEach((preventForm) => {
    preventForm.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  });

  // Close active form
  exitFormBtns.forEach((exitFormBtn) => {
    exitFormBtn.addEventListener("click", (e) => {
      toggleModal();
    });
  });
});
