import { createContext, useEffect, useState } from 'react'
import './App.css'
import Main from './components/Main'
import MovieCards from './components/MovieCards';

export const MoviesContext = createContext();

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const baseurl = `http://www.omdbapi.com/`
  const apikey = `apikey=94db380a`

  // movies.map((movie) => { <MovieCards /> })
  // useEffect(() => {
  //   console.log(moviesList)
  //   console.log("from appjs")
  // }, [moviesList])

  return (
    <>
      <MoviesContext.Provider value={{ moviesList, setMoviesList, baseurl, apikey }}>
        <Main />
        <MovieCards />
      </MoviesContext.Provider>
    </>
  )
}

export default App
