import React from "react";
import "./Card.css";
import ModalImage from "react-modal-image";
import { useNavigate } from "react-router-dom";

const Photo = ({ photo }) => {
  return (
    <>
      {
        <div className="card">
          <ModalImage
            small={`https://image.tmdb.org/t/p/original${photo.file_path}`}
            large={`https://image.tmdb.org/t/p/original${photo.file_path}`}
            alt="Image"
          />
      
        </div>
      }
    </>
  );
};

export default Photo;
