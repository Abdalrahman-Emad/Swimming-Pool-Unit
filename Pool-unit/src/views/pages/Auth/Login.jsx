import React from 'react';
import { Paper, Typography, TextField, Button } from '@mui/material';

const Login = () => {
  return (
    <Paper elevation={3} style={{ padding: 20, maxWidth: 400, margin: 'auto', marginTop: 100 }}>
      <Typography variant="h5" gutterBottom>Login</Typography>
      <TextField label="Username" variant="outlined" fullWidth margin="normal" />
      <TextField label="Password" variant="outlined" fullWidth margin="normal" type="password" />
      <Button variant="contained" color="primary" fullWidth style={{ marginTop: 20 }}>Login</Button>
    </Paper>
  );
};

export default Login;
