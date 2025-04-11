import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
const ImageGallery = ({ images }) => {
  if (images.length === 0) return null;

  return (
    <ul className={css.imagegallery}>
      {images.map((image) => (
        <li key={image.id} className={css.galleryitem}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
