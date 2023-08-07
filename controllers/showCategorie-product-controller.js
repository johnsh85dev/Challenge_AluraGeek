import { productServices } from "../service/product-service.js";

const btnConsolas = document.querySelector("[data-btnConsolas]");
btnConsolas.addEventListener("click", () => {
  window.location.href = "index.html#consolas";
});

const showCategorieProduct = (image, name, price, categorie, id) => {
  const product = document.createElement("div");
  product.classList.add("product__card");
  const content = `
  <div class="product__card__img">
    <img src=${image} alt="imagen producto" />
  </div>
  <div class="product__card__text">
    <p class="product__card__title">${name}</p>
    <p class="product__card__price">$ ${price}</p>
    <button class="product__card__button">
    <a data-btnCard 
    href="screens/product.html?id=${id}">Ver producto</a>
    </button>
    <p class="product__card__categorie" hidden>${categorie}</p>
    <p class="product__card__id" hidden>${id}</p>
   </div>
  `;
  product.innerHTML = content;
  return product;
};

const sectionStarWars = document.getElementById("products-starwars");
const sectionConsolas = document.getElementById("products-consolas");
const sectionDiversos = document.getElementById("products-diversos");

productServices
  .listProducts()
  .then((products) => {
    products.forEach(({ image, name, price, categorie, id }) => {
      if (categorie === "Star Wars") {
        const showProduct = showCategorieProduct(image, name, price, categorie, id);
        sectionStarWars.appendChild(showProduct);
      }
      if (categorie === "Consolas") {
        const showProduct = showCategorieProduct(image, name, price, categorie, id);
        sectionConsolas.appendChild(showProduct);
      } else if (categorie === "Diversos") {
        const showProduct = showCategorieProduct(image, name, price, categorie, id);
        sectionDiversos.appendChild(showProduct);
      }
    });
  })
  .catch((error) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ocurrió un error!",
    });
  });
