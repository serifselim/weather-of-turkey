/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData } from './redux/weatherSlice';
// Components
import { Main } from './pages'

const App = () => {
  // Redux
  const { currentCity } = useSelector(state => state.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherData(currentCity));
  }, []);

  return (
    <Main />
  );
};

export default App;