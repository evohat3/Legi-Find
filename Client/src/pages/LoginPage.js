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

// TODO remove, this demo shouldn't n<>backgroundColoreed to reset the theme.
const defaultTheme = createTheme();

const Login = () => {

  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [loginUser, { error, data }] = useMutation(LOGIN);

  // update state based on form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
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
      const { data } = await loginUser({
        variables: { ...userFormData },
      });

      Auth.login(data.token);
      console.log(data);
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


  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 4, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          

          {data ? (
              <></>
            ) : (
            
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
          </Box>
          )}

        {error && (
          <div className="my-3 p-3 bg-danger text-white">
            {error.message}
          </div>
        )}
      </Box> 
   
      </Container>
    </ThemeProvider>
  );
}

export default Login;







