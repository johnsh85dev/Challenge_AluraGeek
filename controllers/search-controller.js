import { productServices } from "../service/product-service.js";

const showProduct = (image, name, price, categorie, description, id) => {
  const product = document.createElement("div");
  product.classList.add("product__card");
  const content = `
  <div class="product__card__img">
    <img src=${image} alt="imagen producto" />
  </div>
  <div class="product__card__text">
    <p class="product__card__title">${name}</p>
    <p class="product__card__price">$${price}</p>
    <p class="product__card__categorie" hidden>${categorie}</p>
    <p class="product__card__description" hidden>${description}</p>
    <button class="product__card__button">
      <a data-btnCard 
      href="product.html?id=${id}">Ver producto</a>
    </button>
   </div>
`;
  product.innerHTML = content;
  return product;
};

const listResult = document.querySelector("[data-results]");

function showResults(results) {
  listResult.innerHTML = "";
  if (results.length === 0) {
    const divEmpty = document.createElement("div");
    divEmpty.classList.add("noResults");

    const imgNoProduct = document.createElement("img");
    imgNoProduct.src = "../assets/img/fail.png";
    imgNoProduct.alt = "No se encontró ningún producto";
    divEmpty.appendChild(imgNoProduct);

    const txtNoResults = document.createElement("h1");
    txtNoResults.textContent = "No se encontró ningún producto";
    divEmpty.appendChild(txtNoResults);

    listResult.appendChild(divEmpty);
  } else {
    results.forEach(({ image, name, price, categorie, description, id }) => {
      const productResult = showProduct(image, name, price, categorie, description, id);
      listResult.appendChild(productResult);
    });
  }
}

function getParamURL(urlParams) {
  const urlParam = new URLSearchParams(window.location.search);
  return urlParam.get(urlParams);
}

document.addEventListener("DOMContentLoaded", () => {
  const paramSearch = getParamURL("query");

  if (paramSearch) {
    productServices
      .listProducts()
      .then((products) => {
        const results = products.filter(
          (product) =>
            product.name.toLowerCase().includes(paramSearch.toLowerCase()) ||
            product.price.toLowerCase().includes(paramSearch.toLowerCase()) ||
            product.categorie.toLowerCase().includes(paramSearch.toLowerCase()) ||
            product.description.toLowerCase().includes(paramSearch.toLowerCase())
        );
        showResults(results);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ocurrió un error!",
        });
      });
  } else {
    {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se ingresó parametro de busqueda!",
      });
    }
  }
});
