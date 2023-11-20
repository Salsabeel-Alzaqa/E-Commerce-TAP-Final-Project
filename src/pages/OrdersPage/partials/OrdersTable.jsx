import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, useTheme } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

export const OrdersTable = (props) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const formatDate = (inputDate) => {
    const formattedDate = new Date(inputDate).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    return formattedDate;
  };
  return (
    <TableContainer component={Paper} variant="none">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                fontSize: "16px",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "10px",
                },
              }}
            >
              Order ID
            </TableCell>
            <TableCell
              sx={{
                fontSize: "16px",
                textAlign: "left",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "10px",
                },
              }}
            >
              Date
            </TableCell>
            <TableCell
              sx={{
                textAlign: "left",
                fontSize: "16px",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "10px",
                },
              }}
            >
              Price
            </TableCell>
            <TableCell
              sx={{
                fontSize: "16px",
                textAlign: "left",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "10px",
                },
              }}
            >
              Status
            </TableCell>
            <TableCell
              sx={{
                textAlign: "left",
                fontSize: "16px",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "10px",
                },
              }}
            ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data?.map((item, index) => (
            <React.Fragment key={index}>
              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  background: "#F1F1F1",
                  borderBottom: "solid 20px white",
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    border: "none",
                    textAlign: "left",
                    marginBottom: "10px",
                    [theme.breakpoints.down("sm")]: {
                      paddingRight: "0",
                    },
                  }}
                >
                  #{item.id}
                </TableCell>
                <TableCell
                  sx={{
                    border: "none",
                    textAlign: "left",
                    paddingBottom: 0,
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "12px",
                    },
                  }}
                >
                  {formatDate(item.createdAt)}
                </TableCell>
                <TableCell
                  sx={{
                    border: "none",
                    paddingBottom: 0,
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "12px",
                    },
                  }}
                >
                  ${item.total_price}
                </TableCell>
                <TableCell
                  sx={{
                    border: "none",
                    textAlign: "left",
                    paddingBottom: 0,
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "12px",
                    },
                  }}
                >
                  {item.status}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    border: "none",
                    paddingBottom: 0,
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "12px",
                    },
                  }}
                >
                  <Button
                    variant="none"
                    endIcon={<ArrowForwardIosIcon />}
                    // onClick={() => navigate(`/`) todo}
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: theme.palette.primary.main,
                    }}
                  ></Button>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
