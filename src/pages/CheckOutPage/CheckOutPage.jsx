import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Typography,
  styled,
  useTheme,
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
  const theme = useTheme();
  const { useCartItems } = useDataActions();
  const { data: cartData, isLoading, isError } = useCartItems();

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
          <Box
            sx={{
              display: "flex",
              gap: "70px",
              [theme.breakpoints.down("md")]: {
                flexDirection: "column",
                gap: "35px",
              },
            }}
          >
            <CheckOutForm cartData={cartData} />
            <Box
              sx={{
                position: "relative",
                minWidth: "500px",
                [theme.breakpoints.down("md")]: {
                  minWidth: "auto",
                  marginBottom: 3,
                },
              }}
            >
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
        </>
      )}
    </Container>
  );
};
