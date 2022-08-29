import React from 'react';
import { Map, Show } from '../../components';
import { Header } from '../../components';

const Main = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <div className='d-flex flex-column align-items-center justify-content-center mt-0 mt-md-5 text-light'>
                    <div className='turkey-map'>
                        <Map />
                    </div>
                    <Show />
                </div>
            </div>
        </>
    );
};

export default Main;