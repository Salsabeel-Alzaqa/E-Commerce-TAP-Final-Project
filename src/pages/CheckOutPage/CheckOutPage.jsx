import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import { Title } from "../../components/Title/Title";
import { OrderSummary } from "../../components/OrderSummary/OrderSummary";
import { CheckOutForm } from "../../components/CheckOutForm/CheckOutForm";
import { useDataActions } from "../../hooks/useDataActions";
import { ProductCartCard } from "../../components/ProductCartCard/ProductCartCard";
import { useNavigate } from "react-router-dom";

export const CheckOutPage = () => {
  const { useCartItems } = useDataActions();
  const { data: cartData, isLoading, isError } = useCartItems();
  const navigate = useNavigate();
  const handleBackToCart = () => {
    navigate(`/cartpage`);
  };

  const breadcrumbItems = [
    <Typography>My Cart</Typography>,
    <Typography>Checkout</Typography>,
  ];

  if (isError) {
    return <Typography>Error</Typography>;
  }

  return (
    <Container maxWidth="xl">
      <Breadcrumb items={breadcrumbItems} />
      <Title text={"Checkout"} color={"primary"} />
      {isLoading ? (
        <Typography>Loading ...</Typography>
      ) : (
        <>
          <Box sx={{ display: "flex", gap: 15, position: "relative" }}>
            <CheckOutForm cartData={cartData} />
            <Box sx={{ minWidth: "500px" }}>
              <Paper variant="none" sx={{ marginTop: 4 }}>
                <Typography
                  gutterBottom
                  sx={{ fontSize: "20px", fontWeight: "600" }}
                >
                  Order Details
                </Typography>
                <Divider sx={{ marginBottom: 4 }} />
                {cartData?.data.map((item, index) => (
                  <ProductCartCard key={index} item={item} inMyCart={false} />
                ))}
              </Paper>
              <OrderSummary cartData={cartData} />
            </Box>
          </Box>
          <Button
            aria-label="back"
            sx={{
              position: "absolute",
              top: "640px",
              left: "35px",
              textTransform: "none",
              textDecoration: "underline",
            }}
            onClick={() => handleBackToCart()}
          >
            Back to Cart
          </Button>
        </>
      )}
    </Container>
  );
};
