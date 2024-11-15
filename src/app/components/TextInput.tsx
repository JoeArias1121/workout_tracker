import TextField from "@mui/material/TextField";

export default function TextInput() {
  return (
    <div>
      <TextField
        required
        id="outlined-required"
        label="Enter an exercise"
      />
    </div>
  );
}