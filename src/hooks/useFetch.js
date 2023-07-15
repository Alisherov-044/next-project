import { BASE_URL } from "@/helpers/urls";
import { useEffect, useState } from "react";

export function useFetch(url, defaultState = null, dep = []) {
  const [data, setData] = useState(defaultState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (url) {
      setLoading(true)
      fetch(`${BASE_URL}/${url}`)
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setLoading(false);
        });
    }
  }, dep);

  return { data, loading };
}
