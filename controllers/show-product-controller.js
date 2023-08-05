import { productServices } from "../service/product-service.js";

const showAllProducts = (image, name, price, categorie, id) => {
  const product = document.createElement("div");
  product.classList.add("product__card");
  const content = `
  <div class="product__card__img">
    <img src=${image} alt="imagen producto" />
  </div>
  <div class="product__card__text">
    <p class="product__card__title">${name}</p>
    <p class="product__card__price">$ ${price}</p>
    <p class="product__card__categorie" hidden>${categorie}</p>
    <button class="product__card__button">
      <a data-btnCard 
      href="product.html?id=${id}">Ver producto</a>
    </button>
    <p class="product__card__id" hidden>${id}</p>
   </div>
`;
  product.innerHTML = content;
  return product;
};

const sectionAll = document.querySelector("[data-products]");
productServices
  .listProducts()
  .then((products) => {
    products.forEach(({ image, name, price, categorie, id }) => {
      const showProduct = showAllProducts(image, name, price, categorie, id);
      sectionAll.appendChild(showProduct);
    });
  })
  .catch((error) => console.log(error));
