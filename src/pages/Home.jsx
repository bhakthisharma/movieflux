import logo from "../logo.svg";
import "../App.css";
import { CarouselLayout } from "../components/Carousel";
import starFilled from "../images/star-filled.svg";
import starUnfilled from "../images/star-outlined.svg";
import TextTruncate from "react-text-truncate"; // recommend
import Tools from "../components/Tools";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({setSearchMode, searchMode}) => {
  const navigate = useNavigate();
  const TMDB_API_KEY = "3bf86b4334ec0be302abbf616d7b5e18";
  const TMDB_BASE_URL = "https://api.themoviedb.org/3";

  function getRandomInteger(maxValue) {
    return Math.floor(Math.random() * maxValue);
  }

  function convertToStarsRating(voteAverage) {
    const maxRating = 10; // TMDB's maximum rating
    const numberOfStars = (voteAverage / maxRating) * 5;
    return Math.round(numberOfStars);
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
  const [landingMovieBackdrop, setLandingMovieBackdrop] = useState(null);

  useEffect(() => {
    if (popularMovies) {
      const landingMovie =
        popularMovies[getRandomInteger(popularMovies.length)];

      setLandingMovie(landingMovie);
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
            <div
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${landingMovie.backdrop_path})`,
              }}
              className="landing-page"
            >
              <div className="movie-details">
                <h1 className="movie-name">{landingMovie.title}</h1>
                <div className="movieratings-year">
                  <div className="movie-ratings">
                    {[
                      ...Array(convertToStarsRating(landingMovie.vote_average)),
                    ].map((e, i) => (
                      <img
                        src={starFilled}
                        alt="star-filled"
                        height={22}
                        width={22}
                      ></img>
                    ))}
                    {[
                      ...Array(
                        5 - convertToStarsRating(landingMovie.vote_average)
                      ),
                    ].map((e, i) => (
                      <img
                        src={starUnfilled}
                        alt="star-unfilled"
                        height={22}
                        width={22}
                      ></img>
                    ))}
                  </div>
                  <p className="movie-year">
                    {" "}
                    {landingMovie.release_date.slice(0, 4)}
                  </p>
                </div>
                <p className="movie-description">
                  <TextTruncate
                    className="movie-description1"
                    line={3}
                    element="span"
                    truncateText="…"
                    text={landingMovie.overview}
                  />
                </p>
              </div>
            </div>
            <div className="movie-section">
              <div className="playing-movies">
                <div className="status-explore">
                  <p className="movie-status">Now playing movies</p>
                  <p className="movie-explorer"
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
                  <p className="movie-explorer"  onClick={() =>
                      navigate("/popular", {
                        state: {
                          endpoint: "/popular",
                          title: "Popular Movies",
                        },
                      })
                    }>Explore all</p>
                </div>

                <CarouselLayout movies={popularMovies}></CarouselLayout>
              </div>
              <div className="playing-movies">
                <div className="status-explore">
                  <p className="movie-status">Upcoming movies</p>
                  <p className="movie-explorer"
                   onClick={() =>
                      navigate("/upcoming", {
                        state: {
                          endpoint: "/upcoming",
                          title: "Upcoming Movies",
                        },
                      })
                    }>Explore all</p>
                </div>

                <CarouselLayout movies={upcomingMovies}></CarouselLayout>
              </div>
              <div className="playing-movies">
                <div className="status-explore">
                  <p className="movie-status">Top rated movies</p>
                  <p  className="movie-explorer"
                   onClick={() =>
                      navigate("/toprated", {
                        state: {
                          endpoint: "/top_rated",
                          title: "Top Rated Movies",
                        },
                      })
                    }>Explore all</p>
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
