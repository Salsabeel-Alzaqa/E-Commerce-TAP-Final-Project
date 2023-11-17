import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { QuantityButton } from "../QuantityButton/QuantityButton";
import { Stack } from "@mui/material";

export const ProductCartCard = (props) => {
  const handleQuantityChange = (newQuantity) => {
    props.setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.name_product === props.item.name_product
          ? {
              ...item,
              quantity: newQuantity,
              subtotal: item.price * newQuantity,
            }
          : item
      )
    );
  };

  return (
    <Card variant="none" sx={{ display: "flex", maxWidth: 500 }}>
      <CardMedia
        sx={{ maxWidth: 150, borderRadius: "5px" }}
        component="img"
        alt={props.item.name}
        height="120"
        image={props.item.image}
      />
      <CardContent sx={{ fontSize: "16px", fontWeight: "500" }}>
        <Typography component="div">{props.item.name}</Typography>
        <Typography color="text.secondary">{props.item.sub_title}</Typography>
        <Stack
          direction="row"
          sx={{ marginTop: 1, width: "73px", height: "30px" }}
        >
          {props.inMyCart ? (
            <QuantityButton
              value={props.item.quantity}
              onChange={handleQuantityChange}
            />
          ) : (
            <Typography>Qy- {props.item.quantity}</Typography>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};
