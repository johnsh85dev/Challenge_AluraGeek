export function validarTextareas(textarea) {
  const tipoDeTextArea = textarea.dataset.tipo;
  if (validador[tipoDeTextArea]) {
    validador[tipoDeTextArea](textarea);
  }

  if (textarea.validity.valid) {
    textarea.parentElement.classList.remove("textarea__container--invalid");
    textarea.parentElement.querySelector(".textarea__message--error").innerHTML = "";
  } else {
    textarea.parentElement.classList.add("textarea__container--invalid");
    textarea.parentElement.querySelector(".textarea__message--error").innerHTML =
      mostrarMensajeDeError(tipoDeTextArea, textarea);
  }
}

const tipoDeErrores = ["valueMissing", "customError"];

const mensajesDeError = {
  message: {
    valueMissing: "El campo Mensaje no puede estar vacío",
    customError: "El Mensaje debe contener un máximo 120 caracteres",
  },

  descripcionproducto: {
    valueMissing: "La descripción del producto no puede estar vacía",
    customError: "El Mensaje debe contener un máximo 150 caracteres",
  },
};

const validador = {
  message: (textarea) => validarTextArea(textarea),
  descripcionproducto: (textarea) => validarTextArea(textarea),
};

function mostrarMensajeDeError(tipoDeTextArea, textarea) {
  let mensaje = "";

  tipoDeErrores.forEach((error) => {
    if (textarea.validity[error]) {
      mensaje = mensajesDeError[tipoDeTextArea][error];
    }
  });

  return mensaje;
}

function validarTextArea(textarea) {
  const message = textarea.value;
  let maxLength = "150";
  let mensaje = "";
  if (!message) {
  } else if (message.length > maxLength) {
    mensaje = "mensaje";
  }

  textarea.setCustomValidity(mensaje);
}
