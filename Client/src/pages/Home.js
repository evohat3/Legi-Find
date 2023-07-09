import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Auth from '../utils/auth'
import Dashboard from './Dashboard'
<<<<<<< HEAD
// import SearchPage from './SearchPage'
import SearchPageLite from '../components/SearchPageLite'
=======
import 'animate.css';
>>>>>>> test





export default function Home() {

  const isLoggedIn = Auth.loggedIn();

  console.log(isLoggedIn)

    if (!isLoggedIn) {
        return (
<<<<<<< HEAD
          <Box sx={{ height: 700, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Container sx={{ backgroundColor: 'primary.main', color: 'white', height: 400, boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)' }} maxWidth="sm">
              
              <Typography variant='h3' align='center'>
                Welcome To Legi-Find!
              </Typography>

                <SearchPageLite maxWidth="sm" />
=======
          <Box sx={{ height: 600, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Container sx={{ bgcolor: 'primary.main' }} className='animate__animated animate__backInRight'>
              <div >
              <Typography variant='h3' align='center' className='animate__animated animate__bounce animate__delay-1s'>
                Welcome To Legi-Find!
              </Typography>
              </div>
>>>>>>> test

            </Container>
    
            <Container backgroundcolor="black" color="white" align="center" maxWidth="md">
              Hello
            </Container>
          </Box>
        );
      } else {
          return ( <Dashboard /> )
      }
    }