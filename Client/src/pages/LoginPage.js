import  React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth'
import 'animate.css';
import { Paper } from '@mui/material';
import heroImage from "../components/assets/row-old-textbooks-fills-antique-bookshelf-generated-by-ai.jpg";
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


const Login = () => {


  const isLoggedIn = Auth.loggedIn();

  // console.log(isLoggedIn)

  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(null);
  const [login, { error, data }] = useMutation(LOGIN);
  // const { userData ,setUserData } = useContext(UserContext) || {};

  // update state based on form input changes
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
      console.log('userFormData:', userFormData);
      const { data } = await login({
        variables: { ...userFormData },
      });

      // console.log('this is the user login data below')
      // console.log(data)
      
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      email: '',
      password: '',
    });

    if (error) {
      setShowAlert(true);
    }
  };
  return (
    <ThemeProvider theme={theme}>
    <Paper style={styles.paperContainer}>

      <Container component="main" maxWidth="xs" className='animate__animated animate__backInLeft'>
        <CssBaseline />
        <Box
          sx={{
            bgcolor: 'primary.main',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {data ? (
              <></>
            ) : (
          <><Avatar sx={{ m: 4, bgcolor: 'primary.main' }}>
                <LockOutlinedIcon />
              </Avatar><Typography component="h1" variant="h5">
                  Login
                </Typography><Box component="form" noValidate validated={validated.toString()} onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Alert
                    dismissible="true"
                    onClose={() => setShowAlert(false)}
                    show={showAlert ? 'true' : undefined}
                    variant='danger'
                  >
                    Something went wrong with your login credentials!
                  </Alert>

                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        value={userFormData.email}
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={handleInputChange} />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="password"
                        value={userFormData.password}
                        onChange={handleInputChange} />
                    </Grid>
                    <Grid item xs={12}>

                    </Grid>
                  </Grid><Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Login
                  </Button><Grid container justifyContent="flex-end">
                    <Grid item>
                    </Grid>
                  </Grid>
                </Box></>
          )}

        {error && (
          <div className="my-3 p-3 bg-danger text-white">
            {error.message}
          </div>
        )}
      </Box> 
   
      </Container>
      </Paper>
        </ThemeProvider>
  );
}

export default Login;







