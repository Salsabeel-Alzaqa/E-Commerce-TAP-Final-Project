import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

export const OrderSummary = () => {
  return (
    <Paper variant="none" sx={{ marginTop: 4 }}>
      <Typography gutterBottom sx={{ fontSize: "20px", fontWeight: "600" }}>
        Order Summary
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
          Sub total
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          50$
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 28 }}>
        <Typography variant="subtitle1" gutterBottom>
          Discount
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          -$13.40
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 28 }}>
        <Typography variant="subtitle1" gutterBottom>
          Delivery Fee
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          -$0.00
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
          $106.29
        </Typography>
      </Box>
    </Paper>
  );
};
