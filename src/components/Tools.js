import React from "react";
import unfilledStar from "../images/unfilled-star.svg";
import home from "../images/home.svg";
import heart from "../images/heart.svg";
import search from "../images/search-icon.svg";
import cinema from "../images/cinema1.svg";
import hot from "../images/hot.svg";
import calendar from "../images/calendar.svg";
import star from "../images/star1.svg";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const Tools = ({ setSearchMode, searchMode }) => {
  const navigate = useNavigate();

  const handleToolClick = (endpoint) => {};

  return (
    <div className="tools">
      <Tooltip id="my-tooltip" />
      <a
        href="/"
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Home"
        data-tooltip-place="bottom-start"
      >
        <img src={home} alt="home" width={26} height={26} />
      </a>

      <a
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Favourites"
        data-tooltip-place="bottom-start"
      >
        <img src={heart} alt="heart" width={28} height={28} />
      </a>

      <a
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Search"
        data-tooltip-place="bottom-start"
      >
        <img
          onClick={() => setSearchMode(!searchMode)}
          src={search}
          alt="search"
          width={30}
          height={30}
        />
      </a>

      <a
        onClick={() =>
          navigate("/nowplaying", {
            state: {
              endpoint: "/now_playing",
              title: "Now Playing Movies",
            },
          })
        }
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Now playing movies"
        data-tooltip-place="bottom-start"
      >
        <img src={cinema} alt="cinema" width={28} height={28} />
      </a>

      <a
        onClick={() =>
          navigate("/upcoming", {
            state: {
              endpoint: "/upcoming",
              title: "Upcoming Movies",
            },
          })
        }
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Upcoming movies"
        data-tooltip-place="bottom-start"
      >
        <img src={hot} alt="hot" width={29} height={29} />
      </a>

      <a
        onClick={() =>
          navigate("/popular", {
            state: {
              endpoint: "/popular",
              title: "Popular Movies",
            },
          })
        }
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Popular movies"
        data-tooltip-place="bottom-start"
      >
        <img src={calendar} alt="calendar" width={23} height={23} />
      </a>

      <a
        onClick={() =>
          navigate("/toprated", {
            state: {
              endpoint: "/top_rated",
              title: "Top Rated Movies",
            },
          })
        }
        data-tooltip-id="my-tooltip"
        data-tooltip-content="top-rated movies"
        data-tooltip-place="bottom-start"
      >
        <img src={star} alt="star" width={28} height={28} />
      </a>
    </div>
  );
};

export default Tools;
