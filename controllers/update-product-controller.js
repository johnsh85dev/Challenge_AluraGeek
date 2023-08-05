import { productServices } from "../service/product-service.js";

const formulario = document.querySelector("[data-form]");

const getInfo = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ocurrió un error!",
    });
  }

  const urlImg = document.querySelector("[data-urlImg]");
  const categorieProduct = document.querySelector("[data-categorie]");
  const nameProduct = document.querySelector("[data-nameproduct]");
  const priceProduct = document.querySelector("[data-priceproduct]");
  const descriptionProduct = document.querySelector("[data-descriptionproduct]");

  try {
    const product = await productServices.detailProduct(id);
    if (
      product.image &&
      product.categorie &&
      product.name &&
      product.price &&
      product.description
    ) {
      urlImg.value = product.image;
      categorieProduct.value = product.categorie;
      nameProduct.value = product.name;
      priceProduct.value = product.price;
      descriptionProduct.value = product.description;
    } else {
      throw new Error();
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ocurrió un error!",
    });
  }
};

getInfo();

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const urlImg = document.querySelector("[data-urlImg]").value;
  const categorieProduct = document.querySelector("[data-categorie]").value;
  const nameProduct = document.querySelector("[data-nameproduct]").value;
  const priceProduct = document.querySelector("[data-priceproduct]").value;
  const descriptionProduct = document.querySelector("[data-descriptionproduct]").value;

  Swal.fire("Excelente!", "El producto se actualizó correctamente!", "success").then(() => {
    productServices
      .updateProduct(urlImg, nameProduct, priceProduct, categorieProduct, descriptionProduct, id)
      .then(() => {
        window.location.href = "products-admin.html";
      })
      .catch((error) => console.log(error));
  });
});
