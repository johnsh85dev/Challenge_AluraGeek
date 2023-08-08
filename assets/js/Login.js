document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const user = formData.get("email");
  const password = formData.get("password");

  if (user === "admin@aluralatam.com" && password === "Admin85") {
    Swal.fire("Excelente!", "Usuario Autenticado!", "success")
      .then(() => {
        localStorage.setItem("loggedIn", "true");
      })
      .then(() => {
        window.location.href = "products-admin.html";
      });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Datos de usuario incorrectos!",
    });
  }
});
