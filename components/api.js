var str = document.location.href;
var url = new URL(str);
var city = url.searchParams.get("city");
if (city == null)
{
  city = "Paris";
}
var request = new XMLHttpRequest();
request.open("GET", "https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/current?access_key=d7e04fd81f604f1333e022ce7e3d0df8&query=" + city);
request.responseType='json';
request.onload = function () {
    var response = request.response;
    let cityName = document.getElementById('city');
     cityName.innerHTML = response.location.name;  
     let temperature = document.getElementById('temperature');
     temperature.innerHTML = response.current.temperature;  
     let humidity = document.getElementById('humidity');
     humidity.innerHTML = response.current.humidity;  
     let conditions = document.getElementById('conditions');
     conditions.innerHTML = response.current.weather_descriptions; 
     let currentPic = document.getElementById('currentPic');
     currentPic.setAttribute('src', response.current.weather_icons); 
     //currentPic = "<img src="\' + response.current.weather_icons + \'>";
    };
request.send();        