// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style.css';

const App = () => {
  const [city, setCity] = useState('');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [error, setError] = useState('');

  const apiKey = '95ed5b61a73cf603f95269b758b793d8';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
        );
        console.log('API Response:', response.data); // Add this line to check the API response
        const currentWeatherData = response.data.list[0];
        setCurrentWeather(currentWeatherData);
        setError('');
      } catch (error) {
        console.error('API Error:', error); 
        setCurrentWeather(null);
        setError('City not found. Please enter a valid city.');
      }
    };
  
    if (city) {
      fetchData();
    }
  }, [city, apiKey]);
  
  const getTemperatureClass = (temperature) => {
    
    const celsiusTemperature = temperature - 273.15;
  
    if (celsiusTemperature < 10) {
      return 'cold';
    } else if (celsiusTemperature >= 10 && celsiusTemperature < 25) {
      return 'moderate';
    } else {
      return 'hot';
    }
  };
  
  

  return (
    <div className="weather-container">
      <h1 className="app-title">Weather Forecast</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="city-input"
      />

      {error && <p className="error-message">{error}</p>}

      {currentWeather && (
        <div className="current-weather">
          <h2 className="date">{new Date(currentWeather.dt * 1000).toLocaleDateString()}</h2>
          <p className={`temperature ${getTemperatureClass(currentWeather.main.temp)}`}>
            Temperature: {Math.round(currentWeather.main.temp - 273.15)} ℃
          </p>
          <h4 className="description">Weather: {currentWeather.weather[0].description}</h4>
          <h4 className="description">Wind: {currentWeather.wind.speed}</h4>
          
        </div>
      )}
    </div>
  );
};

export default App;
