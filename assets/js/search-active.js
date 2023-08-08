const searchBarInput = document.querySelector(".header__searchbar__input");
const searchBarBtn = document.querySelector(".header__search");

function showAndHideSearchBar() {
  searchBarInput.classList.toggle("disabled");
  searchBarInput.focus();
}
searchBarBtn.addEventListener("click", showAndHideSearchBar);

searchBarInput.addEventListener("blur", (event) => {
  event.target.classList.toggle("disabled");
});
