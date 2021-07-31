import { GET_API_DATA, GET_CITY, NETWORK_ERROR } from './weatherActionTypes';

const initialState = {
  data: [],
  cityName: 'pune',
  error: '',
};

export function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CITY:
      return {
        ...state,
        cityName: action.payload,
      };
    case GET_API_DATA:
      return {
        ...state,
        data: action.payload,
        error: '',
      };
    case NETWORK_ERROR:
      return {
        ...state,
        error: action.payload,
        data: []
      };
    default:
      return state;
  }
}
