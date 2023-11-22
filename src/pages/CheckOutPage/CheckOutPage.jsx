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
import { AddressesSection } from "../../components/AddressesSection/AddressesSection";
import { useState } from "react";

export const CheckOutPage = () => {
  const theme = useTheme();
  const { useCartItems } = useDataActions();
  const { data: cartData, isLoading, isError } = useCartItems();
  const [activeAccordionSection, setActiveAccordionSection] = useState("form");

  const breadcrumbItems = [
    <Typography key="2">My Cart</Typography>,
    <Typography key="3">Checkout</Typography>,
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
              justifyContent: "space-between",
              gap: "70px",
              marginBottom: "50px",
              [theme.breakpoints.down("md")]: {
                flexDirection: "column",
                gap: "20px",
              },
            }}
          >
            <Box>
              {" "}
              <AddressesSection
                cartData={cartData}
                activeAccordionSection={activeAccordionSection}
                setActiveAccordionSection={setActiveAccordionSection}
              />
              <CheckOutForm
                cartData={cartData}
                activeAccordionSection={activeAccordionSection}
                setActiveAccordionSection={setActiveAccordionSection}
              />
            </Box>
            <Box
              sx={{
                position: "relative",
                minWidth: "400px",
                [theme.breakpoints.down("md")]: {
                  minWidth: "auto",
                  marginBottom: 3,
                },
              }}
            >
              <Paper
                variant="none"
                sx={{
                  marginTop: 4,
                  minWidth: "400px",
                  [theme.breakpoints.down("sm")]: {
                    minWidth: "auto",
                    marginTop: 0,
                  },
                }}
              >
                <Typography
                  gutterBottom
                  sx={{ fontSize: "20px", fontWeight: "600" }}
                >
                  Order Details
                </Typography>
                <Divider sx={{ marginBottom: 4 }} />
                {cartData?.data?.map((item, index) => (
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
