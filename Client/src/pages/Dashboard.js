import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { FIND_USER } from '../utils/queries';
import SearchPageLite from '../components/SearchByState';
import 'animate.css';

export default function Dashboard() {
  const isLoggedIn = Auth.loggedIn();
  const userprof = Auth.getProfile();
  const userdata = userprof.data;
  const email = userdata.email;

  const { loading, error, data } = useQuery(FIND_USER, {
    variables: { email },
  });
  
  if (loading) {
    return <p>Loading...</p>;
  }
  
  if (error) {
    console.error(error);
    return <p>Error occurred while fetching user data.</p>;
  }
  
  const user = data.findUser;

  const userEmail = user.email;

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
      <Container
        sx={{
          bgcolor: 'green',
          color: 'white',
          height: 500,
          boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)',
        }}
        className='animate__animated animate__backInLeft'
      >
        
        <Typography variant="h3" align="center">
          Welcome to Legifind {userEmail}!
        </Typography>
        <SearchPageLite />
      </Container>

      <Container variant="h3" backgroundcolor="black" color="white" align="center">
        Welcome
      </Container>

    </Box>
  );
}
