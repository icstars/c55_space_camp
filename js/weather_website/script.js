// I wanna get the current weather in chicago and display it
// to do this, I need to call the API with that information

async function getCurrentWeather() {
    var url = "https://api.openweathermap.org/data/2.5/weather?lat=42.9187&lon=-87.6298&appid=geturownapikey";

    var response = await fetch(url);

    var result = await response.json();

    var temperature_element = document.getElementById("temperature");

    var current_temperature = ((result.main.temp - 273.15) * 1.8) + 32;

    temperature_element.innerHTML = current_temperature;
}

var current_weather = getCurrentWeather();

// then, modify the HTML with JS to display that information - DOM manipulation
// DOM - document object model
// follow these steps:
// a. find the element I need to modify
// b. change the X to a number



