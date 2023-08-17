import React from "react";
import "./Card.css"; // Create this CSS file for styling
import SeethaRamam from "./images/sitaramam.avif";
import ratingStar from "./images/rating.svg";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <h2 className="card-title">{props.title}</h2>
        <div className="card-content">{props.children}</div>
      </div>

      <div className="movie-section">
        <div className="playing-movies">
          <p>Now playing movies</p>
          <a hrexf="">Explore All</a>

          <Card>
            <img src={SeethaRamam} alt="SeethaRama" height={120} width={80} />
          </Card>

          <div className="currentlyplayng-cards">
            <div className="currentlyplayng-card">
              <p>Elemental</p>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
