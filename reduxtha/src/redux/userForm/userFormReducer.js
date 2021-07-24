import { updateFirstName, updateLastName } from './userFormActionTypes';

const initialState = {
  firstName: '',
  lastName: '',
};

// reducer function updates the state
export const userFormReducer = (state = initialState, action) => {
  console.log(action);
  //   check karenge
  switch (action.type) {
    case updateFirstName:
      return {
        ...state,
        firstName: action.payload //chaii
      };

    case updateLastName:
      return {
        ...state,
        // he dont know state is updated
        lastName: action.payload,
      };
    default:
      return state;
  }
};
