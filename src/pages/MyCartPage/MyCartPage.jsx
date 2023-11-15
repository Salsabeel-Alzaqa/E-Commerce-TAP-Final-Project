import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import { Title } from "../../components/Title/Title";
import { ProductsCart } from "../../components/ProductsCart/ProductsCart";
import { OrderSummary } from "../../components/OrderSummary/OrderSummary";
import { useState, useEffect } from "react";
import CardImage from "../../assets/images/image2.png";
import { useNavigate } from "react-router-dom";

const mockupData = [
  {
    name_product: "Coach",
    short_description: "Leather Coach Bag",
    image_url: CardImage,
    price: 50,
    quantity: 3,
    subtotal: 50,
  },
  {
    name_product: "Bag",
    short_description: "Leather Coach Bag",
    image_url: CardImage,
    price: 70,
    quantity: 1,
    subtotal: 70,
  },
];

export const MyCartPage = () => {
  const breadcrumbItems = [<Typography>My Cart</Typography>];
  const [cartItems, setCartItems] = useState(mockupData);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const newTotal = cartItems.reduce((acc, item) => acc + item.subtotal, 0);
    setTotal(newTotal);
  }, [cartItems]);

  const navigate = useNavigate();
  const handleProceedToCheckOut = () => {
    navigate(`/checkoutpage`);
  };

  const handleContinueShopping = (page) => {
    navigate(`/listing?&category=${page}`);
  };

  return (
    <Container maxWidth="xl">
      <Breadcrumb items={breadcrumbItems} />
      <Title text={"My Cart"} color={"primary"} />
      <Box sx={{ display: "flex", gap: 15 }}>
        <ProductsCart cartItems={cartItems} setCartItems={setCartItems} />
        <Box>
          <OrderSummary total={total} />
          <Stack direction="row" spacing={3} sx={{ width: "100%", mt: 2 }}>
            <Button
              variant="contained"
              fullWidth
              sx={{ textTransform: "none" }}
              onClick={handleProceedToCheckOut}
            >
              Proceed to Checkout
            </Button>
            <Button
              variant="outlined"
              fullWidth
              sx={{ textTransform: "none" }}
              onClick={() => handleContinueShopping("handbag")}
            >
              Continue Shopping
            </Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};
