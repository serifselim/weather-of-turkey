import React from 'react'
import { useSelector } from 'react-redux'
import { getDateByUnix } from './utils'

const Weather = () => {
  const { daily } = useSelector((state) => state.weather.weatherData)
  const currentCity = useSelector((state) => state.weather.currentCity)
  const isFetch = useSelector((state) => state.weather.isFetch)

  return (
    <div className="mt-2">
      <div className="d-flex flex-column justify-content-center align-items-center">
        {isFetch ? (
          <>
            <div className='mb-3'>
              <div className='d-flex align-items-center flex-column flex-md-row gap-3'>
              <h3 className="display-4 text-warning" style={{fontWeight: '700'}}>{currentCity}</h3>
              <h4 className="display-5 text-center">
                {daily[0].temp.day} <span className="symbol">°</span>C
              </h4>
              </div>
              <div className='d-flex justify-content-center justify-content-md-end '>
              <h1> {daily[0].weather[0].main} </h1>
              </div>
            </div>
            <ul className="d-flex gap-3 weekly justify-content-center flex-wrap col-12 p-0">
              {daily.map(
                (item, index) =>
                  index !== 0 &&
                  index !== daily.length - 1 && (
                    <li
                      key={index}
                      class="card bg-dark border-light text-center my-0 mx-0 "
                      style={{ width: '10rem' }}
                    >
                      <div class="card-body">
                        <h6 class="card-title">{getDateByUnix(item.dt)}</h6>
                        <img
                          src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                          alt="weather-icon"
                        />
                        <h5 class="card-title">{item.weather[0].main}</h5>
                        <p class="card-text text-warning">
                          {item.temp.day} <span className="symbol">°</span>C
                        </p>
                      </div>
                    </li>
                  )
              )}
            </ul>
          </>
        ) : (
          <>
            <div
              className="spinner-border text-warning"
              style={{ width: '5rem', height: '5rem', borderWidth: '10px' }}
              role="status"
            />
          </>
        )}
      </div>
    </div>
  )
}

export default Weather
