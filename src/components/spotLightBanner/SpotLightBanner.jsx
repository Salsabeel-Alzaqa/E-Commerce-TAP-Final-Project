import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Typography, Container, Box, useTheme } from "@mui/material";
import { SpotLightCard } from "../SpotLightCard/SpotLightCard";
import MakeupImage from "../../assets/images/makeup-image.png";

const SpotLightBannerData = [
  {
    image: "skincare-essentails.png",
    title: "Skincare Essentials",
    color: "#A53F64",
    backgroundColor: "#F1F1F1",
  },
  {
    image: "facepacks.png",
    title: "Facepacks & Peels",
    color: "#1B4B66",
    backgroundColor: "#639599",
  },
];

export const SpotLightBanner = (props) => {
  const theme = useTheme();

  return (
    <Container maxWidth="xl" sx={{ my: 10 }} ref={props.innerRef}>
      <Card>
        <Box sx={{ position: "relative" }}>
          <CardMedia
            sx={{
              height: 400,
              position: "relative",
              [theme.breakpoints.down("sm")]: {
                height: 250,
              },
            }}
            component="img"
            image={MakeupImage}
          />
          <Typography
            fontWeight={400}
            fontSize={{ xs: 20, sm: 30 }}
            lineHeight={20}
            sx={{
              position: "absolute",
              bottom: 0,
              left: 59,
              color: "#97451F",
              paddingTop: 5,
            }}
          >
            LIFESTYLE
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={{ xs: 32, sm: 52 }}
            sx={{
              position: "absolute",
              bottom: 0,
              left: 59,
              color: "#97451F",
              width: 618,
              height: 316,
              paddingTop: 5,
              [theme.breakpoints.down("sm")]: {
                height: 220,
                width: 350,
              },
            }}
          >
            Makeup Accessories from Top Brands
          </Typography>
        </Box>
      </Card>
      <Box
        display="flex"
        gap={4}
        justifyContent={"space-between"}
        marginTop={5}
        flexDirection={{ xs: "column", sm: "row" }}
      >
        {SpotLightBannerData.map((item, index) => (
          <SpotLightCard key={index} cardData={item} />
        ))}
      </Box>
    </Container>
  );
};
