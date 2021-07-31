import {
  GET_API_DATA,
  GET_CITY,
  LOADING,
  NETWORK_ERROR,
} from './weatherActionTypes';

const initialState = {
  data: [],
  cityName: 'pune',
  error: '',
  loading: false,
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
        loading: false,
      };
    case NETWORK_ERROR:
      return {
        ...state,
        error: action.payload,
        data: [],
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
