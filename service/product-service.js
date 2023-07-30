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

export const productServices = {
  listProducts,
  createProduct,
};
