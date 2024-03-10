import { Routes, Route } from "react-router-dom";
import MovieList from "../Components/MovieList";

import Search from "../Components/Search";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MovieList api="movie/now_playing" />} />

        <Route
          path="movie/upcoming"
          element={<MovieList api="movie/upcoming" />}
        />
        <Route path="movie/top" element={<MovieList api="movie/top_rated" />} />
        <Route path="search" element={<Search api="search/movie" />} />
      </Routes>
      ;
    </div>
  );
};

export default AllRoutes;
