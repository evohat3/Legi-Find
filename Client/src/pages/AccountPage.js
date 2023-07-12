import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Button, CssBaseline, TextField } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Container from '@mui/material/Container';
import Auth from '../utils/auth'


const defaultTheme = createTheme()

export default function Account() {

    // const isLoggedIn = Auth.loggedIn();

    // console.log( isLoggedIn)

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
            justifyContent: 'center'
          }}
        >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} > 
            <Grid xs={8}>
                <Grid xs={6}>
                    <Typography 
                sx={{ 
                    textAlign: 'left', 
                    m: 1 
                }} 
                    >Change UserName:</Typography>
                    </Grid>     
                    <Grid xs={6}>
            <TextField 
                sx={{ 
                    textAlign: 'left', 
                    m: 1 
                }} 
                    >InputNewUsername</TextField>
                    </Grid> 
                    <Grid xs={6}>
                <Typography 
                sx={{ 
                    textAlign: 'left', 
                    m: 1 
                }} 
                    >Change Password:</Typography>
                    </Grid>     
                    <Grid xs={6}>
            <TextField 
                sx={{ 
                    textAlign: 'left', 
                    m: 1 
                }} 
                    >Input New Password</TextField>
                    </Grid> 
                    <Grid xs={6}>
                    <Typography 
                        sx={{ 
                        textAlign: 'left', 
                        m: 1 
                    }} 
                    >Change Avatar:
                    </Typography>
                </Grid>  
                <Grid xs={6}>
                <Button 
                sx={{ 
                    textAlign: 'left', 
                    m: 1 
                  }} 
                    >This is a test of the flex grid</Button>
             </Grid>    
             </Grid> 
            <Grid>
            </Grid>  
        </Grid>
        </Box>
        </Container>
        </ThemeProvider>
    )
}