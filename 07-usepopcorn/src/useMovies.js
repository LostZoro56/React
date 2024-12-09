import { useEffect, useState } from "react";
const KEY = "173eb294";
export function useMovies(query, callback) {
  //we need these vars in app too
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      callback?.();

      // we are not calling this function the fucn above just has this func below
      // no calling
      // native browser api
      const controller = new AbortController();
      async function fetchMovies() {
        //indicating ui that fetching in going on
        try {
          setIsLoading(true);
          //cause when we are setting the error its not reset
          // so its shows nothing cause its always getting the error
          //that why we reset here
          setError("");

          //second argument as signal to fetch
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();
          //if movie was something that is not possible to fetch and we got false from api
          if (data.Response === "False") throw new Error("Movie not Found");
          setMovies(data.Search);
          setError("");
        } catch (err) {
          console.error(err.message);
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      //called here cause it needs to be called as its inside a callback fun
      //it will be just value of the function but we want it to be executed
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, error };
}
