import Carousel from "react-elastic-carousel";
import React from "react";
import KnownCard from "./KnownCard";

export const KnownCarousel = ({ movies }) => {
  return (
    <Carousel itemsToShow={4} itemPosition="consts.CENTER">
      {movies.map((movie) => (
        <KnownCard movie={movie} />
      ))}
    </Carousel>
  );
};
