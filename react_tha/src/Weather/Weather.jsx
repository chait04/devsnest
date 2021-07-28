import React, { useState } from 'react';
import useFetch from './useFetch';

const Weather = () => {
  const [city, setCity] = useState('pune');
  const url = `https://api.weatherapi.com/v1/current.json?key=9ead8543da2d4756aa95345121280&q=${city}`;

  const [apiData, loading, error, fetchData] = useFetch(url);

  // As im changing input it is rerednering evrything

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <h1>Hello Weather</h1>
      <input type='text' onChange={handleChange} />
      <button onClick={() => fetchData()}>Get City</button>
      <section>
        {error && <p>{error}</p>}
        {loading ? <p>Loaidng....</p> : null}
        {apiData.location && (
          <div>
            {/* {JSON.stringify(apiData.location)} */}
            <h3>{apiData.location.name}</h3>
            <p>{apiData.location.localtime}</p>
          </div>
        )}

        {apiData.current && (
          <div>
            <h2>Current Tempearature: {apiData.current.temp_c}</h2>
            <h2>Condition: {apiData.current.condition.text}</h2>
            <img src={apiData.current.condition.icon} alt='weather condition' />
            <h2>Humidity : {apiData.current.humidity}</h2>
          </div>
        )}
      </section>
    </div>
  );
};

export default Weather;
