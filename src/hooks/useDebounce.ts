import {useCallback, useRef} from 'react';

export const useDebounce = (callback: any, delay: number) => {
  const timer: any = useRef();

  return useCallback(
    (...args: any) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
};
