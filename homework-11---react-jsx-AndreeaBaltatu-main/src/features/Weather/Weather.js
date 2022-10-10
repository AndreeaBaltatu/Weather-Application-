import { useEffect, useState } from "react";

export function Weather({ city }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},RO&appid=c7da641777760054e5ca6164eb47580a`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, [city]);

  // if (!weather) {
  //   return <strong>Loading ...</strong>;
  // }
  const minTemp = (weather?.main.temp_min - 273.15).toFixed(1);
  const currentTemp = (weather?.main.temp - 273.15).toFixed(1);
  const maxTemp = (weather?.main.temp_max - 273.15).toFixed(1);
  const weatherIcon = weather?.weather[0].icon;
  const weatherType = weather?.weather[0].main;

  return (
    <>
      <h1>Weather is: {weather && weatherType} </h1>
      <p>
        <img
          src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
          alt="weather icon"
        />
      </p>
      <p>Temperatura minima: {weather && minTemp} &deg;C</p>
      <p>Temperatura curenta: {weather && currentTemp} &deg;C</p>
      <p>Temperatura maxima: {weather && maxTemp} &deg;C</p>
    </>
  );
}
