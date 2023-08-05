document.getElementById("btn-searchBar").addEventListener("click", () => {
  const search = document.querySelector("[data-search]").value;
  if (search.trim() !== "") {
    window.location.href = `search.html?query=${encodeURIComponent(search)}`;
  }
});
