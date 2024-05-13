import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

const TrainingPricing = () => {
    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                Training Pricing
            </Typography>
            <FormControl fullWidth margin="normal">
                <InputLabel id="training-type-label">Training Type</InputLabel>
                <Select
                    labelId="training-type-label"
                    id="training-type"
                    label="Training Type"
                    variant="outlined"
                >
                    <MenuItem value="Swimming">Swimming</MenuItem>
                    {/* Add other training types as needed */}
                </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
                <InputLabel id="level-label">Level</InputLabel>
                <Select
                    labelId="level-label"
                    id="level"
                    label="Level"
                    variant="outlined"
                >
                    <MenuItem value="Beginner">Beginner</MenuItem>
                    <MenuItem value="Intermediate">Intermediate</MenuItem>
                    <MenuItem value="Advanced">Advanced</MenuItem>
                </Select>
            </FormControl>
            <TextField
                id="price"
                label="Price"
                variant="outlined"
                fullWidth
                margin="normal"
            />
        </Box>
    );
};

export default TrainingPricing;
