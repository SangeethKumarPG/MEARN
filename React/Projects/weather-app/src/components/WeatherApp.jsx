import React, { useState } from 'react'
import SearchBar from './SearchBar';
import CityDisplay from './CityDisplay';
import WeatherDisplay from './WeatherDisplay';

function WeatherApp() {
    const [city, setCity] = useState();
  return (
    <div>
        <SearchBar setCity={setCity}/>
        <CityDisplay city={city}/>
        <WeatherDisplay city={city}/>
    </div>
  )
}

export default WeatherApp