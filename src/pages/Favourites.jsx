import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Tools from "../components/Tools";
import "./FilteredMovies.css";
import { useEffect, useState } from "react";
import Grid from "../components/Grid";
import axios from "axios";

const Favourites = ({ searchMode, setSearchMode }) => {
  const { query } = useParams();
  const TMDB_API_KEY = "3bf86b4334ec0be302abbf616d7b5e18";


  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const movies=JSON.parse(localStorage.getItem("favourites"))||[]
    console.log(movies)
    setMovies(movies)
  }, [query]);

  return (
    <>
      {movies && (
        <div className="container">
          <Tools setSearchMode={setSearchMode} searchMode={searchMode}></Tools>
          <div className="main-section-filteredmovies">
            <div className="filtered-movies-title-items">
              <p className="filtered-movies-title">Favourites</p>
              <p className="filtered-movies-items">{movies.length} items</p>
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

export default Favourites;
