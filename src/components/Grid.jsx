import React from "react";
import { Col, Container, Row, setConfiguration } from "react-grid-system";
import Card from "./Card";

const Grid = ({ movies }) => {
  console.log(movies);

  return (
    <Container>
      <Row justify="center" gutterWidth={60}>
        {movies.map((movie, index) => (
          <Col align="start" sm={5} lg={2.8} md={3} xl={3} key={index}>
            <Card movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Grid;
