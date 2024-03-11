import { useParams } from "react-router-dom";
import rating from "../assets/rating.png";
import { useEffect, useState } from "react";

const MovieDetail = () => {
  const params = useParams();
  const [movies, setMovies] = useState({});
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=e6a861d49ef07460153337003acacb75`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <main className=" dark:bg-gray-900 dark:text-white">
      <div className="flex flex-wrap justify-center gap-24 ">
        <div className="overflow-hidden ">
          <img
            src={`https://image.tmdb.org/t/p/w300${movies.poster_path}`}
            alt=""
            className="md:w-[350px]"
          />
        </div>
        <div className="md:w-5/12 ">
          <h1 className="mt-3 text-5xl font-semibold dark:text-white">
            {movies.title}
          </h1>
          <p className="mt-10 text-lg dark:text-[#ffffffb3] ">
            {movies.overview}
          </p>
          <div className="flex flex-wrap mt-10">
            {movies.genres?.map((genre) => {
              return (
                <span className="p-2 mx-2 my-2 text-lg font-medium border dark:text-[#ffffff8a]">
                  {genre.name}
                </span>
              );
            })}
          </div>
          <div className="flex gap-3 mt-8">
            <div children>
              <img src={rating} alt="" width={20} />
            </div>
            <p className="mb-1 font-bold">
              {movies.vote_average} &bull; {movies.vote_count} reviews{" "}
            </p>
          </div>
          <div className="mt-2 text-lg font-semibold">
            Release Date: {movies.release_date}
          </div>
          <div className="mt-2 text-lg font-semibold">
            RunTime: {movies.runtime} min.
          </div>
          <div className="mt-2 text-lg font-semibold">
            Popularity: {movies.popularity} views
          </div>
          <div className="mt-2 text-lg font-semibold">
            IMDB Code: {movies.imdb_id}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MovieDetail;
