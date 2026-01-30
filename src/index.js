// Separation of concerns, function needs to do one thing and do it well

function updatedWeather(response) {
  console.log(response.data);
  let timeElement = document.querySelector("#time");
  let temperatureElement = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#description");
  let feelElement = document.querySelector("#feel");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  let iconElement = document.querySelector("#icon");

  let icon = response.data.condition.icon;

  let date = new Date(response.data.time * 1000);
  let temperature = response.data.temperature.current;
  let description = response.data.condition.description;
  let feel = Math.round(response.data.temperature.feels_like);
  let humidity = response.data.temperature.humidity;
  let wind = response.data.wind.speed * 3.6;

  switch (icon) {
    case "clear-sky-day":
      icon = "clear-day";
      break;
    case "clear-sky-night":
      icon = "clear-night";
      break;
    case "few-clouds-day":
      icon = "partly-cloudy-day";
      break;
    case "few-clouds-night":
      icon = "partly-cloudy-night";
      break;
    case "scattered-clouds-day":
      icon = "cloudy";
      break;
    case "scattered-clouds-night":
      icon = "cloudy";
      break;
    case "broken-clouds-day":
      icon = "overcast-day";
      break;
    case "broken-clouds-night":
      icon = "overcast-night";
      break;
    case "shower-rain-day":
      icon = "partly-cloudy-day-drizzle";
      break;
    case "shower-rain-night":
      icon = "partly-cloudy-night-drizzle";
      break;
    case "rain-day":
      icon = "rain";
      break;
    case "rain-night":
      icon = "rain";
      break;
    case "thunderstorm-day":
      icon = "thumderstorms-day";
      break;
    case "thunderstorm-night":
      icon = "thumderstorms-night";
      break;
    case "snow-day":
      icon = "snow";
      break;
    case "snow-night":
      icon = "snow";
      break;
    case "mist-day":
      icon = "fog-day";
      break;
    case "mist-night":
      icon = "fog-nigth";
      break;
  }

  iconElement.innerHTML = `<img src="https://basmilius.github.io/weather-icons/production/line/all/${icon}.svg"
              alt="${icon}"
              height="180"
            />`;

  console.log(icon);
  console.log(iconElement);

  timeElement.innerHTML = formatDate(date);
  temperatureElement.innerHTML = Math.round(temperature);
  descriptionElement.innerHTML = description;
  feelElement.innerHTML = `${feel}ºC`;
  humidityElement.innerHTML = `${humidity}%`;
  windElement.innerHTML = `${Math.round(wind)} km/h`;

  let city = document.querySelector("#city");
  city.innerHTML = response.data.city;
}

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day}, ${hours}:${minutes}`;
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
