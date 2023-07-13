import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Button, CssBaseline, TextField } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Container from '@mui/material/Container';
import Auth from '../utils/auth'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AvatarModal from '../components/AvatarModal'

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
const defaultTheme = createTheme()

export default function Account() {
    
    const isLoggedIn = Auth.loggedIn();

    console.log( isLoggedIn)

    return (
        <ThemeProvider theme={defaultTheme}>
        <Container component="main" >
          <CssBaseline />
          <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: 1
          }}
        >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} > 
          <Grid xs={9}>
          <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
             <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
          </Grid>
            <Grid xs={3}>
                <Grid 
                    >
                    <Typography 
                    sx={{ 
                        textAlign: 'left', 
                        m: 1 
                    }} 
                    >Change UserName:</Typography>
                </Grid>     
                <Grid >
                    <TextField 
                    sx={{ 
                        textAlign: 'left', 
                        m: 1 
                    }} 
                    >InputNewUsername</TextField>
                </Grid> 
                <Grid >
                    <Typography 
                sx={{ 
                    textAlign: 'left', 
                    m: 1 
                }} 
                        >Change Password:</Typography>
                </Grid>     
                <Grid >
                    <TextField 
                     sx={{ 
                        textAlign: 'left', 
                        m: 1 
                     }} 
                    >Input New Password</TextField>
                    </Grid> 
                <Grid >
                    <AvatarModal/>
                </Grid>  
                <Grid >
                    
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