import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const Trainee = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Trainee Information
      </Typography>
      <TextField
        id="trainee-code"
        label="Trainee Code"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="trainee-name"
        label="Trainee Name"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="date-of-birth"
        label="Date of Birth"
        type="date"
        variant="outlined"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="guardian-name"
        label="Guardian Name"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="mobile-number"
        label="Mobile Number"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="application-date"
        label="Application Date"
        type="date"
        variant="outlined"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Box>
  );
};

export default Trainee;
