import React from 'react';
// Components
import { Map, Show } from '../../components';
import { Header } from '../../components';
// Bootstrap
import { Container, Row, Col } from 'react-bootstrap';

const Main = () => {
    return (
        <>
            <Header />
            <Container>
                <Row className='d-flex flex-column align-items-center justify-content-center mt-0 mt-md-5 text-light'>
                    <Col className='turkey-map mx-auto d-flex justify-content-center'>
                        <Map />
                    </Col>
                    <Show />
                </Row>
            </Container>
        </>
    );
};

export default Main;