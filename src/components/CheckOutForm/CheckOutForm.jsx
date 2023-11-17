import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import {
  InputBase,
  Box,
  InputLabel,
  FormControl,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import { useDataActions } from "../../hooks/useDataActions";
import { Loading } from "../Loading/Loading";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { useCreateAddress, useUpdateCartItems } = useDataActions();
  const { mutate: mutatePostAddress } = useCreateAddress();
  const { mutateAsync: mutatePutOrder } = useUpdateCartItems();

  const onSubmit = async (data) => {
    const preparedItemsData = props.cartData.data?.map((item) => {
      return { id: item.id, quantity: item.quantity };
    });
    await mutatePutOrder({
      orderID: props.cartData.data[0].orderID,
      data: { addressId: 1, orderItems: preparedItemsData },
    });
    mutatePostAddress({
      first_name: data.first_name,
      lastname: data.lastname,
      email: data.email,
      phone_number: data.countryCode + data.phoneNumber,
      location: data.location,
    });
  };

  return (
    <Accordion variant="none" defaultExpanded="true">
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
                {...register("first_name", {
                  required: true,
                })}
                aria-invalid={errors.first_name ? "true" : "false"}
                placeholder="Enter First Name"
                id="first_name-input"
              />
              {errors.first_name?.type === "required" && (
                <Typography color="error">First name is required</Typography>
              )}
            </FormControl>
            <FormControl variant="standard" sx={{ width: "50%" }}>
              <InputLabel shrink htmlFor="lastname-input">
                Last Name
              </InputLabel>
              <FormInput
                {...register("lastname", {
                  required: true,
                })}
                aria-invalid={errors.lastname ? "true" : "false"}
                placeholder="Enter Last Name"
                id="lastname-input"
              />
              {errors.lastname?.type === "required" && (
                <Typography color="error">Last Name is required</Typography>
              )}
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
                    {...register("countryCode", {
                      required: true,
                    })}
                    placeholder="+11"
                    id="phone-number-input"
                  />
                </FormControl>
                <FormControl variant="standard" sx={{ width: "80%" }}>
                  <FormInput
                    {...register("phoneNumber", {
                      required: true,
                    })}
                    placeholder="Enter Phone Number"
                    id="phone-number-input"
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
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <Typography color="error">{errors.email.message}</Typography>
              )}
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
                {...register("location", {
                  required: true,
                })}
                aria-invalid={errors.location ? "true" : "false"}
              />
              {errors.location?.type === "required" && (
                <Typography color="error">location is required</Typography>
              )}
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
