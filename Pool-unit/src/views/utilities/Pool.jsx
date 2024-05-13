import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

const Pool = () => {
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Pool Information
      </Typography>
      <TextField
        id="pool-code"
        label="Pool Code"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="pool-name"
        label="Pool Name"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel id="pool-status-label">Pool Status</InputLabel>
        <Select
          labelId="pool-status-label"
          id="pool-status"
          value={status}
          onChange={handleChange}
          label="Pool Status"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Inactive">Inactive</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Pool;
