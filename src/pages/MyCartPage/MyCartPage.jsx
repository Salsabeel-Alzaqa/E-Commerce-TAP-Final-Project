import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import { Title } from "../../components/Title/Title";
import { ProductsCart } from "../../components/ProductsCart/ProductsCart";
import { OrderSummary } from "../../components/OrderSummary/OrderSummary";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDataActions } from "../../hooks/useDataActions";
import { styled } from "@mui/system";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "70px",
  marginBottom: "10px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const MyCartPage = () => {
  const { useCartItems } = useDataActions();
  const {
    data: cartData,
    isLoading: isLoadingCartItems,
    isError: isErrorCartItems,
  } = useCartItems();

  const breadcrumbItems = [<Typography>My Cart</Typography>];
  const [cartItems, setCartItems] = useState([]);

  const { useUpdateCartItems } = useDataActions();
  const { mutateAsync: mutateUpdateItems } = useUpdateCartItems();

  const navigate = useNavigate();
  const handleProceedToCheckOut = async () => {
    const preparedItemsData = cartItems.map((item) => {
      return { id: item.id, quantity: item.quantity };
    });
    await mutateUpdateItems({
      orderID: cartItems[0].orderID,
      data: { orderItems: preparedItemsData },
    });
    navigate(`/checkoutpage`);
  };

  useEffect(() => {
    setCartItems(cartData?.data);
  }, [cartData]);

  const handleContinueShopping = (page) => {
    navigate(`/listing?&category=${page}`);
  };

  if (isErrorCartItems) {
    return <Typography>Error</Typography>;
  }

  return (
    <Container maxWidth="xl">
      <Breadcrumb items={breadcrumbItems} />
      <Title text={"My Cart"} color={"primary"} />
      {isLoadingCartItems || (cartData && !cartItems) ? (
        <Box mb={2}>Loading ...</Box>
      ) : (
        <>
          {cartItems?.length ? (
            <StyledBox>
              <ProductsCart cartItems={cartItems} setCartItems={setCartItems} />
              <Box>
                <OrderSummary cartData={cartData} />
                <Stack
                  direction="row"
                  spacing={3}
                  sx={{ width: "100%", mt: 2 }}
                >
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
            </StyledBox>
          ) : (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography>Cart is empty</Typography>
            </Box>
          )}
        </>
      )}
    </Container>
  );
};
