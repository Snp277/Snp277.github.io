var HighTemp = parseInt(document.getElementById("high-temp").innerHTML);
var LowTemp = parseInt(document.getElementById("low-temp").innerHTML);
var s = parseInt(document.getElementById("wind-speed").innerHTML);
var t = (HighTemp + LowTemp) / 2;
var s_pow = Math.pow(s,0.16);
var WindChill = 35.74 + (0.6215 * t) - (35.75 * s_pow) + (0.4275 * t * s_pow);
document.getElementById("wind-chill").innerHTML = Math.round(WindChill);
    
