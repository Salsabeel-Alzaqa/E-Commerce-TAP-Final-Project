import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import { Title } from "../../components/Title/Title";
import { OrderSummary } from "../../components/OrderSummary/OrderSummary";

export const CheckOutPage = () => {
  const breadcrumbItems = [
    <Typography>My Cart</Typography>,
    <Typography>Checkout</Typography>,
  ];
  return (
    <Container maxWidth="xl">
      <Breadcrumb items={breadcrumbItems} />
      <Title text={"Checkout"} color={"primary"} />
      <Box sx={{ display: "flex", gap: 15 }}>
        {/* form here */}
        <Box>
          <OrderSummary title={"Order Details"} />
        </Box>
      </Box>
    </Container>
  );
};
