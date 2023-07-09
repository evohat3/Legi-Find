import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Auth from '../utils/auth'
import Dashboard from './Dashboard'
// import SearchPage from './SearchPage'
import SearchPageLite from '../components/SearchPageLite'
import 'animate.css';





export default function Home() {

  const isLoggedIn = Auth.loggedIn();

  console.log(isLoggedIn)

    if (!isLoggedIn) {
        return (
          <Box sx={{ height: 700, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} maxWidth="xl">
            <Container sx={{ height: 500, bgcolor: 'primary.main', boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)' }} className='animate__animated animate__backInRight'>
              <div >
              <Typography variant='h3' align='center' className='animate__animated animate__bounce animate__delay-1s'>
                Welcome To Legi-Find!
              </Typography>
              </div>
             
              <SearchPageLite />

            </Container>
    
            <Container backgroundcolor="black" color="white" align="center" maxWidth="sm">
              Hello
            </Container>
          </Box>
        );
      } else {
          return ( <Dashboard /> )
      }
    }