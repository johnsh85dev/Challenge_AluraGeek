import { productServices } from "../service/product-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const image = document.querySelector("[data-urlImg]").value;
  const categorie = document.querySelector("[data-categorie]").value;
  const nameProduct = document.querySelector("[data-nameproduct]").value;
  const priceProduct = document.querySelector("[data-priceproduct]").value;
  const descriptionProduct = document.querySelector("[data-descriptionproduct]").value;
  Swal.fire("Excelente!", "Producto agregado!", "success").then(() => {
    productServices
      .createProduct(image, nameProduct, priceProduct, categorie, descriptionProduct)
      .then(() => {
        window.location.href = "products-admin.html";
      })
      .catch((error) => console.log(error));
  });
});
