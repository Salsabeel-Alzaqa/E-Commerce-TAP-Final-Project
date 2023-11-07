import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import { Location } from "../Location/Location";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        p: 6,
        background: "#1B4B66",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="h6" color="white" gutterBottom>
                  Shop by Category
                </Typography>
                <Typography
                  variant="body2"
                  color="white"
                  sx={{ whiteSpace: "pre-line" }}
                >
                  Skincare
                  <br />
                  Personal Care
                  <br />
                  Handbags
                  <br />
                  Apparels
                  <br />
                  Watches
                  <br />
                  Eye Wear
                  <br />
                  Jewellery
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" color="white" gutterBottom>
                  Shop by Products
                </Typography>
                <Typography variant="body2" color="white">
                  Featured
                  <br />
                  Trendy
                  <br />
                  Brands
                  <br />
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ padding: 0, marginLeft: "auto" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <SocialMedia />
              </Grid>
              <Grid item xs={12} sx={{ padding: 0, marginLeft: "auto" }}>
                <Location />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" color="white">
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
