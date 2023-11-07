import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import { Location } from "../Location/Location";
import { Link } from "react-router-dom";

export const Footer = (props) => {
  const categories = [
    "Skincare",
    "Personal Care",
    "Handbags",
    "Apparels",
    "Watches",
    "Eye Wear",
    "Jewellery",
  ];

  const products = ["Featured", "Trendy", "Brands"];

  return (
    <Box
      component="footer"
      sx={{
        p: 6,
        background: "#1B4B66",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={5}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography
                  color="white"
                  gutterBottom
                  sx={{ fontSize: 16, fontWeight: 500 }}
                >
                  Shop by Category
                </Typography>
                {categories.map((item, index) => (
                  <Link
                    key={index}
                    to={{
                      pathname: `/category/${item.toLowerCase()}`,
                    }}
                    style={{
                      textDecoration: "none",
                      color: "#B6B6B6",
                      display: "block",
                      fontSize: 16,
                      fontWeight: 500,
                      marginBottom: 8,
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h6"
                  color="white"
                  gutterBottom
                  sx={{
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                >
                  Shop by Products
                </Typography>
                {products.map((item, index) => (
                  <Link
                    key={index}
                    to="/"
                    onClick={() => props.setSection(item)}
                    style={{
                      textDecoration: "none",
                      color: "#B6B6B6",
                      display: "block",
                      fontSize: 16,
                      fontWeight: 500,
                      marginBottom: 8,
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={3} sx={{ padding: 0, marginLeft: "auto" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <SocialMedia />
              </Grid>
              <Grid item xs={12} sx={{ marginTop: "20px" }}>
                <Location />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="body2"
                  color="#B6B6B6"
                  sx={{
                    fontSize: 14,
                    fontWeight: 400,
                    textAlign: "right",
                  }}
                >
                  {"© "}
                  {new Date().getFullYear()} | Cora Leviene All Rights
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
