import { useFetch } from "./useFetchHook/useFetch";
import { useSearchParams } from "react-router-dom";
const Search = ({ api }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { movies, error, isLoading } = useFetch(api, queryTerm);

  if (error) {
    return <h1>Something went wrong.....</h1>;
  }
  if (isLoading) {
    return <h1>Loading Data.....</h1>;
  }

  return (
    <main className="dark:bg-gray-900">
      <section>
        <h1 className="flex justify-center p-4 text-4xl font-bold dark:bg-gray-900 min-h-10 dark:text-white">
          {movies.length === 0
            ? ` No Movies found.... for '${queryTerm}'`
            : `Movies for ${queryTerm}`}
        </h1>
      </section>
      <div className="flex flex-wrap items-start justify-center gap-4 pt-4 dark:bg-gray-900">
        {movies?.map((movie) => {
          let { poster_path, title, id, vote_average: rating } = movie;
          return (
            <div
              key={id}
              className="rounded shadow-lg border bg-[#edebebf9] pb-3 overflow-hidden dark:bg-gray-900 dark:text-white "
            >
              <img
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt=""
              />
              <h1 className="p-2 text-xl font-medium tracking-wide w-[19rem] line-clamp-2">
                {title}
              </h1>
              <p className="p-2"> {rating}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Search;
