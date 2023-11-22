import * as React from "react";
import { alpha, styled, useTheme } from "@mui/material/styles";
import {
  InputBase,
  Box,
  InputLabel,
  FormControl,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
  CircularProgress,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import { useDataActions } from "../../hooks/useDataActions";
import { Loading } from "../Loading/Loading";
import { useNavigate } from "react-router";

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
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { useCreateAddress, useUpdateCartItems } = useDataActions();
  const { isLoading, mutateAsync: mutatePostAddress } = useCreateAddress();
  const { mutateAsync: mutatePutOrder } = useUpdateCartItems();
  const handleBackToCart = () => {
    navigate(`/cartpage`);
  };

  const onSubmit = async (data) => {
    const preparedItemsData = props.cartData.data?.map((item) => {
      return { id: item.id, quantity: item.quantity };
    });
    try {
      await Promise.all([
        mutatePutOrder({
          orderID: props.cartData.data[0].orderID,
          data: { addressId: 1, orderItems: preparedItemsData },
        }),
        mutatePostAddress({
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          phone_number: data.countryCode + data.phoneNumber,
          street: data.street,
          city: data.city,
          state: data.state,
          pin_code: data.pin_code,
        }),
      ]);
      navigate(`/`);
    } catch (error) {
      console.error("Error while checking out");
    }
  };

  const handleAccordionChange = () => {
    props.setActiveAccordionSection((prev) => {
      switch (prev) {
        case "form":
          return "radio";
        case "radio":
          return "form";
        default:
          break;
      }
    });
  };

  return (
    <Accordion
      variant="none"
      expanded={props.activeAccordionSection === "form"}
      onChange={handleAccordionChange}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ paddingX: 0 }}
      >
        <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
          Add New Address
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ paddingX: 0 }}>
        <Box
          onSubmit={handleSubmit(onSubmit)}
          component="form"
          noValidate
          sx={{
            display: "grid",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 6,
              [theme.breakpoints.down("md")]: {
                gap: 4,
              },
              [theme.breakpoints.down("sm")]: {
                gap: 1,
              },
            }}
          >
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
                {...register("last_name", {
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

          <Box
            sx={{
              display: "flex",
              gap: 6,
              [theme.breakpoints.down("md")]: {
                gap: 4,
              },
              [theme.breakpoints.down("sm")]: {
                gap: 1,
              },
            }}
          >
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "50%" }}
            >
              <InputLabel shrink htmlFor="phone_number-input">
                Mobile Number
              </InputLabel>
              <Box sx={{ display: "flex", gap: 1, marginTop: "2px" }}>
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
          <Box
            sx={{
              display: "flex",
              gap: 6,
              [theme.breakpoints.down("md")]: {
                gap: 4,
              },
              [theme.breakpoints.down("sm")]: {
                gap: 1,
              },
            }}
          >
            <FormControl variant="standard" sx={{ width: "50%" }}>
              <InputLabel shrink htmlFor="sreet_name-input">
                Street
              </InputLabel>
              <FormInput
                {...register("street", {
                  required: true,
                })}
                aria-invalid={errors.street ? "true" : "false"}
                placeholder="Enter Street Name"
                id="street_name-input"
              />
              {errors.street?.type === "required" && (
                <Typography color="error">Street name is required</Typography>
              )}
            </FormControl>
            <FormControl variant="standard" sx={{ width: "50%" }}>
              <InputLabel shrink htmlFor="city-input">
                City
              </InputLabel>
              <FormInput
                {...register("city", {
                  required: true,
                })}
                aria-invalid={errors.city ? "true" : "false"}
                placeholder="Enter City Name"
                id="city-input"
              />
              {errors.city?.type === "required" && (
                <Typography color="error">City is required</Typography>
              )}
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 6,
              [theme.breakpoints.down("md")]: {
                gap: 4,
              },
              [theme.breakpoints.down("sm")]: {
                gap: 1,
              },
            }}
          >
            <FormControl variant="standard" sx={{ width: "50%" }}>
              <InputLabel shrink htmlFor="state_name-input">
                State
              </InputLabel>
              <FormInput
                {...register("state", {
                  required: true,
                })}
                aria-invalid={errors.state ? "true" : "false"}
                placeholder="Enter State Name"
                id="state_name-input"
              />
              {errors.state?.type === "required" && (
                <Typography color="error">State is required</Typography>
              )}
            </FormControl>
            <FormControl variant="standard" sx={{ width: "50%" }}>
              <InputLabel shrink htmlFor="pin">
                Pin Code
              </InputLabel>
              <FormInput
                {...register("pin_code", {
                  required: true,
                })}
                aria-invalid={errors.pin ? "true" : "false"}
                placeholder="Enter Pin Code"
                id="pin"
              />
              {errors.pin?.type === "required" && (
                <Typography color="error">Pin is required</Typography>
              )}
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              mt: 2,
              mb: 3,
            }}
          >
            <Button
              aria-label="back"
              sx={{
                marginTop: 2,
                textTransform: "none",
                textDecoration: "underline",
              }}
              onClick={() => handleBackToCart()}
            >
              Back to Cart
            </Button>
            <Button
              variant="contained"
              size="large"
              type="submit"
              sx={{
                width: "40%",
                marginLeft: "auto",
                marginTop: "30px",
                textTransform: "none",
              }}
              disabled={isLoading}
            >
              {isLoading ? <CircularProgress size={24} /> : "Place Order"}
            </Button>
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
