import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Landing from "../components/Landing";
import Tools from "../components/Tools";
import MovieDetails from "../components/MovieDetails";

const Movie = ({searchMode, setSearchMode}) => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const apiKey = "3bf86b4334ec0be302abbf616d7b5e18";
  const [cast, setCast] = useState(null);
  const [landingMovie, setLandingMovie] = useState(null);


  const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
  const castApiUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`;
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
      {movie && cast && (
        <div className="container">
          <Tools setSearchMode={setSearchMode} searchMode={searchMode}></Tools>
          <div className="movie-container">
            <Landing movie={movie}></Landing>
            <MovieDetails movieDetails={movie}></MovieDetails>
          </div>
        </div>
      )}
    </>
  );
};
export default Movie;
