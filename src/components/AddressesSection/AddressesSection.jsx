import * as React from "react";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDataActions } from "../../hooks/useDataActions";
import { useNavigate } from "react-router-dom";

export const AddressesSection = (props) => {
  const [selectedValue, setSelectedValue] = useState();
  const { useMyaddresses } = useDataActions();
  const { data: addressesData } = useMyaddresses();
  const { useCreateAddress, useUpdateCartItems } = useDataActions();
  const {
    isLoading,
    isError,
    mutateAsync: mutatePostAddress,
  } = useCreateAddress();
  const { mutateAsync: mutatePutOrder } = useUpdateCartItems();
  const [radioError, setRadioError] = useState(false);
  const navigate = useNavigate();

  const placeOrder = async () => {
    if (!selectedValue) {
      setRadioError(true);
      return;
    }
    setRadioError(false);
    const preparedItemsData = props.cartData.data?.map((item) => {
      return { id: item.id, quantity: item.quantity };
    });

    const selectedAddress = addressesData.find(
      (address) => address.id === parseInt(selectedValue)
    );

    try {
      await Promise.all([
        mutatePutOrder({
          orderID: props.cartData.data[0].orderID,
          data: {
            addressId: selectedAddress.id,
            orderItems: preparedItemsData,
          },
        }),
        mutatePostAddress({
          first_name: selectedAddress.first_name,
          last_name: selectedAddress.last_name,
          email: selectedAddress.email,
          phone_number: selectedAddress.phone_number,
          street: selectedAddress.street,
          city: selectedAddress.city,
          state: selectedAddress.state,
          pin_code: selectedAddress.pin_code,
        }),
      ]);
      navigate(`/`);
    } catch (error) {
      console.error("Error while checking out");
    }
  };

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleBackToCart = () => {
    navigate(`/cartpage`);
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
      expanded={props.activeAccordionSection === "radio"}
      onChange={handleAccordionChange}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ paddingX: 0 }}
      >
        <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
          Addresses
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormControl>
          <RadioGroup onChange={handleRadioChange} name="radio-buttons-group">
            {addressesData?.map((address, index) => (
              <FormControlLabel
                key={index}
                value={address.id}
                control={<Radio />}
                label={`${address.city}, ${address.street}`}
              />
            ))}
          </RadioGroup>
        </FormControl>
        {radioError && (
          <Box sx={{ marginTop: "10px" }}>
            <Typography sx={{ color: "red" }}>Please select address</Typography>
          </Box>
        )}
        {isError && (
          <Box sx={{ marginTop: "10px" }}>
            <Typography sx={{ color: "red" }}>
              Try with checking out, try again later
            </Typography>
          </Box>
        )}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
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
            sx={{
              width: "40%",
              marginLeft: "auto",
              marginTop: "30px",
              textTransform: "none",
            }}
            onClick={() => placeOrder()}
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size={24} /> : "Place Order"}
          </Button>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
