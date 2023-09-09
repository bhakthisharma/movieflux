import Carousel from "react-elastic-carousel";
import React from "react";
import CastCard from "./CastCard";

export const CastCarousel = ({ movies }) => {
  return (
    <Carousel itemsToShow={4} itemPosition="consts.CENTER">
      {movies.map((movie) => (
        <CastCard movie={movie} />
      ))}
    </Carousel>
  );
};
