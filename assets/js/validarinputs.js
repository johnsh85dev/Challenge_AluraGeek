export function validarInputs(input) {
  const tipoDeInput = input.dataset.tipo;
  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }

  if (input.validity.valid) {
    input.parentElement.classList.remove("input__container--invalid");
    input.parentElement.querySelector(".input__message--error").innerHTML = "";
  } else {
    input.parentElement.classList.add("input__container--invalid");
    input.parentElement.querySelector(".input__message--error").innerHTML = mostrarMensajeDeError(
      tipoDeInput,
      input
    );
  }
}

const tipoDeErrores = ["valueMissing", "patternMismatch", "customError"];

const mensajesDeError = {
  nombre: {
    valueMissing: "El campo Nombre no puede estar vacío",
    patternMismatch: "El Nombre debe contener un máximo de 40 caracteres",
  },

  email: {
    valueMissing: "Ingrese su E-mail",
  },

  password: {
    valueMissing: "Ingrese su Contraseña",
    patternMismatch:
      "Al menos 6 caracteres y máximo 12, debe contener una letra minúscula, una letra mayúcula, un número y no puede contener caracteres especiales.",
  },

  categoria: {
    valueMissing: "Ingrese una categoría para el producto",
    patternMismatch: "El Nombre debe contener un máximo de 20 caracteres",
  },

  nombreproducto: {
    valueMissing: "Ingrese un nombre para el producto",
    patternMismatch: "El Nombre debe contener un máximo de 20 caracteres",
  },

  precioproducto: {
    valueMissing: "Ingrese un precio para el producto",
    patternMismatch: "Solo puede ingresar números",
  },
};

const validadores = {
  input: (input) => validarInput(input),
};

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";

  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}

function validarInput(input) {
  const inputUsuario = input.value;
  let mensaje = "";
  if (inputUsuario !== "") {
  }
  input.setCustomValidity(mensaje);
}
