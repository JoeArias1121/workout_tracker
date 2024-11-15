import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export default function SelectInput() {
  return (
      <div>
        <TextField
        id="outlined-select-currency"
        color="primary"
          select
          label="Select"
          margin="normal"
          helperText="What muscle group"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              hey
            </MenuItem>
          ))}
        </TextField>
      </div>
      
  );
}
