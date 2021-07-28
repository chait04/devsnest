import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  let fetchData = async () => {
    try {
      let res = await fetch(url);
      //   setLoading(true)
      if (!res.ok) {
        throw new Error(`Wrong query or Url is wrong`);
      }
      let data = await res.json();
      setLoading(false);
      setApiData(data);
      setError("")
    } catch (error) {
        // 500 server error
      setError(error.message);
      setLoading(false)
      setApiData([])
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  return [apiData, loading, error, fetchData];
};

export default useFetch;
