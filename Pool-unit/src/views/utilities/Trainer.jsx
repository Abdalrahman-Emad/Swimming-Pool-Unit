import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const Trainer = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Trainer Information
      </Typography>
      <TextField
        id="trainer-code"
        label="Trainer Code"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="trainer-name"
        label="Trainer Name"
        variant="outlined"
        fullWidth
        margin="normal"
      />
    </Box>
  );
};

export default Trainer;
