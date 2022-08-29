import React from 'react'
import github from '../../assets/github.svg'
import { useDispatch, useSelector } from 'react-redux'
import CityOption from './CityOption'
import { fetchWeatherData } from '../../redux/weatherSlice'
import {
  Nav,
  Container,
  Col,
  Form,
} from 'react-bootstrap'

const Header = () => {
  const { currentCity, cities } = useSelector((state) => state.weather)
const dispatch = useDispatch()

  const handleChange = (e) => dispatch(fetchWeatherData(e.target.value))

  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <Container className="header">
        <Col
          md={9}
          lg={10}
          xs={12}
          className="text-light d-flex text-decoration-none"
        >
          <a href="https://github.com/serifselim">
            <img src={github} alt="github" />
          </a>
          <strong className="ms-3 fs-5">Weather of Turkey</strong>
        </Col>
        <Col xs={12} sm className="ml-auto cities w-100">
          <Form.Select
            data-testid="select-city"
            onChange={handleChange}
            class="form-select"
          >
            {cities.map((city, i) => (
              <CityOption key={i} city={city} currentCity={currentCity} />
            ))}
          </Form.Select>
        </Col>
      </Container>
    </Nav>
  )
}

export default Header
