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

function displayData(res) {
    let dataContainer = document.querySelector(".data-container");

    let city = res.cityName;
    let feel = `Feels Like: ${res.feelsLike}°F`;
    let humidity = `Humidity: ${res.humidity}%`;
    let temp = `${res.temperature}°F`;
    let wind = `Wind: ${res.windSpeed} mph`;

    let dataHTML = `
        <div class="res-container">
            <div class='data' id="city">${city}</div>
            <div class='data' id="temp">${temp}</div>
            <div class='data' id='feels-like'>${feel}</div>
            <div class='data' id='humidity'>${humidity}</div>
            <div class='data' id='wind'>${wind}</div>
        </div>
    `;

    document.querySelector(".res-container") === null
        ? dataContainer.insertAdjacentHTML("beforeend", dataHTML)
        : (dataContainer.innerHTML = dataHTML);
}

async function makeCall() {
    document.querySelector("button").addEventListener("click", async (e) => {
        e.preventDefault();
        let data = await getData(import.meta.env.VITE_API_KEY);

        setTimeout(() => {
            displayData(data);
        }, 500);
    });
}

makeCall();
