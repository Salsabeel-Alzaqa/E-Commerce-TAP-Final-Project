import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { Box, useTheme } from "@mui/material";

export const OrderSummary = ({ cartData , orderpage}) => {
  const theme = useTheme();
  return (
    <Paper
      variant="none"
      sx={{
        marginTop:orderpage ? 0 : 4,
      }}
    >
      {orderpage ? null :
        <><Typography
          gutterBottom
          sx={{
            fontSize: "20px",
            fontWeight: "600",
            [theme.breakpoints.down("sm")]: {
              fontSize: "14px",
            },
          }}
        >
          Order Details
        </Typography>
          <Divider /></>}
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "150px",
            marginTop:orderpage ? 0 : 1,
            [theme.breakpoints.down("sm")]: {
              gap: "50px",
            },
          }}
        >
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              [theme.breakpoints.down("sm")]: {
                fontSize: "12px",
              },
            }}
          >
            Subtotal
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              [theme.breakpoints.down("sm")]: {
                fontSize: "12px",
              },
            }}
          >
            ${cartData.total_price}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "150px",
            [theme.breakpoints.down("sm")]: {
              gap: "50px",
            },
          }}
        >
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              [theme.breakpoints.down("sm")]: {
                fontSize: "12px",
              },
            }}
          >
            Discount
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              [theme.breakpoints.down("sm")]: {
                fontSize: "12px",
              },
            }}
          >
            -${cartData.total_discount}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "150px",
            [theme.breakpoints.down("sm")]: {
              gap: "50px",
            },
          }}
        >
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              [theme.breakpoints.down("sm")]: {
                fontSize: "12px",
              },
            }}
          >
            Delivery Fee
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              [theme.breakpoints.down("sm")]: {
                fontSize: "12px",
              },
            }}
          >
            -${15}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "150px",
            [theme.breakpoints.down("sm")]: {
              gap: "50px",
            },
          }}
        >
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              fontWeight: 600,
              [theme.breakpoints.down("sm")]: {
                fontSize: "12px",
              },
            }}
          >
            Grand Total
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              [theme.breakpoints.down("sm")]: {
                fontSize: "12px",
              },
            }}
          >
            ${cartData.total_price - cartData.total_discount - 15}
          </Typography>
        </Box>
      </>
    </Paper>
  );
};