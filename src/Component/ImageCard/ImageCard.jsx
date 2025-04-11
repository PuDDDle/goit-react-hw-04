import React from "react";
import css from "./ImageCard.module.css";

const ImageCard = ({ image }) => {
  return (
    <div className={css.imagecard}>
      <img
        src={image.urls.small}
        alt={image.alt_description || "image"}
        className={css.image}
      />
    </div>
  );
};

export default ImageCard;
