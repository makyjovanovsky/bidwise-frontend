import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Login = () => {
  const navigate = useNavigate(); // Access the navigate function for navigation
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Here you can handle form submission
  };

  const goBack = () => {
    navigate('/'); // Navigate back to the home page
  };

  return (
    <div style={{ height: '100vh', backgroundImage: 'linear-gradient(175deg, rgba(43,192,228,1) 0%, rgba(234,236,198,1) 80%)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid item xs={6} style={{ padding: 20 }}>
        <Paper style={{ padding: 25, backgroundColor: 'white', maxWidth: 500 }} elevation={3}>
          <Typography variant="h4" gutterBottom>Login</Typography>
          <form onSubmit={handleSubmit} >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth onClick={goBack}>
                  Go back to Home
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;
