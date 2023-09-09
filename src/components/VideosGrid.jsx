import React from "react";
import { Col, Container, Row, setConfiguration } from "react-grid-system";
import Card from "./Card";
import { useEffect, useState } from "react";
import Video from "./Video";
import axios from "axios";
import VideoPlayer from "./VideoPlayer";

const VideosGrid = ({ id }) => {
  const [videos, setVideos] = useState([]);
  const [videoID, setVideoID] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const apiKey = "3bf86b4334ec0be302abbf616d7b5e18";
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`;

    axios
      .get(url)
      .then((response) => {
        console.log(response.data.results)
        setVideos(response.data.results); // You can also use 'backdrops' or 'stills' depending on your preference
      })
      .catch((error) => {
        console.error("Error fetching movie photos:", error);
      });
  }, [id]);

  return (


    <> {videos &&
      <>
      <p style={{marginLeft:50}} > {videos.slice(0,40).length} Items</p>

      <Container>
      <Row justify="center" gutterWidth={60}>
        {videos.map((video, index) => (
          <Col align="start" sm={5} lg={2.8} md={3} xl={6} key={index}>
            <Video setVideoID={setVideoID} setIsPlaying={setIsPlaying} video={video} />
          </Col>
        ))}
      </Row>
    </Container>
    </>

    }
     <VideoPlayer
            setIsPlaying={setIsPlaying}
            isPlaying={isPlaying}
            videoID={videoID}
          ></VideoPlayer>
    </>
   
  );
};

export default VideosGrid;
