import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Auth from '../utils/auth';
import 'animate.css';

export default function Dashboard(props) {

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
        <Container sx={{ bgcolor: 'green' }} className='animate__animated animate__backInLeft'>
          <Typography first={props.first} variant="h3" align="center">
            Welcome {props.first} ({props.last})! You are logged in! with your email: ({props.email})
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