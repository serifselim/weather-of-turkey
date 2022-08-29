import React from 'react'
// Components
import CityCard from './CityCard'

const CityCardList = ({daily}) => {

  return (
    <ul className="d-flex gap-3 weekly justify-content-center flex-wrap col-12 p-0">
    {daily.map(
      (item, index) =>
        index !== 0 &&
        index !== daily.length - 1 && (
          <CityCard
            index={index}
            item={item}
          />
        )
    )}
  </ul>
  )
}

export default CityCardList