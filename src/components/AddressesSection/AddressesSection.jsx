import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export const AddressesSection = () => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">ِAddresses</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="address" control={<Radio />} label="Female" />
      </RadioGroup>
    </FormControl>
  );
};
