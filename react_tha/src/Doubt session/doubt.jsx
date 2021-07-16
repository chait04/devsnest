import React, { useEffect, useState } from 'react';
// import useFetch from '../Hooks/useFetch';

const Doubt = () => {
  const [data, setData] = useState(null);
  const [counter, setCounter] = useState(0);
  // const [data] = useFetch(`https://dog.ceo/api/breeds/image/random`)
  // // let apikey = `egfswegegege`

  let fetchData = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/5`)
      .then((res) => res.json())
      .then((val) => {
        console.log(val);
        setData(val);
      });
  };

  useEffect(() => {
    fetchData();
    console.log(`first render`);
    //  always put dependency array

    // clean up function
    return () => {
      console.log(`clenn up`);
      setData(null)
    }
  }, [counter]);

  return (
    <>
      <button onClick={() => setCounter((prev) => prev + 1)}>click</button>
      <p>{ data && data.title} || ID: {data && data.id}</p>
      <div>
        {/* <img src={data.message} alt="" /> */}
      </div>
      <h1>{counter}</h1>
    </>
  );
};

export default Doubt;

// let rl = document.createElement()
