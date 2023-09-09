import React, { useState, useEffect } from "react";
import "./Card.css"; // Create this CSS file for styling

import { useNavigate } from "react-router-dom";

const KnownCard = ({ movie }) => {
  const navigate = useNavigate();


  return (
    <>
      { (
        <div className="card" onClick={() => navigate(`/person/${movie.id}`)}>
          <img
            className="card-poster"
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="Card-Image"
            height={330}
            width={230}
          />

          <p className="card-movie-name">{movie.title}</p>
          <p  className="card-movie-character">{movie.character}</p>

        </div>
      )}
    </>
  );
};

export default KnownCard;
