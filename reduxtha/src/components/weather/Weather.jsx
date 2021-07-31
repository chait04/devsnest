import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, getCity } from '../../redux/weather/weatherActions';

const Weather = () => {
  const cityName = useSelector((state) => state.weather.cityName);
  const weatherData = useSelector((state) => state.weather.data);
  const error = useSelector((state) => state.weather.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData(cityName));
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
      <form>
        <input
          type='text'
          value={cityName}
          onChange={(e) => dispatch(getCity(e.target.value))}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(fetchData(cityName));
          }}>
          Get City
        </button>
      </form>
      <section>
        {/* {JSON.stringify(weatherData.location)} */}
        {error && <p>{error}</p>}
        {weatherData.location && (
          <div>
            <h2>{weatherData.location.name}</h2>
            <h4>{weatherData.location.localtime}</h4>
          </div>
        )}
        {weatherData.current && (
          <div>
            <h3>{weatherData.current.condition.text}</h3>
            <img src={weatherData.current.condition.icon} alt='' />
          </div>
        )}
      </section>
    </div>
  );
};

export default Weather;
