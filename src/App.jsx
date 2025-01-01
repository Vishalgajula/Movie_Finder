import { createContext, useEffect, useState } from 'react'
import './App.css'
// import Popup from "reactjs-popup"
import Main from './components/Main'
import MovieCards from './components/MovieCards';
import MovieDetail from './components/MovieDetail';

export const MoviesContext = createContext();

function App() {
  //
  const baseurl = `http://www.omdbapi.com/`
  const apikey = `apikey=94db380a`
  const [moviesList, setMoviesList] = useState([]);
  const [movieDetail, setMovieDetail] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0)
  const [movieDetailStatus, setMovieDetailStatus] = useState(false)
  const [isLoading, setIsLoading] = useState(false)


  return (
    <>
      <MoviesContext.Provider value={{
        baseurl, apikey,
        moviesList, setMoviesList,
        page, setPage,
        totalResults, setTotalResults,
        movieDetail, setMovieDetail,
        movieDetailStatus, setMovieDetailStatus,
        isLoading, setIsLoading
      }}>


        <Main />
        {movieDetailStatus ? <MovieDetail /> : ""}
        {movieDetailStatus ? "" : <MovieCards />}

      </MoviesContext.Provider>
    </>
  )
}

export default App
