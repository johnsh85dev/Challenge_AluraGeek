import { productServices } from "../service/product-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const image = document.querySelector("[data-img]").value;
  const categorie = document.querySelector("[data-categorie]").value;
  const nameProduct = document.querySelector("[data-nameproduct]").value;
  const priceProduct = document.querySelector("[data-priceproduct]").value;
  const descriptionProduct = document.querySelector("[data-descriptionproduct]").value;
  productServices
    .createProduct(image, nameProduct, priceProduct, categorie, descriptionProduct)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));
});

// Upload Image Product

const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");
let files;

inputFile.addEventListener("change", uploadImage);

function uploadImage() {
  let imgLink = URL.createObjectURL(inputFile.files[0]);
  imageView.style.backgroundImage = `url(${imgLink})`;
  imageView.textContent = "";
  imageView.style.border = 0;
  console.log(imgLink);
}

dropArea.addEventListener("dragover", (event) => {
  event.preventDefault();
  imageView.classList.add("active");
});
dropArea.addEventListener("dragleave", (event) => {
  event.preventDefault();
  imageView.classList.remove("active");
});
dropArea.addEventListener("drop", (event) => {
  event.preventDefault();
  inputFile.files = event.dataTransfer.files;
  files = inputFile.files;
  uploadImage();
});
