import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([]);
    // let apikey = `egfswegegege`
  
    let fetchData = () => {
      fetch(url)
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
    }, []);
    
    return [data]
}

export default useFetch

