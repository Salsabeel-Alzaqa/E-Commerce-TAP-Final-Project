import React from "react";
import { Grid, Paper, Box, Button, Container, useTheme } from "@mui/material";
import { ProductCard } from "../ProductCard/ProductCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Title } from '../Title/Title';
import { useQueryParam } from "../../hooks/useQueryParam";
const newArrivalsItems = [
  {
    id_product:1,
    image_url: "image.png",
    name_product: "Grande",
    short_description: "Blossom Pouch",
    price: "39.49",
  },
  {
    id_product:2,
    image_url: "image2.png",
    name_product: "Coach",
    short_description: "Blossom Pouch",
    price: "39.49",
  },
  {
    id_product:3,
    image_url: "image3.png",
    name_product: "Remus",
    short_description: "Blossom Pouch",
    price: "39.49",
  },
  {
    id_product:4,
    image_url: "image.png",
    name_product: "Boujee",
    short_description: "Blossom Pouch",
    price: "39.49",
  },
];
export const NewArrivals = () => {
  const {handleMoveToListingPage} = useQueryParam('newArrival');
  const theme = useTheme();
  return (
    <Container maxWidth="xl">
      <Paper variant="none">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          py={2}
        >
          <Title text={'New Arrivals'} />
          <Box
            onClick={() =>handleMoveToListingPage(true)}

          >
            <Button
              variant="none"
              endIcon={<ArrowForwardIosIcon />}
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                color: theme.palette.primary.main,
              }}
            >
              View All
            </Button>
          </Box>
        </Box>

        <Grid container spacing={3}>
          {newArrivalsItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ProductCard {...item} newArrival={true} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};