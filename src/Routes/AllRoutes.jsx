import { Routes, Route } from "react-router-dom";
import MovieList from "../Components/MovieList";
import MovieDetail from "../Components/MovieDetail";
import Search from "../Components/Search";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="movies/popular" element={<MovieList />} />
        <Route path="movies/upcoming" element={<MovieList />} />
        <Route path="search" element={<Search />} />
        <Route path="movies/top" element={<MovieList />} />
      </Routes>
      ;
    </div>
  );
};

export default AllRoutes;
