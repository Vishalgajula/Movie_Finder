import { createContext, useEffect, useState } from 'react'
import './App.css'
import Main from './components/Main'
import MovieCards from './components/MovieCards';

export const MoviesContext = createContext();

function App() {
  const baseurl = `http://www.omdbapi.com/`
  const apikey = `apikey=94db380a`
  const [moviesList, setMoviesList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0)

  // movies.map((movie) => { <MovieCards /> })
  // useEffect(() => {
  //   console.log(moviesList)
  //   console.log("from appjs")
  // }, [moviesList])

  return (
    <>
      <MoviesContext.Provider value={{ 
        baseurl, apikey, 
        moviesList, setMoviesList, 
        page, setPage, 
        totalResults, setTotalResults 
        }}>
        <Main />
        <MovieCards />
      </MoviesContext.Provider>
    </>
  )
}

export default App
