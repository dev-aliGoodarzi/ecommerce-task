// React
import { useEffect, useRef } from "react";
// React

export const useDebounce = (
  delayMilliseconds: number,
  cb: () => void,
  isSingle: boolean = false
) => {
  const isRan = useRef<boolean>(false);

  useEffect(() => {
    if (isRan.current) return;
    const timeout = setTimeout(cb, delayMilliseconds);
    if (isSingle) {
      isRan.current = true;
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [cb, delayMilliseconds, isSingle]);
};
