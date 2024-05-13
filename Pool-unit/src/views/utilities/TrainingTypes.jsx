import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

const TrainingTypes = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Training Types Information
      </Typography>
      <TextField
        id="training-type-code"
        label="Training Type Code"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel id="training-type-label">Training Type</InputLabel>
        <Select
          labelId="training-type-label"
          id="training-type"
          label="Training Type"
          variant="outlined"
        >
          <MenuItem value="Public">Public</MenuItem>
          <MenuItem value="Private">Private</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default TrainingTypes;

