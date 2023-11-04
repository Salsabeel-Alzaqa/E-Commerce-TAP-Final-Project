import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import ProductImage from "../../assets/images/image.png";

export const ProductCard = (props) => {
  return (
    <Card sx={{ maxWidth: 380, boxShadow: "none" }}>
      <CardMedia
        sx={{ height: 300, borderRadius: "8px" }}
        image={ProductImage}
        title={props.itemData.name_product}
      />
      <CardContent sx={{ px: 0 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            gutterBottom
            variant="none"
            component="div"
            sx={{
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            {props.itemData.name_product}
          </Typography>
          <FavoriteBorderIcon sx={{ fontSize: 25, color: "primary" }} />
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: "14px",
            mb: "5px",
          }}
        >
          {props.itemData.short_description}
        </Typography>
        <Typography
          gutterBottom
          variant="none"
          component="div"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          {props.itemData.price}
        </Typography>
      </CardContent>
    </Card>
  );
};
