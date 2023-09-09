import React, { useState, useEffect } from "react";
import "./Card.css"; // Create this CSS file for styling

import { useNavigate } from "react-router-dom";
import axios from "axios";
import playIcon from "../images/play.svg";

const Video = ({ video, setVideoID, setIsPlaying }) => {
  const navigate = useNavigate();

  return (
    <>
      {
        <div
          className="card"
          onClick={() => {
            setIsPlaying(true);
            setVideoID(video.key);
          }}
        >
          <img className="play-icon" src={playIcon} alt="playicon" />
          <img
            className="card-poster"
            src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
            alt="Card-Image"
            height={320}
            width={500}
          />
        </div>
      }
    </>
  );
};

export default Video;
