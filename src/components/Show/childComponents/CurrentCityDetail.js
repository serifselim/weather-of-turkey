import React from 'react'

const CurrentCityDetail = ({currentCity, daily}) => {
  return (
    <div className="mb-3">
      <div className="d-flex align-items-center flex-column flex-md-row gap-3">
        <h3 className="display-4 text-warning" style={{ fontWeight: '700' }}>
          {currentCity}
        </h3>
        <h4 className="display-5 text-center">
          {daily[0].temp.day} <span className="symbol">°</span>C
        </h4>
      </div>
      <div className="d-flex justify-content-center justify-content-md-end ">
        <h1> {daily[0].weather[0].main} </h1>
      </div>
    </div>
  )
}

export default CurrentCityDetail
