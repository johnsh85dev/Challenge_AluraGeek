const listProducts = () =>
  fetch("https://64d1f9b9f8d60b174361353b.mockapi.io/products").then((response) => response.json());

const createProduct = (image, name, price, categorie, description) => {
  return fetch("https://64d1f9b9f8d60b174361353b.mockapi.io/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      name,
      price,
      categorie,
      description,
      id: uuid.v4(),
    }),
  });
};

const deleteProduct = (id) =>
  fetch(`https://64d1f9b9f8d60b174361353b.mockapi.io/products/${id}`, {
    method: "DELETE",
  });

const detailProduct = (id) => {
  return fetch(`https://64d1f9b9f8d60b174361353b.mockapi.io/products/${id}`).then((response) =>
    response.json()
  );
};

const updateProduct = (image, name, price, categorie, description, id) =>
  fetch(`https://64d1f9b9f8d60b174361353b.mockapi.io/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ image, name, price, categorie, description, id }),
  })
    .then((response) => response)
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrió un error!",
      });
    });

const showSimilarProduct = (image, name, price, categorie, id) => {
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

export const productServices = {
  listProducts,
  createProduct,
  deleteProduct,
  detailProduct,
  updateProduct,
  showSimilarProduct,
};
