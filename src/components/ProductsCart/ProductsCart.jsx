import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ProductCartCard } from "../ProductCartCard/ProductCartCard";
import { Button, useTheme } from "@mui/material";
import { useDataActions } from "../../hooks/useDataActions";

export const ProductsCart = (props) => {
  const theme = useTheme();
  const { useRemoveCartItem } = useDataActions();
  const { isLoading, isError, error, mutateAsync } = useRemoveCartItem();

  const handleRemoveItem = async (itemId) => {
    await mutateAsync(itemId);
    props.setCartItems(props.cartItems.filter((item) => item.id !== itemId));
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
              Product Name
            </TableCell>
            <TableCell
              sx={{
                fontSize: "16px",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "10px",
                },
              }}
              align="right"
            >
              Price
            </TableCell>
            <TableCell
              sx={{
                fontSize: "16px",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "10px",
                },
              }}
              align="right"
            >
              Qty
            </TableCell>
            <TableCell
              sx={{
                fontSize: "16px",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "10px",
                },
              }}
              align="right"
            >
              Subtotal
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.cartItems.map((item, index) => (
            <React.Fragment key={index}>
              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    border: "none",
                    [theme.breakpoints.down("sm")]: {
                      paddingRight: "0",
                    },
                  }}
                >
                  <ProductCartCard
                    setCartItems={props.setCartItems}
                    item={item}
                    inMyCart={true}
                    orderpage={props.orderpage}
                  />
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
                  ${item.sub_total}
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
                  {item.quantity}
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
                  ${item.sub_total * item.quantity}
                </TableCell>
              </TableRow>
              {props.orderpage ? null
                :<TableRow>
                  <TableCell
                    colSpan={theme.breakpoints.down("sm") ? 2 : 3}
                    align="right"
                    sx={{
                      paddingTop: 0,
                      borderBottom: "none",
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "12px",
                        paddingLeft: "0",
                      },
                    }}
                  >
                    <Button
                      sx={{
                        textTransform: "none",
                        textDecoration: "underline",
                        color: "#1B4B66",
                      }}
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Move to Wishlist
                    </Button>
                  </TableCell>
                  <TableCell
                    colSpan={3}
                    align="right"
                    sx={{
                      paddingTop: 0,
                      borderBottom: "none",
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "12px",
                        paddingLeft: "0",
                      },
                    }}
                  >
                    <Button
                      aria-label="remove"
                      color="error"
                      sx={{
                        textTransform: "none",
                        textDecoration: "underline",
                        [theme.breakpoints.down("sm")]: {
                          fontSize: "12px",
                        },
                      }}
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              }
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
};
