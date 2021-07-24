import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateFirstNameInput,
  updateLastNameInput,
} from '../../redux/userForm/userFormActions';
// import { updateFirstNameInput, updateLastNameInput } from './'

const Form = () => {
  //  it can access whole store
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);

  // to use dispatch in react-redux we use useDispatch()
  const dispatch = useDispatch();

  //   console.log(state);
  return (
    <div>
      <h2>Redux Form</h2>
      <form action=''>
        FirstName:{' '}
        <input
          type='text'
          value={firstName}
          onChange={(e) => dispatch(updateFirstNameInput(e.target.value))}
        />
        LastName:{' '}
        <input
          type='text'
          value={lastName}
          onChange={(e) => dispatch(updateLastNameInput(e.target.value))}
        />
      </form>
      <div>
        <h2>Show</h2>
        <p>FirstName: {firstName} </p>
        <p>LastName : {lastName} </p>
      </div>
    </div>
  );
};

export default Form;
