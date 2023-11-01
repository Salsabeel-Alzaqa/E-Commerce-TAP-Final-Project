import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const ProductCard = ({ image, title, color, price }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ marginLeft: 1 }}
          >
            {title}
          </Typography>
          <FavoriteBorderIcon sx={{ fontSize: 30, color: "primary" }} />
        </Box>
        <Typography variant="body2" color="text.secondary">
          {color}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {price}
        </Typography>
      </CardContent>
    </Card>
  );
};
