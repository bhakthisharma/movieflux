import React from "react";
import unfilledStar from "../images/unfilled-star.svg";
import home from "../images/home.svg";
import heart from "../images/heart.svg";
import search from "../images/search-icon.svg";
import cinema from "../images/cinema1.svg";
import hot from "../images/hot.svg";
import calendar from "../images/calendar.svg";
import star from "../images/star1.svg";

const Tools = ({ setSearchMode, searchMode }) => {
  return (
    <div className="tools">
      <img src={home} alt="home" width={26} height={26} />
      <img src={heart} alt="heart" width={28} height={28} />
      <img onClick={()=>setSearchMode(!searchMode) } src={search} alt="search" width={30} height={30} />
      <img src={cinema} alt="cinema" width={28} height={28} />
      <img src={hot} alt="hot" width={29} height={29} />
      <img src={calendar} alt="calendar" width={23} height={23} />
      <img src={star} alt="star" width={28} height={28} />
    </div>
  );
};

export default Tools;
