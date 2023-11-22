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
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDataActions } from "../../hooks/useDataActions";
import { useNavigate } from "react-router-dom";

export const AddressesSection = (props) => {
  const [selectedValue, setSelectedValue] = useState("Los Angeles");
  const { useMyaddresses } = useDataActions();
  const { data: addressesData } = useMyaddresses();
  const { useCreateAddress, useUpdateCartItems } = useDataActions();
  const { mutateAsync: mutatePostAddress } = useCreateAddress();
  const { mutateAsync: mutatePutOrder } = useUpdateCartItems();
  const onSubmit = async (data) => {
    const preparedItemsData = props.cartData.data?.map((item) => {
      return { id: item.id, quantity: item.quantity };
    });

    const selectedAddress = addressesData.find(
      (address) => address.city === selectedValue
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

  const uniqueCities = new Set();

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const navigate = useNavigate();
  const handleBackToCart = () => {
    navigate(`/cartpage`);
  };
  return (
    <Accordion variant="none">
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
          <RadioGroup value={selectedValue} onChange={handleRadioChange}>
            {addressesData.map((address, index) => {
              if (!uniqueCities.has(address.city)) {
                uniqueCities.add(address.city);
                return (
                  <FormControlLabel
                    key={index}
                    value={address.city}
                    control={<Radio />}
                    label={address.city}
                  />
                );
              } else {
                return null;
              }
            })}
          </RadioGroup>
        </FormControl>
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
            onClick={onSubmit}
          >
            Place Order
          </Button>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
