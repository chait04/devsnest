import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchData() {
    try {
      let res = await fetch(url);
      //   console.log(res);
      if (!res.ok) {
        throw new Error(
          `ITs coz of query and people who are not attending lectures`
        );
      } else {
        let data = await res.json();
        console.log(data);
        setLoading(false);
        setApiData(data);
        setError("");
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLoading(false);
      setApiData([]);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 2000);

  
  }, []);

  return [apiData, fetchData, loading, error];
};

export default useFetch;
