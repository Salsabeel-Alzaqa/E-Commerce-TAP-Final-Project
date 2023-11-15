import * as React from "react";
import { useQuery } from "react-query";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ProductCartCard } from "../ProductCartCard/ProductCartCard";
import { Button } from "@mui/material";
import { useDataActions } from "../../hooks/useDataActions";

export const ProductsCart = (props) => {
  const { useRemoveCartItem } = useDataActions();
  const { isLoading, isError, error, mutate } = useRemoveCartItem();

  const handleRemoveItem = (itemId) => {
    mutate(itemId);
    props.cartItems.filter((item) => item.id !== itemId);
  };

  return (
    <TableContainer component={Paper} variant="none" sx={{ maxWidth: 800 }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow sx={{ fontSize: "16px" }}>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Qty</TableCell>
            <TableCell align="right">Subtotal</TableCell>
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
                <TableCell component="th" scope="row" sx={{ border: "none" }}>
                  <ProductCartCard
                    setCartItems={props.setCartItems}
                    item={item}
                  />
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ border: "none", paddingBottom: 0 }}
                >
                  ${item.price}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ border: "none", paddingBottom: 0 }}
                >
                  {item.quantity}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ border: "none", paddingBottom: 0 }}
                >
                  ${item.subtotal}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={5} align="right" sx={{ paddingTop: 0 }}>
                  <Button
                    aria-label="remove"
                    color="error"
                    sx={{ textTransform: "none", textDecoration: "underline" }}
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
