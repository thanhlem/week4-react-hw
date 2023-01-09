import React, { useState } from "react";
import axios from "axios";

import "./index.css";

export default function App() {
  const [city, setCity] = useState();
  //const [loaded, setLoaded] = useState(false);

  const [weather, setWeather] = useState({});

  function showWeather(response) {
    //setLoaded(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: "http://openweathermap.org/img/wn/".concat(
        response.data.weather[0].icon,
        "@2x.png"
      ),
      description: response.data.weather[0].description,
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7474903e58d91475b44694a60ba263f4&units=metric`;

    axios.get(url).then(showWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={handleSearch}>
        <input type="search" placeholder="Enter a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <ul>
        <li>Temperature: {weather.temperature}°C</li>
        <li>Description: {weather.description}</li>
        <li>Humidity: {weather.humidity}%</li>
        <li>Wind: {weather.wind}km/h</li>
        <li>
          <img src={weather.icon} alt={weather.description} />
        </li>
      </ul>
    </div>
  );
}
