//Home//

let towninfoRequest = new XMLHttpRequest();
let towninfoURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

towninfoRequest.open('GET', towninfoURL, true);
towninfoRequest.send();

towninfoRequest.onload = function() {
  let townData = JSON.parse(towninfoRequest.responseText);

  console.log(townData);

  document.getElementById('frFundation').innerHTML =  townData.towns[0].motto;

  document.getElementById('frFounded').innerHTML =  townData.towns[0].yearFounded;

  document.getElementById('frPoblacion').innerHTML =  townData.towns[0].currentPopulation;

  document.getElementById('frRainfall').innerHTML =  townData.towns[0].averageRainfall;

  document.getElementById('gvFundation').innerHTML =  townData.towns[1].motto;

  document.getElementById('gvFounded').innerHTML =  townData.towns[1].yearFounded;

  document.getElementById('gvpoblacion').innerHTML =  townData.towns[1].currentPopulation;

  document.getElementById('gvRainfall').innerHTML =  townData.towns[1].averageRainfall;

  document.getElementById('spFundation').innerHTML =  townData.towns[3].motto;

  document.getElementById('spFounded').innerHTML =  townData.towns[3].yearFounded;

  document.getElementById('spPoblacion').innerHTML =  townData.towns[3].currentPopulation;

  document.getElementById('spRainfall').innerHTML =  townData.towns[3].averageRainfall;
}

//FRANKLIN//


let weatherRequest = new XMLHttpRequest();
let apiURL = 'https://api.openweathermap.org/data/2.5/weather?&id=4156210&units=imperial&APPID=7ae51efa9b789abd3dfb69401f1cce74';
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload = function() {
  let weatherData = JSON.parse(weatherRequest.responseText);

  console.log(weatherData);

  document.getElementById('hightemp').innerHTML =  weatherData.main.temp_max;

  document.getElementById('humidity').innerHTML =  weatherData.main.humidity;

  document.getElementById('windspeed').innerHTML =  weatherData.wind.speed;

  document.getElementById('clouds').innerHTML =  weatherData.clouds.all;

  document.getElementById('currentCond').innerHTML =  weatherData.weather[0].description;

  let imagesrc = 'https://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
  document.getElementById('weatherimage').src = imagesrc;
}
