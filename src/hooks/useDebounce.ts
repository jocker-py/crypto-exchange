import { useEffect, useRef, useState } from "react";

export const useDebounce = (value: string, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState("");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      timerRef.current && clearTimeout(timerRef.current);
    };
  }, [value, delay]);

  return debouncedValue;
};
