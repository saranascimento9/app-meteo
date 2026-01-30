// Separation of concerns, function needs to do one thing and do it well

function updatedWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);

  let city = document.querySelector("#city");
  city.innerHTML = response.data.city;
}

function searchCity(city) {
  // make api call and update the UI

  let apiKey = "6358081e1cde3290ob08ccfb46eacbt7";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updatedWeather);
}

function displaySearch(event) {
  event.preventDefault();
  searchInput = document.querySelector("#search-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");

searchFormElement.addEventListener("submit", displaySearch);
searchCity("Paris");
