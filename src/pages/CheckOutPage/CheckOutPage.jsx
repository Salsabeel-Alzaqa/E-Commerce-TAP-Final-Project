import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import { Title } from "../../components/Title/Title";
import { OrderSummary } from "../../components/OrderSummary/OrderSummary";
import { CheckOutForm } from "../../components/CheckOutForm/CheckOutForm";
import { useDataActions } from "../../hooks/useDataActions";
import { ProductCartCard } from "../../components/ProductCartCard/ProductCartCard";
import { useNavigate } from "react-router-dom";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: 70,
  position: "relative",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));
const StyledBoxDetails = styled(Box)(({ theme }) => ({
  minWidth: "500px",
  [theme.breakpoints.down("md")]: {
    minWidth: "auto",
  },
}));

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
          <StyledBox>
            <CheckOutForm cartData={cartData} />
            <StyledBoxDetails>
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
            </StyledBoxDetails>
          </StyledBox>
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
