import Carousel from "react-elastic-carousel";
import React from "react";
import Card from "./Card";

export const CarouselLayout = ({ movies }) => {
  return (
    <Carousel itemsToShow={4} itemPosition="consts.CENTER">
      {movies.map((movie) => (
        <Card movie={movie} />
      ))}
    </Carousel>
  );
};
