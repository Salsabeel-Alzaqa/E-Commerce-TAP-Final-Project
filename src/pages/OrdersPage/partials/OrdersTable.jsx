import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button, useTheme } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

const TableHead = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        padding: "16px",
        borderBottom: "1px solid #ddd",
        color: "#626262",
        fontWeight: "500",
        fontSize: "16px",
        marginBottom: "20px",
        marginTop: "30px",
      }}
    >
      <Box
        sx={{
          width: "20%",
          [theme.breakpoints.down("sm")]: {
            fontSize: "10px",
          },
        }}
      >
        Order ID
      </Box>
      <Box
        sx={{
          width: "35%",
          [theme.breakpoints.down("sm")]: {
            fontSize: "10px",
          },
        }}
      >
        Date
      </Box>
      <Box
        sx={{
          width: "20%",
          [theme.breakpoints.down("sm")]: {
            fontSize: "10px",
          },
        }}
      >
        Price
      </Box>
      <Box
        sx={{
          width: "20%",
          [theme.breakpoints.down("sm")]: {
            fontSize: "10px",
          },
        }}
      >
        Status
      </Box>
      <Box
        sx={{
          width: "5%",
          [theme.breakpoints.down("sm")]: {
            fontSize: "10px",
          },
        }}
      ></Box>
    </Box>
  );
};

export const OrdersTable = (props) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const options = {
      day: "2-digit",
      month: "long",
      year: "numeric",
    };

    const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(
      date
    );

    const modifiedDate = formattedDate.replace(/(\s+\d{4})$/, ",$1");

    return modifiedDate;
  };

  return (
    <Paper variant="none" sx={{ marginBottom: "20px", padding: 0 }}>
      <TableHead />
      {props.data?.map((item, index) => (
        <Box
          key={index}
          sx={{
            color: "#171520",
            fontWeight: "500",
            padding: "16px",
            display: "flex",
            alignItems: "center",
            background: "#F1F1F1",
            marginBottom: "20px",
            borderRadius: "8px",
          }}
        >
          <Box
            sx={{
              width: "20%",
              [theme.breakpoints.down("sm")]: {
                fontSize: "10px",
              },
            }}
          >
            {`#${item.id}`}
          </Box>
          <Box
            sx={{
              width: "35%",
              [theme.breakpoints.down("sm")]: {
                fontSize: "10px",
              },
            }}
          >
            {formatDate(item.createdAt)}
          </Box>
          <Box
            sx={{
              width: "20%",
              [theme.breakpoints.down("sm")]: {
                fontSize: "10px",
              },
            }}
          >
            {`$${item.total_price}`}
          </Box>
          <Box
            sx={{
              width: "20%",
              [theme.breakpoints.down("sm")]: {
                fontSize: "10px",
              },
            }}
          >
            {item.status}
          </Box>
          <Box
            sx={{
              width: "5%",
              textAlign: "right",
              [theme.breakpoints.down("sm")]: {
                fontSize: "10px",
              },
            }}
          >
            <ArrowForwardIosIcon
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                color: theme.palette.primary.main,
              }}
              onClick={() => navigate(`/profile/my-orders/${item.id}`)}
            />
          </Box>
        </Box>
      ))}
    </Paper>
  );
};
