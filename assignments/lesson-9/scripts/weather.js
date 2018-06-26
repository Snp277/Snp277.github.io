let towninfoRequest = new XMLHttpRequest();
let towninfoURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

towninfoRequest.open('GET', towninfoURL, true);
towninfoRequest.send();

towninfoRequest.onload = function() {
  let townData = JSON.parse(towninfoRequest.responseText);

  console.log(townData);

  document.getElementById('Ftown-motto').innerHTML =  townData.towns[0].motto;

  document.getElementById('Ftown-founded').innerHTML =  townData.towns[0].yearFounded;

  document.getElementById('Ftown-population').innerHTML =  townData.towns[0].currentPopulation;

  document.getElementById('Ftown-rainfall').innerHTML =  townData.towns[0].averageRainfall;
  
  document.getElementById('Gtown-motto').innerHTML =  townData.towns[1].motto;

  document.getElementById('Gtown-founded').innerHTML =  townData.towns[1].yearFounded;

  document.getElementById('Gtown-population').innerHTML =  townData.towns[1].currentPopulation;

  document.getElementById('Gtown-rainfall').innerHTML =  townData.towns[1].averageRainfall;

  document.getElementById('Stown-motto').innerHTML =  townData.towns[3].motto;

  document.getElementById('Stown-founded').innerHTML =  townData.towns[3].yearFounded;

  document.getElementById('Stown-population').innerHTML =  townData.towns[3].currentPopulation;

  document.getElementById('Stown-rainfall').innerHTML =  townData.towns[3].averageRainfall;
}
