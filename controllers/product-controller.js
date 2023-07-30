import { productServices } from "../service/product-service.js";

console.log(productServices);

const createNewProduct = (image, name, price, id) => {
  const product = document.createElement("div");
  product.classList.add("product__card");
  const content = `
  <img src=${image} alt="star-wars-1" class="product__card__img" />
  <p class="product__card__title">${name}</p>
  <p class="product__card__price">${price}</p>
  <p class="product__card__id">${id}</p>
  <div class="product__icons">
    <a href="" class="delete__product__icon">
      <i class="fa-solid fa-trash"></i>
    </a>
    <a href="" class="edit__product__icon">
      <i class="fa-solid fa-pen"></i>
    </a>
  </div>
`;
  product.innerHTML = content;
  return product;
};

const section = document.querySelector("[data-product]");

productServices
  .listProducts()
  .then((products) => {
    products.forEach((product) => {
      const newProduct = createNewProduct(product.image, product.name, product.price, product.id);
      section.appendChild(newProduct);
    });
  })
  .catch((error) =>
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ocurrió un error!",
    })
  );
