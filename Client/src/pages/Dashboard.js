import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Auth from '../utils/auth';

export default function Dashboard() {
  const token = Auth.getToken(); // Retrieve the token from Auth module
  const decodedToken = Auth.getProfile(token); // Pass the token to getProfile

  // Extract email from decoded token
  const email = decodedToken ? decodedToken.email : '';

  const isLoggedIn = Auth.loggedIn();
  if (!isLoggedIn) {
    window.location.href = '/'; // Redirect to '/' if user is not logged in
    return null; // Render nothing if not logged in
  } else {
    return (
      <Box
        sx={{
          height: 600,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container sx={{ bgcolor: 'green' }}>
          <Typography variant="h3" align="center">
            Welcome {email}! You are logged in!
          </Typography>
          <Typography variant="h5" align="center"></Typography>
        </Container>

        <Container variant="h3" backgroundcolor="black" color="white" align="center">
          Welcome
        </Container>
      </Box>
    );
  }
}