import React from 'react'
import { getDateByUnix } from '../utils'

const CityCard = ({ index, item }) => {

  const iconSource = `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;

  return (
    <li
      key={index}
      class="card bg-dark border-light text-center my-0 mx-0"
      style={{ width: '10rem' }}
    >
      <div class="card-body">
        <h6 class="card-title">{getDateByUnix(item.dt)}</h6>
        <img
          src={iconSource}
          alt="weather-icon"
        />
        <h5 class="card-title">{item.weather[0].main}</h5>
        <p class="card-text text-warning">
          {item.temp.day} <span className="symbol">°</span>C
        </p>
      </div>
    </li>
  )
}

export default CityCard
