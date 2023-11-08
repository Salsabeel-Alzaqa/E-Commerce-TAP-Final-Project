import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";
import ProductDefault from "../../assets/images/ProductDefault.jpg";

export const HandpickedCard = (props) => {
  const [image, setImage] = useState(null);

  const loadImage = async (imageName) => {
    try {
      let cardImage = await import(`../../assets/images/${imageName}`);
      setImage(cardImage.default);
    } catch {
      setImage(ProductDefault);
    }
  };

  useEffect(() => {
    loadImage(props.itemData.image);
  }, [props.itemData.image]);

  return (
    <Card sx={{ width: '100% '}}>
      <div style={{ position: "relative" }}>
        <CardMedia
          sx={{ height: 300, position: "relative" }}
          component="img"
          image={image}
          alt={props.itemData.category}
        />
        <Typography
          fontWeight={600}
          fontSize={24}
          sx={{
            position: "absolute",
            bottom: 5,
            left: 20,
          }}
        >
          {props.itemData.category}
        </Typography>
      </div>
    </Card>
  );
};
