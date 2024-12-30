import React, { useContext } from "react";
import { MoviesContext } from "../App";
import "../style/MovieDetail.css"

export default function MovieDetail() {
    const { movieDetail, setMovieDetail, movieDetailStatus, setMovieDetailStatus } = useContext(MoviesContext);
    console.log(movieDetail)

    const handleEscKey = (e) => {
        console.log(e.key)
        if (e.key === "Escape") {
            setMovieDetailStatus(false)
        }
    }

    // useEffect(() => {
    //     window.addEventListener("keydown", handleEscKey);
    //     return () => {
    //         window.removeEventListener("keydown", handleEscKey);
    //     };
    // }, []);

    return (
        <>
            {<div className="movieDetail">
                <div className="movie-poster">
                    <img src={movieDetail?.Poster === "N/A" ? "https://placeholder.pics/svg/300x400/DEDEDE/BDBBBB/Poster%20not%20available" : movieDetail?.Poster} alt="" />
                </div>
                <div className="movieInfo">
                    <h1 className="movieTitle">{movieDetail.Title}</h1>
                    <p>Runtime: {movieDetail.Runtime}</p>
                    <p>Released: {movieDetail.Released}</p>
                    <p>Cast: {movieDetail.Actors}</p>
                    <p>Director: {movieDetail.Director}</p>
                    <p>Plot: {movieDetail.Plot}</p>
                    <p>Language: {movieDetail.Language}</p>
                    <p>Genre: {movieDetail.Genre}</p>
                    <p>Rated: {movieDetail.Rated}</p>
                    <p>Imdb: {movieDetail.imdbRating}</p>
                </div>
                <button onClick={() => { setMovieDetailStatus(false) }} className="close-btn" >x</button>
            </div>}
        </>
    )
}