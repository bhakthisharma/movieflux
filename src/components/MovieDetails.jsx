import React from "react";
import "./MovieDetails.css";
import SeethaRamam from "../images/bg-image.jpg";

const MovieDetails = ({ movieDetails }) => {
  const genreNames = movieDetails.genres.map((genre) => genre.name);
  const concatenatedGenres = genreNames.join(", ");
  const langs = movieDetails.spoken_languages.map((lang) => lang.name);
  const concatenatedLangs = langs.join(", ");
  const productionCompanies = movieDetails.production_companies.map(
    (company) => company.name
  );
  const concatenatedCompanies = productionCompanies.join(", ");
  const convertToHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h ${minutes}min`;
  };

  function formatDate(inputDate) {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "2-digit",
    };
    const date = new Date(inputDate);
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <section className="moviedetails">
      <div className="moviedetails-title">
        <h2 className="moviedetails-tab">OVERVIEW</h2>
        <h2 className="moviedetails-tab">VIDEOS</h2>
        <h2 className="moviedetails-tab">PHOTOS</h2>
      </div>
      <div className="moviedetails-description">
        <div className="moviedetails-description-image">
          <img
            src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
            alt="SeethaRamam"
            width={320}
            height={470}
          />
        </div>
        <div className="moviedetails-description-details">
          <p className="moviedescription-title">Storyline</p>

          <p className="moviedetails-summary">{movieDetails.overview}</p>
          <div className="moviedetails-description-moviedetails">
            <div className="moviedetails-description-moviedetails-attributes">
              <p>Released</p>
              <p>Runtime</p>
              <p>Budget</p>
              <p>Revenue</p>
              <p>Genres</p>
              <p>Status</p>
              <p>Language</p>
              <p>Production</p>
            </div>
            <div className="moviedetails-description-moviedetails-values">
              <p>{formatDate(movieDetails.release_date)}</p>
              <p>{convertToHoursAndMinutes(movieDetails.runtime)}</p>
              <p>${movieDetails.budget}</p>
              <p>${movieDetails.revenue}</p>
              <p>{concatenatedGenres}</p>
              <p>{movieDetails.status}</p>
              <p>{concatenatedLangs}</p>
              <p>{concatenatedCompanies} </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
