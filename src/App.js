/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Main from './pages/Main/Main';
import { fetchWeatherData } from './redux/weatherSlice';

const App = () => {

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