// Separation of concerns, function needs to do one thing and do it well

function updatedWeather(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#description");
  let feelElement = document.querySelector("#feel");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  let temperature = response.data.temperature.current;
  let description = response.data.condition.description;
  let feel = Math.round(response.data.temperature.feels_like);
  let humidity = response.data.temperature.humidity;
  let wind = response.data.wind.speed * 3.6;

  temperatureElement.innerHTML = Math.round(temperature);
  descriptionElement.innerHTML = description;
  feelElement.innerHTML = `${feel}ºC`;
  humidityElement.innerHTML = `${humidity}%`;
  windElement.innerHTML = `${Math.round(wind)} km/h`;

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
