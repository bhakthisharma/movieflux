import React from "react";
import { Col, Container, Row, setConfiguration } from "react-grid-system";
import { useEffect, useState } from "react";
import CastCard from "./CastCard";
import axios from "axios";
import Photo from "./Photo";

const PhotosGrid = ({ id }) => {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    const apiKey = "3bf86b4334ec0be302abbf616d7b5e18";
    const url = `https://api.themoviedb.org/3/movie/${id}/images?api_key=${apiKey}`;

    axios
      .get(url)
      .then((response) => {
        console.log(response.data.posters);
        setPhotos(response.data.posters); // You can also use 'backdrops' or 'stills' depending on your preference
      })
      .catch((error) => {
        console.error("Error fetching movie photos:", error);
      });
  }, [id]);

  return (
    <>

      {photos && (
      <>
      <p style={{marginLeft:50}} > {photos.slice(0,40).length} Items</p>

        <Container>
          <Row justify="center" gutterWidth={60}>
            {photos.slice(0,40).map((photo, index) => (
              <Col align="start" sm={5} lg={4} md={4} xl={4} key={index}>
                <Photo photo={photo} />
              </Col>
            ))}
          </Row>
        </Container>
      </>

      )}
    </>
  );
};

export default PhotosGrid;
