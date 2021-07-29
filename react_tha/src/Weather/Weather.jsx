import React, { useState } from 'react';
import useFetch from './useFetch';

const Weather = () => {
  const [city, setCity] = useState('mumbai');
  const url = `https://api.weatherapi.com/v1/current.json?key=9ead8543da2d4756aa953451212807&q=${city}`;

  const [apiData, fetchData, loading, error] = useFetch(url);

  let handleChange = (e) => {
    let newCity = e.target.value;
    setCity(newCity);
    // fetchData();
  };

  return (
    <section>
      {/*                 heading               */}
      <h1
        style={{
          marginBottom: '20px',
          textShadow: '2px 3px 1px #d5d4e9  ',
        }}>
        HEmlo Prople who are watching rcorded lectures
      </h1>

      {/*                 form                  */}

      <form
        style={{
          padding: '20px',
        }}>
        <input
          style={{
            padding: '8px',
            outline: 'none',
            marginRight: '9px',
            width: '200px',
          }}
          placeholder='Enter your City name here'
          type='text'
          //   value={city}
          onChange={handleChange}
        />
        <button
          style={{
            padding: '8px',
            cursor: 'pointer',
          }}
          onClick={(e) => {
            e.preventDefault();
            fetchData();
          }}>
          Get City
        </button>
      </form>

      {/*                showing data                         */}
      <section
        style={{
          padding: '20px',
        }}>
        {error && <p>{error}</p>}
        {loading ? (
          <p>Loading ....</p>
        ) : (
          <div>
            {apiData.location && (
              <div
                style={{
                  padding: '8px',
                }}>
                {/* {JSON.stringify(apiData.location)} */}
                <h4>{apiData.location.name}</h4>
                <h4>{apiData.location.localtime}</h4>
              </div>
            )}
            {apiData.current && (
              <div
                style={{
                  padding: '8px',
                }}>
                <h2>{apiData.current.condition.text}</h2>
                <h3>
                  Currnet Temperature : {apiData.current.temp_c} degrees C.
                </h3>
                <img src={apiData.current.condition.icon} alt='' />
              </div>
            )}
          </div>
        )}
      </section>
    </section>
  );
};

export default Weather;
