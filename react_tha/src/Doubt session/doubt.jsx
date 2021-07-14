import React, { useEffect, useState } from 'react';


const Doubt = () => {
  const [data, setData] = useState(null);
  const [counter, setCounter] = useState(0);
  // let apikey = `egfswegegege`

  let fetchData = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/5`)
      .then((res) => res.json())
      .then((val) => {
        console.log(val.title);
        setData(val.title);
      });
  };

  useEffect(() => {
    fetchData();
    console.log(`first render`);
    //  always put dependency array
  }, [counter]);

  return (
    <>
      <button onClick={() => setCounter((prev) => prev + 1)}>click</button>
      <p>{data}</p>
      <h1>{counter}</h1>
      <div></div>
    </>
  );
};

export default Doubt;

// let rl = document.createElement()
