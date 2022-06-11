import React from 'react';
import github from '../../assets/github.svg';
import { useDispatch, useSelector } from 'react-redux';
import CityOption from './CityOption';
import { fetchWeatherData } from '../../redux/weatherSlice';

const Header = () => {
    const { currentCity, cities } = useSelector(state => state.weather);
    const dispatch = useDispatch();

    const handleChange = (e) => dispatch(fetchWeatherData(e.target.value));

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
            <div className="container header">
                <div className='text-light d-flex text-decoration-none'>
                    <a href='https://github.com/serifselim' >
                        <img src={github} alt="github" />
                    </a>
                    <strong className='ms-3 fs-5'>Weather of Turkey</strong>
                </div>
                <div className="ml-auto">
                    <select data-testid="select-city" onChange={handleChange} class="form-select">
                        {cities.map((city, i) => (
                            <CityOption key={i} city={city} currentCity={currentCity} />
                        ))}
                    </select>
                </div>
            </div>
        </nav>
    );
};

export default Header;