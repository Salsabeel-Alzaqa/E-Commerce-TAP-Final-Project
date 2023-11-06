import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Typography, Container, Box } from "@mui/material";
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

export const SpotLightBanner = () => {
  return (
    <Container maxWidth="xl" sx={{ my: 10 }}>
      <Card>
        <div style={{ position: "relative" }}>
          <CardMedia
            sx={{ height: 400, position: "relative" }}
            component="img"
            image={MakeupImage}
          />
          <Typography
            fontWeight={400}
            fontSize={30}
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
            fontSize={52}
            sx={{
              position: "absolute",
              bottom: 0,
              left: 59,
              color: "#97451F",
              width: 618,
              height: 316,
              paddingTop: 5,
            }}
          >
            Makeup Accessories from Top Brands
          </Typography>
        </div>
      </Card>
      <Box
        display="flex"
        gap={4}
        justifyContent={"space-between"}
        marginTop={5}
      >
        {SpotLightBannerData.map((item, index) => (
          <SpotLightCard key={index} cardData={item} />
        ))}
      </Box>
    </Container>
  );
};
