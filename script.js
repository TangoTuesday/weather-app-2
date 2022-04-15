const tempMax = document.getElementById('temp-max')
const windDegree = document.getElementById('wind-degree')
const tempCurrent = document.getElementById('temp-current')
const tempMin = document.getElementById('temp-min')
const longit = document.getElementById('lon')
const lati = document.getElementById('lat')
const humi = document.getElementById('humidity')
const windSpeed = document.getElementById('wind-speed')
const weatherMain = document.getElementById('weather-main')
cont citName = document.getElementById('city-name')

show-weather.addEventListener('click', () =>  {
  zipcode = userInput.value
  show-weather(zipcode)
  
})

//async function show weather() {
//  let zipcode = zip-code.value
//  await fetch('https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid=501771314add79ef5daec511da2c36a9')
//}
async function weather(){

    const config = {

        headers: {
          'Accept' : 'application/json'
          }
        }

  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid=501771314add79ef5daec511da2c36a9', config)

  const data = await response.json()

  tempMax.innerHTML = json.main.temp_max
  windDegree.innerHTML = json.wind.deg
  tempCurrent.innerHTML = json.main.temp
  tempMin.innerHTML = json.main.temp_min
  longit.innerHTML = json.coord.lon
  lati.innerHTML = json.coord.lat
  humi.innerHTML = json.main.humidity
  windSpeed.innerHTML = json.wind.speed
  weatherMain.innerHTML = json.weather.main
  citName.innerHTML = json.name
  }
