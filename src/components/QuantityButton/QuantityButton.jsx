import React from "react";
import { Typography, Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export const QuantityButton = ({ value, onChange }) => {
  const handleIncrement = () => {
    onChange(value + 1);
  };

  const handleDecrement = () => {
    if (value > 1) {
      onChange(value - 1);
    }
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      border="1px solid #1B4B66"
      borderRadius="4px"
    >
      <IconButton onClick={handleDecrement}>
        <RemoveIcon sx={{ color: "black" }} />
      </IconButton>
      <Typography variant="body1">{value}</Typography>
      <IconButton onClick={handleIncrement}>
        <AddIcon sx={{ color: "black" }} />
      </IconButton>
    </Box>
  );
};
