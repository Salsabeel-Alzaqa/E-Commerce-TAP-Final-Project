import React, { useState ,useEffect } from "react";
import { Typography, Stack } from "@mui/material";

export const ProductPrice = ({ discount, price, size }) => {
  const [priceAfter, setPriceAfter] = useState(0);
  useEffect(() => {
    if (discount && discount !== 0) {
      const discounted = (Number(price) * discount) / 100;
      const discountedPrice = Number(price) - discounted;
      setPriceAfter(discountedPrice);
    }
  }, [discount, price]);
  return (
    <>
      {
        discount && discount !== 0 ?
          <Stack direction="row" spacing={2}>
            <Typography gutterBottom variant="none"  sx={{ fontSize: { size }, fontWeight: "500" }}>
              ${priceAfter}</Typography>
            <Typography gutterBottom variant="none" color="text.secondary"  sx={{ fontSize: { size }, fontWeight: "200",textDecoration: "line-through" }}>
              ${price}</Typography>
             <Typography gutterBottom variant="none" color="red"  sx={{ fontSize: { size }, fontWeight: "400"}}>
              {discount}% OFF</Typography>
          </Stack> 
          : <Typography gutterBottom variant="none" sx={{ fontSize: { size }, fontWeight: "500" }}>{price}</Typography>
      }
    </>
  )
}