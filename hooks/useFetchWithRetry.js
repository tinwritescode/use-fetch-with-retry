import { useState, useEffect } from 'react';
import axios from 'axios';

const ERROR_TEXT = "Can't get data";
export const useFetchWithReTry = ({ url, maxRetry = 3 }) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let tryTime = maxRetry;

      while (tryTime > 0) {
        try {
          setLoading(true);
          const res = await axios.get(url, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = res.data;

          setData(data);
          setLoading(false);
          return;
        } catch (error) {
          tryTime -= 1;
        }
      }

      if (tryTime === 0) setError(ERROR_TEXT);
      setLoading(false);
    }

    fetchData();
  }, [maxRetry, url]);

  return { data, isLoading, error };
};
