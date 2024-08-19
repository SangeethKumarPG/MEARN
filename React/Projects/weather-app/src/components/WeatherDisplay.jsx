import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WeatherDisplay.css";

function WeatherDisplay({ city }) {
  const APIKEY = "cce45f9b3b7eb6558252e8371519f504";
  const geocoderURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${APIKEY}`;
  const [weatherData, setWeatherData] = useState({});
  useEffect(() => {
    if (city) {
      const fetchWeatherInfo = async () => {
        const geoCoderResponse = await axios.get(geocoderURL);
        // console.log(geoCoderResponse);
        const { lat, lon } = geoCoderResponse.data[0];
        console.log(lat, lon);
        const weatherDataURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;
        const weatherResponse = await axios.get(weatherDataURL);
        // console.log(weatherResponse.data.weather[0]);
        setWeatherData({
          city: city,
          main: weatherResponse.data.weather[0].main,
          description: weatherResponse.data.weather[0].description,
          curr_temp: weatherResponse.data.main.temp,
          feels: weatherResponse.data.main.feels_like,
          temp_min: weatherResponse.data.main.temp_min,
          temp_max: weatherResponse.data.main.temp_max,
          wind_speed: weatherResponse.data.wind.speed,
        });
      };
      fetchWeatherInfo();
    }
  }, [city]);
  console.log(weatherData);
  return (
    <div className="container d-flex align-items-center justify-content-center ms-5">
      <div className="flip-card">
        <div className="container flip-card-inner">
          <div className="row flip-card-front">

            <div className="container">
              <img
                src={
                  weatherData?.main == "Clear"
                    ? "sunny.png"
                    : weatherData?.main == "Clouds"
                    ? "cloudy.png"
                    : weatherData?.main == "Rain"
                    ? "rainy.png"
                    : weatherData?.main == "Thunderstorm"
                    ? "thunderstorm.png"
                    : weatherData?.main == "Snow"
                    ? "snow.png"
                    : "noweather.png"
                }
                alt="weather image"
                className="img-fluid"
                id="mainImg"
              />

              <div className="container" style={{ color: "035c6b" }}>
                <div className="row">
                    <h2 className="text-center display-3">
                      {weatherData?.curr_temp && weatherData.curr_temp + "℃"}
                    </h2>
                </div>
                <div className="row">
                    <h3 className="text-center">{weatherData?.description}</h3>
                </div>
                <div className="row">
                    <h4 className="text-center">
                      {city != null && "Feels like " + weatherData?.feels + "℃"}
                    </h4>
                </div>
              </div>
            </div>
            
          </div>
          <div className="container mt-0 flip-card-back p-5">
            <div className="row">
                <div className="row">
                    <h5>
                      {city != null &&
                        "minimum temperature : " + weatherData?.temp_min + "℃"}
                    </h5>
                    <hr />
                </div>
                <div className="row">
                    <h5>
                      {city != null &&
                        "maximum temparature : " + weatherData?.temp_max + "℃"}
                    </h5>
                  <hr />
                </div>
                <div className="row">
                  
                    <h5>
                      {city != null &&
                        "wind speed : " + weatherData?.wind_speed + "m/s"}
                    </h5>
                 
                </div>
              
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;
