import React, { useState ,useEffect } from "react";
import { Typography, Box } from "@mui/material";

export const ProductPrice = ({ discount, price, size }) => {
  const [priceAfter, setPriceAfter] = useState(0);
  useEffect(() => {
    if (discount && discount !== 0) {
      const discounted = (Number(price) * Number(discount)) / 100;
      const discountedPrice = Number(price) - discounted;
      setPriceAfter(discountedPrice);
    }
  }, [discount, price]);
  return (
    <>
      {
        discount && discount !== 0 ?
          <Box flexDirection="row" display='flex' alignItems={'center'} justifyContent={'flex-start'} gap={2}>
            <Typography gutterBottom variant={size}  sx={{ fontWeight: "700" }}>
              ${priceAfter}</Typography>
            <Typography gutterBottom variant={size} color="text.secondary"  sx={{ fontSize: { size }, fontWeight: "700",textDecoration: "line-through" }}>
              ${price}</Typography>
             <Typography gutterBottom color="red"  sx={{ fontSize:'16px', fontWeight: "400"}}>
              {discount}% OFF</Typography>
          </Box> 
          : <Typography gutterBottom variant={size} sx={{ fontSize: { size }, fontWeight: "500" }}>${price}</Typography>
      }
    </>
  )
}