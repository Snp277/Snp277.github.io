var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
              "Saturday", "Sunday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August",
            "September", "October", "November", "December"];
var n = new Date();
var y = n.getFullYear();
var m = n.getMonth();
var d = n.getDate();
var day = n.getDay();

document.getElementById("currentdate").innerHTML = weekday[day] + "," + " " + d + " " + months[m] + " " + y;
