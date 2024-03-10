import { useFetch } from "./useFetchHook/useFetch";

const MovieList = ({ api }) => {
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  console.log(apiKey);
  const url = `https://api.themoviedb.org/3/${api}?api_key=${apiKey}`;

  const { movies, error, isLoading } = useFetch(url);

  if (error) {
    return <h1>Something went wrong.....</h1>;
  }
  if (isLoading) {
    return <h1>Loading Data.....</h1>;
  }
  return (
    <>
      <div className="flex flex-wrap items-start justify-center gap-4 pt-4 dark:bg-gray-900">
        {movies?.map((movie) => {
          let { poster_path, title, id, vote_average: rating } = movie;

          return (
            <div
              key={id}
              className="rounded shadow-lg border bg-[#edebebf9] pb-3 overflow-hidden dark:bg-gray-900 dark:text-white "
            >
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt=""
              />
              <h1 className="p-2 text-xl font-medium">{title}</h1>
              <p className="p-2"> {rating}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MovieList;
