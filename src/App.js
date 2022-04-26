import React, { useState } from 'react'
import axios from 'axios';

const App =()=> {
  const[data,setData] = useState({});
  const[location,setLocation] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e5bcb2f2eea980928a8a9b8c6747320c&units=metric`
  const searchLocation =(event)=>{
    if(event.key === 'Enter'){
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data);
      })
      setLocation('')
    }
  };
  return (
    <div className="App">
      <div className='search'>    
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type='text' />
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className='description'>
            {data.weather ? <p>Cloud cover: {data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
            <p>Feels like</p>
          </div>
          <div className='humidity'>
            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className='wind'>
            {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} KPH</p> : null}
            <p>Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
