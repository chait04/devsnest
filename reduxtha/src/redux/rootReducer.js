import { combineReducers } from 'redux';
import { userFormReducer } from './userForm/userFormReducer';
import { weatherReducer } from './weather/weatherReducer';

export const rootReducer = combineReducers({
  userForm: userFormReducer,
  weather: weatherReducer,
});
