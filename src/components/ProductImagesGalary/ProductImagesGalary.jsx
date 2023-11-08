import React from "react";
import ImageGallery from "react-image-gallery";
import "./ProductImagesGalary.css";

export const ProductImagesGalary = (props) => {
  const images = Array(4).fill({
    original: props.images,
    thumbnail: props.images,
    sizes: "(max-width: 600px) 1000px, 1000px",
  });

  return <ImageGallery items={images} />;
};
