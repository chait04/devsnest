import React from 'react';
import art from './day17.module.css';

const FoodList = ({ props }) => {
  return (
    <div className={art.foodList}>
      <h1>{props.food}</h1>
      <h3>
        {props.food} contains {props.calorie} amount of calories{' '}
      </h3>
    </div>
  );
};

export default FoodList;
