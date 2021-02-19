import { useEffect, useState } from 'react';

export const useApiRequest = (url: string): [string, boolean, any[]] => {
  const [data, setData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url[0]);
      const data = await response.json();
      setData(data);
      setIsLoaded(true);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return [error, isLoaded, data];
};
