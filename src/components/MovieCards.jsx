import React, { useContext, useState } from "react";
import { MoviesContext } from "../App";
import "../style/MoviesCards.css"



const MovieCards = () => {
  const { baseurl, apikey, moviesList, page, setPage, totalResults, movieDetail, setMovieDetail, setMovieDetailStatus } = useContext(MoviesContext);
  const totalPages = Math.ceil(totalResults/10)

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
    fetch(`${baseurl}/?t=${title}&plot=full&${apikey}`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setMovieDetail(data)
      setMovieDetailStatus(true)
    })
    .catch((error) => console.error(error))
  }
  // console.log(movieDetail)

  //HTML element

  // try to hide this section when the movie details is being displayed
  return (
    <>
      <div className="movies-section">
        {moviesList.map((movie) => (
          <div className="card" key={movie.imbdID} onClick={() => movieTitle(movie.Title)} >
          <div className="poster" >
            <img src={movie?.Poster === "N/A" ? "https://placeholder.pics/svg/300x400/DEDEDE/BDBBBB/Poster%20not%20available" : movie?.Poster}
 alt="" />
          </div>
          <div className="details">
            <h2 className="title">{movie.Title}</h2>
            <p>Year: {movie.Year} </p>
            <p>Type : {movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1)}</p>
          </div>
        </div>))}
      </div>

      <div className="pagination">
        <button onClick={prevPage} disabled={page === 1 } >prev</button>
        <p>{totalPages}</p>
        <button onClick={nextPage} disabled={page === totalPages} >next</button>
      </div>
    </>
  )
}

export default MovieCards