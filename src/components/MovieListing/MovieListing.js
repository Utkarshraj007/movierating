import React from 'react'
import { useSelector } from 'react-redux';
import { getAllShows,getAllMovies } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard'
import Slider from "react-slick";
import { Settings } from '../../common/settings';
import "./MovieListing.scss"
const MovieListing = () => 
  {
  
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies = "";
  let renderShows = "";
  renderMovies = movies.Response === "True" ? (movies.Search.map((movie,index)=>{
    return <MovieCard key= {index} data={movie}/>;
  })
  ):(<div className='movies-error'><h3>{movies.error}</h3></div>);
  console.log(movies);

  renderShows =
  shows.Response === "True" ? (
    shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
  ) : (
    <div className="shows-error">
      <h3>{shows.Error}</h3>
    </div>
  );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container"><Slider {...Settings}>{renderMovies}</Slider></div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container"><Slider {...Settings}>{renderShows}</Slider></div>
      </div>
    </div>
  )
}

export default MovieListing
