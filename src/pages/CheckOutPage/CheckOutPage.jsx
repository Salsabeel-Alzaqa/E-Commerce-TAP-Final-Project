import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import { Title } from "../../components/Title/Title";
import { OrderSummary } from "../../components/OrderSummary/OrderSummary";
import { CheckOutForm } from "../../components/CheckOutForm/CheckOutForm";
import { useDataActions } from "../../hooks/useDataActions";
import { ProductCartCard } from "../../components/ProductCartCard/ProductCartCard";

export const CheckOutPage = () => {
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
      {/* TODO remove !cartData */}
      {isLoading || !cartData ? (
        <Typography>Loading ...</Typography>
      ) : (
        <Box sx={{ display: "flex", gap: 15 }}>
          <CheckOutForm />
          <Box>
            {cartData?.map((item, index) => (
              <ProductCartCard item={item} inMyCart={false} key={index} />
            ))}
            <OrderSummary orderID={cartData[0].orderID} />
          </Box>
        </Box>
      )}
    </Container>
  );
};
