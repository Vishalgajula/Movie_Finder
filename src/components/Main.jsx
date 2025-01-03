import React, { useContext, useEffect, useState, useRef, Children } from "react";
import { MoviesContext } from "../App";
import "../style/Main.css"

const Main = () => {

  const [searchMovies, setSearchMovies] = useState("")
  const [errorMsg, setErrorMsg] = useState("")


  //using useContext hook we are accessing the variables

  const { moviesList, setMoviesList, baseurl, apikey, page, setPage, totalResults, setTotalResults, setMovieDetailStatus, setIsLoading, isLoading } = useContext(MoviesContext)
  // const loaderRef = useRef(null)


  const apiFetching = () => {
    console.log(isLoading)
    setMoviesList([])
    setTotalResults(0)
    {
      if (!searchMovies.trim()) {
        // setErrorMsg("Enter a movie name")
        // console.warn("Enter a movie name")
        window.alert("Enter a movie name");
        return;
      }

      setIsLoading(true)// seting loading page
      console.log(isLoading)
      setMovieDetailStatus(false)  // To disable the movie detail or to reset the movie details when fetching

      fetch(`${baseurl}/?s=${searchMovies}&page=${page}&${apikey}`) // url link
        .then((response) => {
          if (!response.ok) throw new Error("Failed to fetch movie")
          return response.json()
        })
        .then((data) => {
          console.log("data section")
          console.log(data)
          console.log(page)
          setMoviesList(data.Search || []);
          setTotalResults(parseInt(data.totalResults, 10));
          setErrorMsg(data?.Error)
        })
        .catch((error) => {
          console.error(error)
          // window.alert(error);
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }


  useEffect(() => {
    if (searchMovies.trim()) {
      apiFetching();
    }
  }, [page])

  useEffect(() => {
    setPage(1);  // Reset page to 1 when a new movie title is entered
  }, [searchMovies, setPage]);

  const handleChange = (event) => {
    if (event.key === 'Enter') {
      apiFetching()
    }
  }



  return (
    <>
      <div>
        {isLoading && (
          <div className="loading-container">
            {/* hey bro, it will take some time */}
            <div className="loading-spinner">
            </div>
          </div>
        )}
      </div>
      <div className="header" >
        <h1 className="title">EVA</h1>
        <h5>the best movie finder</h5>
        {/* <span>Find the movie you want</span> <br /> */}
        <div className="search-field">
          <input
            className="searchBox"
            type="text"
            placeholder="Enter movie title"
            value={searchMovies}
            onChange={event => setSearchMovies(event.target.value)}
            onKeyDown={handleChange}
          />
          <button onClick={apiFetching} className="search-btn" >search</button>
        </div>

      </div>

      {errorMsg && (
        <div className="error">
          <p>{errorMsg} </p>
        </div>)}
    </>
  )
}

export default Main;