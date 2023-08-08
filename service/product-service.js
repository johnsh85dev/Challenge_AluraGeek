const listProducts = async () => {
  const response = await fetch("http://localhost:3000/products");
  return await response.json();
};

const createProduct = async (image, name, price, categorie, description) => {
  try {
    const response = fetch("http://localhost:3000/products", {
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
    if (await response.ok) {
      return (await response).body;
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ocurrió un error!",
    });
  }
};

const deleteProduct = async (id) => {
  const response = await fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
  });
  return response;
};

const detailProduct = (id) => {
  return fetch(`http://localhost:3000/products/${id}`).then((response) => response.json());
};

const updateProduct = async (image, name, price, categorie, description, id) => {
  try {
    const response = await fetch(`http://localhost:3000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image, name, price, categorie, description, id }),
    });
    return response;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ocurrió un error!",
    });
  }
};

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
