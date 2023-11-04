import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  Container,
  useTheme,
} from "@mui/material";
import { ProductCard } from "../ProductCard/ProductCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

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

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const NewArrivals = () => {
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
          <Typography variant="h3" component="div">
            New Arrivals
          </Typography>
          <StyledLink
            to={{
              pathname: `/search`,
            }}
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
          </StyledLink>
        </Box>

        <Grid container spacing={3}>
          {newArrivalsItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <StyledLink
                to={{
                  pathname: `/product/${item.name_product}`,
                }}
              >
                <ProductCard itemData={item} />
              </StyledLink>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};
