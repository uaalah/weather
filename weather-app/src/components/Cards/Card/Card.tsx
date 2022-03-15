import React, { useEffect, useState } from 'react'
import { getWeather } from '../../../controllers';
import { ICity, IWeatherApiResponse } from '../../../models';



const Card: React.FC<ICity> = (props) => {
  const {
    name,
    state,
    country,
    lat,
    lon,
  } = props;
  const [weather, setweather] = useState<IWeatherApiResponse | null>(null)

  useEffect(() => {
    const fetchWeather: () => void = async () => {
      const currentWeather = await getWeather(lat, lon);
      console.log('currentWeather', currentWeather)
      setweather(currentWeather);
    }
    fetchWeather();
  }, [lat, lon])
  return (
    <>
      {weather && (
        <>
          <p>{name}, {state}, {country}</p>
          <p>Medición: {new Intl.DateTimeFormat('es-ES', { dateStyle: 'full', timeStyle: 'long' }).format(new Date(weather.dt * 1000))}. {weather.name}</p>
          <ul>
            <li>Tiempo: <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} /></li>
            <li>Temperatura: {weather.main.temp}
              <ul>
                <li>Max: {weather.main.temp_max}</li>
                <li>Min: {weather.main.temp_min}</li>
                <li>Sensación térmica: {weather.main.feels_like}</li>
                <li>Humedad: {weather.main.humidity}</li>
                <li>Presión: {weather.main.pressure}</li>
              </ul>
            </li>
            <li>Viento:
              <ul>
                <li>Velocidad: {weather.wind.speed}</li>
                <li>Dirección: {weather.wind.deg}</li>
                <li>Ráfagas: {weather.wind.gust}</li>
              </ul>
            </li>
            <li>Nubosidad: {weather.clouds.all} %</li>
            <li>Salida del sol: {new Intl.DateTimeFormat('es-ES', { dateStyle: 'full', timeStyle: 'long' }).format(new Date(weather.sys.sunrise * 1000))}</li>
            <li>Puesta del sol: {new Intl.DateTimeFormat('es-ES', { dateStyle: 'full', timeStyle: 'long' }).format(new Date(weather.sys.sunset * 1000))}</li>
          </ul>
          </>
      )}
    </>
  )
}

export default React.memo(Card)