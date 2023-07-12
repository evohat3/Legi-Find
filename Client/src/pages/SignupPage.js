import  React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { SIGNUP} from '../utils/mutations'
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
import 'animate.css';
import { inputLabelClasses } from "@mui/material/InputLabel"
import heroImage from "../components/assets/row-old-textbooks-fills-antique-bookshelf-generated-by-ai.jpg";
import { fontWeight } from '@mui/system';
import { deepPurple } from '@mui/material/colors';

const theme = createTheme({
  
  palette: {
  
    secondary: deepPurple
  },
 
});

const styles ={ 
  paperContainer: {
    backgroundImage: `url(${heroImage})`
  }
}

export default function SignUp() {


  const isLoggedIn = Auth.loggedIn();

  const [userFormData, setUserFormData] = useState({first:'', last:'', email: '', password: ''})
  const [validated, setValidated] = useState(false);
  const [,setShowAlert] = useState(false);
  const [addUser, {error}] = useMutation(SIGNUP);
  


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // console.log(name, value);
    setUserFormData({ ...userFormData, [name]: value });
  };


    // submit form
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      setValidated(true);
      try {
        // console.log(userFormData);
        const { data } = await addUser({
          variables: { ...userFormData },
        });
        
        if (data) {
      Auth.login(data.addUser.token)
        }
      } catch (err) {
        console.error(err);
        setShowAlert(true);
      }
      setUserFormData({
        first: '',
        last: '',
        email: '',
        password: '',
      });
    
      if (error) {
        setShowAlert(true);
      }
  };

if (!isLoggedIn) {
  return (
    <ThemeProvider theme={theme}>
    <Paper style={styles.paperContainer}>
      <Container component="main" maxWidth="xs" className='animate__animated animate__backInRight'>
        <CssBaseline />
        <Box
          sx={{
            bgcolor: 'primary.main',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate validated={validated.toString()} onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} >
                <TextField
                  name="first"
                  required
                  fullWidth
                  id="first"
                  label="First Name"
                  onChange={handleInputChange} 
                  sx={{
                    
                    "& .MuiFormLabel-root": {
                        color: 'black'
                    },
                    "& .MuiFormLabel-root.Mui-focused": {
                        color: 'black'
                    }
                }}
                  />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="last"
                  label="Last Name"
                  name="last"
                  autoComplete="family-name"
                  onChange={handleInputChange}
                  sx={{
                    
                    "& .MuiFormLabel-root": {
                        color: 'black'
                    },
                    "& .MuiFormLabel-root.Mui-focused": {
                        color: 'black'
                    }
                }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleInputChange}
                  sx={{
                    
                    "& .MuiFormLabel-root": {
                        color: 'black'
                    },
                    "& .MuiFormLabel-root.Mui-focused": {
                        color: 'black'
                    }
                }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleInputChange}
                  sx={{
                    
                    "& .MuiFormLabel-root": {
                        color: 'black'
                    },
                    "& .MuiFormLabel-root.Mui-focused": {
                        color: 'black'
                    }
                }}
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{  mt: 3, mb: 2 }}
              onSubmit={handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      </Paper>
      </ThemeProvider>
  );

}

return <Navigate to="/dashboard" replace={true} />;
}