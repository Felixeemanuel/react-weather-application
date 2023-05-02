import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [weather, setWeather] = useState({})
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `http://api.weatherapi.com/v1/current.json?key=46c7d7175abc4107878145524232904&q=${location}&aqi=no`
  
  // useEffect(() => {
  //   axios.get(url).then(res => {
  //     setWeather(res.data)
  //     console.log(res.data)
  //   })
  // }, [])

  const searchLocation = (event) => {
    if(event.key === 'Enter') {
      axios.get(url).then(response => {
        setData(response.data)
        console.log(response.data)
      })
    }

    setLocation('')
  }

  return (
    <>
       <img className='cloudy-img' src="./cloud.jpg" alt="" />

        <div className="container">
          <div className="search-bar-wrapper">
            <input 
            type="search"
            name='search-form'
            id='search-form'
            className='search-input'
            placeholder='Search location..'
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            />
          </div>
          <div className="upper">
            <div className="currentLocation">
              {data.location ? <p className='location'>{data.location.name}</p> : null}
              {data.current ? <p className='current'>{data.current.temp_c}°</p> : null}
            </div>
            <div className="condition">
              {data. current ? <img src={data.current.condition.icon} alt="icon" /> : null}
              {data.current ? <p className='condition-text'>{data.current.condition.text}</p> : null}
            </div>
          </div>

            <div className="lower">
              <div className="lower-wrapper">
                <div className="lower-part">
                  <div><i className="fa-solid fa-wind"></i></div>
                  {data.current ? <p>{data.current.wind_kph} km/h</p> : null}
                </div>
                <div className="lower-part">
                  <div><i className="fa-solid fa-water"></i></div>
                  {data.current ? <p>{data.current.humidity} %</p> : null}
                </div>
                <div className="lower-part">
                  <div><i className="fa-regular fa-eye"></i></div>
                  {data.current ? <p>{data.current.vis_km} km</p> : null}
                </div>
                <div className="lower-part">
                  <div><i className="fa-regular fa-sun"></i></div>
                  {data.current ? <p>UV {data.current.uv}</p> : null}
                </div>
              </div>
            </div>

        </div>
    </>
  )
}

export default App