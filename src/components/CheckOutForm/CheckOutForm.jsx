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
import { useForm, Controller } from "react-hook-form";
import apiClient from "../../api/axios";
import { useMutation } from "react-query";
import Button from "@mui/material/Button";

const FormInput = styled(InputBase)(({ theme }) => ({
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

export const CheckOutForm = (props) => {
  const { register, handleSubmit, setValue } = useForm();
  const [countryCode, setCountryCode] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  React.useEffect(() => {
    setValue?.("phone_number", countryCode + phoneNumber);
  }, [phoneNumber, countryCode, setValue]);

  const createAddress = async () => {
    try {
      const apiUrl = `https://tap-backend-final-3-otnz.onrender.com/api/v1/order/${props.orderid}/address`;
      await apiClient.post(apiUrl);
    } catch (error) {
      console.log("Error", error);
    }
  };
  const { isLoading, isError, error, mutate } = useMutation(createAddress);

  const onSubmit = async (data) => {
    console.log("data", data);
    mutate(data);
  };

  if (isLoading) {
    console.log("loading"); //todo
  }
  if (isError) {
    console.error(error);
  }

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
          onSubmit={handleSubmit(onSubmit)}
          component="form"
          noValidate
          sx={{
            display: "grid",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 6 }}>
            <FormControl variant="standard" sx={{ width: "50%" }}>
              <InputLabel shrink htmlFor="first_name-input">
                First Name
              </InputLabel>
              <FormInput
                {...register("first_name")}
                placeholder="Enter First Name"
                id="first_name-input"
              />
            </FormControl>
            <FormControl variant="standard" sx={{ width: "50%" }}>
              <InputLabel shrink htmlFor="lastname-input">
                Last Name
              </InputLabel>
              <FormInput
                {...register("lastname")}
                placeholder="Enter Last Name"
                id="lastname-input"
              />
            </FormControl>
          </Box>

          <Box sx={{ display: "flex", gap: 6 }}>
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "50%" }}
            >
              <InputLabel shrink htmlFor="phone_number-input">
                Mobile Number
              </InputLabel>
              <Box sx={{ display: "flex", gap: 1, marginTop: "6px" }}>
                <FormControl variant="standard" sx={{ width: "20%" }}>
                  <FormInput
                    placeholder="+11"
                    id="phone-number-input"
                    value={countryCode}
                    onChange={(event) => setCountryCode(event.target.value)}
                  />
                </FormControl>
                <FormControl variant="standard" sx={{ width: "80%" }}>
                  <FormInput
                    placeholder="Enter Phone Number"
                    id="phone-number-input"
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                  />
                </FormControl>
              </Box>
            </Box>
            <FormControl variant="standard" sx={{ width: "50%" }}>
              <InputLabel shrink htmlFor="email-input">
                Email
              </InputLabel>
              <FormInput
                placeholder="Enter Email"
                id="email-input"
                {...register("email")}
              />
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", gap: 6 }}>
            <FormControl variant="standard" sx={{ width: "50%" }}>
              <InputLabel shrink htmlFor="location-input">
                Location
              </InputLabel>
              <FormInput
                placeholder="Enter Location"
                id="location-input"
                {...register("location")}
              />
            </FormControl>
            <FormControl variant="standard" sx={{ width: "50%" }}></FormControl>
          </Box>
          <Button
            variant="contained"
            size="large"
            type="submit"
            sx={{ width: "30%", marginLeft: "auto", marginTop: "30px" }}
          >
            Place Order
          </Button>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
