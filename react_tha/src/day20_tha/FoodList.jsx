import React from 'react';

const FoodList = ({ food, state, setState }) => {

  let handleClick = () => {
    let newState = state.filter((el) => el.id !== food.id)
    setState(newState)
  };

  return (
    <div className='day20foodList'>
      <h1>{food.food}</h1>
      <h3>
        {food.food} contains {food.calorie} amount of calories{' '}
      </h3>
      <button className="foodListItemDelete" onClick={handleClick}>Delete</button>
    </div>
  );
};

export default FoodList;
