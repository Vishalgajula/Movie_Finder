import React, { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../App";

const Main = () => {
  
  const [searchMovies, setSearchMovies] = useState("")
  

  //using useContext hook we are accessing the variables

  const { moviesList, setMoviesList, baseurl, apikey, page, setPage, totalResults, setTotalResults } = useContext(MoviesContext)


  const apiFetching = () => {
    {if (!searchMovies.trim()) {
      console.log("Movie title cannot be empty!!!")
      return;
    }
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
  // useEffect(() => {
  //   console.log(totalResults)
  // },totalResults)
  // console.log(totalResults)

  const handlePage = (page) => {

  }
  // React.useEffect(() => {
  //   console.log(moviesList)
  //   console.log("useEffect")
  // }, [moviesList])

  const handlePageChange = (direction) => {
    if (direction === "next") {
      setPage(page + 1);
    } else if (direction === "prev" && page > 1) {
      setPage(page - 1);
    }
  };


  return (
    <>
      <h4>search</h4>

      <input
        type="text"
        placeholder="movie title"
        value={searchMovies}
        onChange={event => setSearchMovies(event.target.value)}
        onKeyDown={handleChange}
      />
      <button onClick={apiFetching} >search</button>
      
    </>
  )
}

export default Main;