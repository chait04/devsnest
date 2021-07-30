import { GET_API_DATA, GET_CITY } from './weatherActionTypes';

// action creators

// action creator to set city name
export function getCity(cityName) {
  return {
    type: GET_CITY,
    payload: cityName,
  };
}

// action creator to get Data
export function getApiData(apiData) {
  return {
    type: GET_API_DATA,
    payload: apiData,
  };
}

// action creator to fetch Data
export function fetchData(cityName) {
  return async (dispatch) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=9ead8543da2d4756aa953451212807&q=${cityName}`;
    let res = await fetch(url);
    let apiData = await res.json();
    dispatch(getApiData(apiData));
  };
}
