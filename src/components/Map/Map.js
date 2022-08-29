import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import City from './City.js';
import { fetchWeatherData } from '../../redux/weatherSlice.js';

const Map = () => {
    const { currentCity, cities } = useSelector(state => state.weather);
    const dispatch = useDispatch();

    const handleClick = (e) => dispatch(fetchWeatherData(e.target.id));

    return (
        <svg baseprofile="tiny" fill="#7c7c7c" height="424" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" version="1.2" viewbox="0 0 1000 424" width="1000" xmlns="http://www.w3.org/2000/svg">
            <g>
            </g>
            {
                cities.map((city, i) => (
                    <City
                        key={i}
                        d={city.d}
                        id={city.id}
                        population={city.population}
                        currentCity={currentCity}
                        handleClick={handleClick}
                        
                    />
                ))
            }
            <circle cx="401.7" cy="111.5">
            </circle>
            <circle cx="403.7" cy="112.1">
            </circle>
            <circle cx="280.5" cy="129.9">
            </circle>
        </svg>
    );
};

export default Map;