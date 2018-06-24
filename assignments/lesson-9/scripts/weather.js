function addCommas(myValue) {
    var Formated = myValue.toString().split(".");
    Formated[0] = Formated[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return Formated.join(".");
}


var town_data_Request = new XMLHttpRequest();
    var data_URL = "https://byui-cit230.github.io/weather/data/towndata.json";
    town_data_Request.open('GET', data_URL, true);
    town_data_Request.send();
    town_data_Request.onload =  function () {
        let town_data = JSON.parse(town_data_Request.responseText);
        var x;
        var CurrentPage = document.getElementsByClassName("active")[0].getElementsByTagName("a")[0].innerHTML;

        if (CurrentPage.toLowerCase() == "home") {
        var cities = ["franklin", "greenville", "springfield"]
        var city;
        for (var y = 0; y < 3; y++){
            city = cities[y];
            x = 0;
            while (town_data.towns[x].name.toLowerCase() != city) {
                x++;
            }

            document.getElementById("motto-" + city).innerHTML = town_data.towns[x].motto;
            document.getElementById("year-founded-" + city).innerHTML = town_data.towns[x].yearFounded;
            document.getElementById("num-people-" + city).innerHTML = addCommas(town_data.towns[x].currentPopulation);
            document.getElementById("rainy-days-" + city).innerHTML = town_data.towns[x].averageRainfall;

        }

        } else {
            var city = CurrentPage.toLowerCase();
            x = 0;

            while (town_data.towns[x].name.toLowerCase() != city) {
                x++;
            }

            document.getElementById("name-data").innerHTML = town_data.towns[x].name;
            document.getElementById("motto").innerHTML = town_data.towns[x].motto;
            document.getElementById("year-founded").innerHTML = town_data.towns[x].yearFounded;
            document.getElementById("num-people").innerHTML = addCommas(town_data.towns[x].currentPopulation);
            document.getElementById("rainy-days").innerHTML = town_data.towns[x].averageRainfall;

            var z = 0;
            var m = town_data.towns[x].events.length - 1;
            var eventlist;

            for (var z = 0; z < m; z++) {
                eventlist = document.createElement('li');
                eventlist.textContent = town_data.towns[x].events[z];
                document.getElementById("town-events").appendChild(eventlist);
            }

        }
    }

   

function franklinWeather(){
    var weatherRequest = new XMLHttpRequest();
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4156210&APPID=76a3770e7164ef89df9f9ede671deeeb&units=imperial";
    weatherRequest.open('GET', apiURL, true);
    weatherRequest.send();
    weatherRequest.onload =  function () {
        let weatherData = JSON.parse(weatherRequest.responseText);
        console.log(weatherData);
        var icon = weatherData.weather[0].icon;
        let iconSrc = "https://openweathermap.org/img/w/"+icon+".png";
        document.getElementById("current_temp").innerHTML = weatherData.main.temp;
        document.getElementById("icon").setAttribute("src", iconSrc);
        document.getElementById("sky").innerHTML = weatherData.weather[0].description;
        document.getElementById("wind").innerHTML = weatherData.wind.speed;
        }
}

function windchill() {
    var high = parseFloat(document.getElementById("high").innerHTML);
    var low = parseFloat(document.getElementById("low").innerHTML);
    var s = parseFloat(document.getElementById("wind").innerHTML);
    var windchill = Math.round(computewindchill(high, low, s));

}
function computewindchill(high, low, s){
    var t = (high + low)/2;
    var windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, .016) + 0.4275 * t * Math.pow(s, .016);
    return windchill;
}
