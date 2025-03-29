// React
import { useEffect } from "react";
// React

export const useUnMount = (cb: () => void) => {
  useEffect(() => {
    return () => {
      cb();
    };
  }, [cb]);
};
