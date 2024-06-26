// import { useEffect, useState } from 'react';
// import tmdbAPI from '../utils/tmdb-api';
import MovieList from "../components/MovieList/MovieList";
import useFetch from "../utils/useFatch";
import Error from "../components/Error/Error";
import Loading from "../components/Loading/Loading";

export default function HomePage() {
  const {
    data: movieList,
    isLoading,
    error,
  } = useFetch({
    component: "homePage",
    data: [],
  });

  return (
    <div className="page-container">
      <h2>Trending today</h2>
      {isLoading && <Loading />}
      {error && <Error message={error} />}
      {!error && movieList.length > 0 && (
        <MovieList movieList={movieList} defLocation="/" />
      )}
    </div>
  );
}