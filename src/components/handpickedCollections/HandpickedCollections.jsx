import React from "react";
import { Container, Grid, useTheme } from "@mui/material";
import { HandpickedCard } from "../HandpickedCard/HandpickedCard";
import { Title } from "../Title/Title";
import { Link } from "react-router-dom";

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

export const HandpickedCollections = (props) => {
  const theme = useTheme();
  return (
    <Container
      ref={props.innerRef}
      maxWidth="xl"
      sx={{
        pt: 3,
        pb: 6,
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Title text={"Handpicked collections"} color={"white"} />
      <Grid container spacing={3}>
        {handpickedCollectionsData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Link
              to={{
                pathname: `/category/${item.category}`,
              }}
            >
              <HandpickedCard itemData={item} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
