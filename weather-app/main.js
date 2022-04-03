import "./style.css";

async function getWeather(lat, long, api_key, unit = "imperial") {
    let weather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}&units=${unit}`
    );

    let res = await weather.json();
    let parsed = parseData(res);
    return parsed;
}

async function parseData(res) {
    const {
        name: cityName,
        main: { temp: temperature, feels_like: feelsLike, humidity: humidity },
        wind: { speed: windSpeed },
    } = res;

    return { cityName, temperature, feelsLike, humidity, windSpeed };
}

async function getGeoCode(city, api_key) {
    let response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${api_key}`
    );
    let resData = await response.json();
    let data = {
        lat: resData.map((a) => a.lat),
        lon: resData.map((a) => a.lon),
    };

    return data;
}

async function getData(api_key) {
    let inputCity = document.querySelector("input").value;
    let geoData = await getGeoCode(inputCity, api_key);
    let weatherData = await getWeather(geoData.lat[0], geoData.lon[0], api_key);

    return weatherData;
}

document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    let data = getData(import.meta.env.VITE_API_KEY);

    console.log(data);
});
