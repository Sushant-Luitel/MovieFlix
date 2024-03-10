import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useEffect } from "react";
export const useFetch = (url) => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["movie"],
    queryFn: async () => {
      const response = await fetch(url);

      return response.json();
    },
  });
  const [movies, setMovies] = useState([]);

  // Use useEffect to setMovies when data changes
  useEffect(() => {
    if (data) {
      setMovies(data.results);
    }
  }, [data]);
  useEffect(() => {
    refetch();
  }, [url]);

  return { movies, error, isLoading };
};
