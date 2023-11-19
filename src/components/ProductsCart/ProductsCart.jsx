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
import { Button, styled } from "@mui/material";
import { useDataActions } from "../../hooks/useDataActions";

const StyledCell = styled(TableCell)(({ theme }) => ({
  fontSize: "16px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
  },
}));

export const ProductsCart = (props) => {
  const { useRemoveCartItem } = useDataActions();
  const { isLoading, isError, error, mutateAsync } = useRemoveCartItem();

  const handleRemoveItem = async (itemId) => {
    await mutateAsync(itemId);
    props.setCartItems(props.cartItems.filter((item) => item.id !== itemId));
  };

  return (
    <TableContainer component={Paper} variant="none" sx={{ maxWidth: 800 }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledCell>Product Name</StyledCell>
            <StyledCell align="right">Price</StyledCell>
            <StyledCell align="right">Qty</StyledCell>
            <StyledCell align="right">Subtotal</StyledCell>
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
                    inMyCart={true}
                  />
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ border: "none", paddingBottom: 0 }}
                >
                  ${item.sub_total}
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
                  ${item.sub_total * item.quantity}
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
