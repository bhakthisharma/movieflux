import React, { useState, useEffect } from "react";
import "./Card.css"; // Create this CSS file for styling

import { useNavigate } from "react-router-dom";
import axios from "axios";

const Photo = ({ photo }) => {
  const navigate = useNavigate();

  return (
    <>
      {
        <div className="card" onClick={() => navigate(`Hi`)}>
          <img
            className="card-poster"
            src={`https://image.tmdb.org/t/p/original${photo.file_path}`}
            alt="Card-Image"
            height={330}
            width={230}
          />
        </div>
      }
    </>
  );
};

export default Photo;
