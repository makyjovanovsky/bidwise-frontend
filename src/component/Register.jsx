import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Register = () => {
  const navigate = useNavigate(); // Access the navigate function for navigation
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
    <Grid container>
      {/* Left side with the background image */}
      <Grid item xs={6} style={{
        backgroundImage: 'url(https://blog.abac.org.br/wp-content/uploads/2023/09/iStock-1311598658.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', // Prevent image from repeating
        backgroundPosition: 'center', // Center the image
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', // Center content vertically and horizontally
      }} />

      {/* Right side with the registration form */}
      <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 20, backgroundImage: 'linear-gradient(175deg, rgba(43,192,228,1) 0%, rgba(234,236,198,1) 80%)'}}>
        <Paper style={{ padding: 20 }} elevation={3}>
          <Typography variant="h4" gutterBottom>Register</Typography>
          <form onSubmit={handleSubmit} >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>
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
                  Register
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
    </Grid>
  );
};

export default Register;
