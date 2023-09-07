import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Tools from "../components/Tools";
import "./FilteredMovies.css";
import { useEffect, useState } from "react";
import Grid from "../components/Grid";
import axios from "axios";
import Footer from "./Footer";

const FilteredMovies = ({ searchMode, setSearchMode }) => {
  const location = useLocation();
  const endpoint = location?.state?.endpoint;

  const TMDB_API_KEY = "3bf86b4334ec0be302abbf616d7b5e18";
  const TMDB_BASE_URL = "https://api.themoviedb.org/3/movie";

  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${TMDB_BASE_URL}/${endpoint}`, {
          params: {
            api_key: TMDB_API_KEY,
            language: "en-US",
            page: 1, // Adjust as needed
          },
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching poster image:", error);
      }
    };

    fetchMovies();
  }, [endpoint]);

  return (
    <>
      {movies && (
        <div className="container">
          <Tools setSearchMode={setSearchMode} searchMode={searchMode}></Tools>
          <div className="main-section-filteredmovies">
            <div className="filtered-movies-title-items">
              <p className="filtered-movies-title">{location?.state?.title}</p>
              <p className="filtered-movies-items">{movies.length} {movies.length>1?`items`:"item"} </p>
            </div>

            <div className="grid">
              <Grid movies={movies}></Grid>
            </div>
            <Footer></Footer>
          </div>
        </div>
      )}
    </>
  );
};

export default FilteredMovies;
