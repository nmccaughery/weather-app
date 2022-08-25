// Week 4 Challenge 1 //
let now = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
let weekDay = `${day}`;
let time = `${hours}:${minutes}`;
let currentDay = document.querySelector("#current-day");
currentDay.innerHTML = `${weekDay}`;
let currentTime = document.querySelector("#current-time");
currentTime.innerHTML = `${time}`;

//Week 5 API homework Show current local weather//
function showLocalTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentLocalTemp = document.querySelector("#currentTemp");
  currentLocalTemp.innerHTML = temperature;
  let location = response.data.name;
  let currentLocation = document.querySelector("#current-city-display");
  currentLocation.innerHTML = location;
  let high = Math.round(response.data.main.temp_max);
  let currentHigh = document.querySelector("#current-high");
  currentHigh.innerHTML = high;
  let low = Math.round(response.data.main.temp_min);
  let currentLow = document.querySelector("#current-low");
  currentLow.innerHTML = low;
  let description = response.data.weather[0].description;
  let currentDescription = document.querySelector(".weather-description");
  currentDescription.innerHTML = description;
}

function defineLocation(position) {
  let apiKey = "f346fb7fb518e696e43f859bf981085b";
  let units = "metric";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showLocalTemperature);
}
function returnLocalTemp() {
  navigator.geolocation.getCurrentPosition(defineLocation);
}

let currentLocationButton = document.querySelector("#location-button");
currentLocationButton.addEventListener("click", returnLocalTemp);

//Week 5 Show current weather for search city//
function showSearchCurrentTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentLocalTemp = document.querySelector("#currentTemp");
  currentLocalTemp.innerHTML = temperature;
  let location = response.data.name;
  let currentLocation = document.querySelector("#current-city-display");
  currentLocation.innerHTML = location;
  let high = Math.round(response.data.main.temp_max);
  let currentHigh = document.querySelector("#current-high");
  currentHigh.innerHTML = high;
  let low = Math.round(response.data.main.temp_min);
  let currentLow = document.querySelector("#current-low");
  currentLow.innerHTML = low;
  let description = response.data.weather[0].description;
  let currentDescription = document.querySelector(".weather-description");
  currentDescription.innerHTML = description;
}

function citySearch(event) {
  event.preventDefault();
  let cityDisplayed = document.querySelector("#current-city-display");
  let cityInput = document.querySelector("#city-search-input");
  cityDisplayed.innerHTML = `${cityInput.value}`;
  console.log(cityInput.value);
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=f346fb7fb518e696e43f859bf981085b&units=${units}`;
  axios.get(apiUrl).then(showSearchCurrentTemperature);
}

let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", citySearch);
