const listProducts = () =>
  fetch("http://localhost:3000/productos").then((response) => response.json());

const createProduct = (image, name, price, categorie, description) => {
  return fetch("http://localhost:3000/productos", {
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

const deleteProduct = (id) => {
  return fetch(`http://localhost:3000/productos/${id}`, {
    method: "DELETE",
  });
};

const detailProduct = (id) => {
  return fetch(`http://localhost:3000/productos/${id}`).then((response) => response.json());
};

const updateProduct = (image, name, price, categorie, description, id) => {
  return fetch(`http://localhost:3000/productos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ image, name, price, categorie, description }),
  })
    .then((response) => response)
    .catch((error) => console.log(error));
};

export const productServices = {
  listProducts,
  createProduct,
  deleteProduct,
  detailProduct,
  updateProduct,
};
