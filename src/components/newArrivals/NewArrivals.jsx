import React from "react";
import { Grid, Paper, Typography, Box, Button } from "@mui/material";
import { ProductCard } from "../ProductCard/ProductCard";
import { newArrivalsItems } from "../../assets/data/data";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const NewArrivals = () => {
  return (
    <Paper variant="none">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding={2}
      >
        <Typography variant="h5" component="div">
          New Arrivals
        </Typography>
        <Button variant="none" endIcon={<ArrowForwardIcon />}>
          View All
        </Button>
      </Box>

      <Grid container spacing={2}>
        {newArrivalsItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ProductCard
              image={item.image}
              title={item.title}
              color={item.color}
              price={item.price}
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};
