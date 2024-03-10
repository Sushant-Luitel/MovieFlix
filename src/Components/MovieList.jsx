import { useFetch } from "./useFetchHook/useFetch";
import { Link } from "react-router-dom";
const MovieList = ({ api }) => {
  const { movies, error, isLoading } = useFetch(api);

  if (error) {
    return <h1>Something went wrong.....</h1>;
  }
  if (isLoading) {
    return <h1>Loading Data.....</h1>;
  }
  return (
    <>
      <div className="flex flex-wrap items-start justify-center gap-4 py-4 dark:bg-gray-900 ">
        {movies?.map((movie) => {
          let { poster_path, title, id, vote_average: rating } = movie;

          return (
            <div
              key={id}
              className="rounded shadow-lg border bg-[#edebebf9] pb-3 overflow-hidden dark:bg-gray-900 dark:text-white "
            >
              <Link to={`/movie/${id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                  alt=""
                />
              </Link>
              <Link to={`/movie/${id}`}>
                <div className="w-64 p-2 text-xl font-medium line-clamp-2">
                  {title}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MovieList;
