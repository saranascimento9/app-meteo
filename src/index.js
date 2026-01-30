function displaySearch(event) {
  event.preventDefault();
  searchInput = document.querySelector("#search-input");

  let city = document.querySelector("#city");
  city.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");

searchFormElement.addEventListener("submit", displaySearch);
