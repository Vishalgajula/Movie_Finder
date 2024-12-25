import React, { useContext, useState } from "react";
import { MoviesContext } from "../App";
import "../style/MoviesCards.css"



const MovieCards = () => {
  const { baseurl, apikey, moviesList, page, setPage, totalResults } = useContext(MoviesContext);
  const totalPages = Math.ceil(totalResults/10)
  const [movieDetails, setMovieDetails] = useState([]);

  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page < totalPages) {
      setPage(page - 1)
    }
  }

  //fetching the individual movie details
  const movieTitle = (title) => {
    console.log(title)
    fetch(`${baseurl}/?t=${title}&${apikey}`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setMovieDetails(data)
    })
    .catch((error) => console.error(error))
  }
  console.log(movieDetails)

  return (
    <>
      <div className="movies-section">
        {moviesList.map((movie) => (
          <div className="card" key={movie.imbdID} onClick={() => movieTitle(movie.Title)} >
          <div className="poster" >
            <img src={movie.Poster} alt="" />
          </div>
          <div className="details">
            <h2 className="title">{movie.Title}</h2>
            <p>Year: {movie.Year} </p>
            <p>Type : {movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1)}</p>
          </div>
          <div className="details">
            <h2>{movieDetails.Title}</h2>
          </div>
        </div>))}
      </div>

      <div className="pagination">
        <button onClick={prevPage} disabled={page === 1 } >prev</button>
        <button onClick={nextPage} disabled={page === totalPages} >next</button>
      </div>
    </>
  )
}

export default MovieCards