import React from "react";
import { Grid, Paper, Typography, Box, Button, Container } from "@mui/material";
import { ProductCard } from "../ProductCard/ProductCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const newArrivalsItems = [
  {
    image_url: "../images/image.png ",
    name_product: "Grande",
    short_description: "Blossom Pouch",
    price: "$39.49",
  },
  {
    image_url: "../images/image.png ",
    name_product: "Coach",
    short_description: "Blossom Pouch",
    price: "$39.49",
  },
  {
    image_url: "../images/image.png ",
    name_product: "Remus",
    short_description: "Blossom Pouch",
    price: "$39.49",
  },
  {
    image_url: "../images/image.png",
    name_product: "Boujee",
    short_description: "Blossom Pouch",
    price: "$39.49",
  },
];

export const NewArrivals = () => {
  return (
    <Container maxWidth="l">
      <Paper variant="none">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          py={2}
        >
          <Typography variant="h3" component="div">
            New Arrivals
          </Typography>
          <Button
            variant="none"
            endIcon={<ArrowForwardIosIcon />}
            sx={{ fontSize: "14px", fontWeight: "600", color: "primary" }}
          >
            View All
          </Button>
        </Box>

        <Grid container spacing={2}>
          {newArrivalsItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ProductCard itemData={item} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};
