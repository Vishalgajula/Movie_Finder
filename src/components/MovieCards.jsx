import React, { useContext } from "react";
import { MoviesContext } from "../App";
import "../style/MoviesCards.css"

// "Title": "Game of Thrones",
//   "Year": "2011–2019",
//     "imdbID": "tt0944947",
//       "Type": "series",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_SX300.jpg"

const MovieCards = () => {
  const { moviesList } = useContext(MoviesContext)

  return (
    <>
      <div className="movies-section">
        {moviesList.map((movie) => (<div className="card">
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
    </>
  )
}

export default MovieCards