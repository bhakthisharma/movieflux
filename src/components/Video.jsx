import React, { useState } from "react";
import "./Card.css";

import playIcon from "../images/play.svg";
import PlayIcon from "./icons/PlayIcon";

const Video = ({ video, setVideoID, setIsPlaying }) => {
  const [showPlayIcon, setShowPlayIcon] = useState(false);

  return (
    <>
      {
        <div
          onMouseOut={() => setShowPlayIcon(false)}
          onMouseOver={() => setShowPlayIcon(true)}
          className="card photo-card"
          style={{
            backgroundImage: `url(https://img.youtube.com/vi/${video.key}/mqdefault.jpg)`,
          }}
          onClick={() => {
            setIsPlaying(true);
            setVideoID(video.key);
          }}
        >
          {showPlayIcon && <PlayIcon></PlayIcon>}
          {/* <img
            className="card-poster"
            src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
            alt="Card-Image"
            height={320}
            width={500}
          /> */}
        </div>
      }
    </>
  );
};

export default Video;
