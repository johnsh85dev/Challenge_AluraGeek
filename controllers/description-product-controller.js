import { productServices } from "../service/product-service.js";

const getDetail = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ocurrió un error!",
    });
  }

  try {
    const product = await productServices.detailProduct(id);

    if (product.name && product.price && product.description && product.image) {
      const info = document.querySelector("[data-productDescription]");

      const content = `
      <div class="product__img__content">
        <img src="${product.image}" alt="imagen producto" data-img />
     </div>
     <div class="product__description__content">
        <span class="product__title" data-name>${product.name}</span>
        <span class="product__price" data-price>$ ${product.price}</span>
        <span class="product__categorie" data-categorie hidden></span>
        <span class="product__description" data-description>${product.description}</span>
      </div>
     `;
      info.innerHTML = content;

      const similarCetegorie = product.categorie;
      const idCurrentProduct = product.id;

      const similarProducts = document.querySelector("[data-similarProducts]");

      productServices.listProducts().then((products) => {
        products.forEach(({ image, name, price, categorie, id }) => {
          if (
            categorie === "Star Wars" &&
            similarCetegorie === "Star Wars" &&
            idCurrentProduct != id
          ) {
            const product = productServices.showSimilarProduct(image, name, price, categorie, id);
            similarProducts.appendChild(product);
          }
          if (
            categorie === "Consolas" &&
            similarCetegorie === "Consolas" &&
            idCurrentProduct != id
          ) {
            const product = productServices.showSimilarProduct(image, name, price, categorie, id);
            similarProducts.appendChild(product);
          }
          if (
            categorie === "Diversos" &&
            similarCetegorie === "Diversos" &&
            idCurrentProduct != id
          ) {
            const product = productServices.showSimilarProduct(image, name, price, categorie, id);
            similarProducts.appendChild(product);
          }
        });
      });
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
getDetail();
