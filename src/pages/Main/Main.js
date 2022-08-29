import React from 'react';
// Components
import { Map, Show } from '../../components';
import { Header } from '../../components';
// Bootstrap
import { Container } from 'react-bootstrap';

const Main = () => {
    return (
        <>
            <Header />
            <Container>
                <div className='d-flex flex-column align-items-center justify-content-center mt-0 mt-md-5 text-light'>
                    <div className='turkey-map'>
                        <Map />
                    </div>
                    <Show />
                </div>
            </Container>
        </>
    );
};

export default Main;