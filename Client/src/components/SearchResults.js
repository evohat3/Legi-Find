import * as React from 'react';
import { createTheme } from '@mui/material/styles';

import {  makeStyles, Box, Container, Typography} from '@material-ui/core';
import { Stack, Divider, Grid, ListItemText } from '@mui/material';

//ask nigel for help on styling this
const theme = createTheme({
    palette: {
        primary: {
          light: '#757ce8',
          main: '#3f50b5',
          dark: '#002884',
          contrastText: '#fff',
        },
        secondary: {
          light: '#ff7961',
          main: '#f44336',
          dark: '#ba000d',
          contrastText: '#000',
        },
      },
})
const useStyles = makeStyles((theme) => ({
    stack: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
      padding: theme.spacing(2),
      marginTop: 'auto',
    },
    
  }));


  const SearchResults = () => {
    const classes = useStyles();
  
    return (
    <Box className={classes.stack}>
        <Grid 
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center">

            <Stack 
                divider={<Divider orientation='horizontal' flexItem/>}
            >
                <ListItemText>1</ListItemText>
                <ListItemText>2</ListItemText>
                <ListItemText>3</ListItemText>
            </Stack>
        </Grid>
    </Box>
    );
  };


export default SearchResults;