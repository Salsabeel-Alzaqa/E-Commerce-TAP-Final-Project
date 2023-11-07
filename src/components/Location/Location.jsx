import React from "react";
import Typography from "@mui/material/Typography";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Box } from "@mui/material";
export const Location = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "5px",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <LocationOnOutlinedIcon
        sx={{
          fontSize: 20,
          color: "white",
        }}
      />
      <Typography
        variant="body2"
        color="white"
        sx={{
          fontSize: 14,
        }}
      >
        United States
      </Typography>
    </Box>
  );
};
