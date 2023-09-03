import React from "react";
import { useState, useEffect } from "react";
import starFilled from "../images/star-filled.svg";
import starUnfilled from "../images/star-outlined.svg";
import TextTruncate from "react-text-truncate"; // recommend
import logo from "../logo.svg";

const Landing = ({ movie }) => {
  function convertToStarsRating(voteAverage) {
    const maxRating = 10; // TMDB's maximum rating
    const numberOfStars = (voteAverage / maxRating) * 5;
    return Math.round(numberOfStars);
  }

  const convertToHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h ${minutes}min`;
  };

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
      }}
      className="landing-page"
    >
      <div className="movie-details">
        <h1 className="movie-name">{movie.title}</h1>
        <div className="movieratings-year">
          <div className="movie-ratings">
            {[...Array(convertToStarsRating(movie.vote_average))].map(
              (e, i) => (
                <img
                  src={starFilled}
                  alt="star-filled"
                  height={22}
                  width={22}
                ></img>
              )
            )}
            {[...Array(5 - convertToStarsRating(movie.vote_average))].map(
              (e, i) => (
                <img
                  src={starUnfilled}
                  alt="star-unfilled"
                  height={22}
                  width={22}
                ></img>
              )
            )}
          </div>
          <p className="movie-year"> {movie.release_date.slice(0, 4)}</p>
          <p>{convertToHoursAndMinutes(movie.runtime)}</p>
        </div>
        <p className="movie-description">
          <TextTruncate
            className="movie-description1"
            line={3}
            element="span"
            truncateText="…"
            text={movie.overview}
          />
        </p>
      </div>
    </div>
  );
};

export default Landing;
