import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Auth from '../utils/auth'
import Dashboard from './Dashboard'


export default function Home() {

    const isLoggedIn = Auth.loggedIn();



    if (!isLoggedIn) {
        return (
          <Box sx={{ height: 600, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Container sx={{ bgcolor: 'primary.main' }}>
              <Typography variant='h3' align='center'>
                Welcome To Legi-Find!
              </Typography>
            </Container>
    
            <Container backgroundcolor="black" color="white" align="center">
              Hello
            </Container>
          </Box>
        );
      } else {
          return ( <Dashboard /> )
      }
    }