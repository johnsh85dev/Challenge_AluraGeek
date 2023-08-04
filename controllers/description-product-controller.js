import { productServices } from "../service/product-service.js";

const getInfo = () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const imgUrl = document.querySelector("[data-img]");
  const name = document.querySelector("[data-name]");
  const price = document.querySelector("[data-price]");
  const categorie = document.querySelector("[data-categorie]");
  const description = document.querySelector("[data-description]");

  productServices.detailProduct(id).then((product) => {
    imgUrl.src = product.image;
    name.innerHTML = product.name;
    price.innerHTML = "$ " + product.price;
    categorie.innerHTML = product.categorie;
    description.innerHTML = product.description;
    console.log(product.categorie);
  });
};
getInfo();

// const showSimilarProduct = (image, name, price, categorie, id) => {
//   const product = document.createElement("div");
//   product.classList.add("product__card");
//   const content = `
//   <div class="product__card__img">
//     <img src=${image} alt="imagen producto" />
//   </div>
//   <div class="product__card__text">
//     <p class="product__card__title">${name}</p>
//     <p class="product__card__price">$${price}</p>
//     <p class="product__card__categorie" hidden>${categorie}</p>
//     <button class="product__card__button">
//       <a data-btnCard
//       href="/product.html?${id}">Ver producto</a>
//     </button>
//     <p class="product__card__id" hidden>${id}</p>
//    </div>
// `;
//   product.innerHTML = content;
//   return product;
// };

// const sectionSimilarProducts = document.querySelector("[data-similarProducts]");
// productServices
//   .listProducts()
//   .then((products) => {
//     products.forEach(({ image, name, price, categorie }) => {
//       const showProduct = showSimilarProduct(image, name, price, categorie);
//       sectionSimilarProducts.appendChild(showProduct);
//     });
//   })
//   .catch((error) => console.log(error));
