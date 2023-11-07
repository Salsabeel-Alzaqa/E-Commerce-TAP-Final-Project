import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { SocialMedia } from "../SocialMedia/SocialMedia";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Shop by Category
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
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
          <Grid item xs={12} sm={4}>
            {/* Your new column with a list */}
            <Typography variant="h6" color="text.primary" gutterBottom>
              Shop by products
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Featured
              <br />
              Trendy
              <br />
              Brands
              <br />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body2" color="text.secondary">
              United States
            </Typography>
            <Box mt={5}>
              <Typography variant="body2" color="text.secondary" align="center">
                {"© "}
                {new Date().getFullYear()} | Cora Leviene All Rights
              </Typography>
            </Box>
          </Grid>
          <SocialMedia />
        </Grid>
      </Container>
    </Box>
  );
};
