import React, { useState } from 'react';
import data from './data.json';
import FoodList from './FoodList';
import './day20.css';

const Day20 = () => {

    const [state, setState] = useState(data)
    const [button, setButton] = useState(45)

    let handleClick = () => {
        // use call back inside setFunction
        setButton((preValue) =>  preValue  +1)
        // setButton((preValue) =>  preValue  +1)

        // setButton(button + 1)
    }
    console.log(state.length);
  
    // render component using if/else
    const element = (check) => {
        if(check){
            return <div>Sokething</div>
        } else {
            return <div>OP</div>
        }
     }

  return (
    <>
      <section className='day20ParentDiv'>
        {
            state.length > 0 ? state.map((food, id) => {
                // console.log(food);
              return <FoodList state={state} setState={setState} food={food} key={id} />;
            }) : <p style={{  }}>No items left</p>
        }
      </section>
      <button onClick={handleClick}>Click Button</button>
      <p>{button}</p>
      { element(false) }
    </>
  );
};

export default Day20;
