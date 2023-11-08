import React from "react";
import { Container, Grid, useTheme, Box } from "@mui/material";
import { HandpickedCard } from "../HandpickedCard/HandpickedCard";
import { Title } from "../Title/Title";
import { useNavigate } from "react-router-dom";

const handpickedCollectionsData = [
  {
    image: "PersonalCare.png",
    category: "Personal Care",
    path: "personal care",
  },
  {
    image: "Handbags.png",
    category: "Handbags",
    path: "Handbags",
  },
  {
    image: "WristWatches.png",
    category: "Wrist Watches",
    path: "Watches",
  },
  {
    image: "SunGlasses.png",
    category: "Sun Glasses",
    path: "Eye Wear",
  },
];

export const HandpickedCollections = (props) => {
  const navigate = useNavigate();
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
            <Box
              onClick={() => {
                navigate(`/listing?category=${item.path}`);
              }}
            >
              <HandpickedCard itemData={item} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
