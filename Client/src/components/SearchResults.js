import * as React from 'react';
import {  makeStyles, Container, Typography} from '@material-ui/core';
import { Stack, Divider, Grid, ListItemText } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    stack: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      padding: theme.spacing(2),
      marginTop: 'auto',
    },
    
  }));


  const SearchResults = () => {
    const classes = useStyles();
  
    return (
    <Grid classname={classes.stack}
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