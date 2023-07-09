import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Auth from '../utils/auth'
import Dashboard from './Dashboard'
import 'animate.css';





export default function Home() {

    const isLoggedIn = Auth.loggedIn();



    if (!isLoggedIn) {
        return (
          <Box sx={{ height: 600, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Container sx={{ bgcolor: 'primary.main' }} className='animate__animated animate__backInRight'>
              <div >
              <Typography variant='h3' align='center' className='animate__animated animate__bounce animate__delay-1s'>
                Welcome To Legi-Find!
              </Typography>
              </div>

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