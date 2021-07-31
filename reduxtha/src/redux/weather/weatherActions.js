import {
  GET_API_DATA,
  GET_CITY,
  LOADING,
  NETWORK_ERROR,
} from './weatherActionTypes';

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

export function networkError(error) {
  return {
    type: NETWORK_ERROR,
    payload: error,
  };
}

export function networkLoading() {
  return {
    type: LOADING,
  };
}

// action creator to fetch Data
export function fetchData(cityName) {
  return async (dispatch) => {
    try {
      dispatch(networkLoading());
      const url = `https://api.weatherapi.com/v1/current.json?key=9ead8543da2d4756aa953451212807&q=${cityName}`;
      let res = await fetch(url);
      if (!res.ok) {
        throw new Error(
          `query might be wroing & Its bcoz you are not attending live session`
        );
      }
      let apiData = await res.json();
      dispatch(getApiData(apiData));
    } catch (error) {
      dispatch(networkError(error.message));
    }
  };
}
