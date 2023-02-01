import React, {useState} from 'react'
import axios from 'axios'

function App() {
  const [data,setData] = useState({})
  const [city,setCity] = useState('')


const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=51fca1df80c73dc1f04f3948cb52569b`

// when user enters city or state get the city/state and put it into url and get api data
const getCity = (event) => {
  if (event.key === 'Enter'){
  axios.get(url).then((response) => {
    setData(response.data)
    console.log(response.data)
  })
  setCity('')
  }
}

  return (
    <div className="App">

      <div class="container">

      <div class="searchbar">
          <input type="text" placeholder="Enter City or State" onKeyPress={getCity} onChange={event => setCity(event.target.value)}/>
      </div>

      <div class="body">

      <div class="upper-body">
          <div class="header">
              <p>{data.name}</p>
          </div>

          <div class="temp">
              <h1> {data.main ? <h1>{data.main.temp.toFixed()}°</h1> : null} </h1>
          </div>

          <div class="weather-type">
          {data.main ? <p>{data.weather[0].description}</p> : null}
          </div>
      </div>

      {/* if data.name (aka city or state entered) does not equal undefined then display everything
      , if data.name (aka city or state entered) does equal undefined then dont display any of the below */}
      {data.name != undefined &&
      <div class="lower-body">

        {/* .toFixed changes decimals to numbers, ex: instead of 1.99 wind speed it rounds to 2 */}
          <div class="high">
              <p> High</p>
              {data.main ? <p class='bold'>{data.main.temp_max.toFixed()}°</p> : null}
          </div>

          <div class="low">
              <p> Low</p>
              {data.main ? <p className='bold'>{data.main.temp_min.toFixed()}°F</p> : null}
          </div>

          <div class="humidity">
              <p> Humidity</p>
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
          </div>

          <div class="windspeed">
              <p> Wind Speed</p>
              {data.main ? <p className='bold'>{data.wind.speed.toFixed()}mph</p> : null}
          </div>

      </div>
    }

      </div>

      </div>

    </div>
  );
}

export default App;
