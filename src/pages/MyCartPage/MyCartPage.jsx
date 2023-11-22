import {
  Box,
  Button,
  CircularProgress,
  Container,
  Stack,
  Typography,
  useTheme,
  Grid,
  Skeleton
} from "@mui/material";
import React, { useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import { Title } from "../../components/Title/Title";
import { ProductsCart } from "../../components/ProductsCart/ProductsCart";
import { OrderSummary } from "../../components/OrderSummary/OrderSummary";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDataActions } from "../../hooks/useDataActions";

export const MyCartPage = () => {
  const theme = useTheme();
  const { useCartItems } = useDataActions();
  const {
    data: cartData,
    isLoading: isLoadingCartItems,
    isError: isErrorCartItems,
  } = useCartItems();

  const handleBackToHome = () => {
    navigate(`/`);
  };

  const breadcrumbItems = [<Typography key='2'>My Cart</Typography>];
  const [cartItems, setCartItems] = useState([]);

  const { useUpdateCartItems } = useDataActions();
  const { isLoading: proceeding, mutateAsync: mutateUpdateItems } =
    useUpdateCartItems();

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
    setCartItems(cartData?.data || []);
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
        Array.from({ length: 3 }, (_, index) => (
          <Grid container mb={2} spacing={2} key={index}>
            <Grid item xs={12} md={9} lg={8}>
              <Stack direction='row' spacing={3}>
                <Skeleton variant="rectangular" width={'20%'} height={80} />
                <Skeleton width="80%" />
              </Stack>
            </Grid>
            <Grid item xs={12} md={3} lg={12} mt={1}>
              <Skeleton width="20%" />
            </Grid>
          </Grid>
        ))
      ) : (
        <>
          {cartItems?.length ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "70px",
                marginBottom: "50px",
                [theme.breakpoints.down("md")]: {
                  flexDirection: "column",
                  gap: "35px",
                },
              }}
            >
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
                    sx={{
                      textTransform: "none",
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "12px",
                      },
                    }}
                    onClick={handleProceedToCheckOut}
                    disabled={proceeding}
                  >
                    {proceeding ? (
                      <CircularProgress size={24} />
                    ) : (
                      "Proceed to Checkout"
                    )}
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      textTransform: "none",
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "12px",
                      },
                    }}
                    onClick={() => handleContinueShopping("handbag")}
                  >
                    Continue Shopping
                  </Button>
                </Stack>
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                marginTop: "50px",
                marginBottom: "100px",
              }}
            >
              <Typography>Cart is empty</Typography>
              <Button
                aria-label="back"
                sx={{
                  marginTop: 2,
                  textTransform: "none",
                  textDecoration: "underline",
                  padding: "0",
                }}
                onClick={() => handleBackToHome()}
              >
                Back to Home
              </Button>
            </Box>
          )}
        </>
      )}
    </Container>
  );
};