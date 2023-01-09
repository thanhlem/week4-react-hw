import React, { useState } from "react";

import "./App.css";

export default function App() {
  const [city, setCity] = useState();
  const [message, setMessage] = useState("");
  function handleSearch(event) {
    event.preventDefault();
    if (city.length > 0) {
      setMessage("It is currently 20°C in ".concat(city));
    } else {
      alert("Enter a city");
    }
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <form onSubmit={handleSearch}>
        <input type="search" placeholder="Enter a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <h2>{message}</h2>
    </div>
  );
}
