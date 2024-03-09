import { useFetch } from "./useFetchHook/useFetch";

const MovieList = () => {
  const { movies, error, isLoading } = useFetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=e6a861d49ef07460153337003acacb75"
  );

  if (error) {
    return <h1>Something went wrong.....</h1>;
  }
  if (isLoading) {
    return <h1>Loading Data.....</h1>;
  }
  return (
    <>
      <div className="flex flex-wrap items-start justify-center gap-4 mt-4">
        {movies?.map((movie) => {
          let { poster_path, title, id, vote_average: rating } = movie;

          return (
            <div
              key={id}
              className="rounded shadow-lg border bg-[#edebebf9] pb-3 overflow-hidden "
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
