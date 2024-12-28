import React, { useContext } from "react";
import { MoviesContext } from "../App";

export default function MovieDetail() {
    const { movieDetail, setMovieDetail } = useContext(MoviesContext);
    console.log(movieDetail)
    return(
        <>
        <div className="movieDetail">
            <div className="poster">
                <img src={movieDetail?.Poster === "N/A" ? "https://placeholder.pics/svg/300x400/DEDEDE/BDBBBB/Poster%20not%20available" : movieDetail?.Poster } alt="" />
            </div>
            <div className="movieInfo">
                <h1 className="movieTitle">{movieDetail.Title}</h1>
                <p>Runtime: {movieDetail.Runtime}</p>
                <p>Released: {movieDetail.Released}</p>
                <p>Plot: {movieDetail.Plot}</p>
                <p>Language: {movieDetail.Language}</p>
                <p>Genre: {movieDetail.Genre}</p>
                <p>Rated: {movieDetail.Rated}</p>
                <p>Imdb: {movieDetail.imdbRating}</p>
            </div>
        </div>
        </>
    )
}