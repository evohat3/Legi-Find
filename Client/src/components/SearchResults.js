import * as React from 'react';
// import makeStyles from '@mui/core'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import ListItemText from '@mui/material/ListItemText';

// const useStyles = makeStyles((theme) => ({
//     stack: {
//       backgroundColor: theme.palette.primary.main,
//       color: theme.palette.primary.contrastText,
//       padding: theme.spacing(2),
//       marginTop: 'auto',
//     },
    
//   }));


  const SearchResults = () => {
    // const classes = useStyles();
  
    return (

      // this is the props that goes into the grid component classname={classes.stack}
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
    );
  };


export default SearchResults;