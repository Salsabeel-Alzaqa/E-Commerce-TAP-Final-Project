import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import { Title } from "../../components/Title/Title";
import { ProductsCart } from "../../components/ProductsCart/ProductsCart";
import { OrderSummary } from "../../components/OrderSummary/OrderSummary";
import { useState } from "react";
import CardImage from "../../assets/images/image2.png";
import { useNavigate } from "react-router-dom";
import { useDataActions } from "../../hooks/useDataActions";
import { Loading } from "../../components/Loading/Loading";

const mockupData = [
  {
    id: 1,
    name_product: "Coach",
    short_description: "Leather Coach Bag",
    image_url: CardImage,
    price: 50,
    quantity: 3,
    subtotal: 50,
  },
  {
    id: 2,
    name_product: "Bag",
    short_description: "Leather Coach Bag",
    image_url: CardImage,
    price: 70,
    quantity: 1,
    subtotal: 70,
  },
];

export const MyCartPage = () => {
  const { useCartItems } = useDataActions();
  const {
    data: cartData,
    isLoading: isLoadingCartItems,
    isError: isErrorCartItems,
  } = useCartItems();
  // console.log("cartData", cartData);

  const breadcrumbItems = [<Typography>My Cart</Typography>];
  const [cartItems, setCartItems] = useState(cartData);
  const { useUpdateCartItems } = useDataActions();
  const { isLoading, isError, mutate } = useUpdateCartItems();

  const navigate = useNavigate();
  const handleProceedToCheckOut = () => {
    const preparedItemsData = cartItems.map((item) => {
      return { id: item.name_product, quantity: item.quantity };
    });

    mutate({ addressId: 1, orderItems: preparedItemsData });

    navigate(`/checkoutpage`);
  };

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
      {isLoadingCartItems ? (
        <Box mb={2}>Loading ...</Box>
      ) : (
        <>
          {cartItems?.length ? (
            <Box sx={{ display: "flex", gap: 15 }}>
              <ProductsCart cartItems={cartItems} setCartItems={setCartItems} />
              <Box>
                <OrderSummary orderId={cartItems[0].orderId} />
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
            </Box>
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
