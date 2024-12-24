import React, { useContext, useState } from "react";
import { MoviesContext } from "../App";

const Main = () => {
  // const baseurl = `http://www.omdbapi.com/`
  // const apikey = `apikey=94db380a`

  const [movieTitle, setMovieTitle] = useState("")
  // const [movies, setMovies] = useState([]);
  const { moviesList, setMoviesList, baseurl, apikey } = useContext(MoviesContext)


  const apiFetching = () => {
    if (!movieTitle.trim()) {
      console.log("Movie title cannot be empty!!!")
      return;
    }
    fetch(`${baseurl}/?s=${movieTitle}&${apikey}`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch movie")
        return response.json()
      })
      .then((data) => {
        console.log(data)
        console.log("data section")
        setMoviesList(data.Search || []);
        console.log(movies)
      })
      .catch((error) => console.error(error))
  }

  const handleChange = (event) => {
    if (event.key === 'Enter') {
      apiFetching()
    }
  }
  // React.useEffect(() => {
  //   console.log(moviesList)
  //   console.log("useEffect")
  // }, [moviesList])



  return (
    <>
      <h4>search</h4>

      <input
        type="text"
        placeholder="movie title"
        value={movieTitle}
        onChange={event => setMovieTitle(event.target.value)}
        onKeyDown={handleChange}
      />
      {/* <button onClick={apiFetching()} >search</button> */}
      {/* {movies.map((movie) => (
        <>
          <h2>{movie.Title}</h2>
          <p>year : {movie.Year}</p>
          <img src={movie.Poster} alt="" />
        </>
      ))} */}
    </>
  )
}

export default Main;