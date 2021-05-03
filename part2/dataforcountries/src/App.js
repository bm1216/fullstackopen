import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({country, show}) => {
  if (show) {
    return (
      <div>
        <h2>{country.name}</h2>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
        <h3>languages</h3>
        <ul>
          {country.languages
            .map((language, id) => {
              return <li key={id}>{language.name}</li>
            })}
        </ul>
        <img src={country.flag} alt="Not available"/>
      </div>
    )
  } else {
    return (
      null
    )
  }
}

const Countries = ({countries}) => {

  const [showList, setShowList] = useState(new Array(countries.length).fill(false))

  const handleShow = (id) => {
    console.log(id);
    let temp = [...showList]
    temp[id] = !temp[id]
    setShowList(temp)
  }

  if (countries.length === 0) {
    return (
      null
    )
  } else if (countries.length === 1) {
    return (
      <Country country={countries[0]} show={true}/>
    )
  } else if (1 < countries.length && countries.length < 10) {
    return (
      countries.map((country, id) => {
        return (
          <div key={country.numericCode}>
            {country.name} <button onClick={() => handleShow(id)}>{showList[id] ? "hide" : "show"}</button>
            <Country country={country} show={showList[id]}/>
          </div>
        )       
      })
    )
  } else {
    return (
      "Too many matches, specify another filter"
    )
  }
}

function App() {
  const [searchString, setSearchString] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/countries')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const countriesToShow = countries.filter((country) => country.name.toLowerCase().includes(searchString.toLowerCase()))

  const handleSearchString = (event) => {
    setSearchString(event.target.value)
  }

  return (
    <div className="App">
      <div>
        find countries <input value={searchString} onChange={handleSearchString}/>
      </div>
      <div>
        <Countries countries={countriesToShow}/>
      </div>
    </div>
  );
}

export default App;
