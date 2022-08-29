import React from 'react'
// Components
import { Container, Col, Nav } from 'react-bootstrap'
import CitySelect from './childComponents/CitySelect'
import Logo from './childComponents/Logo'

const Header = () => {
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <Container className="header">
        <Col
          md={9}
          lg={10}
          xs={12}
          className="text-light d-flex text-decoration-none"
        >
          <Logo/>
        </Col>
        <Col className="ml-auto cities w-100">
          <CitySelect />
        </Col>
      </Container>
    </Nav>
  )
}

export default Header
