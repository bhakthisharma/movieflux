import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Tools from "../components/Tools";
import "./FilteredMovies.css";
import { useEffect, useState } from "react";
import Grid from "../components/Grid";
import axios from "axios";
import Footer from "./Footer";

const SearchResults = ({ searchMode, setSearchMode }) => {
  const { query } = useParams();
  const TMDB_API_KEY = "3bf86b4334ec0be302abbf616d7b5e18";

  const handleSearch = async () => {};

  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${query}`
        );

        // Assuming you want to access the results property of the response
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <>
      {movies && (
        <div className="container">
          <Tools setSearchMode={setSearchMode} searchMode={searchMode}></Tools>
          <div className="main-section-filteredmovies">
            <div className="filtered-movies-title-items">
              <p className="filtered-movies-title">Search Results</p>
              <p className="filtered-movies-items">
                {movies.length} {movies.length > 1 ? `items` : "item"}
              </p>
            </div>

            <div className="grid">
              <Grid movies={movies}></Grid>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchResults;
