import React from "react";
import { Container, Grid, Typography, useTheme } from "@mui/material";
import { HandpickedCard } from "../HandpickedCard/HandpickedCard";

const handpickedCollectionsData = [
  {
    image: "PersonalCare.png",
    category: "Personal Care",
  },
  {
    image: "Handbags.png",
    category: "Handbags",
  },
  {
    image: "WristWatches.png",
    category: "Wrist Watches",
  },
  {
    image: "SunGlasses.png",
    category: "Sun Glasses",
  },
];

export const HandpickedCollections = () => {
  const theme = useTheme();
  return (
    <Container
      maxWidth="l"
      sx={{
        pt: 3,
        pb: 6,
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Typography variant="h3" component="div" pb={2} color={"white"}>
        Handpicked collections
      </Typography>
      <Grid container spacing={2}>
        {handpickedCollectionsData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <HandpickedCard itemData={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
