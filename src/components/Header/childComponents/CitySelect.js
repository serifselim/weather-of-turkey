import React from 'react'
// Redux
import { fetchWeatherData } from '../../../redux/weatherSlice'
import { useDispatch, useSelector } from 'react-redux'
// Components
import CityOption from './CityOption'
import { Form } from 'react-bootstrap'

const CitySelect = () => {
  // Redux
  const { currentCity, cities } = useSelector((state) => state.weather)
  const dispatch = useDispatch()

  // On Triggered Change Func Get to City Details
  const handleChange = (e) => dispatch(fetchWeatherData(e.target.value))

  // Sorted from A to Z
  const SortedCityList = () => {
    const sortArr = [...cities].sort((a, b) => a.id > b.id)
    return sortArr.map((city, i) => (
      <CityOption key={i} city={city} currentCity={currentCity} />
    ))
  }

  return (
    <Form.Select
      data-testid="select-city"
      onChange={handleChange}
      class="form-select"
    >
      <SortedCityList />
    </Form.Select>
  )
}

export default CitySelect
