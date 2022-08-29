import React from 'react'
// Components
import CityCardList from './childComponents/CityCardList'
import Loading from './childComponents/Loading'
import CurrentCityDetail from './childComponents/CurrentCityDetail'
// Redux
import { useSelector } from 'react-redux'

const Weather = () => {
  // Redux States
  const { daily } = useSelector((state) => state.weather.weatherData)
  const currentCity = useSelector((state) => state.weather.currentCity)
  const isFetch = useSelector((state) => state.weather.isFetch)

  return (
    <div className="mt-2">
      <div className="d-flex flex-column justify-content-center align-items-center">
        {isFetch ? (
          <>
            <CurrentCityDetail
              currentCity={currentCity}
              daily={daily}
            />
            <CityCardList
              daily={daily}
            />
          </>
        ) : (
          <Loading/>
        )}
      </div>
    </div>
  )
}

export default Weather
