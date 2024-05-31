import { DependencyList, useEffect, useState } from "react";

export const useFetch = <T>(
  url = "",
  deps: DependencyList = [],
): [T | undefined, boolean, string] => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<T>();

  useEffect(() => {
    const fetchData = () => {
      if (!url) return;
      setLoading(true);
      fetch(url)
        .then((res) => res.json())
        .then((data: T) => setData(data))
        .catch((err) => setError(err?.error))
        .finally(() => setLoading(false));
    };

    fetchData();
  }, deps);

  return [data, isLoading, error];
};
