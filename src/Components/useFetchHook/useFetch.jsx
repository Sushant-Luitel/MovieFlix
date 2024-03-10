import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useEffect } from "react";
export const useFetch = (api, queryTerm = "") => {
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/${api}?api_key=${apiKey}&query=${queryTerm} `;
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
