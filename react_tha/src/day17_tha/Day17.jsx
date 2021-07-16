import React from 'react';
import data from './data.json';
import FoodList from './FoodList';
import styles from './day17.module.css';

const Day17 = () => {
  return (
    <section className={styles.day17ParentDiv}>
      {data.map((food, id) => {
        console.log(food);
        return <FoodList key={id} props={food} />;
      })}
    </section>
  );
};

//  parent -> child

export default Day17;
