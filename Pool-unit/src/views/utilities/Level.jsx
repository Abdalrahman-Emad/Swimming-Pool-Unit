import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

const Level = () => {
  const [levelType, setLevelType] = useState("");

  const handleLevelTypeChange = (event) => {
    setLevelType(event.target.value);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Level Information
      </Typography>
      <TextField
        id="level-code"
        label="Level Code"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="level-name"
        label="Level Name"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel id="level-type-label">Level Type</InputLabel>
        <Select
          labelId="level-type-label"
          id="level-type"
          value={levelType}
          onChange={handleLevelTypeChange}
          label="Level Type"
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

export default Level;
