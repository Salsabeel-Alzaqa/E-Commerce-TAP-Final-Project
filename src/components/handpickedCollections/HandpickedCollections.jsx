import { Container, Grid, Card, CardMedia, Typography } from "@mui/material";
import React from "react";

const handpickedCollectionsData = [
  {
    image: " ",
    category: "Grande",
  },
  {
    image: "../images/image.png ",
    category: "Grande",
  },
  {
    image: "../images/image.png ",
    category: "Grande",
  },
  {
    image: "../images/image.png ",
    category: "Grande",
  },
];

export const HandpickedCollections = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        {handpickedCollectionsData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            {/* <ProductCard itemData={item} /> */}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
