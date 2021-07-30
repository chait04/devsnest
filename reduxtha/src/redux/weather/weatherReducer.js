import { GET_API_DATA, GET_CITY } from './weatherActionTypes';

const initialState = {
  data: [],
  cityName: 'pune',
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
          data: action.payload
        }
    default:
      return state;
  }
}
