import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import {
  Calender,
  Cinema,
  Fire,
  Heart,
  Home,
  Search,
  Star,
} from "../components/icons";
const Tools = ({ setSearchMode, searchMode }) => {
  const navigate = useNavigate();

  const handleToolClick = (url, apiUrl, title) => {
    navigate(url, {
      state: {
        endpoint: apiUrl,
        title: title,
      },
    });
  };

  return (
    <div className="tools">
      <Tooltip id="my-tooltip" />
      <a
        href="/"
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Home"
        data-tooltip-place="bottom-start"
      >
        <Home />
      </a>

      <a
        href="/favourites"
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Favourites"
        data-tooltip-place="bottom-start"
      >
        <Heart />
      </a>

      <a
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Search"
        data-tooltip-place="bottom-start"
      >
        <Search searchMode={searchMode} setSearchMode={setSearchMode} />
      </a>

      <a
        onClick={() =>
          handleToolClick("/nowplaying", "/now_playing", "Now Playing Movies")
        }
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Now playing movies"
        data-tooltip-place="bottom-start"
      >
        <Cinema />
      </a>

      <a
        onClick={() =>
          handleToolClick("/upcoming", "/upcoming", "Upcoming Movies")
        }
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Upcoming movies"
        data-tooltip-place="bottom-start"
      >
        <Fire />
      </a>

      <a
        onClick={() =>
          handleToolClick("/popular", "/popular", "Popular Movies")
        }
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Popular movies"
        data-tooltip-place="bottom-start"
      >
        <Calender />
      </a>

      <a
        onClick={() =>
          handleToolClick("/toprated", "/top_rated", "Top Rated Movies")
        }
        data-tooltip-id="my-tooltip"
        data-tooltip-content="top-rated movies"
        data-tooltip-place="bottom-start"
      >
        <Star />
      </a>
    </div>
  );
};

export default Tools;
