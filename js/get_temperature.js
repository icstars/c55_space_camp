var current_weather = {
    "coord": {
        "lon": -87.677,
        "lat": 41.8865
    },
    "weather": [
        {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 295.49,
        "feels_like": 295.82,
        "temp_min": 293.74,
        "temp_max": 296.51,
        "pressure": 1009,
        "humidity": 78,
        "sea_level": 1009,
        "grnd_level": 988
    },
    "visibility": 10000,
    "wind": {
        "speed": 4.12,
        "deg": 190
    },
    "rain": {
        "1h": 0.18
    },
    "clouds": {
        "all": 100
    },
    "dt": 1719605997,
    "sys": {
        "type": 2,
        "id": 2011010,
        "country": "US",
        "sunrise": 1719569883,
        "sunset": 1719624593
    },
    "timezone": -18000,
    "id": 4887398,
    "name": "Chicago",
    "cod": 200
}

var current_temp_kelvin = current_weather.main.temp;

var current_temp_fahrenheit = ((current_temp_kelvin - 273.15) * 1.8) + 32


console.log(current_temp_fahrenheit);