import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Country = ({ country, show }) => {
  const [weather, setWeather] = useState({})
  const [isReady, setReady] = useState(false)
  useEffect(() => {
    let isMounted = true
    const url = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${country.capital}`
    axios
      .get(url)
      .then(response => {
        console.log('response for ', country.name);
        if (isMounted) {
          setWeather(response.data.current)
          setReady(true)
        }
      })
  return () => { isMounted = false }
}, [])

if (show && isReady) {
  return (
    <div>
      <h2>{country.name}</h2>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>Spoken languages</h3>
      <ul>
        {country.languages
          .map((language, id) => {
            return <li key={id}>{language.name}</li>
          })}
      </ul>
      <img src={country.flag} alt="Not available" />
      <h3>Weather in {country.capital}</h3>
      <p><b>temperature: </b> {weather.temperature} Celsius</p>
      <img src={weather.weather_icons[0]} />
      <p><b>wind: </b> {weather.wind_speed}mph direction {weather.wind_dir}</p>
    </div>
  )
} else {
  return (
    null
  )
}
  }

export default Country