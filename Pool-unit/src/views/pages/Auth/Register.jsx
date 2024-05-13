// import React from 'react';
import { Paper, Typography, TextField, Button } from '@mui/material';

const Register = () => {
  return (
    <Paper elevation={3} style={{ padding: 20, maxWidth: 400, margin: 'auto', marginTop: 100 }}>
      <Typography variant="h5" gutterBottom>Register</Typography>
      <TextField label="Username" variant="outlined" fullWidth margin="normal" />
      <TextField label="Email" variant="outlined" fullWidth margin="normal" type="email" />
      <TextField label="Password" variant="outlined" fullWidth margin="normal" type="password" />
      <Button variant="contained" color="primary" fullWidth style={{ marginTop: 20 }}>Register</Button>
    </Paper>
  );
};

export default Register;
