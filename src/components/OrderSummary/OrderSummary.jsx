import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { useDataActions } from "../../hooks/useDataActions";
import { Loading } from "../Loading/Loading";

export const OrderSummary = ({ orderId }) => {
  const { useCartOrderDetails } = useDataActions();
  const {
    data: orderDetails,
    isLoading,
    isError,
  } = useCartOrderDetails(orderId);

  if (isError) {
    return <Typography>Error</Typography>;
  }

  return (
    <Paper variant="none" sx={{ marginTop: 4 }}>
      <Typography gutterBottom sx={{ fontSize: "20px", fontWeight: "600" }}>
        Order Details
      </Typography>
      <Divider />
      {isLoading ? (
        <Box mb={2}>Loading ...</Box>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 28,
            }}
          >
            <Typography variant="subtitle1" gutterBottom>
              Subtotal
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              ${orderDetails.subtotal}
            </Typography>
          </Box>

          <Box
            sx={{ display: "flex", justifyContent: "space-between", gap: 28 }}
          >
            <Typography variant="subtitle1" gutterBottom>
              Discount
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              -${orderDetails.discount}
            </Typography>
          </Box>

          <Box
            sx={{ display: "flex", justifyContent: "space-between", gap: 28 }}
          >
            <Typography variant="subtitle1" gutterBottom>
              Delivery Fee
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              -${10}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 28,
            }}
          >
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              Grand Total
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              ${orderDetails.grand_total}
            </Typography>
          </Box>
        </>
      )}
    </Paper>
  );
};
