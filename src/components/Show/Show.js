import React from 'react';
import { useSelector } from 'react-redux';

const Weather = () => {
    const { current } = useSelector((state) => state.weather.weatherData);
    const currentCity = useSelector((state) => state.weather.currentCity);
    const isFetch = useSelector((state) => state.weather.isFetch);

    return (
        <div className='mt-2'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                {isFetch ? (
                    <>
                        <h4 className='display-4'>
                            {currentCity}
                        </h4>
                        <h4 className='display-5'>
                            {current.temp} <span className='symbol'>°</span>C
                        </h4>
                    </>
                ) : (
                    <>
                        <h4 className='display-3'>
                            Loading
                        </h4>
                        <h4 className='display-5'>
                            0<span className='symbol'>°</span>C{' '}
                        </h4>
                    </>
                )}
                {isFetch ? <p> {current.weather[0].main} </p> : <p>Loading</p>}
            </div>
        </div>
    );
};

export default Weather;