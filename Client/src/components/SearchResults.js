import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box'
// import Container from '@mui/material/Container'
// import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import ListItemText from '@mui/material/ListItemText';
import { palette } from '@mui/system';


// const useStyles = makeStyles((theme) => ({
//     stack: {
//       backgroundColor:
//     },
    
//   }));


  const SearchResults = () => {
    // const classes = useStyles();
  
    return (

    <Box
    /**classname={classes.stack}*/
    >
        <Grid 
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center">

                <Stack 
                     divider={<Divider orientation='horizontal' flexItem/>}
                 >
                    <ListItemText><Box>1</Box></ListItemText>
                    <ListItemText><Box>2</Box></ListItemText>
                    <ListItemText><Box>3</Box></ListItemText>
                </Stack>
        </Grid>
    </Box>
    );
  };


export default SearchResults;