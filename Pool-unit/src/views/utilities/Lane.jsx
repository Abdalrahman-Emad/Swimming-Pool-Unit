import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

const Lane = () => {
  const [laneType, setLaneType] = useState("");

  const handleLaneTypeChange = (event) => {
    setLaneType(event.target.value);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Lane Information
      </Typography>
      <TextField
        id="lane-code"
        label="Lane Code"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="lane-name"
        label="Lane Name"
        variant="outlined"
        fullWidth
        margin="normal"
      />
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
        <InputLabel id="lane-type-label">Lane Type</InputLabel>
        <Select
          labelId="lane-type-label"
          id="lane-type"
          value={laneType}
          onChange={handleLaneTypeChange}
          label="Lane Type"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Beginner">Beginner</MenuItem>
          <MenuItem value="Intermediate">Intermediate</MenuItem>
          <MenuItem value="Advanced">Advanced</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Lane;
