import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const HandpickedCard = (props) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={props.item.image}
        alt={props.item.category}
      >
        <Typography
          variant="h5"
          component="div"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            backgroundColor: "black",
            color: "white",
            padding: "8px",
          }}
        >
          {props.item.category}
        </Typography>
      </CardMedia>
    </Card>
  );
};
