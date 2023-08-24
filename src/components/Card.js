import React, { useState, useEffect } from "react";
import "./Card.css"; // Create this CSS file for styling
import SeethaRamam from "../images/sitaramam.avif";
import ratingStar from "../images/rating.svg";
import axios from "axios";

const Card = ({movie}) => {
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

     {poster&&
     <div className="card">
     <img src={poster} alt="SeethaRama" height={350} width={250}  />

              <p>{movie.title}</p>
              <div className="currentlyplayingmovie-ratings">
                <img
                  src={ratingStar}
                  alt="rating star"
                  width={22}
                  height={23}
                />
                <img
                  src={ratingStar}
                  alt="rating star"
                  width={22}
                  height={23}
                />
                <img
                  src={ratingStar}
                  alt="rating star"
                  width={22}
                  height={23}
                />
                <img
                  src={ratingStar}
                  alt="rating star"
                  width={22}
                  height={23}
                />
                <img
                  src={ratingStar}
                  alt="rating star"
                  width={22}
                  height={23}
                />
              </div>
            </div>}

      
    </>
  );
};

export default Card;
