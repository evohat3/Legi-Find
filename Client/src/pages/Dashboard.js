import React , {useState} from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Auth from '../utils/auth';
import SearchPageLite from '../components/SearchByState'
import UserContext from '../utils/UserContext'
import 'animate.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import heroImage from '../components/assets/row-old-textbooks-fills-antique-bookshelf-generated-by-ai.jpg'
import { Paper } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#46237A',
    },
    secondary: {
      main: '#197278',
    },
    tritary:{
      main: '#ECC8AE',
    },
    quartary:{
      main: '#61210F',
    },
    pentary:{
      main: '#DDFFD9'
    }
  },
});

const styles ={ 
  paperContainer: {
    backgroundImage: `url(${heroImage})`
  }
}

export default function Dashboard() {

  const isLoggedIn = Auth.loggedIn();

  console.log( isLoggedIn)

  if (!isLoggedIn) {
    window.location.href = '/'; // Redirect to '/' if user is not logged in
    return null; // Render nothing if not logged in
  } else {

    console.log(Auth.getUser())

    return (
      <ThemeProvider theme={theme}>
      <Paper style={styles.paperContainer}>
      <Box
        sx={{
          height: 600,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container sx={{ bgcolor: 'secondary.main', color: 'white', height: 500, boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)' }} className='animate__animated animate__backInLeft'>
          <Typography  variant="h3" align="center">
            Welcome! You are logged in! with your email:
          </Typography>
          <SearchPageLite />

          
        </Container>

        <Container variant="h3" backgroundcolor="black" color="white" align="center">
          Welcome
        </Container>
      </Box>
      </Paper>
      </ThemeProvider>
    );
  }
}