import { productServices } from "../service/product-service.js";

const createNewProduct = (image, name, price, id) => {
  const product = document.createElement("div");
  product.classList.add("product__card");
  const content = `
  <div class="product__card__img">
  <img src=${image} alt="imagen producto"/>
  <div class="product__icons">
    <a class="delete__product__icon" id="${id}">
      <i class="fa-solid fa-trash"></i>
    </a>
    <a 
      href="product-edit.html?id=${id}" 
      class="edit__product__icon">
      <i class="fa-solid fa-pen"></i>
    </a>
  </div>
  </div>
  <div class="product__card__text">
  <p class="product__card__title">${name}</p>
  <p class="product__card__price">$ ${price}</p>
  <p class="product__card__id">id: ${id}</p>
  </div>
`;
  product.innerHTML = content;
  const btn = product.querySelector("a");
  btn.addEventListener("click", () => {
    const id = btn.id;
    Swal.fire({
      title: "Está seguro de eliminar el producto?",
      text: "Esta acción es ireversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Excelente!", "El producto fué eliminado correctamente!", "success").then(() => {
          productServices
            .deleteProduct(id)
            .then((response) => {
              location.reload();
            })
            .catch(() => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Ocurrió un error!",
              });
            });
        });
      }
    });
  });
  return product;
};

const section = document.querySelector("[data-product]");

productServices
  .listProducts()
  .then((products) => {
    products.forEach(({ image, name, price, id }) => {
      const newProduct = createNewProduct(image, name, price, id);
      section.appendChild(newProduct);
    });
  })
  .catch(() =>
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ocurrió un error!",
    })
  );
