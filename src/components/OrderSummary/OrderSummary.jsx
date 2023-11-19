import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: "150px",
  [theme.breakpoints.down("sm")]: {
    gap: "50px",
  },
}));

export const OrderSummary = ({ cartData }) => {
  return (
    <Paper variant="none" sx={{ marginTop: 4 }}>
      <Typography gutterBottom sx={{ fontSize: "20px", fontWeight: "600" }}>
        Order Details
      </Typography>
      <Divider />
      <>
        <StyledBox>
          <Typography variant="subtitle1" gutterBottom>
            Subtotal
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            ${cartData.total_price}
          </Typography>
        </StyledBox>

        <StyledBox>
          <Typography variant="subtitle1" gutterBottom>
            Discount
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            -${cartData.total_discount}
          </Typography>
        </StyledBox>

        <StyledBox>
          <Typography variant="subtitle1" gutterBottom>
            Delivery Fee
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            -${15}
          </Typography>
        </StyledBox>

        <StyledBox>
          <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
            Grand Total
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            ${cartData.total_price - cartData.total_discount - 15}
          </Typography>
        </StyledBox>
      </>
    </Paper>
  );
};
