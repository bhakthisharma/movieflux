import React from "react";
import { useState, useEffect } from "react";
import Tools from "../components/Tools";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import "./Cast.css";
import axios from "axios";
import { CarouselLayout } from "../components/Carousel";
import { KnownCarousel } from "../components/KnownCarousel";

const Cast = ({ searchMode, setSearchMode }) => {
  const [person, setPerson] = useState(null);
  const { id } = useParams();
  const apiKey = "3bf86b4334ec0be302abbf616d7b5e18";
  const url = `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}`;
  const [knownForMovies, setKnownForMovies] = useState([]);
  const knownForUrl = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${apiKey}`;

  useEffect(() => {
    axios
      .get(knownForUrl)

      .then((response) => {
        console.log(response.data.cast)
        setKnownForMovies(response.data.cast);
      })
      .catch((error) => {
        console.error("Error fetching known for movies:", error);
      });

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPerson(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching similar movies:", error));
  }, [id]);

  return (
    <>
      {person && knownForMovies && (
        <div className="container">
          <Tools setSearchMode={setSearchMode} searchMode={searchMode}></Tools>
          <div className="movie-container">
            <section className="moviedetails">
              <div className="moviedetails-description">
                <div className="moviedetails-description-image">
                  <img
                    src={`https://image.tmdb.org/t/p/original${person.profile_path}`}
                    alt="SeethaRamam"
                    width={320}
                    height={470}
                  />
                </div>
                <div className="moviedetails-description-details">
                  <p className="moviedescription-title">{person.name}</p>
                  <div className="moviedetails-description-moviedetails">
                    <div className="cast-details">
                      <p> Also Known As</p>
                      <p>Birthday</p>
                      <p>Place of Birth</p>
                      <p>Deathday</p>
                      <p>Gender</p>
                      <p>Biography</p>
                    </div>
                    <div className="moviedetails-description-moviedetails-values">
                      <p>
                        {person.also_known_as.length > 0
                          ? person.also_known_as[0]
                          : "N/A"}
                      </p>
                      <p>{person.birthday}</p>
                      <p>{person.place_of_birth}</p>
                      <p>{person.deathday ? person.deathday : "N/A"}</p>
                      <p>{person.gender === 1 ? "Female" : "Male"}</p>
                      <p>{person.biography}</p>
                    </div>
                  </div>
                </div>
              </div>



            </section>

            <div className="playing-movies">
                  <div className="status-explore">
                    <p className="movie-status">Known for</p>
                   
                  </div>
                  <KnownCarousel movies={knownForMovies}></KnownCarousel>

                </div>

            <Footer></Footer>
          </div>
        </div>
      )}
    </>
  );
};

export default Cast;
