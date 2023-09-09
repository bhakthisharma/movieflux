import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Landing from "../components/Landing";
import Tools from "../components/Tools";
import MovieDetails from "../components/MovieDetails";
import Footer from "./Footer";
import { CarouselLayout } from "../components/Carousel";
import { CastCarousel } from "../components/CastCarousel";

const Movie = ({ searchMode, setSearchMode }) => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const apiKey = "3bf86b4334ec0be302abbf616d7b5e18";
  const [cast, setCast] = useState(null);

  const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
  const castApiUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`;
  const [similarMovies, setSimilarMovies] = useState(null);
  const [recommendedMovies, setRecommendedMovies] = useState(null);

  useEffect(() => {
    // Fetch similar movies
    fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => setSimilarMovies(data.results))
      .catch((error) => console.error("Error fetching similar movies:", error));

    // Fetch recommended movies
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => setRecommendedMovies(data.results))
      .catch((error) =>
        console.error("Error fetching recommended movies:", error)
      );
  }, [id]);

  useEffect(() => {
    axios
      .all([axios.get(apiUrl), axios.get(castApiUrl)])
      .then(
        axios.spread((movieResponse, castResponse) => {
          setMovie(movieResponse.data);
          setCast(castResponse.data.cast);
          
          console.log(movieResponse.data);
          console.log(castResponse.data.cast);
        })
      )
      .catch((error) => {
        console.error("Error fetching movie and cast data:", error);
      });
  }, [id]);

  return (
    <>
      {movie && cast && similarMovies && recommendedMovies && (
        <div className="container">
          <Tools setSearchMode={setSearchMode} searchMode={searchMode}></Tools>
          <div className="movie-container">
            <Landing movie={movie}></Landing>
            <MovieDetails movieDetails={movie} cast={cast}></MovieDetails>

      

            <div className="playing-movies">
              <div className="status-explore">
                <p style={{ color: "white" }} className="movie-status">
                  Similar movies
                </p>
              </div>
              <CarouselLayout movies={similarMovies}></CarouselLayout>
            </div>

            <div className="status-explore">
              <p style={{ color: "white" }} className="movie-status">
                Recommended movies
              </p>
            </div>
            <CarouselLayout movies={recommendedMovies}></CarouselLayout>
            <Footer></Footer>
          </div>
        </div>
      )}
    </>
  );
};
export default Movie;
