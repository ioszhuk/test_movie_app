import {useEffect, useState} from 'react';

export const useRequest = (request: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);

    request()
      .then((response: any) => setData(response))
      .catch((e: any) => {
        setIsError(true);
        setError(e.message);
      })
      .finally(() => setIsLoading(false));
  }, [request]);

  return [isLoading, data, isError, error];
};
