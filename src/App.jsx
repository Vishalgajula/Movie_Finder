import { createContext, useEffect, useState } from 'react'
import './App.css'
import Popup from "reactjs-popup"
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
  const [isloading, setIsLoading] = useState(false)

  
  return (
    <>
      <MoviesContext.Provider value={{ 
        baseurl, apikey, 
        moviesList, setMoviesList, 
        page, setPage, 
        totalResults, setTotalResults,
        movieDetail, setMovieDetail,
        setMovieDetailStatus,
        isloading, setIsLoading
        }}>

        <Main />

        <Popup open={movieDetailStatus} onClose={() => setMovieDetailStatus(false)}
          contentStyle={{
            width: '80%',
            // height: 'auto',
            // padding: '20px',
            // borderRadius: '10px',
            background: '#fff',
            color: "black",
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
          >
          {movieDetailStatus ? <MovieDetail /> : ""}
        </Popup>

        <MovieCards />

      </MoviesContext.Provider>
    </>
  )
}

export default App
