
var input = document.getElementById("zipcode")
const btn = document.getElementById("show-weather")
const cityName = document.getElementById('city-name')
const lat = document.getElementById('lat')
const long = document.getElementById('lon')
const wMain = document.getElementById('weather-main')
const wDesc = document.getElementById('weather-desc')
const spd = document.getElementById('wind-speed')
const deg = document.getElementById('wind-degree')
const cur = document.getElementById('temp-current')
const minT = document.getElementById('temp-min')
const maxT = document.getElementById('temp-max')
const hum = document.getElementById('humidity')

const key = "7f7d3a57014833e6eaca1aeb678fe5c4"

//executes the get weather function on click of the button
btn.addEventListener('click', () => getWeather())

async function getWeather() {

  const zip = input.value
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${key}&units=imperial
`)
  //catches invalid inputs
  if (response.status === 404 || response.status === 400) {
  alert("Zipcode is Invalid")
}
else {
  const data = await response.json()

  console.log(data);

  //assings the JSON data from API to text fields
  cityName.innerText = data.name;
  lat.innerText = data.coord.lat;
  long.innerText = data.coord.lon;
  wMain.innerText = data.weather[0].main;
  wDesc.innerText = data.weather[0].description;
  spd.innerText = data.wind.speed;
  deg.innerText = data.wind.deg;
  cur.innerText = data.main.temp;
  minT.innerText = data.main.temp_min;
  maxT.innerText = data.main.temp_max;
  hum.innerText = data.main.humidity;

}
}
