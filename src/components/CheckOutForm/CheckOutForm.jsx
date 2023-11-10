import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: 16,
    fontWeight: 500,
    width: "100",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export const CheckOutForm = () => {
  return (
    <Accordion variant="none">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
          Add New Address
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          component="form"
          noValidate
          sx={{
            display: "grid",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 6 }}>
            <FormControl variant="standard" sx={{ width: "50%" }}>
              <InputLabel shrink htmlFor="bootstrap-input">
                First Name
              </InputLabel>
              <BootstrapInput
                placeholder="Enter First Name"
                id="bootstrap-input"
              />
            </FormControl>
            <FormControl variant="standard" sx={{ width: "50%" }}>
              <InputLabel shrink htmlFor="bootstrap-input">
                Last Name
              </InputLabel>
              <BootstrapInput
                placeholder="Enter Last Name"
                id="bootstrap-input"
              />
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", gap: 6 }}>
            <FormControl variant="standard" sx={{ width: "50%" }}>
              <InputLabel shrink htmlFor="bootstrap-input">
                Mobile Number
              </InputLabel>
              <BootstrapInput
                placeholder="Enter Mobile Number"
                id="bootstrap-input"
              />
            </FormControl>
            <FormControl variant="standard" sx={{ width: "50%" }}>
              <InputLabel shrink htmlFor="bootstrap-input">
                Email
              </InputLabel>
              <BootstrapInput placeholder="Enter Email" id="bootstrap-input" />
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", gap: 6 }}>
            <FormControl variant="standard" sx={{ width: "50%" }}>
              <InputLabel shrink htmlFor="bootstrap-input">
                Location
              </InputLabel>
              <BootstrapInput
                placeholder="Enter Location"
                id="bootstrap-input"
              />
            </FormControl>
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
