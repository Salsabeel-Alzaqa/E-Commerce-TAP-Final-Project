import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

export const OrderSummary = ({
  title = "Order Summary",
  total = 0,
  discount = 0,
  fee = 0,
}) => {
  const totalAmount = Number(total) || 0;
  const discountAmount = Number(discount) || 0;
  const feeAmount = Number(fee) || 0;

  const subTotal = totalAmount - discountAmount + feeAmount;

  return (
    <Paper variant="none" sx={{ marginTop: 4 }}>
      <Typography gutterBottom sx={{ fontSize: "20px", fontWeight: "600" }}>
        {title}
      </Typography>
      <Divider />
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
          ${totalAmount.toFixed(2)}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 28 }}>
        <Typography variant="subtitle1" gutterBottom>
          Discount
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          -${discountAmount.toFixed(2)}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 28 }}>
        <Typography variant="subtitle1" gutterBottom>
          Delivery Fee
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          -${feeAmount.toFixed(2)}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 28,
        }}
      >
        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
          Grand Total
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          ${subTotal.toFixed(2)}
        </Typography>
      </Box>
    </Paper>
  );
};
