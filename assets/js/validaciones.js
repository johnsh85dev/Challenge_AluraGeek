import { validarInputs } from "./validarinputs.js";
import { validarTextareas } from "./validartextareas.js";

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    validarInputs(input.target);
  });
});

const textareas = document.querySelectorAll("textarea");

textareas.forEach((textarea) => {
  textarea.addEventListener("blur", (textarea) => {
    validarTextareas(textarea.target);
  });
});
