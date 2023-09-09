import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cardHeart from "../images/heart-1.svg";
import starFilled from "../images/star-filled.svg";
import starUnfilled from "../images/star-outlined.svg";
import "./Card.css"; // Create this CSS file for styling

const Card = ({ movie }) => {
  const navigate = useNavigate();
  function convertToStarsRating(voteAverage) {
    const maxRating = 10; // TMDB's maximum rating
    const numberOfStars = (voteAverage / maxRating) * 5;
    return Math.round(numberOfStars);
  }

  return (
    <>
      <div className="card" onClick={() => navigate(`/movie/${movie.id}`)}>
        <div
          className="card-bg-img"
          style={{
            height: 330,
            width: 230,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url( https://image.tmdb.org/t/p/original${movie.poster_path})`,
          }}
        ></div>

        <img
          onClick={(e) => {
            e.stopPropagation()
            const movies = JSON.parse(localStorage.getItem("favourites")) || [];
            movies.push(movie);
            localStorage.setItem("favourites", JSON.stringify(movies));
          }}
          className="card-favourite"
          src={cardHeart}
          alt="card-favourite"
          height={25}
          width={25}
        />
        <p className="card-movie-title">{movie.title}</p>
        <div className="movie-ratings movie-ratings-small">
          {[...Array(convertToStarsRating(movie.vote_average))].map((e, i) => (
            <img
              src={starFilled}
              alt="star-filled"
              height={20}
              width={20}
            ></img>
          ))}
          {[...Array(5 - convertToStarsRating(movie.vote_average))].map(
            (e, i) => (
              <img
                src={starUnfilled}
                alt="star-unfilled"
                height={20}
                width={20}
              ></img>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
