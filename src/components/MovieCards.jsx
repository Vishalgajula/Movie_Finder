import React, { useContext } from "react";
import { MoviesContext } from "../App";
import "../style/MoviesCards.css"



const MovieCards = () => {
  const { moviesList, page, setPage, totalResults } = useContext(MoviesContext);
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

  const movieTitle = (title) => {
    console.log(title)
  }

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