import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Typography, Box } from "@mui/material";
import ProductDefault from "../../assets/images/ProductDefault.jpg";
import EastIcon from "@mui/icons-material/East";

export const SpotLightCard = (props) => {
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
    loadImage(props.cardData.image);
  }, [props.cardData.image]);
  return (
    <Card sx={{ width: "50%" }}>
      <div style={{ position: "relative" }}>
        <CardMedia
          sx={{ height: 228, position: "relative", objectFit: "fill" }}
          component="img"
          image={image}
        />
        <Typography
          fontWeight={700}
          fontSize={40}
          sx={{
            textAlign: "right",
            position: "absolute",
            bottom: 110,
            right: 30,
            width: 240,
            height: 104,
            color: props.cardData.color,
          }}
        >
          {props.cardData.title}
        </Typography>
        <Box
          sx={{
            position: "absolute",
            backgroundColor: props.cardData.backgroundColor,
            borderRadius: "50%",
            width: 51,
            height: 51,
            bottom: 20,
            right: 20,
          }}
        >
          <EastIcon
            sx={{
              color: props.cardData.color,
              position: "absolute",
              bottom: 12,
              right: 12,
              fontSize: 28,
            }}
          />
        </Box>
      </div>
    </Card>
  );
};
