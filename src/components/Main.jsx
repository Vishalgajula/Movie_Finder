import React, { useContext, useEffect, useState, useRef } from "react";
import { MoviesContext } from "../App";
import "../style/Main.css"

const Main = () => {
  
  const [searchMovies, setSearchMovies] = useState("")
  
  

  //using useContext hook we are accessing the variables

  const { moviesList, setMoviesList, baseurl, apikey, page, setPage, totalResults, setTotalResults, setMovieDetailStatus, setIsLoading, isLoading } = useContext(MoviesContext)
  const loaderRef = useRef(null)

  //Implemeting infinity scrolling

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoading) {
        setPageNumber((prevPage) => prevPage + 1);
      }
    }, {
      rootMargin: '100px',
    });
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [isLoading]);

  const apiFetching = () => {
    // setIsLoading(true)
    {if (!searchMovies.trim()) {
      console.log("Movie title cannot be empty!!!")
      return;
    }
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
      })
      .catch((error) => console.error(error))}
  }
  

  useEffect(() => {
    if (searchMovies.trim()) {
      apiFetching();
    }
  },[page])

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
      <h1>EVA</h1>
      <h5>the best movie finder</h5>
      {/* <span>Find the movie you want</span> <br /> */}

      <input
        type="text"
        placeholder="movie title"
        value={searchMovies}
        onChange={event => setSearchMovies(event.target.value)}
        onKeyDown={handleChange}
      />
      <button onClick={apiFetching} className="search-btn" >search</button>
      
    </>
  )
}

export default Main;