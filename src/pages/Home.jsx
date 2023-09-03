import "../App.css";
import { CarouselLayout } from "../components/Carousel";
import Landing from "../components/Landing";
import Tools from "../components/Tools";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ setSearchMode, searchMode }) => {
  const navigate = useNavigate();
  const TMDB_API_KEY = "3bf86b4334ec0be302abbf616d7b5e18";
  const TMDB_BASE_URL = "https://api.themoviedb.org/3";

  function getRandomInteger(maxValue) {
    return Math.floor(Math.random() * maxValue);
  }

  async function fetchNowPlayingMovies() {
    try {
      const response = await axios.get(`${TMDB_BASE_URL}/movie/now_playing`, {
        params: {
          api_key: TMDB_API_KEY,
          language: "en-US",
          page: 1, // Adjust as needed
        },
      });
      setNowPlayingMovies(response.data.results); // This assumes you're fetching popular movies
    } catch (error) {
      console.error("Error fetching movie data:", error);
      return [];
    }
  }

  async function fetchPopularMovies() {
    try {
      const response = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
        params: {
          api_key: TMDB_API_KEY,
          language: "en-US",
          page: 1, // Adjust as needed
        },
      });
      setPopularMovies(response.data.results); // This assumes you're fetching popular movies
    } catch (error) {
      console.error("Error fetching movie data:", error);
      return [];
    }
  }

  async function fetchUpcomingMovies() {
    try {
      const response = await axios.get(`${TMDB_BASE_URL}/movie/upcoming`, {
        params: {
          api_key: TMDB_API_KEY,
          language: "en-US",
          page: 1, // Adjust as needed
        },
      });
      setUpcomingMovies(response.data.results); // This assumes you're fetching popular movies
    } catch (error) {
      console.error("Error fetching movie data:", error);
      return [];
    }
  }
  async function fetchTopRatedMovies() {
    try {
      const response = await axios.get(`${TMDB_BASE_URL}/movie/top_rated`, {
        params: {
          api_key: TMDB_API_KEY,
          language: "en-US",
          page: 1, // Adjust as needed
        },
      });
      console.log(response.data.results);
      setTopRatedMovies(response.data.results); // This assumes you're fetching popular movies
    } catch (error) {
      console.error("Error fetching movie data:", error);
      return [];
    }
  }

  const [nowPlayingMovies, setNowPlayingMovies] = useState(null);
  const [popularMovies, setPopularMovies] = useState(null);
  const [upcomingMovies, setUpcomingMovies] = useState(null);
  const [topRatedMovies, setTopRatedMovies] = useState(null);
  const [landingMovie, setLandingMovie] = useState(null);

  useEffect(() => {
    if (popularMovies) {
      const landingMovie =
        popularMovies[getRandomInteger(popularMovies.length)];

        const apiUrl = `https://api.themoviedb.org/3/movie/${landingMovie.id}?api_key=${TMDB_API_KEY}&language=en-US`;

        // Make an Axios GET request to fetch movie details
        axios.get(apiUrl)
          .then((response) => {
            setLandingMovie(response.data);
          })
          .catch((error) => {
            console.error('Error fetching movie data:', error);
          });
    }
  }, [popularMovies]);

  useEffect(() => {
    fetchNowPlayingMovies();
    fetchPopularMovies();
    fetchUpcomingMovies();
    fetchTopRatedMovies();
  }, []);

  // ... Rest of your component code ...
  return (
    <>
      {nowPlayingMovies &&
      popularMovies &&
      upcomingMovies &&
      topRatedMovies &&
      landingMovie ? (
        <div className="container">
          <Tools setSearchMode={setSearchMode} searchMode={searchMode}></Tools>
          <div className="main-section">
            <Landing movie={landingMovie}></Landing>
            <div className="movie-section">
              <div className="playing-movies">
                <div className="status-explore">
                  <p className="movie-status">Now playing movies</p>
                  <p
                    className="movie-explorer"
                    onClick={() =>
                      navigate("/nowplaying", {
                        state: {
                          endpoint: "/now_playing",
                          title: "Now Playing Movies",
                        },
                      })
                    }
                  >
                    Explore all
                  </p>
                </div>

                <CarouselLayout movies={nowPlayingMovies}></CarouselLayout>
              </div>
              <div className="playing-movies">
                <div className="status-explore">
                  <p className="movie-status">Popular movies</p>
                  <p
                    className="movie-explorer"
                    onClick={() =>
                      navigate("/popular", {
                        state: {
                          endpoint: "/popular",
                          title: "Popular Movies",
                        },
                      })
                    }
                  >
                    Explore all
                  </p>
                </div>

                <CarouselLayout movies={popularMovies}></CarouselLayout>
              </div>
              <div className="playing-movies">
                <div className="status-explore">
                  <p className="movie-status">Upcoming movies</p>
                  <p
                    className="movie-explorer"
                    onClick={() =>
                      navigate("/upcoming", {
                        state: {
                          endpoint: "/upcoming",
                          title: "Upcoming Movies",
                        },
                      })
                    }
                  >
                    Explore all
                  </p>
                </div>

                <CarouselLayout movies={upcomingMovies}></CarouselLayout>
              </div>
              <div className="playing-movies">
                <div className="status-explore">
                  <p className="movie-status">Top rated movies</p>
                  <p
                    className="movie-explorer"
                    onClick={() =>
                      navigate("/toprated", {
                        state: {
                          endpoint: "/top_rated",
                          title: "Top Rated Movies",
                        },
                      })
                    }
                  >
                    Explore all
                  </p>
                </div>

                <CarouselLayout movies={topRatedMovies}></CarouselLayout>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Home;
