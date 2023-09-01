import React, { useState, useEffect } from "react";
import "./Card.css"; // Create this CSS file for styling
import ratingStar from "../images/rating.svg";
import cardHeart from "../images/heart-1.svg";
import starFilled from "../images/star-filled.svg";
import starUnfilled from "../images/star-outlined.svg";

import axios from "axios";

const Card = ({ movie }) => {
  function convertToStarsRating(voteAverage) {
    const maxRating = 10; // TMDB's maximum rating
    const numberOfStars = (voteAverage / maxRating) * 5;
    return Math.round(numberOfStars);
  }

  const [poster, setPoster] = useState(null);
  useEffect(() => {
    const fetchPoster = async () => {
      try {
        const response = await axios.get(
          `https://image.tmdb.org/t/p/original${movie.poster_path}`
        );
        setPoster(response.config.url);
      } catch (error) {
        console.error("Error fetching poster image:", error);
      }
    };

    fetchPoster();
  }, []);
  return (
    <>
      {poster && (
        <div className="card">
          <img
            className="card-favourite"
            src={cardHeart}
            alt="card-favourite"
            height={25}
            width={25}
          />
          <img
            className="card-poster"
            src={poster}
            alt="Card-Image"
            height={330}
            width={230}
          />

          <p className="card-movie-title">{movie.title}</p>
          <div className="movie-ratings movie-ratings-small">
            {[...Array(convertToStarsRating(movie.vote_average))].map(
              (e, i) => (
                <img
                  src={starFilled}
                  alt="star-filled"
                  height={20}
                  width={20}
                ></img>
              )
            )}
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
      )}
    </>
  );
};

export default Card;
