import logo from "./logo.svg";
import "./App.css";
import Card from "./Card"; // Adjust the path to the Card component
import ratingStar from "./images/rating.svg";
import unfilledStar from "./images/unfilled-star.svg";
import home from "./images/home.svg";
import heart from "./images/heart.svg";
import search from "./images/search-icon.svg";
import cinema from "./images/cinema1.svg";

import hot from "./images/hot.svg";

import calendar from "./images/calendar.svg";
import star from "./images/star1.svg";

function App() {
  return (
    <div className="container">
      <div className="tools">
        <img src={home} alt="home" width={26} height={26} />
        <img src={heart} alt="heart" width={28} height={28} />
        <img src={search} alt="search" width={30} height={30} />
        <img src={cinema} alt="cinema" width={28} height={28} />
        <img src={hot} alt="hot" width={29} height={29} />
        <img src={calendar} alt="calendar" width={23} height={23} />
        <img src={star} alt="star" width={28} height={28} />
      </div>

      <div className="landing-page">
        <div className="movie-details">
          <h1 className="movie-name">The Black Panther</h1>
          <div className="movieratings-year">
            <div className="movie-ratings">
              <img src={ratingStar} alt="rating star" width={22} height={23} />
              <img src={ratingStar} alt="rating star" width={22} height={23} />
              <img src={ratingStar} alt="rating star" width={22} height={23} />
              <img src={ratingStar} alt="rating star" width={22} height={23} />
              <img src={ratingStar} alt="rating star" width={22} height={23} />
            </div>
            <p className="movie-year">2023</p>
          </div>
          <p className="movie-description">
            Natus incidunt fuga commodi, totam ab, ipsa quas corrupti nihil eos
            unde recusandae quod.
          </p>
        </div>
      </div>




          
        </div>
  );
}

export default App;
