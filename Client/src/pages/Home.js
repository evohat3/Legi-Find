import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Auth from '../utils/auth'
import Dashboard from './Dashboard'
// import SearchPage from './SearchPage'
import SearchPageLite from '../components/SearchPageLite'





export default function Home() {

  const isLoggedIn = Auth.loggedIn();

  console.log(isLoggedIn)

    if (!isLoggedIn) {
        return (
          <Box sx={{ height: 700, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Container sx={{ backgroundColor: 'primary.main', color: 'white', height: 400, boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)' }} maxWidth="sm">
              
              <Typography variant='h3' align='center'>
                Welcome To Legi-Find!
              </Typography>

                <SearchPageLite maxWidth="sm" />

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