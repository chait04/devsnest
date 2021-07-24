import { updateFirstName, updateLastName } from './userFormActionTypes';

// action creators

//  firstName action creator
export const updateFirstNameInput = (input) => {
  return {
    type: updateFirstName,
    payload: input,
  };
};


//  lastName action creator
export const updateLastNameInput = (input) => {
  return {
    type: updateLastName,
    payload: input,
  };
};
