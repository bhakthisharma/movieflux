import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

const VideoPlayer = ({ videoID, isPlaying, setIsPlaying }) => {
  return (
    <ModalVideo
      channel="youtube"
      autoplay
      isOpen={isPlaying}
      videoId={videoID}
      onClose={() => setIsPlaying(false)}
    />
  );
};

export default VideoPlayer;

